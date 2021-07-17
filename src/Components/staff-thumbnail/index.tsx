import { FC } from 'react'
import { StaffThumbnailContainer, ActionsContainer, EditIcon, DeleteIcon } from './styles'
import { StaffInterface } from 'Typings/staff'
import { useToggleState } from 'Hooks'

interface StaffThumbnailProps {
	staffData: StaffInterface
}

const StaffThumbnail: FC<StaffThumbnailProps> = ({ staffData }) => {
	const { id, firstName, lastName } = staffData
	const [isEditModalOpen, toggleEditModal] = useToggleState(false)
	const [isActionPopupOpen, toggleActionPopup] = useToggleState(false)
	const [isDeleteModalOpen, toggleDeleteModal] = useToggleState(false)

	const handleEditCLick = () => {
		toggleEditModal()
		toggleActionPopup()
	}

	const handleDeleteCLick = () => {
		toggleDeleteModal()
		toggleActionPopup()
	}

	const staffMembers: [] = []

	return (
		<div>
			<StaffThumbnailContainer>
				<div>
					{firstName} {lastName}
				</div>
			</StaffThumbnailContainer>
			<ActionsContainer isOpen={isActionPopupOpen}>
				<button onClick={handleEditCLick}>
					Edit <EditIcon />
				</button>
				<button onClick={handleDeleteCLick}>
					Delete
					<DeleteIcon />
				</button>
			</ActionsContainer>
		</div>
	)
}

export default StaffThumbnail
