// import React from 'react';
import { VacioLados } from '../VacioLados/VacioLados'
import { Box, Flex, Text, Button, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import imgPortfolio from '/Imagen Portfolio.png'
import { useTheme } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'
// import {theme} from '../theme.js'

const Hero = () => {

  const handleButtonClick = () => {
    const aboutSection = document.getElementById('contacto');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

    // const theme = useTheme();

    // const theme = extendTheme({ breakpoints })

  // const breakpoints = ['0em', '20em', '30em', '48em', '64em', '80em', '90em', '120em']

    // const theme = extendTheme({

      // const breakpoints
      // : {
      // =
          // base: '0em', // 0px
          // sm: '20em', // ~320px
          // md: '30em', // ~480px
          // lg: '48em', // ~768px
          // xl: '64em', // ~1024px
          // '2xl': '80em', // ~1280px
          // '3xl': '90em', // ~1440px
          // '4xl': '120em', // ~1920px
      
      // ['0em', '20em', '30em', '48em', '64em', '80em', '90em', '120em']
        // breakpoints
      // },
      // });

  return (
    <Flex
      borderBottom="2px solid #d3d3d3"
      width="100%"
      height={["65vh",'65vh','75vh']}
    >
      <VacioLados/>
      <Flex
        borderLeft="1px solid #dbdbdb"
        borderRight="1px solid #dbdbdb"
        width="90vw"
        justifyContent="space-between"
      >
        <Box id="hero-info-texto"
          pl={['27px','27px','40px']}
          mt={['90px','90px','90px','130px', '90px']}
        >
          <Text id="hero-info-texto-title"
            fontFamily="Inter, sans-serif"
            fontSize={['50px','35px','50px','50px','50px',"60px"]}
            color="rgb(46, 45, 45)"
            marginBottom="30px"
            fontWeight="700"
            lineHeight="1.3"
          >Desarrollador Web FULL STACK <br/> Tomás Camacho</Text>
          {/* // padding="30px 32px"
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
            backgroundColor: 'rgb(44, 43, 43)',
            color: '#FEC737',
            boxShadow: 'rgb(31, 30, 30)',
            boxShadow:'0px 0px 0px 0px',
            cursor: 'pointer',
            transform: 'translateX(5px)',
            transition: '0.5s',
          }} */}
            <Button
              as={motion.button}
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
              onClick={handleButtonClick}
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
          pl={['60px','60px','60px','60px', '60px','2vw','2vw','2vw']}
          pt={['65px','65px','65px','65px','65px','2vw','2vw','2vw',]}
          pb={['40px','40px','40px','40px','40px','2vw','2vw','2vw']}
          alignItems="center"
          display={['none','none','none','none','flex']}
        >
          <Image src={imgPortfolio} alt="" id="foto-retrato" width={['0','0','0','0','685px','685px','685px','530px']}/>
        </Flex>
      </Flex>
      <VacioLados/>
    </Flex>
    

  )
}

export { Hero }