import styled, { css } from 'styled-components'
// import { device } from '.'

const StyledLayout = styled.div`
	${({ theme }) => css`
		width: 100vw;
		margin: auto;
		height: 100vh;
		display: grid;
		.header-container {
			grid-area: header;
			border: 4px solid red;
		}
		.main-container {
			grid-area: main;
			border: 4px solid magenta;
		}
		grid-template-rows: 100px auto;
		row-gap: 10px;
		grid-template-areas:
			"header"
			"main"
		}
	`}
`

export default StyledLayout
