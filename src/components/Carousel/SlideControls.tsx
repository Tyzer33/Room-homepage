import styled from 'styled-components'
import { colors, mediaQueries } from '../../styles/variables'
import leftArrow from '../../assets/icon-angle-left.svg'
import rightArrow from '../../assets/icon-angle-right.svg'
import { useCarouselContext } from '../../customHooks'

const Container = styled.div`
  display: flex;
  gap: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  background: ${colors.arrowButton};
  z-index: 1;

  @media ${mediaQueries.tabletLandscapeUp} {
    translate: 100%;
  }
`

const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  aspect-ratio: 1;
  background: ${colors.arrowButton};
  transition: background 0.25s ease;

  &:hover {
    background: ${colors.hoverArrowButton};
  }

  @media ${mediaQueries.tabletLandscapeUp} {
    width: calc(80 / 1440 * 100vw);
    min-width: 5rem;
  }
`

const ArrowIcon = styled.img`
  width: 0.625rem;

  @media ${mediaQueries.tabletLandscapeUp} {
    width: 17.5%;
  }
`

function SlideControls() {
  const { prevSlide, nextSlide } = useCarouselContext()

  return (
    <Container>
      <ArrowButton type="button" onClick={() => prevSlide()}>
        <ArrowIcon src={leftArrow} alt="" />
      </ArrowButton>
      <ArrowButton type="button" onClick={() => nextSlide()}>
        <ArrowIcon src={rightArrow} alt="" />
      </ArrowButton>
    </Container>
  )
}

export default SlideControls
