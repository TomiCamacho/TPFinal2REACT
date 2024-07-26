// import React from 'react';
import './Body.css'
import { Header } from '../Header/Header'
import { Hero } from '../Hero/Hero'
import { Empresas } from '../Empresas/Empresas'
import { Servicios } from '../Servicios/Servicios'
import { Proyectos } from '../Proyectos/Proyectos'
import { Testimonios } from '../Testimonios/Testimonios'
import { Contacto } from '../Contacto/Contacto'
import { Footer } from '../Footer/Footer'
import { Aboutme } from '../Aboutme/Aboutme'


const Body = () => {
  return (
    <Box m="0px" width="100vw">
      <Header/>
      <Hero/>
      <Empresas/>
      <Aboutme/>
      <Servicios/>
      <Proyectos/>
      <Testimonios/>
      <Contacto/>
      <Footer/>
    </Box>
  )
}

export { Body }