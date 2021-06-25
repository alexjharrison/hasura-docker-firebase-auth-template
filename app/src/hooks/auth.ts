import { computed, reactive } from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/database'

firebase.initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
})
firebase.analytics()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

firebase.auth().onAuthStateChanged(async user => {
  auth.user = user || null

  if (user) {
    const token = await user.getIdToken()
    const idTokenResult = await user.getIdTokenResult()

    const hasuraClaim = idTokenResult.claims['https://hasura.io/jwt/claims']
    if (hasuraClaim) {
      setAuth({ user, token, status: 'in' })
    } else {
      const metadataRef = firebase
        .database()
        .ref('metadata/' + user.uid + '/refreshTime')

      metadataRef.on('value', async data => {
        if (!data.exists) return
        // Force refresh to pick up the latest custom claims changes.
        const token = await user.getIdToken(true)
        setAuth({ status: 'in', user, token })
      })
    }
  } else setAuth({ status: 'out', user: null, token: '' })
})

const auth = reactive({
  status: 'out' as 'out' | 'in' | 'loading',
  user: null as firebase.User | null,
  token: '',
})

function setAuth({ token, user, status }: typeof auth): void {
  auth.token = token
  auth.user = user
  auth.status = status
}

export function useAuth() {
  const signIn = async () => {
    try {
      await firebase.auth().signInWithPopup(googleAuthProvider)
    } catch (err) {
      console.error(err)
    }
  }

  const signOut = async () => {
    try {
      auth.status = 'loading'
      await firebase.auth().signOut()
      auth.status = 'out'
    } catch (err) {
      console.error(err)
    }
  }

  return { signIn, signOut, auth: computed(() => auth) }
}
