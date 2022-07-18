import React, { useState } from "react";
import {Button, Heading, Input, Stack, Textarea} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"

const Experience = () => {


    return <Stack p={4}>
        <Heading as={"h2"} size={"md"} p={2}> Experience </Heading>
        <Input placeholder={"Position"} bgColor={"#ffffff"}/>
        <Input placeholder={"Company"} bgColor={"#ffffff"}/>
        <Input placeholder={"City"} bgColor={"#ffffff"}/>
        <Input placeholder={"From"} bgColor={"#ffffff"}/>
        <Input placeholder={"To"} bgColor={"#ffffff"}/>
        <Button colorScheme='primary' variant={"solid"}> Delete </Button>
        <Button colorScheme='primary' variant={"solid"}> Add </Button>








    </Stack>

}

export default Experience;