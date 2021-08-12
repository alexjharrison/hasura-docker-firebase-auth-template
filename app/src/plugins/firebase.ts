import { initializeApp } from 'firebase/app'
import { initializeAnalytics } from 'firebase/analytics'
import { getDatabase } from 'firebase/database'
import {
  initializeAuth,
  indexedDBLocalPersistence,
  onAuthStateChanged,
  GoogleAuthProvider,
  getAuth,
} from 'firebase/auth'
import { setUser } from '@/hooks/user'

const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL as string,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: import.meta.env
    .VITE_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID as string,
})
initializeAnalytics(firebaseApp)

export const firebaseAuth = initializeAuth(firebaseApp, {
  persistence: [indexedDBLocalPersistence],
})

export const googleAuthProvider = new GoogleAuthProvider()

export const firebaseUser = getAuth(firebaseApp).currentUser

onAuthStateChanged(firebaseAuth, user => {
  if (user) {
    setUser(user)
    // const idTokenResult = await user.getIdTokenResult()
    // const hasuraClaim = idTokenResult.claims['https://hasura.io/jwt/claims']
    // if (!hasuraClaim) {
    //   const metadataRef = getDatabase(firebaseApp).ref(
    //     'metadata/' + user.uid + '/refreshTime'
    //   )
    //   metadataRef.on('value', async data => {
    //     if (!data.exists) return
    //     // Force refresh to pick up the latest custom claims changes.
    //     const token = await user.getIdToken(true)
    //   })
    // }
  }
})
