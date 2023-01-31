import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import React, { Component } from 'react'
import Icon1 from './Icon1'
import Icon2 from './Icon2'
import Icon3 from './Icon3'

export default class Features extends Component {
  render() {
    return (
      <Box maxW={"800px"} m={"auto"} mt={"25px"} px={"50px"}>
        <Flex direction={{base: "column", lg: "row"}}>
        <HStack mb={"20px"}>
            <Icon as={Icon1}/>
            <Text>30 days money back Guarantee</Text>
        </HStack>

        <HStack mb={"20px"}>
            <Icon as={Icon2}/>
            <Text>No setup fees
100% hassle-free</Text>
        </HStack>

        <HStack mb={"20px"}>
            <Icon as={Icon3}/>
            <Text>No monthly subscription
Pay once and for all</Text>
        </HStack>
        </Flex>
      </Box>
    )
  }
}
