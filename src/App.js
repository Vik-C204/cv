import React, {useRef, useState} from "react";
import General from "./Components/General.js"
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import First from "./Components/First";
import uniqid from "uniqid"
import theme from "./Theme";
import { useReactToPrint } from 'react-to-print';

import {ChakraProvider, Flex, Box, Center, Text, Button} from "@chakra-ui/react";
import Output from "./Components/Output";
import Header from "./Components/Header";
import { extendTheme } from "@chakra-ui/react"
import { useTheme } from "@chakra-ui/react";

const App = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [title, setTitle] = useState("");
    const [photo, setPhoto] = useState("https://michalosman.github.io/cv-application/static/media/empty_avatar.cedf234c.png");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    
    const [exp, setExp] = useState({ experience: [{
        id: uniqid(),
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
    },],
        education: [
            {
                id: uniqid(),
                universityName: "",
                city: "",
                degreee: "",
                subject: "",
                from: "",
                to: "",
            },
        ],})

    const componentRef = useRef()

    const handlePrint = useReactToPrint({ content: () => componentRef.current })

    const handleChangeExperience = (e, id) => {
        const { name, value } = e.target

        setExp((prevState) => {
            const newExperience = prevState.experience.map((experienceItem) => {
                if (experienceItem.id === id) {
                    return { ...experienceItem, [name]: value }
                }
                return experienceItem
            })
            return { ...prevState, experience: [...newExperience] }
        })
    }





    const handleAddExperience = () => {
        setExp((prevState) => ({
            ...prevState,
            experience: [
                ...prevState.experience,
                {
                    id: uniqid(),
                    position: '',
                    company: '',
                    city: '',
                    from: '',
                    to: '',
                },
            ],
        }))
    }

    const handleDeleteExperience = (id) => {
        setExp((prevState) => {
            const newExperience = prevState.experience.filter(
                (experienceItem) => experienceItem.id !== id
            )
            return { ...prevState, experience: [...newExperience] }
        })
    }

    const handleChangeEducation = (e, id) => {
        const { name, value } = e.target

        setExp((prevState) => {
            const newEducation = prevState.education.map((educationItem) => {
                if (educationItem.id === id) {
                    return { ...educationItem, [name]: value }
                }
                return educationItem
            })
            return { ...prevState, education: [...newEducation] }
        })
    }

    const handleAddEducation = () => {
        setExp((prevState) => ({
            ...prevState,
            education: [
                ...prevState.education,
                {
                    id: uniqid(),
                    universityName: '',
                    city: '',
                    degreee: '',
                    subject: '',
                    from: '',
                    to: '',
                },
            ],
        }))
    }

    const handleDeleteEducation = (id) => {
        setExp((prevState) => {
            const newEducation = prevState.education.filter(
                (educationItem) => educationItem.id !== id
            )
            return { ...prevState, education: [...newEducation] }
        })
    }




    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [city, setCity] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");



    const theme1 = useTheme();


  return (
      <ChakraProvider theme={theme}>
            <Flex flexDir={"column"}>

                <Header />

                <Flex p={4} bgColor={"#cccccc"} justifyContent={"space-around"}>
                    <Box width={"45%"}> <First firstName={firstName} setFirstName={setFirstName}
                                               lastName={lastName} setLastName={setLastName}
                                               title={title} setTitle={setTitle}
                                               photo={photo} setPhoto={setPhoto}
                                               adress={address} setAddress={setAddress}
                                               phone={phone} setPhone={setPhone}
                                               email={email} setEmail={setEmail} handleChange={handleChangeExperience}
                                               handleAdd={handleAddExperience} handleDelete={handleDeleteExperience}
                                               exp={exp.experience} edu={exp.education}
                                               onPrint={handlePrint}
                                               handleEChange={handleChangeEducation} handleEAdd={handleAddEducation}
                                               handleEDelete={handleDeleteEducation}

                                               description={description} setDescription={setDescription}/> </Box>
                    <Box width={"45%"}> <Output firstName={firstName}
                                                lastName={lastName}
                                                title={title}
                                                photo={photo}
                                                adress={address}
                                                phone={phone}
                                                email={email}
                                                exp={exp.experience} ed={exp.education}
                                                ref={componentRef}
                                                description={description}/>  </Box>
                </Flex>

                <Center height={"5%"} bgColor='primary.500' color={"#ffffff"}>
                    <Text> SOMETHING ABOUT COPYRIGHT </Text>
                </Center>

            </Flex>

      </ChakraProvider>
  );
}

export default App;
