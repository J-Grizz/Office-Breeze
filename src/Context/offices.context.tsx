import { FC, createContext, useContext } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase, { firestore } from 'firebase.config'
import { AuthContext } from 'Context/auth.context'
import { OfficeInterface } from 'Typings/office'

export const OfficesContext = createContext<any>(null)

// This pattern of putting the state logic in context providers feels sloppy, would like to look into refacoring using reducers
export const OfficesProvider: FC = ({ children }) => {
	const { user } = useContext(AuthContext)
	let officesRef: any = null
	let officeQuery: any = null
	// Need to check as user might still be loading
	if (user) {
		officesRef = firestore.collection(`users/${user.uid}/offices`)
		officeQuery = officesRef.orderBy('createdAt', 'desc')
	}

	// Useful hook from firebase-hooks to get collection data from firestore
	const [officesData, loading] = useCollectionData(officeQuery, { idField: 'id' })

	// Create office
	const addOffice = (officesData: OfficeInterface) => {
		officesRef.add({
			...officesData,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		})
	}

	// Update office
	const updateOffice = (id: string, updatedOffice: OfficeInterface) =>
		officesRef.doc(id).set(updatedOffice, { merge: true })

	// Delete office
	const deleteOffice = (id: string) => officesRef.doc(id).delete()

	// Bundle office actions
	const officeActions = {
		addOffice: addOffice,
		updateOffice: updateOffice,
		deleteOffice: deleteOffice,
	}

	return (
		// Proivde office state to app
		<OfficesContext.Provider value={{ officesData: officesData, loading: loading, ...officeActions }}>
			{children}
		</OfficesContext.Provider>
	)
}
