import { useState } from 'react'
import About from './components/About/About'
import Carousel from './components/Carousel/Carousel'
import Header from './components/Header/Header'
import Menu from './components/Header/Menu'
import { useMediaQuery } from './customHooks'
import { mediaQueries } from './styles/variables'
import GlobalStyle from './styles/GlobalStyle'
import CarouselProvider from './context/carousel/CarouselProvider'

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const isMobile = useMediaQuery(mediaQueries.mobileOnly)

  return (
    <>
      <GlobalStyle $showMenu={showMenu} />
      <CarouselProvider>
        {isMobile && showMenu && <Menu setShowMenu={setShowMenu} />}
        <Header setShowMenu={setShowMenu} />
        <Carousel />
        <About />
      </CarouselProvider>
    </>
  )
}

export default App
