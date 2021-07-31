import { computed, reactive, ref, watchEffect } from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/database'
import router from '@/plugins/router'
import { UserFieldsFragment, useUserUpsertMutation } from '@/api'
import { Maybe } from 'graphql/jsutils/Maybe'

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
      setAuth({ user, token, status: 'in', isFetching: false })
    } else {
      const metadataRef = firebase
        .database()
        .ref('metadata/' + user.uid + '/refreshTime')

      metadataRef.on('value', async data => {
        if (!data.exists) return
        // Force refresh to pick up the latest custom claims changes.
        const token = await user.getIdToken(true)
        setAuth({ status: 'in', user, token, isFetching: false })
      })
    }
  } else setAuth({ status: 'out', user: null, token: '', isFetching: false })
})

const auth = reactive({
  status: 'out' as 'out' | 'in' | 'loading',
  user: null as firebase.User | null,
  token: '',
  isFetching: true,
})

const user = ref<Maybe<{ __typename?: 'users' } & UserFieldsFragment>>()

function setAuth({ token, user, status, isFetching }: typeof auth): void {
  auth.token = token
  auth.user = user
  auth.status = status
  auth.isFetching = isFetching
}

function useAuth() {
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
      setAuth({ isFetching: false, status: 'out', user: null, token: '' })
      user.value = undefined
    } catch (err) {
      console.error(err)
    }
  }

  return { signIn, signOut, auth: computed(() => auth) }
}

function useUserUpsert() {
  const { executeMutation } = useUserUpsertMutation()

  watchEffect(async () => {
    if (auth.user && auth.token) {
      const { data } = await executeMutation({
        object: {
          display_name: auth.user.displayName,
          email: auth.user.email,
          id: auth.user.uid,
        },
      })
      user.value = data?.insert_users_one
      auth.isFetching = false
    } else if (!auth.isFetching && router.currentRoute.value.name !== 'Home')
      router.push('/')
  })
}

export { useUserUpsert, useAuth, user }
