// import React from 'react';
import { VacioLados } from '../VacioLados/VacioLados'
import { Box, Text, Link, Image } from '@chakra-ui/react'
import facebookLogo from '/facebook.png'
import instagramBlack from '/instagramblack.png'
import behanceBlack from '/behanceblack.png'
import dribbbleBlack from '/dribbbleblack.png'
import phoneCall from '/phone-call.png'
import emailLogo from '/email.png'

const Footer = () => {
  return (
    <Box id='footer'
        h="25vh"
        w="100%"
        display="flex"
    >
        <VacioLados/>
        <Box id="footer-info"
          w="90vw"
          h="100%"
          borderLeft="1px solid #dbdbdb"
          borderRight="1px solid #dbdbdb"
          fontFamily="Inter, Sans-serif"
          color="rbg(45,46,46)"
          display="flex"
          flexDirection="column"
        >
                <Box id="footer-linea1"
                  display="flex"
                  justifyContent="space-around"
                  padding="2vh 3vw"
                  fontSize="21px"
                  fontWeight="500"
                  borderBottom="1px solid #dbdbdb"
                >
                    <Box id="footer-linea1-redes"
                      display="flex"
                    >
                        <Text id="footer-linea1-redes-p">Mis redes:</Text>
                        <Link href=""><Image src={facebookLogo} alt=""  id="footer-redes-icon"
                          w="30px"
                          m="0px 0.7vw"
                        //   pt="2vh"
                        /></Link>
                        <Link href=""><Image src={instagramBlack} alt=""  id="footer-redes-icon"
                          w="30px"
                          m="0px 0.7vw"
                        //   pt="2vh"                        
                        /></Link>
                        <Link href=""><Image src={behanceBlack} alt=""  id="footer-redes-icon"
                          w="30px"
                          m="0px 0.7vw"
                        //   pt="2vh"
                        /></Link>
                        <Link href=""><Image src={dribbbleBlack} alt=""  id="footer-redes-icon"
                          w="30px"
                          m="0px 0.7vw"
                        //   pt="2vh"
                        /></Link>
                    </Box>
                    <Box id="footer-linea1-tel"
                      display="flex"
                    >
                        <Link href=""><Image src={phoneCall} alt="" id="footer-redes-icon"
                            w="30px" 
                            mr="0.7vw"
                        /></Link>
                        <Text id="footer-linea1-redes-tel">+54 2615993109</Text>
                    </Box>
                    <Box id="footer-linea1-correo"
                      display="flex"
                    >
                        <Link href=""><Image src={emailLogo} alt="" id="footer-redes-icon"
                        w="30px"
                        mr="0.7vw"
                        /></Link>
                        <Text id="footer-linea1-redes-email">tomycamacho3004@gmail.com</Text>
                    </Box>
                </Box>
                <Box id="footer-linea2"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  h="100%"
                  margin="1vh 0px"
                >
                    <Text id="footer-linea2-p">Copyright 2024 Tomás Camacho   |   Todos los derechos reservados.</Text>
                </Box>
            </Box>
        <VacioLados/>
    </Box>
  )
}

export { Footer }