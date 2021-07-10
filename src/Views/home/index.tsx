import { FC } from 'react'
import { HomeLayout } from './styles'
import { HomeHeader } from 'Components'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'
// import firebase, { auth, firestore } from 'firebase.config'
import { auth } from 'firebase.config'

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
		<HomeLayout>
			<HomeHeader />
			{/* {testData} */}
			{/* <button onClick={onDataAdd}>Add Data</button> */}
		</HomeLayout>
	)
}

export default Home
