import React from "react";
import {
    Box,
    Heading,
    Input,
    Stack,
    Textarea
} from "@chakra-ui/react";
import FilePicker from "./file-picker"
import examplePhoto from "./examplePhoto.png"

const General = (props) => {

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                props.setPhoto(reader.result)
            }
        }
        reader.readAsDataURL(e);
    }

    return <Stack p={4}>
        <Heading as={"h2"} size={"md"} p={2}> Personal Information </Heading>
        <Input placeholder={"Input Name"} bgColor={"#ffffff"} onChange={event => props.setFirstName(event.target.value)}/>
        <Input placeholder={"Last Name"} bgColor={"#ffffff"} onChange={event => props.setLastName(event.target.value)}/>
        <Input placeholder={"Title"} bgColor={"#ffffff"} onChange={event => props.setTitle(event.target.value)}/>
        <Box bgColor={"white"}> <FilePicker width={"100%"}
                onFileChange={(fileList) => { fileList[0] === undefined ? props.setPhoto(examplePhoto) : imageHandler(fileList[0])}}
                placeholder="Placeholder"
                clearButtonLabel="Clear"
                multipleFiles={false}
                accept="image/*"
                hideClearButton={false}
                /> </Box>
        <Input placeholder={"Address"} bgColor={"#ffffff"} onChange={event => props.setAddress(event.target.value)}/>
        <Input placeholder={"Phone number"} bgColor={"#ffffff"} onChange={event => props.setPhone(event.target.value)}/>
        <Input placeholder={"Email"} bgColor={"#ffffff"} onChange={event => props.setEmail(event.target.value)}/>
        <Textarea placeholder={"Description"} bgColor={"#ffffff"} onChange={event => props.setDescription(event.target.value)}/>





    </Stack>



}

export default General;