import { FC } from 'react'
import { StyledHeader, StyledLogoContainer } from './styles'

const Header: FC = () => {
	return (
		<StyledHeader className="header-container">
			<StyledLogoContainer>
				{/* <img src={''} alt="Logo" /> */}
				<h1 className="hidden-mobile">Site Title</h1>
			</StyledLogoContainer>
			{/* <StyledSearchForm target="/search">
				<input name="q" type="text" />
				<button type="submit">
					<SearchIcon />
				</button>
			</StyledSearchForm> */}
		</StyledHeader>
	)
}

export default Header
