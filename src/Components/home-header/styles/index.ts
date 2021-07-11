import styled, { css } from 'styled-components'
import { SignOut } from '@styled-icons/fluentui-system-regular/SignOut'
import { AddToQueue } from '@styled-icons/boxicons-regular/AddToQueue'

const IconBox = css`
	border: 2px solid white;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
`

export const HeaderContainer = styled.div`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 25px;
		background: rgb(2, 0, 36);
		box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
			rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
		border-radius: 0 0 6px 6px;
		background: linear-gradient(
			181deg,
			rgba(2, 86, 160, 1) 0%,
			rgba(9, 139, 210, 1) 35%,
			rgba(0, 212, 255, 1) 100%
		);
		margin-bottom: 25px;
		h1 {
			font-size: 27px;
			text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		}
		div {
			display: flex;
			align-items: center;
		}
	`}
`

export const NewOfficeIcon = styled(AddToQueue)`
	${({ theme }) => css`
		color: ${theme.colors.white};
		width: 40px;
		padding: 4px;
		${IconBox}
	`}
`
export const VertLine = styled.div`
	${({ theme }) => css`
		height: 26px;
		width: 2px;
		margin: 0 12px;
		background-color: ${theme.colors.white};
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	`}
`

export const SingOutIcon = styled(SignOut)`
	${({ theme }) => css`
		color: ${theme.colors.white};
		width: 40px;
		padding: 2px;
		${IconBox}
	`}
`
