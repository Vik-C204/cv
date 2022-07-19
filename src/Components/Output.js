import React, {  Component  } from "react";
import General from "./General.js"
import Experience from "./Experience";
import Education from "./Education";
import App from "../App";
import {Box, Button, Container, Divider, Flex, Heading, HStack, Image, Text, VStack, WrapItem} from "@chakra-ui/react";

class Output extends Component {

    render() {

    return  <Flex  flexDir={"column"} border={"2px solid black"}>
           <Box bgColor={"#163e72"} width={"100%"} p={4}>

                <Flex flexDir={"column"} justifyContent={"space-around"}>
                    <HStack flexWrap={"wrap"} p={4} ><Heading overflowWrap={"anywhere"} color={"#ffffff"}> {this.props.firstName} </Heading> <Heading overflowWrap={"anywhere"} color={"white"} as={"h2"}>  {this.props.lastName} </Heading> </HStack>
                    <Heading overflowWrap={"anywhere"} color={"white"} p={4} size={"lg"} > {this.props.title} </Heading>
                </Flex>

           </Box>

            <Flex>
                <Box bgColor={"#eeeeee"} width={"70%"} height={"3xl"} p={4}>

                    <Heading size={"md"} color={"#163e72"}> Description  </Heading>
                    <Divider borderColor={"#333"} />
                    <Text> {this.props.description} </Text>

                    <Heading mt={4} size={"md"} color={"#163e72"}> Experience  </Heading>
                    <Divider borderColor={"#333"} />
                    {this.props.exp.map((e) => (
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
                    {this.props.ed.map((e) => (
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

                            src={this.props.photo}/>

                    </Box>

                        <Heading mt={2} size={"md"} color={"#163e72"}> Personal Details </Heading>
                        <Divider borderColor={"#333"} />
                        <Text> Address </Text>
                        <Text fontSize={"xs"}> {this.props.adress} </Text>
                        <Text> Phone Number </Text>
                        <Text fontSize={"xs"}> {this.props.phone} </Text>
                        <Text> Email </Text>
                        <Text fontSize={"xs"} overflowWrap={"anywhere"}> {this.props.email}</Text>

                    </VStack>





                </Box>

            </Flex>


    </Flex>

}}

export default Output;
