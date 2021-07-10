import { FC, createContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase, { auth } from 'firebase.config'

export const AuthContext = createContext<any>(null)

export const AuthProvider: FC = ({ children }) => {
	const [user, loading]: [firebase.User | null | undefined, boolean, any] = useAuthState(auth)
	return <AuthContext.Provider value={{ user: user, loading: loading }}>{children}</AuthContext.Provider>
}
