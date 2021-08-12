import { AuthConfig } from '@urql/exchange-auth/dist/types/authExchange'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/database'

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

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

let token = localStorage.getItem('token')

firebase.auth().onAuthStateChanged(async user => {
  if (user) {
    const newToken = await user.getIdToken()
    const idTokenResult = await user.getIdTokenResult()
    const hasuraClaim = idTokenResult.claims['https://hasura.io/jwt/claims']
    if (hasuraClaim) {
      localStorage.setItem('token', newToken || '')
      token = newToken
    } else {
      const metadataRef = firebase
        .database()
        .ref('metadata/' + user.uid + '/refreshTime')
      metadataRef.on('value', async data => {
        if (!data.exists) return
        // Force refresh to pick up the latest custom claims changes.
        const newNewToken = await user.getIdToken(true)
        localStorage.setItem('token', newNewToken || '')
        token = newNewToken
      })
    }
  } else {
    localStorage.removeItem('token')
    token = null
  }
})

export const authExchangeOptions: AuthConfig<string> = {
  getAuth: async ({ authState, mutate }) => {
    if (authState) {
      console.log({ authState })
      return authState
    } else {
      console.log({ token })
      return token
    }
  },
  addAuthToOperation({ authState, operation }) {
    // the token isn't in the auth state, return the operation without changes
    if (!authState) {
      return operation
    }

    // fetchOptions can be a function (See Client API) but you can simplify this based on usage
    const fetchOptions =
      typeof operation.context.fetchOptions === 'function'
        ? operation.context.fetchOptions()
        : operation.context.fetchOptions || {}

    return {
      ...operation,
      context: {
        ...operation.context,
        fetchOptions: {
          ...fetchOptions,
          headers: {
            ...fetchOptions.headers,
            Authorization: `Bearer ${authState}`,
          },
        },
      },
    }
  },
}
