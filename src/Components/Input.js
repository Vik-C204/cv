import React from "react";
import General from "./General.js"
import Experience from "./Experience";
import Education from "./Education";
import {Box} from "@chakra-ui/react";

const Input = (props) => {
    return <Box bgColor={"#eeeeee"} border={"2px solid black"}>
        <General firstName={props.firstName} setFirstName={props.setFirstName}
                 lastName={props.lastName} setLastName={props.setLastName}
                 title={props.title} setTitle={props.setTitle}
                 photo={props.photo} setPhoto={props.setPhoto}
                 adress={props.address} setAddress={props.setAddress}
                 phone={props.phone} setPhone={props.setPhone}
                 email={props.email} setEmail={props.setEmail}
                 description={props.description} setDescription={props.setDescription} />
        <Experience handleChange={props.handleChange} handleAdd={props.handleAdd} handleDelete={props.handleDelete}
                    exp={props.exp} />
        <Education handleEChange={props.handleEChange} handleEAdd={props.handleEAdd} handleEDelete={props.handleEDelete}
                   ed={props.edu} />

    </Box>
}

export default Input;
