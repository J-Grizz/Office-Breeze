import { useState } from 'react'
export default (initialVal: any) => {
	const [inputs, setInputs] = useState(initialVal)
	const handleChange = (e: any) => {
		setInputs((state: any) => ({ ...state, [e.target.name]: e.target.value }))
	}
	const reset = (e: any) => {
		setInputs({
			officeName: '',
			officeEmail: '',
			officeTel: '',
			officeAddr: '',
			officeMax: '',
			officeColor: '',
		})
	}
	return [inputs, handleChange, reset]
}
