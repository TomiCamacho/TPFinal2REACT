import { VacioLados } from '../VacioLados/VacioLados'
import { Headerredes } from './Headerredes/Headerredes'
import { Box, Text, Button, Link } from '@chakra-ui/react'

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

  return (
    <Box id='header'
    display="flex"
    margin="0"
    height="15vh"
    alignItems="center"
    borderBottom="2px solid #d3d3d3"
    width="100%"
    >
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
            <Box id="header-menu"
                paddingRight="6vw"
                alignSelf="center"
            >
              <a href=""><img src="/menu.png" alt="" id="icon-menu"
              width="30px"
              />
              </a>
            </Box>
        </Box>

        <VacioLados/>
    </Box>
  )
}

export { Header }