import styled, { css } from 'styled-components'
import { DotsVerticalRounded } from '@styled-icons/boxicons-regular/DotsVerticalRounded'
import { Edit } from '@styled-icons/boxicons-regular/Edit'
import { Delete } from '@styled-icons/fluentui-system-regular/Delete'

interface ActionContainerProps {
	isOpen?: boolean
}

export const ActionsContainer = styled.div<ActionContainerProps>`
	${({ theme }) => css`
		z-index: 100;
		display: ${(p: any) => (p.isOpen ? 'flex' : 'none')};
		right: 40px;
		top: 8px;
		position: absolute;
		width: 150px;
		flex-wrap: wrap;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		border-radius: 5px;
		overflow: hidden;
		button {
			color: grey;
			font-size: 18px;
			font-weight: 900;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: white;
			border: none;
			width: 100%;
			height: 42px;
		}
	`}
`

export const OptionsIcon = styled(DotsVerticalRounded)`
	${({ theme }) => css`
		color: grey;
		width: 20px;
	`}
`
export const EditIcon = styled(Edit)`
	${({ theme }) => css`
		color: grey;
		margin-right: 2px;
		width: 25px;
	`}
`
export const DeleteIcon = styled(Delete)`
	${({ theme }) => css`
		color: grey;
		width: 30px;
	`}
`
