import { FC } from 'react'
import { StyledModal, CloseIcon, ModalContent } from './styles'

interface DeleteModalProps {
	isOpen: boolean
	toggle: () => void
	deleteAction: any
	entityId: any
	entityName: string
}

const DeleteModal: FC<DeleteModalProps> = ({ isOpen, toggle, deleteAction, entityId, entityName }) => {
	const handleDelete = () => {
		deleteAction(entityId)
	}

	return (
		<div>
			<StyledModal isOpen={isOpen} onBackgroundClick={toggle} onEscapeKeydown={toggle}>
				<CloseIcon onClick={toggle} />
				<ModalContent>
					<h2>Remove Office</h2>
					<h4>
						Are you sure you want to <span>Remove</span>
					</h4>
					<h3>{entityName}</h3>
					<button onClick={handleDelete}>Remove</button>
				</ModalContent>
			</StyledModal>
		</div>
	)
}

export default DeleteModal
