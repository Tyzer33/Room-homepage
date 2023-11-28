import { ReactNode, useCallback, useMemo, useState } from 'react'
import CarouselContext from './CarouselContext'
import data from '../../data'

type Props = {
  children: ReactNode
}

function CarouselProvider({ children }: Props) {
  const [id, setId] = useState(0)
  const currentSlide = data[id]
  const dataMaxIndex = data.length - 1

  const prevSlide = useCallback(() => {
    setId((prev) => (prev === 0 ? dataMaxIndex : prev - 1))
  }, [dataMaxIndex])

  const nextSlide = useCallback(() => {
    setId((prev) => (prev === dataMaxIndex ? 0 : prev + 1))
  }, [dataMaxIndex])

  const value = useMemo(
    () => ({ prevSlide, nextSlide, currentSlide }),
    [prevSlide, nextSlide, currentSlide],
  )

  return <CarouselContext.Provider value={value}>{children}</CarouselContext.Provider>
}

export default CarouselProvider
