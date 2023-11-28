import styled from 'styled-components'
import Legend from './Legend'
import Slide from './Slide'
import { mediaQueries } from '../../styles/variables'

const Container = styled.section`
  display: flex;
  flex-direction: column;

  @media ${mediaQueries.tabletLandscapeUp} {
    flex: 2;
    flex-direction: row;
  }
`

function Carousel() {
  return (
    <Container>
      <Slide />
      <Legend />
    </Container>
  )
}

export default Carousel
