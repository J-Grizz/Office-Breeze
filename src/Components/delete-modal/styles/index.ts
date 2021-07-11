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

export const CloseIcon = styled(Close)`
	${({ theme }) => css`
		position: absolute;
		top: 15px;
		right: 15px;
		color: black;
		width: 34px;
	`}
`

export const ModalContent = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		h2,
		h3 {
			color: black;
		}
		h4 {
			margin: 20px 0;
			color: grey;
		}
		span {
			color: red;
		}
		button {
			padding: 8px 20px;
			margin-top: 20px;
			font-size: 16px;
			color: white;
			background-color: red;
			border: none;
			font-weight: 900;
			border-radius: 50px;
		}
	`}
`
