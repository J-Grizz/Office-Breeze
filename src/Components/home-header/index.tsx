import { FC } from 'react'
import { HeaderContainer, SingOutIcon } from './styles'
import { auth } from 'firebase.config'

const signOut = () => auth.signOut()

const Header: FC = () => {
	return (
		<HeaderContainer>
			<h1>Offices</h1>
			<SingOutIcon onClick={signOut} />
		</HeaderContainer>
	)
}

export default Header
