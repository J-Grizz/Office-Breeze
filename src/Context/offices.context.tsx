import { FC, createContext, useContext } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase, { firestore } from 'firebase.config'
import { AuthContext } from 'Context/auth.context'

export const OfficesContext = createContext<any>(null)

export const OfficesProvider: FC = ({ children }) => {
	const { user, loading } = useContext(AuthContext)
	let officesRef: any = null
	if (!loading) {
		officesRef = firestore.collection(`users/${user.uid}/offices`)
	}
	const [officesData] = useCollectionData(officesRef, { idField: 'id' })

	const addOffice = (officesData: any) => {
		officesRef.add({
			...officesData,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		})
	}

	return <OfficesContext.Provider value={{ officesData: officesData, addOffice: addOffice }}>{children}</OfficesContext.Provider>
}
