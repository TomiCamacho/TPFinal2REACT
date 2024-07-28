import { useState } from 'react'
import { VacioLados } from '../VacioLados/VacioLados'
import { Box, Text, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Contacto = () => {

  let [datos,setDatos]=useState({
    nombre:'',
    email:'',
    tel:'',
    msj:''
  })

  function manejarEnvioForm(e){
    e.preventDefault()
  }

  return (
    <Box id='contacto'
      w="100%"
      h="1000px"
      borderBottom="2px solid #d3d3d3"
      display="flex"
    >
      <VacioLados/>
      <Box id="contacto-info"
        w="90vw"
        h="100%"
        borderLeft="1px solid #dbdbdb"
        borderRight="1px solid #dbdbdb"
        fontFamily="Inter, Sans-serif"
        color="rgb(45,46,46)"
        display="flex"
        flexDirection="column"
        alignItems="center"    
        pt="75px"
      >
                <Box id="contacto-info-texto"
                  pt="4vh"
                  pb="3vh"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"    
                >
                    <Text id="contacto-titulo"
                      fontSize="40px"
                      mb="20px"  
                      fontWeight="700"  
                    >¿Estás interesado en trabajar conmigo?</Text>
                    <Text id="contacto-p"
                      fontSize="20px"
                      fontWeight="300"
                      mb="40px"
                    >Transformaré tu idea en un increíble diseño</Text>
                </Box>
                <Box id="contacto-formulario-contenedor"
                      border= "2px solid #d3d3d3"
                      borderRadius= "8px"
                      p= "45px 110px"
                      w="550px"
                      h="650px"
                      // alignItems="center"
                      // display="flex"
                      // flexDirection="column"
                      // justifyContent="center"
                >
                    <FormControl onSubmit={manejarEnvioForm} id="contacto-formulario"
                      display="flex"
                      flexDirection="column"
                    >
                        <FormLabel id="formulario-label"
                          mb="12px"
                          // fontWeight="500"
                        >Ingrese su nombre</FormLabel>
                        <Input type="text" placeholder="Ingrese su nombre*" value={datos.nombre} onChange={(e) => setDatos({ ...datos, nombre: e.target.value })} required id="formulario-input"
                        mb="35px"
                        border="2px solid #d3d3d3"
                        w="300px"
                        h="40px"
                        borderRadius="5px"
                        focusBorderColor="gray.400"
                        />
                        <FormLabel id="formulario-label"
                          mb="12px"
                        >Ingrese su correo electrónico</FormLabel>
                        <Input type="email" placeholder="Ingrese su correo electrónico*" value={datos.email} onChange={(e) => setDatos({ ...datos, email: e.target.value })} required id="formulario-input"
                        mb="35px"
                        border="2px solid #d3d3d3"
                        w="300px"
                        h="40px"
                        borderRadius="5px"
                        focusBorderColor="gray.400"
                        />
                        <FormLabel id="formulario-label"
                          mb="12px"
                        >Teléfono de contacto</FormLabel>
                        <Input type="text" placeholder="Ingrese su número de teléfono*" value={datos.tel} onChange={(e) => setDatos({ ...datos, tel: e.target.value })} required id="formulario-input"
                        mb="35px"
                        border="2px solid #d3d3d3"
                        w="300px"
                        h="40px"
                        borderRadius="5px"
                        focusBorderColor="gray.400"
                        />
                        <FormLabel id="formulario-label"
                          mb="12px"
                        >Déjame un mensaje (opcional)</FormLabel>
                        <Textarea rows="4" cols="50" value={datos.msj} onChange={(e) => setDatos({ ...datos, msj: e.target.value })} id="formulario-input formulario-mensaje"
                          mb="35px"
                          h="100px"
                          resize="none"
                          border="2px solid #d3d3d3"   
                          focusBorderColor="gray.400"
                        ></Textarea>
                        <Button type='submit' id="contacto-button"
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
                          w="170px"
                          alignSelf= "center"
                          as={motion.button}
                          whileHover={{
                          backgroundColor: 'rgb(44, 43, 43)',
                          color: '#FEC737',
                          boxShadow: '0 0 0 0',
                          cursor: 'pointer',
                          transform: 'translateX(5px)',
                          transition: { duration: 0.2 },
                          }}
                        >Enviar</Button>
                    </FormControl>
                </Box>
      </Box>
      <VacioLados/>  
    </Box>
  )
}

export { Contacto }