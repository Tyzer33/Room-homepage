import { createContext } from 'react'
import { CarouselContextType } from '../../types'

const CarouselContext = createContext<CarouselContextType | null>(null)

export default CarouselContext
