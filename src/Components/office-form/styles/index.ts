import styled, { css } from 'styled-components'
import Modal from 'styled-react-modal'
import { Close } from '@styled-icons/ionicons-outline/Close'

export const StyledModal = Modal.styled`
	position: relative;
	padding: 30px;
	border-radius: 7px;
	width: 85%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	h2 {
		color: black;
	}
`

export const StyledForm = styled.form`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		input {
			width: 100%;
			border: none;
			border-bottom: 2px solid grey;
			font-size: 20px;
			margin: 30px 0 0 0;
			color: grey;
			font-weight: bold;
			padding-bottom: 3px;
		}
		.color-input {
			margin-top: 30px;
			margin: 30px 0 0 0;
		}
		button {
			margin-top: 40px;
			width: 120px;
			color: white;
			font-weight: bolder;
			font-size: 18px;
			font-family: 'Open Sans', sans-serif;
			border: none;
			border-radius: 5px;
			padding: 7px;
			box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
			background: linear-gradient(
				181deg,
				rgba(2, 86, 160, 1) 0%,
				rgba(9, 139, 210, 1) 35%,
				rgba(0, 212, 255, 1) 100%
			);
		}
	`}
`

export const CloseIcon = styled(Close)`
	${({ theme }) => css`
		position: absolute;
		top: 15px;
		right: 15px;
		color: black;
		width: 34px;
	`}
`
