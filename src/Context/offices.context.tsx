import { FC, createContext, useContext } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase, { firestore } from 'firebase.config'
import { AuthContext } from 'Context/auth.context'
import { OfficeInterface } from 'Typings/office'

export const OfficesContext = createContext<any>(null)

export const OfficesProvider: FC = ({ children }) => {
	const { user } = useContext(AuthContext)
	let officesRef: any = null
	if (user) {
		officesRef = firestore.collection(`users/${user.uid}/offices`)
	}
	const [officesData, loading] = useCollectionData(officesRef, { idField: 'id' })

	const addOffice = (officesData: OfficeInterface) => {
		officesRef.add({
			...officesData,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		})
	}
	const updateOffice = (id: string, updatedOffice: OfficeInterface) =>
		officesRef.doc(id).set(updatedOffice, { merge: true })

	const deleteOffice = (id: string) => officesRef.doc(id).delete()

	const officeActions = {
		addOffice: addOffice,
		updateOffice: updateOffice,
		deleteOffice: deleteOffice,
	}

	return (
		<OfficesContext.Provider value={{ officesData: officesData, loading: loading, ...officeActions }}>
			{children}
		</OfficesContext.Provider>
	)
}
