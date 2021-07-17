import { useState } from 'react'
const useFormState = (initialObj: any) => {
	const [inputs, setInputs] = useState(initialObj)
	const handleChange = (e: any) => {
		setInputs((state: any) => ({ ...state, [e.target.name]: e.target.value }))
	}
	const handleColorChange = (color: any, e: any) => {
		setInputs((state: any) => ({ ...state, officeColor: color.hex }))
	}
	const reset = (e: any) => {
		setInputs(initialObj)
	}
	return [inputs, handleChange, handleColorChange, reset]
}

export default useFormState
