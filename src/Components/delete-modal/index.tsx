import { FC, useContext } from 'react'
import { StyledModal, CloseIcon, ModalContent } from './styles'
import { OfficesContext } from 'Context'

interface DeleteModalProps {
	isOpen: boolean
	toggle: () => void
	officeData: any
}

const DeleteModal: FC<DeleteModalProps> = ({ isOpen, toggle, officeData }) => {
	const { deleteOffice } = useContext(OfficesContext)

	const handleDelete = () => {
		deleteOffice(officeData.id)
		toggle()
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
					<h3>{officeData.officeName}</h3>
					<button onClick={handleDelete}>Remove</button>
				</ModalContent>
			</StyledModal>
		</div>
	)
}

export default DeleteModal
