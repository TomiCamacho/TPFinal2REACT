import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Body } from './Components/Body/Body.jsx'
// import { Header } from './Components/Header/Header.jsx'
// import { Hero } from './Components/Hero/Hero.jsx'
// import { Empresas } from './Components/Empresas/Empresas.jsx'
// import { Aboutme } from './Components/Aboutme/Aboutme.jsx'
// import { Servicios } from './Components/Servicios/Servicios.jsx'
// import { Proyectos } from './Components/Proyectos/Proyectos.jsx'
// import { Testimonios } from './Components/Testimonios/Testimonios.jsx'
// import { Contacto } from './Components/Contacto/Contacto.jsx'
// import { Footer } from './Components/Footer/Footer.jsx'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Body/>
      {/* <Header/>
      <Hero/>
      <Empresas/>
      <Aboutme/>
      <Servicios/>
      <Proyectos/>
      <Testimonios/>
      <Contacto/>
      <Footer/> */}
    </ChakraProvider>
  </React.StrictMode>,
)
