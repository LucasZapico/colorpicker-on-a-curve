import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/App";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "src/theme";

const AppWrapper = () => {
  
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
      <App />
    </ChakraProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
