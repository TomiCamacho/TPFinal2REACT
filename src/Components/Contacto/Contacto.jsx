import { useState } from 'react'
import { VacioLados } from '../VacioLados/VacioLados'
import { Box, Text, Flex, Button, FormControl, FormLabel, Input, Textarea, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Formik, Form, ErrorMessage, Field , useFormik} from 'formik'
import * as Yup from 'yup'
// import { useHistory } from 'react-router-dom'
// import { Submit } from '../Submit/Submit'

// const validationSchema = Yup.object().shape({
//   nombre:Yup
//     .string()
//     .required('Este campo es obligatorio.')
//     .min(2,'El nombre debe contener por lo menos 2 caracteres.')
//     .matches(/^[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]+$/, 'Sólo se permiten letras y espacios.')
//     ,
//   email:Yup
//     .string()
//     .required('Este campo es obligatorio')
//     .email('Debes ingresar un correo electrónico válido.')
//     ,
//   tel:Yup
//     .number()
//     .typeError('Debes ingresar un número de teléfono válido.')
//     .required('Este campo es obligatorio.'),
//   msj:Yup
//     .string()
// });



const Contacto = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  // let [datos,setDatos]=useState({
  //   nombre:'',
  //   email:'',
  //   tel:'',
  //   msj:''
  // })

  // function manejarEnvioForm(e){
  //   e.preventDefault()
  // }

  // const handleSubmit = async (values
  //   , { setSubmitting }
  // ) => {
  //   try {
  //     // Validación de campos con Yup
  //     await validationSchema.validate(values);
  //     // No hay errores, redirige al usuario a otra dirección
  //     window.location.href = 'https://www.youtube.com/watch?v=e2oyXGuCWDc&list=PLyY0wLIlEB8xJW9rT2UyD9jUJPu6XxYJU&index=7';
  //   } catch (error) {
  //     // Hay errores, no se envía el formulario
  //     console.error('Error de validación:', error);
  //   }
  //   setSubmitting(false);

  //   // window.location.href = 'https://www.youtube.com/watch?v=e2oyXGuCWDc&list=PLyY0wLIlEB8xJW9rT2UyD9jUJPu6XxYJU&index=7';

  // };

  // const handleSubmit{}

// console.log(errors)

  // const [formEnviado, setformEnviado] = useState(false);


  // const formik = useFormik({

  // })

  // const history=useHistory();

  const handleSubmit=()=>{
    // window.location.href = 'https://www.youtube.com/watch?v=e2oyXGuCWDc&list=PLyY0wLIlEB8xJW9rT2UyD9jUJPu6XxYJU&index=7';
    // history.push('../Submit/Submit');
    onOpen();
  }

  return (
    <Box id='contacto'
      w="100%"
      h={['1200px','1200px','1090px']}
      borderBottom="2px solid #d3d3d3"
      display='flex'
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
        pt={["45px","45px","45px","75px"]}
      >
                <Box id="contacto-info-texto"
                  pt="4vh"
                  pb="3vh"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"    
                >
                    <Text id="contacto-titulo"
                      fontSize={["36px","36px","36px","40px"]}
                      mb="20px"  
                      fontWeight="700"
                      // bg='yellow'
                      w={['85%','85%','85%','85%','100%']}
                      textAlign='center'
                    >¿Estás interesado en trabajar conmigo?</Text>
        
                    <Text id="contacto-p"
                      fontSize="20px"
                      fontWeight="300"
                      mb="40px"
                      w={['252px','252px','336px']}
                    >Transformaré tu idea en un increíble diseño.</Text>
                </Box>
                <Box id="contacto-formulario-contenedor"
                      border= "2px solid #d3d3d3"
                      borderRadius= "8px"
                      p= {["0px 20px","0px 20px","0px 35px","0px 110px"]}
                      w={["250px","250px","380px","550px"]}
                      h="680px"
                      alignItems="center"
                      display="flex"
                      // flexDirection="column"
                      // justifyContent="center"
                >
                  <Formik initialValues={{
                    nombre:'',
                    email:'',
                    tel:'',
                    msj:''
                  }}

                  validationSchema={Yup.object({
                    nombre:Yup
                      .string()
                      .required('Este campo es obligatorio.')
                      .min(2,'El nombre debe contener por lo menos 2 caracteres.')
                      .matches(/^[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]+$/, 'Sólo se permiten letras y espacios.')
                      ,
                    email:Yup
                      .string()
                      .required('Este campo es obligatorio')
                      .email('Debes ingresar un correo electrónico válido.')
                      ,
                    tel:Yup
                      .number()
                      .typeError('Debes ingresar un número de teléfono válido.')
                      .required('Este campo es obligatorio.')
                      .min(100000,'Debes ingresar un número de teléfono válido.'),
                    msj:Yup
                      .string()
                  })}


                  onSubmit={(values)=>{
                    console.log(values)
                    handleSubmit()
                    // setformEnviado(true);  
                  }}
                  >
                    {({
                      values, errors, handleChange, handleSubmit, isSubmitting, touched, isValid, dirty, getFieldProps
                    })=>(
                    <Form  id="contacto-formulario"
                      // display="flex"
                      // flexDirection="column"
                      // alignItems="spaceBetween"
                    >

                      <Box id='formulario-contenedor'
                        display='flex'
                        flexDirection='column'
                        position='relative'
                        // justifyContent='space-around'
                        // bg='yellow'
                        h='590px'
                        // alignItems={['center','normal','normal']}
                      >
                        <Box id='formulario-campo-nombre'
                        // mb='35px'
                        // mt={errors.nombre?'35px':'59px'}
                        // pb={errors.nombre?'11px':'35px'}
                        // h={errors.nombre?'100px':'76px'}
                        h='115px'
                        // bg='red'
                        >
                          <FormLabel id="formulario-label" htmlFor='nombre'
                            mb="12px"
                            // fontWeight="500"
                          >Ingrese su nombre</FormLabel>
                          <Field name="nombre">
                          {({ field }) => (
                            <Input {...field} type="text" placeholder="Ingrese su nombre*" name='nombre' value={values.nombre} onChange={handleChange} required id="formulario-input"
                            // mb="35px"
                            border="2px solid #d3d3d3"
                            w={['200px',"200px","300px"]}
                            h="40px"
                            borderRadius="5px"
                            // focusBorderColor="gray.400"
                            maxLength="80"
                            focusBorderColor={(errors.nombre) ? 'red.400':'gray.400'}
                            />
                          )}</Field>
                          {/* <ErrorMessage name="nombre" component="div" /> */}
                          { touched.nombre && errors.nombre && (
                          <Box color='red.500' m='0px 0px' position='absolute'>{errors.nombre}</Box>)
                         }
                        </Box>
                        <Box id='formulario-campo-email'
                        // pb={errors.email?'11px':'35px'}
                        // mt={errors.email?'35px':'59px'}
                        // h={errors.email?'100px':'76px'}
                        h={['139px','139px','115px']}
                        >
                          <FormLabel id="formulario-label" htmlFor='email'
                            mb="12px"
                          >Ingrese su correo electrónico</FormLabel>
                          <Field name="nombre">
                          {({ field }) => (
                            <Input {...field} type="email" placeholder="Ingrese su correo electrónico*" name='email' value={values.email} onChange={handleChange} required id="formulario-input"
                            // mb="35px"
                            border="2px solid #d3d3d3"
                            w={["200px","200px","300px"]}
                            h='40px'
                            borderRadius="5px"
                            // focusBorderColor="gray.400"
                            maxLength="100"
                            focusBorderColor={(errors.email) ? 'red.400':'gray.400'}
                            />
                          )}</Field>
                          {/* <ErrorMessage name="nombre" component="div" /> */}
                          { touched.email && errors.email && (
                          <Box color='red.500'>{errors.email}</Box>)
                         }
                        </Box>
                        <Box id='formulario-campo-tel'
                          // pb={errors.tel?'11px':'35px'}
                          // mt={errors.tel?'35px':'59px'}
                        // h={errors.tel?'100px':'76px'}
                        h='115px'
                          // bg='green'
                        >
                          <FormLabel id="formulario-label" htmlFor='tel'
                            mb="12px"
                          >Teléfono de contacto</FormLabel>
                          <Field name="nombre"
                          >
                          {({ field }) => (
                            <Input {...field} type="tel" placeholder="Ingrese su número de teléfono*" name='tel' value={values.tel} onChange={handleChange} required id="formulario-input"
                            // mb="35px"
                            border="2px solid #d3d3d3"
                            w={["200px","200px","300px"]}
                            h="40px"
                            borderRadius="5px"
                            // focusBorderColor="gray.400"
                            maxLength="25"
                            focusBorderColor={(errors.tel) ? 'red.400':'gray.400'}
                            />
                          )}</Field>
                          {/* <ErrorMessage name="nombre" component="div" /> */}
                          { touched.tel && errors.tel && (
                          <Box color='red.500' m='0'>{errors.tel}</Box>)
                         }
                        </Box>
                        <Box id='formulario-campo-msj'
                        h='185px'
                        >
                          <FormLabel id="formulario-label" htmlFor='msj'
                            mb="12px"
                          >Déjame un mensaje (opcional)</FormLabel>
                          <Textarea rows="4" cols="50"  name='msj' value={values.msj} onChange={handleChange} id="formulario-input formulario-mensaje"
                            // mb="35px"
                            h="100px"
                            // w={['230px','230px','320px']}
                            resize="none"
                            border="2px solid #d3d3d3"   
                            focusBorderColor="gray.400"
                            maxLength="300"
                          ></Textarea>
                        </Box>
                        <Button type='submit' id="contacto-button"
                          // disabled={!(isValid && dirty)}
                          // disabled={props.isSubmitting}
                          // disabled={isSubmitting || !isValid}
                          alignSelf="center"
                          // ml="75px"
                          padding="30px 32px"
                          backgroundColor="#FEC737"
                          color="rgb(46, 45, 45)"
                          boxShadow="5px 5px 0px 0px"
                          fontFamily="Inter, sans-serif"
                          fontSize="16px"
                          fontWeight="600"
                          borderWidth="0px"
                          borderRadius="2px"
                          // position="relative"
                          textDecoration="none"
                          w="170px"
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
                      </Box></Form>
                    )}
                    </Formik>
                </Box>
                <Box>
                  <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader alignSelf='center'>¡Gracias por comunicarte conmigo!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <p>En breve me pondré en contacto contigo para comenzar a trabajar juntos.</p>
                    </ModalBody>

                    <ModalFooter>
                      <Button as={motion.button} bg='#FEC737' mr={3} onClick={onClose}
                      // p="0px 0px"
                      whileHover={{
                        backgroundColor:"rgb(46,45,45)",
                        color:'#FEC737',
                        transition: { duration: 0.1 },
                      }}
                      >
                        Volver
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
    </Box>
      </Box>
      <VacioLados/>  
    </Box>
  )
}

export { Contacto }