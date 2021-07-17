import styled, { css } from 'styled-components'
import { ArrowBackOutline } from '@styled-icons/evaicons-outline/ArrowBackOutline'

export const OfficeLayout = styled.main`
	${({ theme }) => css``}
`

export const OfficeDetailsContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		width: 100%;
		border-radius: 0 0 30px 30px;
		flex-direction: column;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
		background: linear-gradient(181deg, rgba(2, 86, 160, 1) 0%, rgba(9, 139, 210, 1) 35%, rgba(0, 212, 255, 1) 100%);
		padding: 20px;
		div {
			display: flex;
		}
		h2 {
			margin-left: 20px;
		}
		p {
			font-weight: bolder;
			margin-top: 10px;
		}
	`}
`

export const GoBackIcon = styled(ArrowBackOutline)`
	${({ theme }) => css`
		color: ${theme.colors.white};
		width: 40px;
		padding: 2px;
		cursor: pointer;
	`}
`
