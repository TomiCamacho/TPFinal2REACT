// import React from 'react';
import { VacioLados } from '../VacioLados/VacioLados'
import { ProyectosBloque } from './ProyectosBloque/ProyectosBloque'
import { Box, Text } from '@chakra-ui/react'

const Proyectos = () => {

  let proyectos = [

    {
      "p": "Cryptomonedas | Landing Page",
      "img": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/1b9ae5200110667.665d68f4ae2a2.png"
    },
    {
      "p":"Charge Mate | App Mobile",
      "img":"https://mir-s3-cdn-cf.behance.net/project_modules/1400/6794d2190597951.65bd294b3c0bc.png"
    },
    {
      "p":"Escuela de Manejo | Landing Page",
      "img":"https://mir-s3-cdn-cf.behance.net/project_modules/disp/f7ef00200191825.665e97dac44b1.png"
    },
    {
      "p":"Restaurante | Sitio Web",
      "img":"https://mir-s3-cdn-cf.behance.net/project_modules/1400/d29d1e200024597.665b5d794246b.png"
    },
    {
      "p":"E-Commerce | Sitio Web",
      "img":"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7f0ea197938237.663918cbd2063.png"
    },
    {
      "p":"Portfolio de fotógrafo | Landing Page",
      "img":"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/62a860191746029.65d0bb7cf4120.png"
    }
  ]

  return (
    <Box id="proyectos"
    display="flex"
    height="1400px"
    width="100%"
    alignItems="center"
    borderBottom="2px solid #d3d3d3"
    >
        <VacioLados/>
        <Box id="proyectos-info"
          height="100%"
          width="90%"
          borderLeft="1px solid #dbdbdb"
          borderRight="1px solid #dbdbdb"
          fontFamily="Inter, Sans-serif"
          color="rgb(46, 45, 45)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          pt="70px"
        >
            <Text id="proyectos-info-seccion"
              padding="12px 20px"
              backgroundColor="#1DBF73"
              borderRadius="50px"
              borderColor="none"
              fontSize="14px"
              color="white"
              fontWeight="500"
              textAlign="center"
              width="120px"
            >Proyectos</Text>
            <Text id="proyectos-info-titulo"
              padding="7vh 0"
              borderBottom="1px solid #dbdbdb"
              width="90vw"
              textAlign="center"
              fontSize="45px"
              fontWeight="700"
            >Mis anteriores proyectos</Text>
            <Box id="proyectos-info-contenedora"
              display="flex"
              flexWrap="wrap"
              width="90vw"
              paddingTop="3vh"
              height="75%"
              justifyContent="center"
            >
              {proyectos.map(elemento=><ProyectosBloque p={elemento.p} img={elemento.img}/>)}
            </Box>
        </Box>
        <VacioLados/>
    </Box>
  )
}

export { Proyectos }