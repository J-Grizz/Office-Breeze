import { StaffForm, StaffThumbnail } from 'Components'
import { AuthContext } from 'Context'
import firebase from 'firebase'
import { firestore } from 'firebase.config'
import { useToggleState } from 'Hooks'
import { FC, useContext } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { StaffInterface } from 'Typings/staff'
import { StaffContainer } from './styles'

interface StaffListProps {
	officeId: string
}

const StaffList: FC<StaffListProps> = ({ officeId }) => {
	const [isModalOpen, toggleModal] = useToggleState(false)

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

	let staff = []
	if (staffData) {
		staff = staffData.map((staffData: StaffInterface, index: number) => {
			return <StaffThumbnail staffData={staffData} key={staffData.id} />
		})
	}

	return (
		<div>
			<StaffContainer>
				<div>
					<button onClick={toggleModal}>Add</button>
				</div>
				{staff}
			</StaffContainer>
			<StaffForm submitAction={addStaff} isOpen={isModalOpen} toggle={toggleModal} />
		</div>
	)
}

export default StaffList
