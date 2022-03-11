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
import { doc, setDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import { useEffect, useState } from 'react'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA3BYv-ljg2HK5WdGZFCW4FtGi9KUp9XME',
  authDomain: 'oscartracker-7dd42.firebaseapp.com',
  projectId: 'oscartracker-7dd42',
  storageBucket: 'oscartracker-7dd42.appspot.com',
  messagingSenderId: '150641555016',
  appId: '1:150641555016:web:31ae805d19717a13348a7d',
  measurementId: 'G-KQ93N86KHJ',
}

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

const uploadImage = async (url, uid) => {
  const storageRef = ref(storage, `avatars/${uid}.png`)

  fetch(url)
    .then((res) => res.blob())
    .then((blob) => uploadBytes(storageRef, blob))
}

const signUp = async (email, password, name, nickname, image) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      if (image) uploadImage(image, user.uid)
      const docData = {
        email: user.email,
        name: name,
        nickname: nickname,
      }
      setDoc(doc(db, 'users', user.uid), docData).catch((error) => {
        console.log(error)
      })
    })
    .catch((error) => {
      console.log(error.code)
      console.log(error.message)
    })
}

const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode)
      console.log(errorMessage)
    })
}

const signOut = async () => {
  await logOut(auth)
    .then(() => {})
    .catch((error) => {})
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

export { signUp, signIn, signOut, useAuth, getMovies }
