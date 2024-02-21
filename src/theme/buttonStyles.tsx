export const ButtonStyles = {
  baseStyle: ({ colorMode }: { colorMode: string }) => ({
    _focus: { boxShadow: "none" },
    _hover: {
      textDecoration: "none",
    },
    textTransform: "uppercase",
    borderRadius: "full",
    fontWeight: 900,
    minWidth: "10rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  }),
  variants: {
    btnCTA: ({ colorMode }: { colorMode: string }) => ({
      textDecoration: "none",
      color: colorMode === "dark" ? "gray.900" : "gray.900",
      backgroundColor: colorMode === "dark" ? "yellow.200" : "yellow.400",
      borderColor: colorMode === "dark" ? "yellow.200" : "yellow.400",
      border: "2px",
      _active: {
        backgroundColor: colorMode === "dark" ? "yellow.300" : "yellow.500",
        color: colorMode === "dark" ? "gray.900" : "gray.900",
        borderColor: colorMode === "dark" ? "yellow.300" : "yellow.500",
      },
      _hover: {
        backgroundColor: colorMode === "dark" ? "yellow.100" : "yellow.300",
        color: colorMode === "dark" ? "gray.900" : "gray.900",
        borderColor: colorMode === "dark" ? "yellow.100" : "yellow.300",
      },
    }),
    btnOne: ({ colorMode }: { colorMode: string }) => ({
      color: colorMode === "dark" ? "gray.200" : "gray.800",
      backgroundColor: colorMode === "dark" ? "gray.800" : "gray.200",
      borderColor: colorMode === "dark" ? "yellow.200" : "yellow.400",
      border: "2px",
      _active: {
        backgroundColor: colorMode === "dark" ? "gray.800" : "gray.200",
        color: colorMode === "dark" ? "gray.200" : "gray.800",
        borderColor: colorMode === "dark" ? "yellow.300" : "yellow.500",
      },
      _hover: {
        backgroundColor: colorMode === "dark" ? "gray.800" : "gray.200",
        color: colorMode === "dark" ? "gray.200" : "gray.800",
        borderColor: colorMode === "dark" ? "yellow.100" : "yellow.300",
      },
    }),
    btnTwo: ({ colorMode }: { colorMode: string }) => ({
      textDecoration: "none",
      color: colorMode === "dark" ? "gray.200" : "gray.800",
      backgroundColor: colorMode === "dark" ? "transparent" : "transparent",
      border: "2px",
      borderColor: colorMode === "dark" ? "gray.100" : "gray.900",
      _active: {
        color: colorMode === "dark" ? "gray.200" : "gray.800",
        backgroundColor: colorMode === "dark" ? "orange.700" : "orange.700",
      },
      _hover: {
        color: colorMode === "dark" ? "gray.200" : "gray.800",
        backgroundColor: colorMode === "dark" ? "orange.700" : "orange.100",
      },
    }),
  },
};
