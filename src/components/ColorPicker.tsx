import React, { useRef } from "react";

import { Hue } from "src/components/Hue";
import { Saturation } from "src/components/Saturation";

import { ColorModel, ColorPickerBaseProps, AnyColor } from "src/types/index.d";
import { useColorManipulation } from "src/hooks/useColorManipulation";
// import { useStyleSheet } from "../../hooks/useStyleSheet";
// import { formatClassName } from "../../utils/format";
import { Box } from "@chakra-ui/react";

interface Props<T extends AnyColor> extends Partial<ColorPickerBaseProps<T>> {
  colorModel: ColorModel<T>;
}

export const ColorPicker = ({
  colorModel,
  color = colorModel.defaultColor,
  onChange,
  ...rest
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  const [hsva, updateHsva] = useColorManipulation<T>(
    colorModel,
    color,
    onChange
  );

  // const nodeClassName = formatClassName(["react-colorful", className]);

  return (
    <Box
      pos="relative"
      display="flex"
      flexDir="column"
      userSelect="none"
      cursor="default"
      height="200px"
      width="200px"
      {...rest}
    >
      <Saturation
      // hsva={hsva}
      // onChange={updateHsva}
      />
      <Hue
        // hue={hsva.h}
        // onChange={updateHsva}
        className="react-colorful__last-control"
      />
    </Box>
  );
};
