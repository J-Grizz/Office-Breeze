import { FC, createContext, useReducer } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase, { auth } from '../firebase'

// const signInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
// const signOut = () => auth.signOut()

export const AuthContext = createContext<any>(null)

export const AuthProvider: FC = ({ children }) => {
	const [user, loading, error]: [firebase.User | null | undefined, boolean, any] = useAuthState(auth)
	return <AuthContext.Provider value={{ user: user, loading: loading }}>{children}</AuthContext.Provider>
}
