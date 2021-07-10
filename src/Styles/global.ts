import { createGlobalStyle, css } from 'styled-components'
import { device } from '.'

export default createGlobalStyle`
  ${({ theme }) => css`
		body {
			margin: 0;
		}

		*,
		*:hover,
		*:focus,
		*:before,
		*:after {
			box-sizing: border-box;
			font-family: 'Open Sans', sans-serif;
			outline: none;
		}

		p,
		a,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin: 0;
			font-family: 'Open Sans', sans-serif;
			color: ${theme.colors.white};
		}

		.hidden-desktop {
			@media ${device.sm} {
				display: none;
			}
		}

		.hidden-mobile {
			display: none;
			@media ${device.sm} {
				display: block;
			}
		}
  `}
`
