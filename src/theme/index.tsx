import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import LinkStyles from "src/theme/linkStyles"
import { ButtonStyles } from "src/theme/buttonStyles"
// import { TagStyles } from "src/app/theme/tagStyles"
import { Color } from "src/theme/colorStyles"
import {
  EditableStyles,
  FormLabelStyles,
  InputStyles,
  TextareaStyles,
} from "src/theme/formStyles";
import {
  HeadingStyles,
  TextStyles,
  Fonts,
  FontSizeScale,
} from "src/theme/typographyStyles"
import { AccordionStyles } from "./accordianStyles"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: Fonts,
  fontSizes: FontSizeScale,
  colors: {
    ...Color,
  },
  components: {
    // Tag: TagStyles,
    Accordion: AccordionStyles,
    Link: LinkStyles,
    Button: ButtonStyles,
    Heading: HeadingStyles,
    Text: TextStyles,
    Editable: EditableStyles,
    Input: InputStyles,
    Textarea: TextareaStyles,
    FormLabel: FormLabelStyles,
  },
  styles: {
    global: ({ colorMode }: { colorMode: string }) => {
      return {
        body: {
          color: colorMode === "dark" ? "gray.100" : "gray.900",
          bg: colorMode === "dark" ? "gray.900" : "white",
        },
        "*::placeholder": {
          color: colorMode === "dark" ? "gray.100" : "gray.900",
        },
        "*, *::before, &::after": {
          borderColor: colorMode === "dark" ? "gray.100" : "gray.900",
        },
      }
    },
  },
})

export default theme
