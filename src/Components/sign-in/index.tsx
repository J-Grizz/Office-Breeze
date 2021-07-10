import { FC, useContext } from 'react'
import firebase, { auth } from 'firebase.config'
import { Redirect } from 'react-router'
import { AuthContext } from 'Context/auth.context'
import { LoadingSpinner } from 'Components'
import { SignInLayout, ParagraphBlock } from './styles'

const signInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())

const SignIn: FC = () => {
	const { user, loading } = useContext(AuthContext)

	if (loading) {
		return <LoadingSpinner />
	} else if (user) {
		return <Redirect to="/" />
	} else {
		return (
			<SignInLayout>
				<div className="background-image" />
				<div className="foreground" />
				<h1>Welcome</h1>
				<ParagraphBlock>
					<p>Your personal office manager</p>
					<p>-</p>
					<p>Press the button below to sign in with your google account</p>
				</ParagraphBlock>
				<button onClick={signInWithGoogle}>Sign in</button>
			</SignInLayout>
		)
	}
}

export default SignIn
