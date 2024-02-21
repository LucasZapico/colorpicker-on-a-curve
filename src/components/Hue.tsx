import React from "react";

import { Interactive, Interaction } from "components/Interactive";
import { Pointer } from "components/Pointer";

import { hsvaToHslString } from "src/utils/convert";
import { formatClassName } from "src/utils/format";
import { clamp } from "src/utils/clamp";
import { round } from "src/utils/round";
import { Box } from "@chakra-ui/react";

interface Props {
  className?: string;
  hue: number;
  onChange: (newHue: { h: number }) => void;
}

const HueBase = ({ className, hue, onChange }: Props) => {
  // const handleMove = (interaction: Interaction) => {
  //   onChange({ h: 360 * interaction.left });
  // };

  // const handleKey = (offset: Interaction) => {
  //   // Hue measured in degrees of the color circle ranging from 0 to 360
  //   onChange({
  //     h: clamp(hue + offset.left * 360, 0, 360),
  //   });
  // };

  // const nodeClassName = formatClassName(["react-colorful__hue", className]);

  return (
    <Box
      height="24px"
      pos="relative"
      background=" linear-gradient(
      to right,
      #f00 0%,
      #ff0 17%,
      #0f0 33%,
      #0ff 50%,
      #00f 67%,
      #f0f 83%,
      #f00 100%
    );"
    >
      {/* <Interactive
        onMove={handleMove}
        onKey={handleKey}
        aria-label="Hue"
        aria-valuenow={round(hue)}
        aria-valuemax="360"
        aria-valuemin="0"
      >
        <Pointer
          className="react-colorful__hue-pointer"
          left={hue / 360}
          color={hsvaToHslString({ h: hue, s: 100, v: 100, a: 1 })}
        />
      </Interactive> */}
    </Box>
  );
};

export const Hue = React.memo(HueBase);
