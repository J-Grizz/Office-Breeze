import styled, { css } from 'styled-components'
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt'
import { device } from 'Styles'
export const StyledHeader = styled.header`
	${({ theme }) => css`
		padding: 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	`}
`

export const StyledLogoContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		img {
			width: 50px;
			height: 50px;
			margin-right: 10px;
		}
	`}
`
export const StyledSearchForm = styled.form`
	${({ theme }) => css`
		display: flex;
		justify-content: center;
		flex-wrap: nowrap;
		input {
			width: 150px;
			background-color: transparent;
			border: none;
			border-bottom: 3px solid ${theme.colors.white};
			margin-right: 15px;
			color: ${theme.colors.white};
			font-size: 21px;
			font-weight: bold;
			text-shadow: 0 2px 13px rgba(0, 0, 0, 0.81);

			@media ${device.sm} {
				width: 180px;
			}
		}
		button {
			cursor: pointer;
			background-color: transparent;
			border: none;
		}
	`}
`

export const SearchIcon = styled(SearchAlt)`
	${({ theme }) => css`
		color: ${theme.colors.white};
		width: 25px;
	`}
`
