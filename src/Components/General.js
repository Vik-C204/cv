import React, { useState } from "react";
import {Button, Container, Divider, Flex, FormControl, Heading, Input, Stack, Textarea, VStack} from "@chakra-ui/react";
import App from "../App";
const General = (props) => {

    return <Stack p={4}>
        <Heading as={"h2"} size={"md"} p={2}> Personal Information </Heading>
        <Input placeholder={"First Name"} bgColor={"#ffffff"} onChange={event => props.setFirstName(event.target.value)}/>
        <Input placeholder={"Last Name"} bgColor={"#ffffff"} onChange={event => props.setLastName(event.target.value)}/>
        <Input placeholder={"Title"} bgColor={"#ffffff"} onChange={event => props.setTitle(event.target.value)}/>
        <Input placeholder={"Photo"} bgColor={"#ffffff"} onChange={event => props.setPhoto(event.target.value)}/>
        <Input placeholder={"Address"} bgColor={"#ffffff"} onChange={event => props.setAddress(event.target.value)}/>
        <Input placeholder={"Phone number"} bgColor={"#ffffff"} onChange={event => props.setPhone(event.target.value)}/>
        <Input placeholder={"Email"} bgColor={"#ffffff"} onChange={event => props.setEmail(event.target.value)}/>
        <Textarea placeholder={"Description"} bgColor={"#ffffff"} onChange={event => props.setDescription(event.target.value)}/>





    </Stack>



}

export default General;