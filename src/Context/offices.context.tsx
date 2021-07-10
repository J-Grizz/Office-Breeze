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
	const [officeData] = useCollectionData(officesRef, { idField: 'id' })

	const addOffice = (officeData: any) => {
		officesRef.add({
			...officeData,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		})
	}

	return <OfficesContext.Provider value={{ offices: officeData, addOffice: addOffice }}>{children}</OfficesContext.Provider>
}
