import styled, { css } from 'styled-components'
import { SignOut } from '@styled-icons/fluentui-system-regular/SignOut'

export const HeaderContainer = styled.div`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 25px;
		background: rgb(2, 0, 36);
		box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
		border-radius: 0 0 6px 6px;
		background: linear-gradient(181deg, rgba(2, 86, 160, 1) 0%, rgba(9, 139, 210, 1) 35%, rgba(0, 212, 255, 1) 100%);
		h1 {
			font-size: 27px;
		}
	`}
`

export const SingOutIcon = styled(SignOut)`
	${({ theme }) => css`
		color: ${theme.colors.white};
		width: 38px;
	`}
`
