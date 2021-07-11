import { FC, useState, useContext } from 'react'
import { OfficeThumbnailContainer, UserCountContainer, PeopleIcon, ContentContainer, OptionsIcon } from './styles'
import { OfficeInterface } from 'Typings/office'
import { OfficeForm } from 'Components'
import { OfficesContext } from 'Context'

interface OfficeThumbnailProps {
	officeData: OfficeInterface
}

const OfficeThumbnail: FC<OfficeThumbnailProps> = ({ officeData }) => {
	const { officeMax, officeName, officeEmail, officeAddr, officeTel, id } = officeData
	const [iEditsModalOpen, setIEditsModalOpen] = useState(false)
	const { deleteOffice } = useContext(OfficesContext)

	function toggleModal(e: any) {
		setIEditsModalOpen(!iEditsModalOpen)
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
						<OptionsIcon onClick={() => deleteOffice(id)} />
					</div>
					<h4>{officeAddr}</h4>
					<div className="content-bottom">
						<a href={`mailto:${officeEmail}`}>{officeEmail}</a>
						<a href={`tel:${officeTel}`}>{officeTel}</a>
					</div>
				</ContentContainer>
			</OfficeThumbnailContainer>
			<OfficeForm officeData={officeData} isOpen={iEditsModalOpen} toggle={toggleModal} />
		</div>
	)
}

export default OfficeThumbnail
