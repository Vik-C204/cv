import React, {  useRef  } from "react";
import General from "./General.js"
import Experience from "./Experience";
import Education from "./Education";
import App from "../App";
import { useReactToPrint } from 'react-to-print';

import {
    Box,
    Button,
    Container,
    Divider,
    Flex,
    Heading,
    HStack,
    Image,
    Spacer,
    Text,
    VStack,
    WrapItem
} from "@chakra-ui/react";
import styled from "@emotion/styled";

const Output = (props) =>  {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({content: () => componentRef.current,
                                                                documentTitle: 'emp-data'});



    return ( <> <div ref={componentRef}  style={{width: '100%', height: window.innerHeight}}> <Flex flexDir={"column"} border={"2px solid black"} >
           <Box backgroundColor={"#163e72"} width={"100%"} p={4}>

                <Flex flexDir={"column"} justifyContent={"space-around"}>
                    <HStack flexWrap={"wrap"} p={4} ><Heading overflowWrap={"anywhere"} color={"#ffffff"}> {props.firstName} </Heading> <Heading overflowWrap={"anywhere"} color={"white"} as={"h2"}>  {props.lastName} </Heading> </HStack>
                    <Heading overflowWrap={"anywhere"} color={"white"} p={4} size={"lg"} > {props.title} </Heading>
                </Flex>

           </Box>

            <Flex>
                <Box bgColor={"#eeeeee"} minHeight={"100%"} width={"70%"} height={"3xl"} p={4}>

                    <Heading size={"md"} color={"#163e72"}> Description  </Heading>
                    <Divider borderColor={"#333"} />
                    <Text> {props.description} </Text>

                    <Heading mt={4} size={"md"} color={"#163e72"}> Experience  </Heading>
                    <Divider borderColor={"#333"} />
                    {props.exp.map((e) => (
                    <HStack key={e.id} spacing={10}>

                        <Text> {e.from} - {e.to} </Text>
                        <VStack spacing={0.5} align={"flex-start"}>
                            <Text> {e.position} </Text>
                            <Text> {e.company} </Text>
                            <Text> {e.city} </Text>

                        </VStack>

                    </HStack>
                    ))}

                    <Heading mt={4} size={"md"} color={"#163e72"}> Education  </Heading>
                    <Divider borderColor={"#333"} />
                    {props.ed.map((e) => (
                    <HStack key={e.id} spacing={10}>

                        <Text> {e.from} - {e.to} </Text>
                        <VStack spacing={0.5} align={"flex-start"}>
                            <Text> {e.universityName} </Text>
                            <Text> {e.degreee} </Text>
                            <Text> {e.subject} </Text>

                        </VStack>
                    </HStack>
                    ))}

                </Box>

                <Box bgColor={"#dddddd"} width={"30%"}>

                    <VStack align={"flex-start"} p={2}>

                    <Box width={"100%"}>
                        <Image
                            objectFit={"contain"}
                            borderRadius={"2xl"}

                            src={props.photo}/>

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

                    <Spacer />





                </Box>

            </Flex>


    </Flex> </div> <Button onClick={handlePrint}> Print </Button>
    </> )
}

export default Output;