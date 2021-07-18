import styled, { css } from 'styled-components'

const StyledLayout = styled.div`
	${({ theme }) => css`
		width: 100vw;
		max-width: 500px;
		margin: auto;
		height: 100vh;
	`}
`

export default StyledLayout
