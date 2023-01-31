import React from 'react'
import { Box, Heading, Text, Flex, Button, HStack, Icon } from '@chakra-ui/react'
import CheckMateIcon from './CheckMateIcon'

export default function Pricing() {
  return (
    <Box maxW={"850px"} mx={{base:"20px", md:"10px", lg: "auto"}} mt={"-150px"}  bg={"white"} borderRadius={"16px"} overflow={"hidden"} boxShadow={"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"}>
        <Flex direction={{base:"column", md:"column", lg:"row"}}>
        <Box bg={"wheat"} p={"40px"} textAlign={"center"}>
            <Text fontWeight={"bold"} fontSize={"24px"}>Premium PRO</Text>
            <Heading fontSize={"60px"}>$329</Heading>
            <Text>billed just once</Text>
            <Button bg={"#805AD5"} color={"white"} w={"300px"} mt={"20px"}>Get Started</Button>

        </Box>
        <Box pt={"50px"} pl={"25px"}>
             <Text mb={"10px"}>Access these features when you get this pricing package for your business.</Text>
             <HStack mb={"15px"}>
                <Icon as={CheckMateIcon} />
                <Text>International calling and messaging API</Text>
             </HStack>
             <HStack mb={"15px"}>
                <Icon as={CheckMateIcon} />
                <Text>Additional phone numbers</Text>
             </HStack>
             <HStack mb={"15px"}>
                <Icon as={CheckMateIcon} />
                <Text>Automated messages via Zapier</Text>
             </HStack>
             <HStack mb={"15px"}>
                <Icon as={CheckMateIcon} />
                <Text>24/7 support and consulting</Text>
             </HStack>
        </Box>
        </Flex>
    </Box>
    
  )
}
