const LinkStyles = {
  baseStyle: {
    transition: 'all 0.15s ease-out',
    cursor: 'pointer',
    textDecoration: 'underline',
    outline: 'none',
    color: 'inherit',
    borderRadius: "md",
    _hover: {
      textDecoration: 'underline',
    },
    _focus: {
      boxShadow: 'outline',
    },
  },
  variants: {
    navLink: ({ colorMode }: { colorMode: string }) =>  ({
      textDecoration: "none",
      color: colorMode === "dark" ? "gray.200" : "gray.800",
      backgroundColor: colorMode === "dark" ? "transparent" : "transparent",
      _active: {
        color: colorMode === "dark" ? "gray.200" : "gray.800",
        // backgroundColor: colorMode === "dark" ? "teal.700" : "teal.700",
      },
      _hover: {
        color: colorMode === "dark" ? "gray.200" : "gray.800",
        // backgroundColor: colorMode === "dark" ? "teal.700" : "teal.100",
      },
    }),
    ctaLink:  ({ colorMode }: { colorMode: string }) => ({
      color: colorMode === "dark" ? "gray.900" : "gray.900",
      fontWeight: 900,
      textTransform: "uppercase",
      display: 'flex',
      justifyContent: "center",
      alignItems: "center",
      position: 'relative',
      borderRadius: "full",
      backgroundColor: colorMode === "dark" ? "yellow.200" : "yellow.400",
      minWidth: "10rem",
      paddingTop: "1rem",
      paddingBottom: "1rem",
      paddingLeft: ".8rem",
      paddingRight: ".8rem",
      
     }),
    linkInline: ({ colorMode }: { colorMode: string }) => ({
      color: colorMode === "dark" ? "orange.100" : "orange.800",
      fontWeight: 900,
      display: 'inline',
      position: 'relative',
     }),
    linkTwo:  ({ colorMode }: { colorMode: string }) => ({
      color: colorMode === "dark" ? "orange.700" : "orange.800",
      paddingRight: '.5rem',
      paddingLeft: '.5rem',
      position: 'relative',
      fontWeight: 900,
      textDecoration: 'none',
      
    }),
    linkOne: ({ colorMode }: { colorMode: string }) => ({
      color: colorMode === "dark" ? "orange.100" : "orange.800",
      paddingRight: '.5rem',
      paddingLeft: '.5rem',
      position: 'relative',
      fontWeight: 900,
      textDecoration: 'none',
      letterSpacing: '.1rem',
      zIndex: 0,
      _after: {
        transition: 'all 0.15s ease-out',
        zIndex: '-1',
        // bgGradient: 'linear(to-br, , brand.one 80%,  brand.three )',
        background:  colorMode === "dark" ? "orange.100" : "orange.800",
        position: 'absolute',
        content: '""',
        height: '2px',
        width: '100%',
        paddingRight: '0rem',
        paddingLeft: '0rem',
        bottom: '-5px',
        right: '0%',
      },
      _active: {
        textDecoration: 'none',
        _after: {
          zIndex: '-1',
          // bgGradient: 'linear(to-br,  brand.three 80%,  brand.one )',
          background:  colorMode === "dark" ? "orange.100" : "orange.800",
          position: 'absolute',
          content: '""',
          width: '100%',
          height: '5px',
        },
      },
      _hover: {
        cursor: "pointer",
        textDecoration: 'none',
        _after: {
          zIndex: '-1',
          // bgGradient: 'linear(to-br,  brand.three 80%,  brand.one )',
          background:  colorMode === "dark" ? "orange.100" : "orange.800",
          position: 'absolute',
          content: '""',
          width: '100%',
          height: '4px',
        },
      },
    }),
    linkCard: ({ colorMode }: { colorMode: string }) => ({
      color: colorMode === "dark" ? "gray.500" : "gray.500",
      textDecoration: "none",
      zIndex: 0,
      transition: "all 0.2s ease-in-out",
      _active: {
        textDecoration: "none",
      },
      _focus: {},
      _hover: {
        // borderColor: colorMode === "dark" ? "orange.300" : "orange.800",
        // bg: colorMode === "dark" ? "blue.800" : "gray.50",
        textDecoration: "none",
        color: colorMode === "dark" ? "gray.200" : "gray.700",
      },
    }),
  },
}

export default LinkStyles


