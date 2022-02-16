// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as logOut,
  onAuthStateChanged,
} from 'firebase/auth'

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
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

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setCurrentUser(user))
    return unsubscribe
  }, [])
  return currentUser
}

const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
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

export { signUp, signIn, signOut, useAuth }
