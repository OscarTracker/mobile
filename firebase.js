// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as logOut,
  onAuthStateChanged,
} from 'firebase/auth'

import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useEffect, useState } from 'react'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { firebaseConfig } from './permissions'

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore(app)
const storage = getStorage()

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setCurrentUser(user))
    return unsubscribe
  }, [])
  return currentUser
}

const setAvatar = async (uid, url) => {
  const storageRef = ref(storage, `avatars/${uid}.png`)

  fetch(url)
    .then((res) => res.blob())
    .then((blob) => uploadBytes(storageRef, blob))
}

const signUp = async (email, password, name, nickname, image) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      if (image) setAvatar(user.uid, image)
      const docData = {
        uid: user.uid,
        email: user.email,
        name: name,
        nickname: nickname,
        preferences: {
          showPoster: false,
          showPlot: false,
          showCast: false,
          showRatings: false,
        },
      }
      setDoc(doc(db, 'users', user.uid), docData).catch((error) => {
        console.log(error)
      })
    })
    .catch((error) => {
      console.log(error.code)
      console.log(error.message)
    })

  if (user !== null) return getUserInformation(user.uid)
}

const signIn = async (email, password) => {
  let user = null
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user
    })
    .catch((error) => {
      console.log(error.code)
      console.log(error.message)
    })

  if (user !== null) return getUserInformation(user.uid)
}

const getUserInformation = async (uid) => {
  const docRef = doc(db, 'users', uid)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    console.log('No such document!')
  }
}

const signOut = async () => {
  await logOut(auth)
    .then(() => {})
    .catch((error) => {})
}

const setProfile = async (uid, name, nickname, email, preferences) => {
  const docData = {
    email: email,
    name: name,
    nickname: nickname,
    preferences: preferences,
    uid: uid,
  }
  await setDoc(doc(db, 'users', uid), docData).catch((error) => {
    console.log(error.code)
    console.log(error.message)
  })
}

const getAvatar = async (uid) => {
  const pathReference = await ref(storage, `avatars/${uid}.png`)
  let image = undefined
  await getDownloadURL(pathReference)
    .then((url) => {
      image = url
    })
    .catch((error) => {
      console.log(error.code)
      console.log(error.message)
    })

  return image
}

const getMovies = async () => {
  let data = []

  await getDocs(collection(db, 'movies')).then((querySnapshot) => {
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        data.push(doc.data())
      })
    }
  })

  return data
}

export {
  signUp,
  signIn,
  signOut,
  useAuth,
  getMovies,
  setProfile,
  getAvatar,
  setAvatar,
}
