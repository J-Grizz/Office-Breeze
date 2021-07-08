import { createGlobalStyle, css } from 'styled-components'
import { device } from '.'

export default createGlobalStyle`
  ${({ theme }) => css`
		/* Initialize fonts: https://fonts.google.com/ */
		@font-face {
			font-family: 'Limelight';
			src: local('Limelight'), url('Fonts/Limelight-Regular.ttf') format('truetype');
		}

		body {
			margin: 0;
		}

		*,
		*:hover,
		*:focus,
		*:before,
		*:after {
			box-sizing: border-box;
			font-family: LimeLight;
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
			font-family: LimeLight;
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
