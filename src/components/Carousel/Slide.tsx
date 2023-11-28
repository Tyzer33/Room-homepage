import styled from 'styled-components'
import { useCarouselContext } from '../../customHooks'
import { mediaQueries } from '../../styles/variables'
import SlideControls from './SlideControls'

const Container = styled.div`
  display: flex;
  position: relative;

  @media ${mediaQueries.tabletLandscapeUp} {
    flex: 1 52.5rem;
  }
`

const Picture = styled.picture`
  position: relative;
  flex: 1;
`

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;

  @media ${mediaQueries.tabletLandscapeUp} {
    position: absolute;
  }
`

function Slide() {
  const { currentSlide } = useCarouselContext()
  const { media } = currentSlide

  return (
    <Container>
      <Picture>
        <source media={mediaQueries.tabletPortraitUp} srcSet={media.desktop} />
        <Image src={media.mobile} alt="" />
      </Picture>
      <SlideControls />
    </Container>
  )
}

export default Slide
