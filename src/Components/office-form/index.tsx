import { FC, useEffect } from 'react'
import { StyledModal } from './styles'
import { useFormState } from 'Hooks'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase, { firestore, auth } from 'firebase.config'

interface OfficeFormProps {
	isOpen: boolean
	toggle: any
}

const OfficeForm: FC<OfficeFormProps> = ({ isOpen, toggle }) => {
	let initialValues = {
		officeName: '',
		officeEmail: '',
		officeTel: '',
		officeAddr: '',
		officeMax: '',
		officeColor: '',
	}
	const [inputs, handleChange, reset] = useFormState(initialValues)
	const officesRef = firestore.collection(`users/${auth.currentUser!.uid}/offices`)
	const [OfficeData] = useCollectionData(officesRef, { idField: 'id' })

	const handleSubmit = (e: any) => {
		e.preventDefault()
		console.log(
			officesRef.add({
				...inputs,
				createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			})
		)
		reset(e)
	}

	return (
		<div>
			<StyledModal isOpen={isOpen} onBackgroundClick={toggle} onEscapeKeydown={toggle}>
				<form onSubmit={handleSubmit}>
					<input name="officeName" type="text" onChange={handleChange} value={inputs.officeName} />
					<input name="officeEmail" type="email" onChange={handleChange} value={inputs.officeEmail} />
					<input name="officeTel" type="tel" onChange={handleChange} value={inputs.officeTel} />
					<input name="officeAddr" type="text" onChange={handleChange} value={inputs.officeAddr} />
					<input name="officeMax" type="number" onChange={handleChange} value={inputs.officeMax} />
					<input name="officeColor" type="input" onChange={handleChange} value={inputs.officeColor} />
					<button type="submit">Submit</button>
				</form>
			</StyledModal>
		</div>
	)
}

export default OfficeForm
