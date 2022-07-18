import React, { useState } from "react";
import General from "./General.js"
import Experience from "./Experience";
import Education from "./Education";
import App from "../App";
import {Box, Button, Container, Divider, Flex, Heading, HStack, Image, Text, VStack, WrapItem} from "@chakra-ui/react";

const Output = (props) => {
    return <Flex flexDir={"column"} border={"2px solid black"}>
           <Box bgColor={"#163e72"} width={"100%"} p={4}>

                <Flex flexDir={"column"} justifyContent={"space-around"}>
                    <HStack p={4} ><Heading overflowWrap={"anywhere"} color={"#ffffff"}> {props.firstName} </Heading> <Heading overflowWrap={"anywhere"} color={"white"} as={"h1"}>  {props.lastName} </Heading> </HStack>
                    <Heading overflowWrap={"revert-layer"} color={"white"} p={4} size={"lg"} > {props.title} </Heading>
                </Flex>

           </Box>

            <Flex>
                <Box bgColor={"#eeeeee"} width={"70%"} height={"3xl"} p={4}>

                    <Heading size={"md"} color={"#163e72"}> Description  </Heading>
                    <Divider borderColor={"#333"} />
                    <Text> {props.description} </Text>

                    <Heading mt={4} size={"md"} color={"#163e72"}> Experience  </Heading>
                    <Divider borderColor={"#333"} />
                    <HStack spacing={10}>

                        <Text> 2015 - Present </Text>
                        <VStack spacing={0.5} align={"flex-start"}>
                            <Text> Senior </Text>
                            <Text> Facebook </Text>

                        </VStack>

                    </HStack>

                    <Heading mt={4} size={"md"} color={"#163e72"}> Education  </Heading>
                    <Divider borderColor={"#333"} />
                    <HStack spacing={10}>

                        <Text> 2015 - Present </Text>
                        <VStack spacing={0.5} align={"flex-start"}>
                            <Text> Uni ofdfgfdgfdg </Text>
                            <Text> Maths </Text>
                            <Text> Master </Text>

                        </VStack>
                    </HStack>

                </Box>

                <Box bgColor={"#dddddd"} width={"30%"}>

                    <VStack align={"flex-start"} p={2}>

                    <Box width={"100%"}>
                        <Image
                            objectFit={"contain"}
                            borderRadius={"2xl"}

                            src={"https://michalosman.github.io/cv-application/static/media/example_photo.7a684f97.jpg"}/>

                    </Box>

                        <Heading mt={2} size={"md"} color={"#163e72"}> Personal Details </Heading>
                        <Divider borderColor={"#333"} />
                        <Text> Address </Text>
                        <Text fontSize={"xs"}> {props.adress} </Text>
                        <Text> Phone Number </Text>
                        <Text fontSize={"xs"}> {props.phone} </Text>
                        <Text> Email </Text>
                        <Text fontSize={"xs"} overflowWrap={"anywhere"}> {props.email}</Text>

                    </VStack>





                </Box>

            </Flex>


    </Flex>
}

export default Output;
