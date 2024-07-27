// import React from 'react';
import { VacioLados } from '../VacioLados/VacioLados'
import { Box, Flex, Text, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import imgPortfolio from '/Imagen Portfolio.png'

const Hero = () => {

  

  return (
    <Flex
      borderBottom="2px solid #d3d3d3"
      width="100vw"
      height="75vh"
    >
      <VacioLados/>
      <Flex
        borderLeft="1px solid #dbdbdb"
        borderRight="1px solid #dbdbdb"
        width="90vw"
        justifyContent="space-between"
      >
        <Box id="hero-info-texto"
          pl='40px'
          mt='40px'
        >
          <Text id="hero-info-texto-title"
            fontFamily="Inter, sans-serif"
            fontSize="60px"
            color="rgb(46, 45, 45)"
            marginBottom="30px"
            fontWeight="700"
          >Desarrollador Web FULL STACK <br/> Tomás Camacho</Text>
          <Button id="button hero-info-texto-button"
          // padding="30px 32px"
          // backgroundColor="#FEC737"
          // color="rgb(46, 45, 45)"
          // boxShadow="5px 5px 0px 0px"
          // fontFamily="Inter, sans-serif"
          // fontSize="16px"
          // fontWeight="600"
          // borderWidth="0px"
          // borderRadius="2px"
          // position="relative"
          // textDecoration="none"
          // _hover={{
          //   backgroundColor: 'rgb(44, 43, 43)',
          //   color: '#FEC737',
          //   // boxShadow: 'rgb(31, 30, 30)',
          //   boxShadow:'0px 0px 0px 0px',
          //   cursor: 'pointer',
          //   transform: 'translateX(5px)',
          //   transition: '0.5s',
          // }}
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
          as={motion.button}
          whileHover={{
            backgroundColor: 'rgb(44, 43, 43)',
            color: '#FEC737',
            boxShadow: '0 0 0 0',
            cursor: 'pointer',
            transform: 'translateX(5px)',
            transition: { duration: 0.2 }, // Duración de la animación en segundos
          }}
          >Contáctame</Button>
        </Box>
        <Flex id="hero-info-img"
          borderLeft="1px solid #dbdbdb"
          padding="2vw"
          alignItems="center"
        >
          <img src={imgPortfolio} alt="" id="foto-retrato" width='685px'/>
        </Flex>
      </Flex>
      <VacioLados/>
    </Flex>
    

  )
}

export { Hero }