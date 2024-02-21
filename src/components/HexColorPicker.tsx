import React from "react";

import { ColorPicker } from "src/components/ColorPicker";
import { ColorModel, ColorPickerBaseProps } from "src/types";
import { equalHex } from "src/utils/compare";
import { hexToHsva, hsvaToHex } from "src/utils/convert";

const colorModel: ColorModel<string> = {
  defaultColor: "000",
  toHsva: hexToHsva,
  fromHsva: ({ h, s, v }: any) => hsvaToHex({ h, s, v, a: 1 }),
  equal: equalHex,
};

export const HexColorPicker = (
  props: Partial<ColorPickerBaseProps<string>>
): JSX.Element => <ColorPicker {...props} colorModel={colorModel} />;
