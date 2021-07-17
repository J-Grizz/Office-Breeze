import styled, { css } from 'styled-components'
import { PeopleCommunity } from '@styled-icons/fluentui-system-regular/PeopleCommunity'
import { DotsVerticalRounded } from '@styled-icons/boxicons-regular/DotsVerticalRounded'
import { Edit } from '@styled-icons/boxicons-regular/Edit'
import { Delete } from '@styled-icons/fluentui-system-regular/Delete'

interface ActionContainerProps {
	isOpen?: boolean
}

export const StaffThumbnailContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
		margin: 0 5px 25px 5px;
		border-radius: 7px;
		overflow: hidden;
		a {
			text-decoration: none;
		}
		.link-button {
			width: 20%;
		}
		. 
	`}
`
export const PeopleIcon = styled(PeopleCommunity)`
	${({ theme }) => css`
		color: ${theme.colors.white};
		width: 40px;
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
export const ActionsContainer = styled.div<ActionContainerProps>`
	${({ theme }) => css`
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
			height: 33px;
		}
	`}
`
