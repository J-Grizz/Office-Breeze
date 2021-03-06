import { StaffForm, StaffThumbnail, LoadingSpinner } from 'Components'
import { AuthContext } from 'Context'
import firebase from 'firebase'
import { firestore } from 'firebase.config'
import { useToggleState, useInputState } from 'Hooks'
import { FC, useContext } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { StaffInterface } from 'Typings/staff'
import { StaffContainer, StaffHeader, SearchContainer } from './styles'

interface StaffListProps {
	officeId: string
	officeCapacity: string
}

const StaffList: FC<StaffListProps> = ({ officeId, officeCapacity }) => {
	const [isModalOpen, toggleModal] = useToggleState(false)
	const [searchTerm, updateSearchTerm] = useInputState('')

	const { user } = useContext(AuthContext)
	const staffRef: any = firestore.collection(`users/${user.uid}/offices/${officeId}/staff`)

	const [staffData, loading]: any = useCollectionData(staffRef, { idField: 'id' })

	// Create office
	const addStaff = (staffData: StaffInterface) => {
		staffRef.add({
			...staffData,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		})
	}

	// Update Staff
	const updateStaff = (id: string, updatedStaff: StaffInterface) => staffRef.doc(id).set(updatedStaff, { merge: true })

	// Delete Staff
	const deleteStaff = (id: string) => staffRef.doc(id).delete()

	const filterStaff = (e?: any) => {
		if (e) {
			updateSearchTerm(e)
		}

		return staffData.filter((val: StaffInterface) => {
			let reg = new RegExp(searchTerm, 'g')
			return reg.test(val.firstName + ' ' + val.lastName)
		})
	}

	let staff = []
	if (staffData) {
		staff = filterStaff().map((staffData: StaffInterface) => {
			return (
				<StaffThumbnail
					updateStaff={updateStaff}
					deleteStaff={deleteStaff}
					staffData={staffData}
					key={staffData.id}
				/>
			)
		})
	}

	const atCapacity = staff.length >= officeCapacity

	return (
		<div>
			<StaffContainer>
				<SearchContainer>
					<input value={searchTerm} onChange={filterStaff} type="text" placeholder="Search..." />
				</SearchContainer>
				<StaffHeader>
					<h3>
						Staff Members {staff.length}/{officeCapacity}
					</h3>
					{atCapacity ? <button>Max</button> : <button onClick={toggleModal}>Add</button>}
				</StaffHeader>
				{loading ? <LoadingSpinner /> : staff}
			</StaffContainer>
			<StaffForm submitAction={addStaff} isOpen={isModalOpen} toggle={toggleModal} />
		</div>
	)
}

export default StaffList
