const breakpoints = {
  tabletPortrait: 640,
  tabletLandscape: 1024,
  desktopUp: 1280,
  bigDesktopUp: 1536,
}

export const mediaQueries = {
  mobileOnly: `(max-width: ${breakpoints.tabletPortrait - 1}px)`,
  tabletPortraitUp: `(min-width: ${breakpoints.tabletPortrait}px)`,
  tabletLandscapeUp: `(min-width: ${breakpoints.tabletLandscape}px)`,
  desktopUp: `(min-width: ${breakpoints.desktopUp}px)`,
  bigDesktopUp: `(min-width: ${breakpoints.bigDesktopUp}px)`,
}

export const colors = {
  main: 'white',
  bodyText: 'hsl(0, 0%, 63%)',
  importantText: 'black',
  hoverText: 'hsl(0, 0%, 72.5%)',
  arrowButton: 'black',
  hoverArrowButton: '#444444',
  backdrop: 'hsla(0, 0%, 0%, 50%)',
}
