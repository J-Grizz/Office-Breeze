import { FC } from 'react'
import { HomeLayout } from './styles'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth, firestore } from '../../firebase'
import firebase from 'firebase'

const signInWithGoogle = () => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
const signOut = () => auth.signOut()
const SignIn = () => (
	<div>
		<button onClick={signInWithGoogle}>Sign in</button>
	</div>
)

const Home: FC = () => {
	const [user, loading, error]: [any, any, any] = useAuthState(auth)
	console.log(user, loading, error)
	const testRef = firestore.collection(`users/${user.uid}/testData`)
	const [testData] = useCollectionData(testRef)

	const onDataAdd = () => {
		testRef.add({
			text: 'test',
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		})
	}
	return user ? (
		<HomeLayout style={{ border: '1px solid green' }} className="main-container">
			{testData}
			<button onClick={onDataAdd}>Add Data</button>
			<button onClick={signOut}>Sign out</button>
		</HomeLayout>
	) : (
		<SignIn />
	)
}

export default Home
