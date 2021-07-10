import { FC, useContext } from 'react'
import { StyledModal } from './styles'
import { useFormState } from 'Hooks'
import { OfficesContext } from 'Context'
import { OfficeInterface } from 'Typings/office'
import { Office } from 'Classes/office'

interface OfficeFormProps {
	isOpen: boolean
	toggle: any
}

const OfficeForm: FC<OfficeFormProps> = ({ isOpen, toggle }) => {
	let initialValues: OfficeInterface = new Office()
	const { addOffice } = useContext(OfficesContext)
	const [inputs, handleChange, reset] = useFormState(initialValues)

	const handleSubmit = (e: any) => {
		e.preventDefault()
		addOffice(inputs)
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
