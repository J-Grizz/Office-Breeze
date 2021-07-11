import styled, { css } from 'styled-components'

export const LoadingContainer = styled.div`
	${({ theme }) => css`
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	`}
`

export const StyledSpinner = styled.svg`
	animation: rotate 2s linear infinite;
	width: 50px;
	height: 50px;

	& .path {
		stroke: #5652bf;
		stroke-linecap: round;
		animation: dash 1.5s ease-in-out infinite;
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes dash {
		0% {
			stroke-dasharray: 1, 150;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -35;
		}
		100% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -124;
		}
	}
`
