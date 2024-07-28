// import React from 'react';
import { Box, Link, Text, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import nextIcon from '/next.png'

const ProyectosBloque = ({img,p}) => {
  return (
    <Box id="proyectos-bloque"
    padding="3vh 2.5vw"
    >
        <Link href="" id="proyectos-bloque-img-a"
        cursor="pointer"
          ><Image src={img} alt="" id="proyectos-img"
          width="300px"
          height="300px"
          borderRadius="5px"
          as={motion.img}
          whileHover={{
            width:"350px",
            height:"350px"
          }}
          />
        </Link>
        <Text id="proyectos-bloque-p"
          fontSize="20px"
          fontWeight="600"
          maxWidth="310px"
          mt="19px"
        >{p}</Text>
        <Box
        display="flex"
        mt="10px"
        >
        <Link href="" id="proyectos-bloque-a"
          color="rgb(46,45,45)"
          textDecoration="underline"
          textUnderlineOffset="3.5px"
        >
            Ver proyecto
        </Link>
        <Link href="">
        <Image src={nextIcon} alt="" id="proyectos-flechas"
          width="18px"
          color="#FEC737"
          paddingLeft="5px"
          paddingTop="6px"
        />
        </Link>
        </Box>
    </Box>
  )
}

export { ProyectosBloque }