import styled, { css } from 'styled-components'
import { Person } from '@styled-icons/bootstrap/Person'

export const StaffThumbnailContainer = styled.div`
	${({ theme }) => css`
		position: relative;
		padding: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
		margin: 15px 5px 0 5px;
		border-radius: 7px;
		background-color: ${theme.colors.white};
		h3 {
			color: black;
			font-size: 18px;
		}

		.content-left {
			display: flex;
			align-items: center;
		}
	`}
`
export const PersonIcon = styled(Person)`
	${({ theme }) => css`
		border-radius: 50%;
		background-color: rgb(2, 86, 160);
		color: ${theme.colors.white};
		padding: 5px;
		width: 35px;
		margin-right: 10px;
	`}
`
