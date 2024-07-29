import { VacioLados } from '../VacioLados/VacioLados'
import { Headerredes } from './Headerredes/Headerredes'
import { Box, Link, Button, Text, Image } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react';
import menuIMG from '/menu.png'
import facebookLogo from '/facebook.png'
import instagramBlack from '/instagramblack.png'
import behanceBlack from '/behanceblack.png'
import dribbbleBlack from '/dribbbleblack.png'
// import {
//     Menu,
//     MenuButton,
//     MenuList,
//     MenuItem,
//     MenuItemOption,
//     MenuGroup,
//     MenuOptionGroup,
//     MenuDivider,
//   } from '@chakra-ui/react'

const Header = () => {

    let redes = [
        {
            "nombre": "Dribbble",
            "logo": "/dribbble.png",
        },
        {
            "nombre": "Behance",
            "logo": "/behance.png",
        },
        {
            "nombre": "Instagram",
            "logo": "/instagram.png",
        }
    ]

        const [isOpen, setIsOpen] = useState(false);
      
        const toggleMenu = () => {
          setIsOpen(!isOpen);
        };

  return (
    <Box id='header'
    display="flex"
    margin="0"
    height="15vh"
    alignItems="center"
    borderBottom="2px solid #d3d3d3"
    width="100%"
    >
                <AnimatePresence>
            {isOpen && (
                <Box as={motion.div}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity: isOpen? 1 : 0}}
                    // backgroundImage="url('/bghovermenu.svg')"
                    // backgroundRepeat="no-repeat"
                    // backgroundPosition="center center"
                    // backgroundSize="cover"
                    bg="rgba(0, 0, 0, 0.9)"
                    // opacity="0.5"
                    position="fixed"
                    w="100%"
                    h="1500px"
                    zIndex="998"
                    >
                </Box>
            )}
        </AnimatePresence>
        <VacioLados/>
        
        <Box id='header-info'
            display="flex"
            justifyContent="space-between"
            width="90vw"
            height="100%"
            borderLeft="1px solid #dbdbdb"
            borderRight="1px solid #dbdbdb">
            <Box id="header-marca"
                padding="0 0 0 3vw"
                alignSelf="center">
                <Link href="" id="header-marca-letra"
                fontFamily="'Great Vibes', cursive"
                fontWeight="600"
                fontSize="27px"
                textDecoration="none"
                color="black"
                _hover={{
                    textDecoration:'none'
                }}
                >Tomás Camacho</Link>
            </Box>
            <Box id='header-redes'
                alignItems="center"
                display="flex"
            >
                {redes.map(elemento=><Headerredes nombre={elemento.nombre} img={elemento.logo}/>)}
            </Box>
            {/* <Box id="header-menu"
                paddingRight="6vw"
                alignSelf="center"
            >
              <a href=""><img src="/menu.png" alt="" id="icon-menu"
              width="30px"
              />
              </a>
            </Box> */}
            {/* <Box
                id="header-menu"
                paddingRight="6vw"
                alignSelf="center"
            >
                <Menu>
                    <MenuButton as={motion.button}>
                        <Image src="/menu.png" id="icon-menu"
                            width="30px"
                        ></Image>
                    </MenuButton>
                    <MenuList
                      height="100vh"
                      bg="black"
                      opacity="0.8"
                      borderRadius="5px"
                      boxShadow="md"      
                    >
                        <MenuItem
                          bg="black"
                          opacity="0.8"
                          color="white"
                          borderRadius="5px"
                          boxShadow="md">Sobre mí</MenuItem>
                        <MenuItem>Servicios</MenuItem>
                        <MenuItem>Proyectos</MenuItem>
                        <MenuItem>Testimonios</MenuItem>
                        <MenuItem>Contacto</MenuItem>
                    </MenuList>
                </Menu>
            </Box> */}



    {/* <Box */}
    {/*    position="fixed"
       top="0"
       right="0"
       height="100vh"
       width="200px"
       bg="black"
       opacity="0.8"
       display="flex"
       alignItems="center"
       justifyContent="center"
       zIndex="999"
     > */}
      {/* <Box as={motion.div}
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: isOpen ? 0 : 200, opacity: isOpen ? 1 : 0 }}
        exit={{ x: 200, opacity: 0 }}
      > */}
        <Box as={Button} onClick={toggleMenu}
            mr="5vw"
            alignSelf="center"
            p="0"
            colorScheme='white'
            >
            <Image src={menuIMG}
                w="35px"
            ></Image>
        </Box>
        <AnimatePresence>
          {isOpen && (
            <Box as={motion.div}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: isOpen ? 0 : 200, opacity: isOpen ? 1 : 0 }}
            exit={{ x: 200, opacity: 0 }}
                  position="fixed"
                  top="0"
                  right="0"
                  height="100vh"
                  width="400px"
                  bg="white"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                //   justifyContent="space-between"
                  zIndex="999"
          >
            <Button onClick={toggleMenu}
                mt="15px"
                alignSelf="end"
                colorScheme='white'
                bg="none"
                m='20px'
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" color='black'>
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </Button>
            <Text
                fontFamily="'Great Vibes', cursive"
                fontWeight="600"
                fontSize="27px"
                textDecoration="none"
                color="black"
                cursor="default"
                mt="45px"
            >Tomás Camacho</Text>
            <Box as={motion.ul}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              mt="80px"
              listStyleType="none"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <li>
                <Link 
                    // as={motion.a}
                    href='#aboutme'
                    onClick={toggleMenu}
                    _hover={{
                        textDecoration:'none'
                    }}
                    // whileHover={{
                    //     textDecoration:"none"
                    // }}
                ><Text
                color="rgba(46,45,45)"
                fontSize="25px"
                fontWeight="600"
                fontStyle="Inter, sans serif"
                mb="14px"
                as={motion.p}
                whileHover={{
                    // fontWeight:'690',
                    scale:1.1,
                    transition:{duration: 0.2},
                    color:'#FEC737'
                }}
                // whileTap={{
                //     scale:1
                // }}
                >Sobre mí</Text></Link>
                </li>
                <li>
                <Link
                    href='#servicios'
                    onClick={toggleMenu}
                    _hover={{
                        textDecoration:'none'
                    }}
                ><Text
                color="rgba(46,45,45)"
                fontSize="25px"
                fontWeight="600"
                fontStyle="Inter, sans serif"
                mb="14px"
                as={motion.p}
                whileHover={{
                    // fontWeight:'690',
                    scale:1.1,
                    transition:{duration: 0.2},
                    color:'#FEC737'
                }}
                >Servicios</Text>
                </Link>
                </li>
              <li>
                <Link
                    href='#proyectos'
                    onClick={toggleMenu}
                    _hover={{
                        textDecoration:'none'
                    }}
                ><Text
                color="rgba(46,45,45)"
                fontSize="25px"
                fontWeight="600"
                fontStyle="Inter, sans serif"
                mb="14px"
                as={motion.p}
                whileHover={{
                    // fontWeight:'690',
                    scale:1.1,
                    transition:{duration: 0.2},
                    color:'#FEC737'
                }}
                >Mis proyectos</Text></Link></li>
              <li>
                <Link
                    href='#testimonios'
                    onClick={toggleMenu}
                    _hover={{
                        textDecoration:'none'
                    }}
                ><Text
                color="rgba(46,45,45)"
                fontSize="25px"
                fontWeight="600"
                fontStyle="Inter, sans serif"
                mb="14px"
                as={motion.p}
                whileHover={{
                    // fontWeight:'690',
                    scale:1.1,
                    transition:{duration: 0.2},
                    color:'#FEC737'
                }}
                >Testimonios</Text></Link></li>
              <li>
                <Link
                    href='#contacto'
                    onClick={toggleMenu}
                    _hover={{
                        textDecoration:'none'
                    }}
                ><Text
                color="rgba(46,45,45)"
                fontSize="25px"
                fontWeight="600"
                fontStyle="Inter, sans serif"
                as={motion.p}
                whileHover={{
                    // fontWeight:'690',
                    scale:1.1,
                    transition:{duration: 0.2},
                    color:'#FEC737'
                }}
                >Contacto</Text></Link></li>
            </Box>
            <Box id="menu-redes"
                      display="flex"
                      mt="90px"
                    >
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
                </Box>
            )}            
        </AnimatePresence>

      </Box>
    {/* </Box> */}

    {/* </Box> */}

        <VacioLados/>
    </Box>
  )
}



export { Header }