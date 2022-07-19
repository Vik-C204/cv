import React, { useState } from "react";
import {Box, Button, Heading, Input, Stack} from "@chakra-ui/react";

const Education = (props) => {

    return <Stack p={4}>

        <Heading as={"h2"} size={"md"} p={2}> Education </Heading>
        {props.ed.map((e) => (
            <Box key={e.id}>
                <Input value={e.universityName} placeholder={"University Name"} bgColor={"#ffffff"} name={"universityName"}
                       onChange={(event) => props.handleEChange(event, e.id) }/>
                <Input value={e.city} placeholder={"City"} bgColor={"#ffffff"} name={"city"}
                       onChange={(event) => props.handleEChange(event, e.id) }/>
                <Input value={e.degreee} placeholder={"Degree"} bgColor={"#ffffff"} name={"degreee"}
                       onChange={(event) => props.handleEChange(event, e.id) }/>
                <Input value={e.subject} placeholder={"Subject"} bgColor={"#ffffff"} name={"subject"}
                       onChange={(event) => props.handleEChange(event, e.id) }/>
                <Input value={e.from} placeholder={"From"} bgColor={"#ffffff"} name={"from"}
                       onChange={(event) => props.handleEChange(event, e.id) }/>
                <Input value={e.to} placeholder={"To"} bgColor={"#ffffff"} name={"to"}
                       onChange={(event) => props.handleEChange(event, e.id) }/>
                <Button  width={"100%"} colorScheme='primary' variant={"solid"} onClick={() => props.handleEDelete(e.id)}> Delete </Button>
            </Box>
        ))}
        <Button colorScheme='primary' variant={"solid"} onClick={props.handleEAdd}> Add </Button>








    </Stack>

}

export default Education;