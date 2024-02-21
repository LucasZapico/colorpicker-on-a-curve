import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'src/App.tsx'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from "src/theme/index";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
    <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
