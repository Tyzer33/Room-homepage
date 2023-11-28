import styled from 'styled-components'
import { BodyText, Heading2, HighlightedLink } from '../../styles/fonts'
import { useCarouselContext } from '../../customHooks'
import { mediaQueries } from '../../styles/variables'
import ArrowIcon from './ArrowIcon'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 auto;
  padding: 3.75rem 2rem 4.5rem;

  @media ${mediaQueries.tabletLandscapeUp} {
    padding: 7.5rem 6rem;
    width: 37.5rem;
  }
`

const Text = styled.div`
  max-width: 37rem;

  @media ${mediaQueries.bigDesktopUp} {
    margin: -0.5rem 2.5rem 2rem;
    position: relative;
    max-width: initial;
  }

  ${BodyText} {
    margin: 1rem 0 2.75rem;

    @media ${mediaQueries.tabletLandscapeUp} {
      margin: 1.5rem 0 1.625rem;
    }

    @media ${mediaQueries.bigDesktopUp} {
      margin: 2.5rem 0 2rem;
    }
  }

  ${HighlightedLink} {
    display: flex;
    gap: 1.25rem;
  }
`

function Legend() {
  const { currentSlide } = useCarouselContext()
  const { title, description } = currentSlide

  return (
    <Container>
      <Text>
        <Heading2>{title}</Heading2>
        <BodyText>{description}</BodyText>
        <HighlightedLink href="#">
          <span>Shop now</span>
          <ArrowIcon />
        </HighlightedLink>
      </Text>
    </Container>
  )
}

export default Legend
