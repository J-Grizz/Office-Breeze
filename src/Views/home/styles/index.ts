import styled, { css } from 'styled-components'

export const HomeLayout = styled.main`
	${({ theme }) => css`
		background-color: ${theme.colors.grey};
	`}
`
