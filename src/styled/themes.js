export const themes = {
  light: {
    type: 'light',
    fontFamily: {
      default: 'OpenSans-Regular, Roboto, sans-serif',
      bold: 'Mont-Bold, Roboto, sans-serif'
    },
    fontSize: {
      tiny: '11px',
      mini: '12px',
      small: '13px',
      default: '14px',
      big: '1.1rem',
      large: '24px'
    },
    color: {
      white: '#fff',
      whiteSecondary: 'rgba(255, 255, 255, .54)',
      default: 'rgba(0, 0, 0, .54)',
      primary: '#181EAD',
      black: 'rgba(0, 0, 0, .74)',
      // secondary: 'rgba(0, 0, 0, .54)',
      // placeholder: 'rgba(0, 0, 0, .34)',
      // disabled: 'rgba(0, 0, 0, .04)',
      // border: 'rgba(0, 0, 0, .15)',
      // borderHover: 'rgba(0, 0, 0, .35)',
      // elementBg: '#fff',
      // elementBgSecondary: 'rgba(0,0,0, .034)',
      // elementHover: 'rgba(0, 0, 0, .06)',
      info: 'rgba(250, 120, 16, 1)',
      success: 'rgba(0, 217, 176, 1)'
    },
    palette: {
      transparent: {
        200: 'rgba(0, 0, 0, 0)',
        300: 'rgba(0, 0, 0, 0.064)',
        500: 'rgba(0, 0, 0, 0)',
        1000: 'rgba(0, 0, 0, 0.54)'
      },
      default: {
        200: 'rgba(0, 0, 0, .034)',
        300: 'rgba(0, 0, 0, .084)',
        500: 'rgba(0, 0, 0, .34)',
        1000: 'rgba(0, 0, 0, .44)'
      },
      inverted: {
        200: 'rgba(255, 255, 255, .034)',
        500: 'rgba(255, 255, 255, .34)',
        700: 'rgba(255, 255, 255, .54)',
        1000: 'rgba(255, 255, 255, 1)'
      },
      primary: {
        200: '#181EAD',
        500: 'rgba(38, 117, 254, .54)',
        800: 'rgba(38, 117, 254, .84)',
        900: 'rgba(38, 117, 254, .94)',
        1000: '#fff'
      },
    },
    elementSize: {
      tiny: '24px',
      mini: '32px',
      small: '40px',
      default: '48px',
      big: '56px',
      large: '64px'
    },
    borderRadius: {
      tiny: '2px',
      small: '4px',
      default: '6px',
      big: '8px',
      circular: '100%',
      rounded: '100rem'
    },
    boxShadow: {
      default: '1px 4px 8px rgba(0, 0, 0, 0.1)',
      primary: '0px 1px 4px rgba(0, 0, 0, 0.36)'
    },
    spacing: {
      noSpacing: 0,
      tiny: 2,
      mini: 4,
      small: 6,
      default: 8,
      big: 16,
      large: 24,
      extraLarge: 32,
      huge: 38,
      extraHuge: 44
    },
    animation: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      default: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195
    }
  }
}

export const defaultTheme = 'light'
