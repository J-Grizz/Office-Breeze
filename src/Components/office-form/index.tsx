import { FC } from 'react'
import { StyledModal } from './styles'
import { useFormState } from 'Hooks'

interface OfficeFormProps {
	isOpen: boolean
	toggle: any
}

const OfficeForm: FC<OfficeFormProps> = ({ isOpen, toggle }, initialValues = {}) => {
	const [inputs, handleChange, reset] = useFormState(initialValues)

	return (
		<div>
			<StyledModal isOpen={isOpen} onBackgroundClick={toggle} onEscapeKeydown={toggle}>
				<form onSubmit={reset}>
					<input name="officeName" type="text" onChange={handleChange} value={inputs.officeName} />
					<input name="officeEmail" type="email" onChange={handleChange} value={inputs.officeEmail} />
					<input name="officeTel" type="tel" onChange={handleChange} value={inputs.officeTel} />
					<input name="officeAddr" type="text" onChange={handleChange} value={inputs.officeAddr} />
					<input name="officeMax" type="number" onChange={handleChange} value={inputs.officeMax} />
					<input name="officeColor" type="input" onChange={handleChange} value={inputs.officeColor} />
					<button type="submit">Submit</button>
				</form>
				<h1>Modal content!</h1>
			</StyledModal>
		</div>
	)
}

export default OfficeForm
