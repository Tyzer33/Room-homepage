import styled from 'styled-components'
import { BodyText, Heading3 } from '../../styles/fonts'
import { mediaQueries } from '../../styles/variables'
import darkImage from '../../assets/image-about-dark.jpg'
import lightImage from '../../assets/image-about-light.jpg'

const Container = styled.section`
  display: flex;
  flex-direction: column;

  @media ${mediaQueries.tabletLandscapeUp} {
    flex: 1;
    flex-direction: row;
  }
`

const ImageContainer = styled.div`
  position: relative;
  flex: 1;
`

const DarkImageContainer = styled(ImageContainer)`
  @media ${mediaQueries.tabletLandscapeUp} {
    flex-basis: 26.25rem;
  }
`
const LightImageContainer = styled(ImageContainer)`
  @media ${mediaQueries.tabletLandscapeUp} {
    flex-basis: 27.5rem;
  }
`

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;

  @media ${mediaQueries.tabletLandscapeUp} {
    position: absolute;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.25rem 2rem 2.5rem;

  @media ${mediaQueries.tabletLandscapeUp} {
    padding: 4.25rem 3rem 2.5rem;
    flex: 0.575 36.25rem;
  }

  @media ${mediaQueries.bigDesktopUp} {
    padding: 4.5rem 3.75rem 3rem;
  }
`

const Text = styled.div`
  max-width: 37rem;

  @media ${mediaQueries.tabletLandscapeUp} {
    max-width: initial;
  }

  ${BodyText} {
    margin-top: 1rem;
  }
`

function About() {
  return (
    <Container>
      <DarkImageContainer>
        <Image src={darkImage} alt="" />
      </DarkImageContainer>
      <TextContainer>
        <Text>
          <Heading3>About our furniture</Heading3>
          <BodyText>
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and
            what inspires you. Find the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to help you create your
            dream space.
          </BodyText>
        </Text>
      </TextContainer>
      <LightImageContainer>
        <Image src={lightImage} alt="" />
      </LightImageContainer>
    </Container>
  )
}

export default About
