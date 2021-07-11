import { FC, useContext } from 'react'
import { StyledModal, StyledForm, CloseIcon } from './styles'
import { useFormState } from 'Hooks'
import { OfficesContext } from 'Context'
import { OfficeInterface } from 'Typings/office'
import { Office } from 'Classes/office'
import { CirclePicker } from 'react-color'

interface OfficeFormProps {
	isOpen: boolean
	toggle: any
	officeData?: OfficeInterface
}

const OfficeForm: FC<OfficeFormProps> = ({ isOpen, toggle, officeData }) => {
	let initialValues: OfficeInterface = officeData || new Office()
	const { addOffice, updateOffice } = useContext(OfficesContext)
	const [inputs, handleChange, handleColorChange, reset] = useFormState(initialValues)

	const handleSubmit = (e: any) => {
		e.preventDefault()
		officeData ? updateOffice(initialValues.id, inputs) : addOffice(inputs)
		reset(e)
		toggle()
	}

	return (
		<div>
			<StyledModal isOpen={isOpen} onBackgroundClick={toggle} onEscapeKeydown={toggle}>
				<CloseIcon onClick={toggle} />
				<h2>{officeData ? 'Edit Office' : 'Add Office'}</h2>
				<StyledForm onSubmit={handleSubmit}>
					<input
						required
						name="officeName"
						id="officeName"
						placeholder="office Name"
						type="text"
						onChange={handleChange}
						value={inputs.officeName}
					/>
					<input
						required
						name="officeEmail"
						id="officeEmail"
						placeholder="office Email"
						type="email"
						onChange={handleChange}
						value={inputs.officeEmail}
					/>
					<input
						required
						name="officeTel"
						id="officeTel"
						placeholder="office Tel"
						type="tel"
						onChange={handleChange}
						value={inputs.officeTel}
					/>
					<input
						required
						name="officeAddr"
						id="officeAddr"
						placeholder="Address"
						type="text"
						onChange={handleChange}
						value={inputs.officeAddr}
					/>
					<input
						required
						name="officeMax"
						id="officeMax"
						placeholder="Max number of occupants"
						type="number"
						onChange={handleChange}
						value={inputs.officeMax}
					/>
					<CirclePicker className="color-input" color={inputs.officeColor} onChange={handleColorChange} />
					<button type="submit">Submit</button>
				</StyledForm>
			</StyledModal>
		</div>
	)
}

export default OfficeForm
