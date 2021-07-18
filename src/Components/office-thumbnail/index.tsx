import { FC, useContext } from 'react'
import { OfficeThumbnailContainer, UserCountContainer, PeopleIcon, ContentContainer } from './styles'
import { OfficeInterface } from 'Typings/office'
import { OfficeForm, DeleteModal, ActionsPopup } from 'Components'
import { useToggleState } from 'Hooks'
import { Link } from 'react-router-dom'
import { OfficesContext } from 'Context'

interface OfficeThumbnailProps {
	officeData: OfficeInterface
}

const OfficeThumbnail: FC<OfficeThumbnailProps> = ({ officeData }) => {
	const { officeMax, officeName, officeEmail, officeAddr, officeTel, id } = officeData
	const { deleteOffice } = useContext(OfficesContext)
	const [isEditModalOpen, toggleEditModal] = useToggleState(false)
	const [isActionPopupOpen, toggleActionPopup] = useToggleState(false)
	const [isDeleteModalOpen, toggleDeleteModal] = useToggleState(false)

	const staffMembers: [] = []

	return (
		<div>
			<OfficeThumbnailContainer>
				<Link className="link-button" to={`/office/${id}`}>
					<UserCountContainer>
						<PeopleIcon />
						<h4>{`${staffMembers.length}/${officeMax}`}</h4>
					</UserCountContainer>
				</Link>
				<ContentContainer>
					<div className="content-top">
						<Link to={`/office/${id}`}>
							<h3>{officeName}</h3>
						</Link>
						<ActionsPopup
							toggleEditModal={toggleEditModal}
							toggleDeleteModal={toggleDeleteModal}
							isActionPopupOpen={isActionPopupOpen}
							toggleActionPopup={toggleActionPopup}
						/>
					</div>
					<h4>{officeAddr}</h4>
					<div className="content-bottom">
						<a href={`mailto:${officeEmail}`}>{officeEmail}</a>
						<a href={`tel:${officeTel}`}>{officeTel}</a>
					</div>
				</ContentContainer>
			</OfficeThumbnailContainer>
			<OfficeForm officeData={officeData} isOpen={isEditModalOpen} toggle={toggleEditModal} />
			<DeleteModal
				isOpen={isDeleteModalOpen}
				toggle={toggleDeleteModal}
				deleteAction={deleteOffice}
				entityId={id}
				entityName={officeName}
			/>
		</div>
	)
}

export default OfficeThumbnail
