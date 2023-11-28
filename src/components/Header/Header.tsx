import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import menuIcon from '../../assets/icon-hamburger.svg'
import { mediaQueries } from '../../styles/variables'
import { useMediaQuery } from '../../customHooks'
import Navigation from './Navigation'

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0 0 auto 0;
  margin: 3rem 1.5rem 0;
  z-index: 1;

  @media ${mediaQueries.tabletPortraitUp} {
    gap: 2.5rem;
    margin: 2.875rem 4rem;
  }
`

const MenuButton = styled.button`
  position: absolute;
  left: 0;
`

type Props = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({ setShowMenu }: Props) {
  const isMobile = useMediaQuery(mediaQueries.mobileOnly)

  if (isMobile) {
    return (
      <StyledHeader>
        <MenuButton type="button" onClick={() => setShowMenu(true)}>
          <img src={menuIcon} alt="menu" />
        </MenuButton>
        <img src={logo} alt="logo" />
      </StyledHeader>
    )
  }

  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
      <Navigation />
    </StyledHeader>
  )
}

export default Header
