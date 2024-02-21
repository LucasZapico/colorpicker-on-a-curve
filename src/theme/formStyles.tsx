export const EditableStyles = {
  parts: ["preview", "input", "textarea"],
  baseStyle: ({ colorMode }: { colorMode: string }) => ({
    preview: {
      borderRadius: "md",
      py: "1",
      transitionProperty: "common",
      transitionDuration: "normal",
    },
    input: {
      variant: "flushed",
      marginBottom: "6",
      borderRadius: "md",
      height: "10",
      py: "1",
      transitionProperty: "common",
      transitionDuration: "normal",
      width: "full",
      _focusVisible: { boxShadow: "outline" },
      _placeholder: { opacity: 0.6 },
    },
    textarea: {
      borderRadius: "md",
      py: "1",
      transitionProperty: "common",
      transitionDuration: "normal",
      width: "full",
      _focusVisible: { boxShadow: "outline" },
      _placeholder: { opacity: 0.6 },
    },
  }),
  defaultProps: { size: "md", variant: "flushed" },
};

export const TextareaStyles = {
  baseStyle: ({ colorMode }: { colorMode: string }) => ({
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
  }),
  defaultProps: { size: "md", variant: "flushed" },
};

export const InputStyles = {
  parts: ["addon", "field", "element"],
  baseStyle: ({ colorMode }: { colorMode: string }) => ({
    field: {
      width: "100%",
      minWidth: 0,
      outline: 0,
      borderColor: "red.700",
      position: "relative",
      appearance: "none",

      transitionProperty: "common",
      transitionDuration: "normal",

      _disabled: { opacity: 0.4, cursor: "not-allowed" },
    },
  }),
  defaultProps: { size: "md", variant: "flushed" },
  variants: {
    flushed: ({ colorMode }: { colorMode: string }) => ({
      field: {
        _focusVisable: {
          borderColor: colorMode === "dark" ? "orange.300" : "orange.600",
          boxShadow: "0 1px 0 0 rgba(213, 163, 88, 0.6)",
        },
      },
    }),
  },
};

export const FormStyle = {
  parts: ["container", "requiredIndicator", "helperText"],
};

export const FormErrorStyles = { parts: ["text", "icon"] };

export const FormLabelStyles = {
  baseStyle: ({ colorMode }: { colorMode: string }) => ({
    fontSize: "md",
    marginEnd: "3",
    mb: "2",
    color: colorMode === "dark" ? "gray.300" : "gray.700",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "normal",
    opacity: 1,
    _disabled: { opacity: 0.4 },
  }),
};
