import { FC } from 'react'
import { HomeLayout } from './styles'
import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth, firestore } from '../../firebase'
import firebase from 'firebase'

const signOut = () => auth.signOut()

const Home: FC = () => {
	// const testRef = firestore.collection(`users/${user.uid}/testData`)

	// const [testData] = useCollectionData(testRef)

	// const onDataAdd = () => {
	// 	testRef.add({
	// 		text: 'test',
	// 		createdAt: firebase.firestore.FieldValue.serverTimestamp(),
	// 	})
	// }
	return (
		<HomeLayout style={{ border: '3px solid green' }} className="main-container">
			{/* {testData} */}
			{/* <button onClick={onDataAdd}>Add Data</button> */}
			<button onClick={signOut}>Sign out</button>
		</HomeLayout>
	)
}

export default Home
