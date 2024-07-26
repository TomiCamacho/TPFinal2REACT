import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Body } from './Components/Body/Body.jsx'
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Body/>
    </ChakraProvider>
  </React.StrictMode>,
)
