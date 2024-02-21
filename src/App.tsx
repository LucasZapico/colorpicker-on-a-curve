import {
  Box,
  Container,
  Heading,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { HexColorPicker } from "components/index";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box backgroundColor={colorMode === "dark" ? "black" : "white"}>
      <Container>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
        <Heading>Color Picker</Heading>
        <HexColorPicker />
      </Container>
    </Box>
  );
}

export default App;
