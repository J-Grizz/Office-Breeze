import { FC, useContext } from 'react'
import { HomeLayout } from './styles'
import { HomeHeader, OfficeThumbnail, LoadingSpinner } from 'Components'
import { OfficesContext } from 'Context'
import { OfficeInterface } from 'Typings/office'

const Home: FC = () => {
	const { officesData, loading } = useContext(OfficesContext)

	let offices = []
	if (officesData) {
		offices = officesData.map((officeData: OfficeInterface, index: number) => {
			return <OfficeThumbnail officeData={officeData} key={officeData.id} />
		})
	}

	return (
		<HomeLayout>
			<HomeHeader />
			{loading ? <LoadingSpinner /> : offices}
		</HomeLayout>
	)
}

export default Home
