import styled from 'styled-components'
import { useEffect, useRef } from 'react'
import closeIcon from '../../assets/icon-close.svg'
import Navigation from './Navigation'
import { colors } from '../../styles/variables'

const Container = styled.div`
  position: fixed;
  inset: 0 0 0 0;
  background: ${colors.backdrop};
  z-index: 10;
`

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  height: 6.875rem;
  background: ${colors.main};
  padding: 0 0 0 1.625rem;
  gap: 2.625rem;
`

const CloseImg = styled.img`
  width: 1rem;
  min-width: 1rem;
`

type Props = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

function Menu({ setShowMenu }: Props) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (!(event.target instanceof Node)) return
      if (!menuRef.current || menuRef.current.contains(event.target)) return
      setShowMenu(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef, setShowMenu])

  return (
    <Container>
      <StyledMenu ref={menuRef}>
        <button type="button" onClick={() => setShowMenu(false)}>
          <CloseImg src={closeIcon} alt="cross" />
        </button>
        <Navigation />
      </StyledMenu>
    </Container>
  )
}

export default Menu
