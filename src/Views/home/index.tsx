import { FC, useContext } from 'react'
import { HomeLayout } from './styles'
import { HomeHeader } from 'Components'
import { AuthContext } from 'Context/auth.context'

const Home: FC = () => {
	const { user } = useContext(AuthContext)

	return (
		<HomeLayout>
			<HomeHeader />
			{/* {testData} */}
		</HomeLayout>
	)
}

export default Home
