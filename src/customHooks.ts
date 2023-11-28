import { useContext, useEffect, useMemo, useState } from 'react'
import CarouselContext from './context/carousel/CarouselContext'
import { CarouselContextType } from './types'

export function useMediaQuery(query: string) {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query])
  const [match, setMatch] = useState(mediaQuery.matches)

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches)
    mediaQuery.addEventListener('change', onChange)

    return () => mediaQuery.removeEventListener('change', onChange)
  }, [mediaQuery])

  return match
}

export function useCarouselContext() {
  const value = useContext(CarouselContext) as CarouselContextType
  return value
}
