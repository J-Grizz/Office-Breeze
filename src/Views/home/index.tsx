import { FC, useContext } from 'react'
import { HomeLayout } from './styles'
import { HomeHeader } from 'Components'
import { OfficesContext } from 'Context'
import { OfficeInterface } from 'Typings/office'

const Home: FC = () => {
	const { officesData } = useContext(OfficesContext)

	let offices = []
	if (officesData) {
		offices = officesData.map((office: OfficeInterface, index: number) => {
			return <div>{office.officeName}</div>
		})
	}

	return (
		<HomeLayout>
			<HomeHeader />
			{offices}
		</HomeLayout>
	)
}

export default Home
