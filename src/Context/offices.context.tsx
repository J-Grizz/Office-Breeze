// import { FC, createContext } from 'react'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'
// import firebase, { firestore, auth } from 'firebase.config'

// const officesRef = firestore.collection(`users/${auth.currentUser!.uid}/offices`)

// const onDataAdd = () => {
// 	officesRef.add({
// 		text: 'test',
// 		createdAt: firebase.firestore.FieldValue.serverTimestamp(),
// 	})
// }

// export const OfficesContext = createContext<any>(null)

// export const OfficesProvider: FC = ({ children }) => {
// 	const [OfficeData] = useCollectionData(officesRef, { idField: 'id' })

// 	return <OfficesContext.Provider value={{ data: OfficeData }}>{children}</OfficesContext.Provider>
// }

export const OfficesContext = {}
export const OfficesProvider = {}
