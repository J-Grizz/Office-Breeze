import styled, { css } from 'styled-components'
import { PeopleCommunity } from '@styled-icons/fluentui-system-regular/PeopleCommunity'

export const OfficeThumbnailContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		position: relative;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
		margin: 0 5px 25px 5px;
		a {
			text-decoration: none;
		}
		.link-button {
			width: 20%;
		}
	`}
`
export const UserCountContainer = styled.div`
	${({ theme }) => css`
		border-radius: 7px 0 0 7px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: linear-gradient(16deg, rgb(2, 86, 160) 0%, rgb(9, 139, 210) 35%, rgb(0, 212, 255) 100%);
		height: 100%;
		padding: 10px 0;
	`}
`

export const ContentContainer = styled.div`
	${({ theme }) => css`
		border-radius: 7px;
		background-color: ${theme.colors.white};
		overflow: hidden;
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
