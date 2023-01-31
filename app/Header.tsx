import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Header() {
  return (
   <Box 
   textAlign={{base:"left", md:"left", lg: "center"}}
   pl="15px"
   bg="#6B46C1" pt={"90px"} color="white" pb={"250px"}>

    <Heading>Simple pricing for your business</Heading>
    <Text pt={"10px"}>Plans that are carefully crafted to suit your business.</Text>


   </Box>
  )
}
