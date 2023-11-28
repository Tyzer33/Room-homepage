import styled from 'styled-components'
import { colors, mediaQueries } from './variables'

export const Heading2 = styled.h2`
  font-size: 2.5625rem;
  font-weight: 600;
  letter-spacing: -0.04875em;

  @media ${mediaQueries.tabletLandscapeUp} {
    font-size: clamp(1.75rem, -0.4187rem + 3.8554vw, 5.75rem);
  }
`

export const Heading3 = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.295em;
  text-transform: uppercase;

  @media ${mediaQueries.tabletLandscapeUp} {
    letter-spacing: 0.35em;
    font-size: clamp(0.75rem, 0.2756rem + 0.8434vw, 1.625rem);
  }
`

export const BodyText = styled.h2`
  font-size: 1.0938rem;
  font-weight: 500;
  color: ${colors.bodyText};
  letter-spacing: -0.055em;
  line-height: 1.35em;

  @media ${mediaQueries.tabletLandscapeUp} {
    letter-spacing: -0.025em;
    font-size: clamp(0.75rem, 0.8775vw + 0.2rem, 1.75rem);
  }
`

export const HighlightedLink = styled.a`
  font-size: 1rem;
  letter-spacing: 0.725em;
  font-weight: 600;
  text-transform: uppercase;

  @media ${mediaQueries.tabletLandscapeUp} {
    font-size: 0.875rem;
    font-size: clamp(0.775rem, 0.8775vw + 0.2rem, 1.875rem);
  }

  svg {
    fill: ${colors.importantText};
  }

  &:hover {
    color: ${colors.hoverText};

    svg {
      fill: ${colors.hoverText};
    }
  }
`

export const Nav = styled.nav`
  font-size: 1.0625rem;
  font-weight: 600;
  letter-spacing: -0.06em;

  @media ${mediaQueries.tabletPortraitUp} {
    color: ${colors.main};
  }

  @media ${mediaQueries.bigDesktopUp} {
    font-size: 1.25rem;
  }
`
