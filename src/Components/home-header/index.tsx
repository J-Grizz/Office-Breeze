import { FC, useState } from 'react'
import { OfficeForm } from 'Components'
import { HeaderContainer, NewOfficeIcon, VertLine, SingOutIcon } from './styles'
import { auth } from 'firebase.config'

const signOut = () => auth.signOut()

const Header: FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	function toggleModal(e: any) {
		setIsModalOpen(!isModalOpen)
	}
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
