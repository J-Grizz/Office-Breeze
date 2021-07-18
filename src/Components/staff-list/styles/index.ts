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
