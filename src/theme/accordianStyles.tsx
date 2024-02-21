import { tagAnatomy } from "@chakra-ui/anatomy";

export const AccordionStyles = {
  parts: ["root", "container", "button", "panel", "icon"],
  baseStyle: ({ colorMode }: { colorMode: string }) => ({
    container: {
      borderTopWidth: "1px",
      borderColor: colorMode === "dark" ? "gray.800" : "gray.200",
      // bg: colorMode === "dark" ? "gray.800" : "gray.200",
      // color: colorMode === "dark" ? "gray.300" : "gray.700",
      _last: { borderBottomWidth: "1px" },
    },
    button: {
      transitionProperty: "common",
      transitionDuration: "normal",
      fontSize: "md",
      _focusVisible: { boxShadow: "outline" },
      _hover: { bg: "blackAlpha.50" },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
      px: "4",
      py: "2",
    },
    panel: { pt: "2", px: "4", pb: "5" },
    icon: { fontSize: "1.25em" },
  }),
  defaultProps: {
    size: "md",
    variant: "default",
  },
  variants: {
    sec: ({ colorMode }: { colorMode: string }) => ({
      container: {
        // bg: "yellow.200",
        // color: "yellow.400",
        bg: colorMode === "dark" ? "gray.900" : "gray.50",
        color: colorMode === "dark" ? "gray.600" : "gray.300",
        borderColor: colorMode === "dark" ? "gray.600" : "gray.300",
        border: "1px",
        borderRadius: "0px",
      },
    }),
  },
};
