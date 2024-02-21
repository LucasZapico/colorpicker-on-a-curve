import React from "react";
import { Interactive, Interaction } from "src/Interactive";
import { Pointer } from "src/Pointer";
import { HsvaColor } from "src/types";
import { hsvaToHslString } from "src/utils/convert";
// import { clamp } from "src/utils/clamp";
// import { round } from "src/utils/round";
import { Box } from "@chakra-ui/react";

interface Props {
  hsva: HsvaColor;
  onChange: (newColor: { s: number; v: number }) => void;
}

const SaturationBase = ({ hsva, onChange }: Props) => {
  // const handleMove = (interaction: Interaction) => {
  //   onChange({
  //     s: interaction.left * 100,
  //     v: 100 - interaction.top * 100,
  //   });
  // };

  // const handleKey = (offset: Interaction) => {
  //   // Saturation and brightness always fit into [0, 100] range
  //   onChange({
  //     s: clamp(hsva.s + offset.left * 100, 0, 100),
  //     v: clamp(hsva.v - offset.top * 100, 0, 100),
  //   });
  // };

  // const containerStyle = {
  //   backgroundColor: hsvaToHslString({ h: hsva.h, s: 100, v: 100, a: 1 }),
  // };

  return (
    <Box pos="relative" flexGrow={1} backgroundImage="linear-gradient(to top, #000, rgba(0, 0, 0, 0)),
    linear-gradient(to right, #fff, rgba(255, 255, 255, 0))"
    // style={containerStyle}
    >
      {/* <Interactive
        onMove={handleMove}
        onKey={handleKey}
        aria-label="Color"
        aria-valuetext={`Saturation ${round(hsva.s)}%, Brightness ${round(hsva.v)}%`}
      >
        <Pointer
          className="react-colorful__saturation-pointer"
          top={1 - hsva.v / 100}
          left={hsva.s / 100}
          color={hsvaToHslString(hsva)}
        />
      </Interactive> */}
    </Box>
  );
};

export const Saturation = React.memo(SaturationBase);