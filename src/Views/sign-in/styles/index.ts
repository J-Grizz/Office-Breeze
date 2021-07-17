import background from 'Assets/background-image.jpg'

import styled, { css } from 'styled-components'

const sharedStyle = css`
	z-index: -1;
	top: 0;
	left: 0;
	position: absolute;
	height: 100%;
	width: 100%;
`

export const SignInLayout = styled.div`
	${({ theme }) => css`
		position: relative;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		h1 {
			text-shadow: 0 2px 13px rgba(0, 0, 0, 0.81);
			font-size: 60px;
		}
		button {
			background-color: rgba(0, 0, 0, 0.1);
			padding: 16px;
			font-weight: bolder;
			border: 1px solid white;
			box-shadow: none;
			font-size: 22px;
			color: white;
			width: 80%;
			border-radius: 50px;
			margin-bottom: 40px;
		}
		.foreground {
			${sharedStyle}
			backdrop-filter: blur(4px);
		}
		.background-image {
			${sharedStyle}
			background: lightblue url('${background}') no-repeat;
			background-size: cover;
		}
	`}
`

export const ParagraphBlock = styled.div`
	${({ theme }) => css`
		padding: 30px 0 60px 0;
		p {
			text-shadow: 0 2px 13px rgba(0, 0, 0, 0.81);
			font-size: 20px;
			font-weight: bold;
			text-align: center;
		}
	`}
`
