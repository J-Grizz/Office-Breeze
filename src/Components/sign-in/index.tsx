import { FC, useContext } from 'react'
// TODO rename firrbase config
import { auth } from '../../firebase'
import firebase from 'firebase'
import { Redirect } from 'react-router'
import { AuthContext } from 'Context/auth.context'
import { LoadingSpinner } from 'Components'

const signInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())

const SignIn: FC = () => {
	const { user, loading } = useContext(AuthContext)

	if (loading) {
		return <LoadingSpinner />
	} else if (user) {
		return <Redirect to="/" />
	} else {
		return (
			<div style={{ border: '3px solid red' }}>
				<button onClick={signInWithGoogle}>Sign in</button>
			</div>
		)
	}
}

export default SignIn
