import { FC } from 'react'
import { OptionsIcon, ActionsContainer, DeleteIcon, EditIcon } from './styles'

interface ActionsPopupProps {
	toggleEditModal: () => void
	toggleDeleteModal: () => void
	toggleActionPopup: () => void
	isActionPopupOpen: boolean
}

const ActionsPopup: FC<ActionsPopupProps> = ({
	toggleEditModal,
	toggleActionPopup,
	toggleDeleteModal,
	isActionPopupOpen,
}) => {
	const handleEditCLick = () => {
		toggleEditModal()
		toggleActionPopup()
	}

	const handleDeleteCLick = () => {
		toggleDeleteModal()
		toggleActionPopup()
	}

	return (
		<div>
			<OptionsIcon onClick={toggleActionPopup} />
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

export default ActionsPopup
