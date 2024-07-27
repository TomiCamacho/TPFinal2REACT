
import {Flex, Image, Link} from '@chakra-ui/react'

const Headerredes = ({nombre,img}) => {
  return (
            <Flex id="redes"
            paddingLeft="1vw"
            paddingRight="1vw"
            alignItems="center"
            height="45%"
            border="1px solid #f0eded"
            margin="0vw 0.5vw">
                    <div>
                        <a href="">
                          <Image src={img} alt="" id="icon-redes"
                          width="31px"
                          position="relative"
                          top="0.6px"
                          paddingRight="10px"
                          />
                          </a>
                    </div>
                    
                    <div>
                        <Link href="" id="nombre-redes"
                              fontFamily="Inter, sans-serif"
                              fontSize="15px"
                              fontWeight="480"
                              color="rgb(46, 45, 45)"
                              textDecoration="none"
                              mt="2.5px"
                              _hover={{
                            textDecoration:'none'
                              }}
                        >{nombre}</Link>
                    </div>
                    
            </Flex>
  )
}

export { Headerredes }