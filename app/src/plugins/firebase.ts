import { initializeApp } from 'firebase/app'
import { initializeAnalytics } from 'firebase/analytics'
import { getDatabase, ref, onValue } from 'firebase/database'
import {
  indexedDBLocalPersistence,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
} from 'firebase/auth'
import { setUser } from '@/hooks/user'

export const firebase = () => {
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

  const firebaseAuth = getAuth(firebaseApp)

  const googleAuthProvider = new GoogleAuthProvider()

  const signIn = () => signInWithPopup(firebaseAuth, googleAuthProvider)

  onAuthStateChanged(firebaseAuth, async user => {
    console.log('AUTH STATE CHANGED', { user })

    if (user) {
      setUser(user)
      const idTokenResult = await user.getIdTokenResult()
      const hasuraClaim = idTokenResult.claims['https://hasura.io/jwt/claims']
      if (!hasuraClaim) {
        const metadataRef = ref(
          getDatabase(firebaseApp, 'metadata/' + user.uid + '/refreshTime')
        )

        onValue(metadataRef, async data => {
          if (!data.exists) return
          // Force refresh to pick up the latest custom claims changes.
          const token = await user.getIdToken(true)
        })
      }
    }
  })

  return {
    firebaseApp,
    firebaseAuth,
    signIn,
  }
}
