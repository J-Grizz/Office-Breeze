import { FC } from 'react'
import { OfficeThumbnailContainer, UserCountContainer, PeopleIcon, ContentContainer, OptionsIcon } from './styles'
import { OfficeInterface } from 'Typings/office'

interface OfficeThumbnailProps {
	officeData: OfficeInterface
}

const OfficeThumbnail: FC<OfficeThumbnailProps> = ({ officeData }) => {
	const { officeMax, officeName, officeEmail, officeAddr, officeTel } = officeData
	return (
		<OfficeThumbnailContainer>
			<UserCountContainer>
				<PeopleIcon />
				<h4>{`7/${officeMax}`}</h4>
			</UserCountContainer>
			<ContentContainer>
				<div className="content-top">
					<h3>{officeName}</h3>
					<OptionsIcon />
				</div>
				<h4>{officeAddr}</h4>
				<div className="content-bottom">
					<a href={`mailto:${officeEmail}`}>{officeEmail}</a>
					<a href={`tel:${officeTel}`}>{officeTel}</a>
				</div>
			</ContentContainer>
		</OfficeThumbnailContainer>
	)
}

export default OfficeThumbnail
