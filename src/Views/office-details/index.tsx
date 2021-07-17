import { FC, useContext } from 'react'
import { OfficeLayout, OfficeDetailsContainer, GoBackIcon } from './styles'
import { OfficeInterface } from 'Typings/office'
import { Office } from 'Classes/office'
import { firestore } from 'firebase.config'
import { AuthContext } from 'Context'
import { useDocument } from 'react-firebase-hooks/firestore'

const OfficeDetails: FC = ({ match, history }: any) => {
	const { user } = useContext(AuthContext)
	const officeRef = firestore.doc(`users/${user.uid}/offices/${match.params.officeId}`)

	const [value, loading]: any = useDocument(officeRef)
	let office: OfficeInterface = new Office()
	if (!loading) {
		office = value.data()
	}

	return (
		<OfficeLayout>
			<OfficeDetailsContainer>
				<div>
					<GoBackIcon onClick={() => history.goBack()} /> <h2>{office.officeName}</h2>
				</div>
				<p>Address: {office.officeAddr}</p>
				<p>Email: {office.officeEmail}</p>
				<p>Office Tell: {office.officeTel}</p>
				<p>Max Capacity: {office.officeMax}</p>
			</OfficeDetailsContainer>
		</OfficeLayout>
	)
}

export default OfficeDetails
