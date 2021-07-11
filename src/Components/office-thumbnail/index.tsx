import { FC } from 'react'
import {
	OfficeThumbnailContainer,
	UserCountContainer,
	PeopleIcon,
	ContentContainer,
	OptionsIcon,
	ActionsContainer,
	DeleteIcon,
	EditIcon,
} from './styles'
import { OfficeInterface } from 'Typings/office'
import { OfficeForm, DeleteModal } from 'Components'
import { useToggleState } from 'Hooks'

interface OfficeThumbnailProps {
	officeData: OfficeInterface
}

const OfficeThumbnail: FC<OfficeThumbnailProps> = ({ officeData }) => {
	const { officeMax, officeName, officeEmail, officeAddr, officeTel, id } = officeData
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

	return (
		<div>
			<OfficeThumbnailContainer>
				<UserCountContainer>
					<PeopleIcon />
					<h4>{`7/${officeMax}`}</h4>
				</UserCountContainer>
				<ContentContainer>
					<div className="content-top">
						<h3>{officeName}</h3>
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
					<h4>{officeAddr}</h4>
					<div className="content-bottom">
						<a href={`mailto:${officeEmail}`}>{officeEmail}</a>
						<a href={`tel:${officeTel}`}>{officeTel}</a>
					</div>
				</ContentContainer>
			</OfficeThumbnailContainer>
			<OfficeForm officeData={officeData} isOpen={isEditModalOpen} toggle={toggleEditModal} />
			<DeleteModal isOpen={isDeleteModalOpen} toggle={toggleDeleteModal} officeData={officeData} />
		</div>
	)
}

export default OfficeThumbnail
