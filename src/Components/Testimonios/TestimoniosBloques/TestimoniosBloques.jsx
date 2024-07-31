import { Box, Text, Image } from '@chakra-ui/react'

const TestimoniosBloques = ({title,msj,img,nombre,ocupacion}) => {
  return (
    <Box id="testimonios-carrusel-bloques"
      border="1px solid #d3d3d3"
      borderRadius="6px"
      width={["240px","240px","350px","500px","400px","500px",]}
      padding="30px"
      mt="50px"
      
    >
        <Text id="carrusel-bloques-title"
        fontSize={["22px","22px","25px"]}
        fontWeight="700"
        >{title}</Text>
        <Text id="carrusel-bloques-msj"
        fontSize="16px"
        mt="15px"
        fontWeight="350"
        >{msj}</Text>
        <Box id="carrusel-bloques-persona"
        display="flex"
        >
            <Image src={img}
            width="75px"
            mt="25px"
            mb="10px"
            />
            <Box
              mt="18px"
              ml="12px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              // bg="red"
              alignSelf="center"
              height="50px"
            >
              <Text id="carrusel-bloques-persona-nombre"
                fontWeight="700"
              >{nombre}</Text>
              <Text id="carrusel-bloques-persona-ocupacion"
                fontWeight="350"
              >{ocupacion}</Text>
            </Box>

        </Box>
    </Box>
  )
}

export { TestimoniosBloques }