import React, { useState } from "react";
import {Button, Heading, Input, Stack} from "@chakra-ui/react";

const Education = () => {
    return <Stack p={4}>
        <Heading as={"h2"} size={"md"} p={2}> Experience </Heading>
        <Input placeholder={"University name"} bgColor={"#ffffff"} />
        <Input placeholder={"City"} bgColor={"#ffffff"}/>
        <Input placeholder={"Degree"} bgColor={"#ffffff"}/>
        <Input placeholder={"Subject"} bgColor={"#ffffff"}/>
        <Input placeholder={"From"} bgColor={"#ffffff"}/>
        <Input placeholder={"To"} bgColor={"#ffffff"}/>
        <Button colorScheme='primary' variant={"solid"}> Delete </Button>
        <Button colorScheme='primary' variant={"solid"}> Add </Button>








    </Stack>

}

export default Education;