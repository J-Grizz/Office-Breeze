import { useState } from 'react'
import { Office } from 'Classes/office'
const useFormState = (initialVal: any) => {
	const [inputs, setInputs] = useState(initialVal)
	const handleChange = (e: any) => {
		setInputs((state: any) => ({ ...state, [e.target.name]: e.target.value }))
	}
	const reset = (e: any) => {
		setInputs(new Office())
	}
	return [inputs, handleChange, reset]
}

export default useFormState
