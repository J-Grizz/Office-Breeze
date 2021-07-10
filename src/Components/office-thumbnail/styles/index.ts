import styled, { css } from 'styled-components'
import { PeopleCommunity } from '@styled-icons/fluentui-system-regular/PeopleCommunity'
import { DotsVerticalRounded } from '@styled-icons/boxicons-regular/DotsVerticalRounded'

export const OfficeThumbnailContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
		margin: 25px 5px 0 5px;
		border-radius: 7px;
		overflow: hidden;
	`}
`
export const UserCountContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: linear-gradient(16deg, rgba(2, 86, 160, 1) 0%, rgba(9, 139, 210, 1) 35%, rgba(0, 212, 255, 1) 100%);
		height: 100%;
		width: 20%;
		padding: 10px 0;
	`}
`

export const ContentContainer = styled.div`
	${({ theme }) => css`
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 8px 12px;
		justify-content: space-between;

		h3 {
			color: black;
			font-size: 18px;
		}

		h4 {
			color: grey;
			font-size: 15px;
		}

		a {
			font-size: 12px;
			font-weight: bold;
			text-decoration: none;
			color: #09b086;
		}
		.content-top {
			display: flex;
			justify-content: space-between;
			color: black;
		}
		.content-bottom {
			padding-top: 5px;
			display: flex;
			justify-content: space-between;
		}
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
