

export const Fonts: { [key: string]: string  } = {
  display: 'Giphurs, sans-serif',
  heading: 'Work Sans, sans-serif',
  body: 'Work Sans, sans-serif',
  internal: 'Open Sans, sans-serif'
}


export const FontSizeScale: { [key: string]: string  }  = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
}

// Heading
export const HeadingStyles = {
  baseStyle: {
    fontWeight: '500',
    marginBottom: '6',
    lineHeight: 'lineHeights.taller',
    fontFamily: Fonts.body,
  },
  // Styles for the size variations
  sizes: {
    '5xl': {
      fontSize: ['5xl', null, '7xl', '8xl'],
      lineHeight: 1.4,
    },
    '4xl': {
      fontSize: ['5xl', null, '6xl', '7xl'],
      lineHeight: 1.4,
    },
    '3xl': {
      fontSize: ['4xl', null, '5xl', '6xl'],
      lineHeight: 1.4,
    },
    '2xl': {
      fontSize: ['3xl', null, '4xl', '5xl'],
      lineHeight: 1.4,
    },
    'xl': {
      fontSize: ['2xl', null, '3xl'],
      lineHeight: 1.4,
    },
    'lg': {
      fontSize: ["xl", null, "2xl", "2xl"],
      lineHeight: 1.4,
    },
    'md': {
      fontSize: ['lg'],
      lineHeight: 1.5,
    },
    'sm': {
      fontSize: ['md'],
      lineHeight: 1.2,
    },
    'xs': {
      fontSize: ['sm'],
      lineHeight: 1.2,
    }
  },
  // Styles for the visual style variations

  variants: {
    display: ({ colorMode }: { colorMode: string }) => ({
      color: colorMode === 'dark' ? 'gray.100' : 'gray.700',
      fontWeight: 400,
      lineHeight: 1,
      fontFamily: Fonts.display,
      "textTransform": "uppercase",
    }),
    pri: ({ colorMode }: { colorMode: string }) => ({
      color: colorMode === 'dark' ? 'gray.300' : 'gray.700',
      fontWeight: 500,
      fontFamily: Fonts.heading,
    }),
    sec: ({ colorMode }: { colorMode: string }) => ({
      color: colorMode === 'dark' ? 'brown.300' : 'brown.700',
      fontWeight: 800,
      
    }),
    internalPri: ({ colorMode }: { colorMode: string }) => ({
      color: colorMode === 'dark' ? 'gray.300' : 'gray.800',
      fontWeight: 800,
      fontFamily: Fonts.internal,
      // textTransform: "uppercase"
    }),
    super: ({ colorMode }: { colorMode: string }) => ({
      color: colorMode === 'dark' ? 'gray.400' : 'gray.600',
      fontWeight: 800,
      fontFamily: Fonts.body,
      marginLeft: '90px',
      zIndex: 0,
      position: 'relative',
      _after: {
        zIndex: '-1',
        background:  colorMode === "dark" ? "gray.400" : "gray.600",
        position: 'absolute',
        content: '""',
        height: '2px',
        width: '80px',
        paddingRight: '0rem',
        paddingLeft: '0rem',
        top: '50%',
        transform: 'translate(-90px, -50%)',
        left: '0%',
      },
    }),
  },
  // The default `size` or `variant` values
  defaultProps: {},
}

export const TextStyles = {
  baseStyle: ({ colorMode }: { colorMode: string }) => ({
    color: colorMode === 'dark' ? 'gray.200' : 'gray.900',
    fontWeight: colorMode === 'dark' ? 500 : 500,
    letterSpacing: '0.1rem',
    lineHeight: 1.5,
    marginBottom: '6',
    fontFamily: Fonts.body,
  }),
}
