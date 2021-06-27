import { computed, reactive, ref, watchEffect } from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/database'
import { useMutation } from '@urql/vue'
import { USER_UPSERT } from '../models/users/operations'
import { Users, Users_Insert_Input } from '@/types'

firebase.initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
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
      setAuth({ user, token, status: 'in', isUpserted: false })
    } else {
      const metadataRef = firebase
        .database()
        .ref('metadata/' + user.uid + '/refreshTime')

      metadataRef.on('value', async data => {
        if (!data.exists) return
        // Force refresh to pick up the latest custom claims changes.
        const token = await user.getIdToken(true)
        setAuth({ status: 'in', user, token, isUpserted: false })
      })
    }
  } else setAuth({ status: 'out', user: null, token: '', isUpserted: false })
})

const auth = reactive({
  status: 'out' as 'out' | 'in' | 'loading',
  user: null as firebase.User | null,
  token: '',
  isUpserted: false,
})

function setAuth({ token, user, status, isUpserted }: typeof auth): void {
  auth.token = token
  auth.user = user
  auth.status = status
  auth.isUpserted = isUpserted
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

export function useUserUpsert() {
  const { executeMutation } = useMutation<
    Users,
    { object: Users_Insert_Input }
  >(USER_UPSERT)

  watchEffect(async () => {
    if (auth.user) {
      await executeMutation({
        object: {
          display_name: auth.user.displayName,
          email: auth.user.email,
          id: auth.user.uid,
        },
      })
      auth.isUpserted = true
    }
  })
}
