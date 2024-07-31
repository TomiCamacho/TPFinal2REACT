import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({

breakpoints : {
    base: '0em', // 0px
    sm: '20em', // ~320px
    md: '30em', // ~480px
    lg: '48em', // ~768px
    xl: '64em', // ~1024px
    '2xl': '80em', // ~1280px
    '3xl': '90em', // ~1440px
    '4xl': '120em', // ~1920px

// ['0em', '20em', '30em', '48em', '64em', '80em', '90em', '120em']
  
},
});

//   const theme = {
//     breakpoints
//   };
  
  export default theme ;
  