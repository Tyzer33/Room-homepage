/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'
import { Nav } from '../../styles/fonts'
import { colors, mediaQueries } from '../../styles/variables'

const StyledNav = styled(Nav)`
  flex: 1;
`

const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;

  @media ${mediaQueries.tabletPortraitUp} {
    justify-content: start;
  }
`

const Link = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 1rem;

  &::after {
    content: '';
    height: 0.125rem;
    width: 0;
    background: ${colors.main};
    position: absolute;
    bottom: 0.5rem;
    transition: width 0.25s ease;
  }

  @media ${mediaQueries.tabletPortraitUp} {
    &:hover {
      &::after {
        width: 1rem;
      }
    }
  }
`

function Navigation() {
  return (
    <StyledNav>
      <List>
        <li>
          <Link href="#">home</Link>
        </li>
        <li>
          <Link href="#">shop</Link>
        </li>
        <li>
          <Link href="#">about</Link>
        </li>
        <li>
          <Link href="#">contact</Link>
        </li>
      </List>
    </StyledNav>
  )
}

export default Navigation
