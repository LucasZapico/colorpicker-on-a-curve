import { Container, Heading, Box, Text, Link } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <Heading size="lg">WIP: Color Picker on a curve</Heading>
        <Text>This project is temp on hold as it was a little bigger then the few hours I allotted. </Text>
        <Text>This was apparent when digging through the <Link href="https://github.com/omgovich/react-colorful">React colorful repo</Link></Text>
      </Container>
    </Box>
  );
}

export default App;
