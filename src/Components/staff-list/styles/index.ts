import styled, { css } from 'styled-components'

export const StaffContainer = styled.div`
	${({ theme }) => css`
		margin: 20px 0;
		display: flex;
		flex-direction: column;
		h3,
		h4 {
			color: black;
		}
	`}
`

export const StaffHeader = styled.div`
	${({ theme }) => css`
		padding: 7px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	`}
`

export const SearchContainer = styled.div`
	${({ theme }) => css`
		margin: 10px 5px 15px 5px;
		input {
			padding: 0 10px;
			width: 100%;
			border: none;
			height: 50px;
			border-radius: 5px;
			box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 8px;
			font-size: 20px;
			color: grey;
			font-weight: bold;
		}
	`}
`
