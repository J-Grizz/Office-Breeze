import { FC } from 'react'
import { LoadingContainer, StyledSpinner } from './styles'

const LoadingSpinner: FC = () => {
	return (
		<LoadingContainer>
			<StyledSpinner viewBox="0 0 50 50">
				<circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
			</StyledSpinner>
		</LoadingContainer>
	)
}

export default LoadingSpinner
