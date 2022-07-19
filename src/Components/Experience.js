import React, { useState } from "react";
import {Box, Button, Heading, Input, Stack, Textarea} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"

const Experience = (props) => {




    return <Stack p={4}>

        <Heading as={"h2"} size={"md"} p={2}> Experience </Heading>
        {props.exp.map((e) => (
        <Box key={e.id}>
            <Input value={e.position} placeholder={"Position"} bgColor={"#ffffff"} name={"position"}
                   onChange={(event) => props.handleChange(event, e.id) }/>
            <Input value={e.company} placeholder={"Company"} bgColor={"#ffffff"} name={"company"}
                   onChange={(event) => props.handleChange(event, e.id) }/>
            <Input value={e.city} placeholder={"City"} bgColor={"#ffffff"} name={"city"}
                   onChange={(event) => props.handleChange(event, e.id) }/>
            <Input value={e.from} placeholder={"From"} bgColor={"#ffffff"} name={"from"}
                   onChange={(event) => props.handleChange(event, e.id) }/>
            <Input value={e.to} placeholder={"To"} bgColor={"#ffffff"} name={"to"}
                   onChange={(event) => props.handleChange(event, e.id) }/>
            <Button  width={"100%"} colorScheme='primary' variant={"solid"} onClick={() => props.handleDelete(e.id)}> Delete </Button>
        </Box>
        ))}
        <Button colorScheme='primary' variant={"solid"} onClick={props.handleAdd}> Add </Button>








    </Stack>

}

export default Experience;