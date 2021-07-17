import { FC } from 'react'
import { StyledModal, StyledForm, CloseIcon } from './styles'
import { useFormState } from 'Hooks'
import { StaffInterface } from 'Typings/staff'
import { Staff } from 'Classes/staff'

interface StaffFormProps {
	isOpen: boolean
	toggle: any
	submitAction: any
	staffData?: StaffInterface
}

const StaffForm: FC<StaffFormProps> = ({ isOpen, toggle, staffData, submitAction }) => {
	let initialValues: StaffInterface | Staff = staffData || new Staff()

	const [inputs, handleChange, handleColorChange, reset] = useFormState(initialValues)

	const handleSubmit = (e: any) => {
		e.preventDefault()
		staffData ? submitAction(initialValues.id, inputs) : submitAction(inputs)
		reset(e)
		toggle()
	}

	return (
		<div>
			<StyledModal isOpen={isOpen} onBackgroundClick={toggle} onEscapeKeydown={toggle}>
				<CloseIcon onClick={toggle} />
				<h2>{staffData ? 'Edit Staff' : 'Add Staff'}</h2>
				<StyledForm onSubmit={handleSubmit}>
					<input
						required
						name="firstName"
						id="firstName"
						placeholder="First name"
						type="text"
						onChange={handleChange}
						value={inputs.firstName}
					/>
					<input
						required
						name="lastName"
						id="lastName"
						placeholder="Last name"
						type="text"
						onChange={handleChange}
						value={inputs.lastName}
					/>
					<button type="submit">Submit</button>
				</StyledForm>
			</StyledModal>
		</div>
	)
}

export default StaffForm
