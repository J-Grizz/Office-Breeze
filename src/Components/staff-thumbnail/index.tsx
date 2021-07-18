import { FC } from 'react'
import { StaffThumbnailContainer, PersonIcon } from './styles'
import { StaffInterface } from 'Typings/staff'
import { useToggleState } from 'Hooks'
import { ActionsPopup, StaffForm, DeleteModal } from 'Components'

interface StaffThumbnailProps {
	staffData: StaffInterface
	deleteStaff: any
	updateStaff: any
}

const StaffThumbnail: FC<StaffThumbnailProps> = ({ staffData, updateStaff, deleteStaff }) => {
	const { firstName, lastName, id } = staffData
	const [isEditModalOpen, toggleEditModal] = useToggleState(false)
	const [isActionPopupOpen, toggleActionPopup] = useToggleState(false)
	const [isDeleteModalOpen, toggleDeleteModal] = useToggleState(false)

	return (
		<>
			<StaffThumbnailContainer>
				<div className="content-left">
					<PersonIcon />
					<h3>
						{firstName} {lastName}
					</h3>
				</div>
				<ActionsPopup
					toggleEditModal={toggleEditModal}
					toggleDeleteModal={toggleDeleteModal}
					isActionPopupOpen={isActionPopupOpen}
					toggleActionPopup={toggleActionPopup}
				/>
			</StaffThumbnailContainer>
			<StaffForm staffData={staffData} submitAction={updateStaff} isOpen={isEditModalOpen} toggle={toggleEditModal} />
			<DeleteModal
				isOpen={isDeleteModalOpen}
				toggle={toggleDeleteModal}
				deleteAction={deleteStaff}
				entityId={id}
				entityName={`${firstName} ${lastName}`}
			/>
		</>
	)
}

export default StaffThumbnail
