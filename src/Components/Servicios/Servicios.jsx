// import React from 'react';
import { VacioLados } from '../VacioLados/VacioLados'
import { Box, Text, Button, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import servicioWebDesign from '/web-design.png'
import servicioGestionDeDatos from '/gestiondedatos.png'
import servicioUxui from '/uxui.png'

const Servicios = () => {

  const textVariants= {
        hover:{
            backgroundColor:"rgb(44, 43, 43)",
            color: "white",
            boxShadow: "0 0 0 0 rgb(31, 30, 30)",
            cursor: "pointer",
            // animation: "presionarboton 0.5s forwards",
            transform: 'translateX(5px)',
            // x:"5",
            transition: { duration: 0.2 },
        },
  }

  const bloqueVariants= {
    hover:{
        backgroundColor: '#FEC737',
        boxShadow: '10px 10px 0px 0px',
        cursor: 'pointer',
        transition:{duration:0.2},
    }
  }

  return (
    <Box id="servicios"
    display="flex"
    borderBottom="2px solid #d3d3d3"
    height="100vh"
    width="100%"
    >
        <VacioLados/>
        <Box id="servicios-info"
          width="90vw"
          height="100%"
          borderLeft="1px solid #dbdbdb"
          borderRight="1px solid #dbdbdb"
          display="flex"
          justifyContent="center"
          fontFamily="Inter, sans-serif"
          color="rgb(46, 45, 45)"
          alignItems="center"
        >
        <Box id="servicios-info-info"
        width="100%"
        height="90%"
        marginTop="5px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        >
            <Box id="seccion servicios-info-info-seccion"
                padding="12px 20px"
                backgroundColor="#1DBF73"
                borderRadius="50px"
                borderColor="none"
                fontSize="14px"
                color="white"
                fontWeight="500"
                textAlign="center"
                width="120px"
            ><p>Servicios</p></Box>
            <Text id="servicios-info-info-texto"
              textAlign="center"
              fontSize="40px"
              color="rgb(46, 45, 45)"
              marginTop="25px"
              fontWeight="700"
            >Puedo ayudarte con:</Text>
            <Box id="servicios-info-info-contenedora"
              backgroundImage="url('/background.svg')"
              backgroundRepeat="no-repeat"
              backgroundPosition="center center"
              backgroundSize="cover"
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
              height="65%"
              mt="30px"
              padding="0px 20px"
              width="80%"
              alignItems="center"
            >
                <Button id="servicios-bloques"
                  padding="5px 0vw"
                //   display="flex"
                  flexDirection="column"
                  border="1px solid #d3d3d3"
                  borderRadius="8px"
                  backgroundColor="white"
                  margin="20px 20px"
                  height="390px"
                  width="300px"
                  alignItems="center"
                  justifyContent="normal"
                  as={motion.button}
                  whileHover="hover"
                  variants={bloqueVariants}
                //   {{

                //     backgroundColor: '#FEC737',
                //     boxShadow: '10px 10px 0px 0px',
                //     cursor: 'pointer',
                //     transition:{duration:0.2},
                //   }}
                >
                    <Text id="servicios-bloques-nombre"
                      fontSize="25px"
                      color="rgb(46, 45, 45)"
                      fontWeight="600"
                      fontFamily="Inter, sans-serif"
                      mt="52px"
                      mb="35px"
                    //   bg="green"
                    >Diseño Web</Text>
                    <Image src={servicioWebDesign} alt="" id="servicios-bloques-logo logo-disenioweb" width="128px" 
                    // bg="red"
                    pb="17px"
                    // mt="9"
                    />
                    <Text id="servicios-button button-disenioweb"
                      variants={textVariants}
                    padding="16px 32px"
                    mt="40px"
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
                    as={motion.p}
                    // whileHover={{
                    //     backgroundColor: 'rgb(44, 43, 43)',
                    // }}
                    >Leer más</Text>
                </Button>
                <Button id="servicios-bloques bloque-gestiondedatos"
                  padding="5px 0vw"
                  display="flex"
                  flexDirection="column"
                  border="1px solid #d3d3d3"
                  borderRadius="8px"
                  backgroundColor="white"
                  margin="20px 20px"
                  height="390px"
                  width="300px"
                  alignItems="center"
                  justifyContent="normal"
                  as={motion.button}
                  variants={bloqueVariants}
                  whileHover="hover"
                //   {{
                //     backgroundColor: '#FEC737',
                //     boxShadow: '10px 10px 0px 0px',
                //     cursor: 'pointer',
                //     transition:{duration:0.2},
                //   }}
                >
                    <Text id="servicios-bloques-nombre nombre-gestion"
                      fontSize="25px"
                      color="rgb(46, 45, 45)"
                      fontWeight="600"
                      fontFamily="Inter, sans-serif"
                    //   marginBottom="1vh"
                      mb="30px"
                    mt="52px"
                    >Gestión de Datos</Text>
                    <Image src={servicioGestionDeDatos} alt="" id="servicios-bloques-logo logo-gestion" width="150px" 
                    // padding="30px 0vw" 
                    // paddingBottom="0px"
                    // bg='red'
                    />
                    <Text id="servicios-button button-gestiondedatos"
                    padding="16px 32px"
                    mt="40px"
                    backgroundColor="#1DBF73"
                    color="rgb(46, 45, 45)"
                    boxShadow="5px 5px 0px 0px"
                    fontFamily="Inter, sans-serif"
                    fontSize="16px"
                    fontWeight="600"
                    borderWidth="0px"
                    borderRadius="2px"
                    position="relative"
                    textDecoration="none"
                    as={motion.p}
                    variants={textVariants}
                    >Leer más</Text>
                </Button>
                <Button id="servicios-bloques"
                  padding="5px 0vw"
                  display="flex"
                  flexDirection="column"
                  border="1px solid #d3d3d3"
                  borderRadius="8px"
                  backgroundColor="white"
                  margin="20px 20px"
                  height="390px"
                  width="300px"
                  alignItems="center"
                  justifyContent="normal"
                  as={motion.button}
                  variants={bloqueVariants}
                  whileHover="hover"
                //   {{
                //     backgroundColor: '#FEC737',
                //     boxShadow: '10px 10px 0px 0px',
                //     cursor: 'pointer',
                //     transition:{duration:0.2},
                //   }}
                >
                    <Text id="servicios-bloques-nombre"
                      fontSize="25px"
                      color="rgb(46, 45, 45)"
                      fontWeight="600"
                      fontFamily="Inter, sans-serif"
                      mb="35px"
                      mt="52px"
                    >Diseño UX/UI</Text>
                    <Image src={servicioUxui} alt="" id="servicios-bloques-logo logo-uxui"
                    // bg="red"
                    pb="17px"
                    />
                    <Text id="servicios-button button-uxui"
                    padding="16px 32px"
                    mt="40px"
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
                    as={motion.p}
                    variants={textVariants}
                    >Leer más</Text>
                </Button>
            </Box>
        </Box>
        </Box>

        <VacioLados/>
    </Box>
  )
}

export { Servicios }