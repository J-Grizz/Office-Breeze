import { FC } from 'react'
import { OfficeForm } from 'Components'
import { HeaderContainer, NewOfficeIcon, VertLine, SingOutIcon } from './styles'
import { auth } from 'firebase.config'
import { useToggleState } from 'Hooks'

// TODO Should move this logic to reducer
const signOut = () => auth.signOut()

const Header: FC = () => {
	const [isModalOpen, toggleModal] = useToggleState(false)

	return (
		<div>
			<HeaderContainer>
				<h1>Offices</h1>
				<div>
					<NewOfficeIcon onClick={toggleModal} />
					<VertLine />
					<SingOutIcon onClick={signOut} />
				</div>
			</HeaderContainer>
			<OfficeForm isOpen={isModalOpen} toggle={toggleModal} />
		</div>
	)
}

export default Header
