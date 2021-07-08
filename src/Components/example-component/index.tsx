import { FC } from 'react'
import { StyledSliderContainer } from './styles'

interface CategorySliderProps {
	someString: string
}

const CategorySlider: FC<CategorySliderProps> = ({ someString }) => {
	return <StyledSliderContainer>{{ someString }}</StyledSliderContainer>
}

export default CategorySlider
