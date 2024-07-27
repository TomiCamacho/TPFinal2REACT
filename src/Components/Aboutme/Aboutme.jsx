// import React from 'react';
import { VacioLados } from '../VacioLados/VacioLados'
import { Box , Image , Text , Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import imgAboutme from '/aboutme.png'
import cv from '/cv.pdf'

const Aboutme = () => {
  return (
    <Box id='aboutme'
    display="flex"
    borderBottom="2px solid #d3d3d3"
    height="100vh"
    width="100%">
        <VacioLados/>
        <Box id='aboutme-info'
          width="90vw"
          borderLeft="1px solid #dbdbdb"
          borderRight="1px solid #dbdbdb"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          >
        <Image src={imgAboutme} alt="" id="aboutme-info-img" ml="5%" mt="15%" mb="40"/>
            <Box id="aboutme-info-texto"
              marginLeft="20px"
              marginTop="10px"
              marginBottom="0px"
              fontFamily="Inter, sans-serif"
              maxWidth="420px"
              >
              <Box id="seccion aboutme-info-texto-seccion"
                padding="12px 20px"
                backgroundColor="#1DBF73"
                borderRadius="50px"
                borderColor="none"
                fontSize="14px"
                color="white"
                fontWeight="500"
                textAlign="center"
                width="100px"
                >
                  <p>Sobre mí</p></Box>
              <Text id="aboutme-info-texto-h3"
                fontSize="50px"
                marginTop="25px"
                marginBottom="29px"
                color="rgb(46, 45, 45)"
                lineHeight="1.2"
                fontWeight={700}
              >Por qué elegirme para tu próximo proyecto</Text>
              <Text id="aboutme-info-texto-p"
                fontSize="17px"
                lineHeight="1.5"
                color="#5c5c5c"
                mb="35px"
              >Soy un apasionado Desarrollador Web Full Stack con experiencia en la creación de interfaces atractivas y funcionales. Mi enfoque se centra en el diseño limpio, la usabilidad y la optimización para una experiencia de usuario excepcional. Me encanta explorar nuevas tecnologías y estar al día con las últimas tendencias en desarrollo web.</Text>
              <a href={cv} download>
              <Button id="aboutme-info-texto-button"
              padding="30px 32px"
              backgroundColor="#FEC737"
              color="rgb(46, 45, 45)"
              boxShadow="5px 5px 0px 0px"
              fontFamily="Inter, sans-serif"
              fontSize="16px"
              fontWeight="600"
              borderWidth="0px"
              borderRadius="2px"
              position="relative"
              textDecoration="none"
              // mt="20px"
              as={motion.button}
              whileHover={{
                backgroundColor: 'rgb(44, 43, 43)',
                color: '#FEC737',
                boxShadow: '0 0 0 0',
                cursor: 'pointer',
                transform: 'translateX(5px)',
                transition: { duration: 0.2 }, // Duración de la animación en segundos
              }}
              >Descargar CV</Button>
              </a>
            </Box>
        </Box>
        <VacioLados/>
    </Box>
  )
}

export { Aboutme }