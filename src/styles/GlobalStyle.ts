import { createGlobalStyle } from 'styled-components'
import { mediaQueries } from './variables'

type Props = {
  $showMenu: boolean
}

const GlobalStyle = createGlobalStyle<Props>`
  /* Reset */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  img, picture, svg, video {
    display: block;
    max-width: 100%;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Fonts */

  body {
    font-family: 'League Spartan', sans-serif;
  }

  /* Style */

  body {
    @media ${mediaQueries.mobileOnly} {
      overflow:  ${(props) => (props.$showMenu ? 'hidden' : 'initial')};
    }
  }

  div#root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-height: 100svh;
  }
`

export default GlobalStyle
