import {Box} from '@chakra-ui/react'

const Logostyle = ({children}) => {
  return (
    <Box
    display="flex"
    width="90%"
    color="#cfcfcf"
    >
        {children}
    </Box>
  )
}

export { Logostyle }