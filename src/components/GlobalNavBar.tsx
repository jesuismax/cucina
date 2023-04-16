import type {Dispatch, FC, SetStateAction} from 'react';

import React from 'react';
import { Button,
        Flex,
        Text,
        Drawer,
        DrawerBody,
        DrawerFooter,
        DrawerHeader,
        DrawerOverlay,
        DrawerContent,
        useDisclosure,
        Input,
        InputGroup,
        InputLeftAddon,
} from "@chakra-ui/react";

import {navInfo} from "./menuInfo";

type GlobalNavBarProps = {
    isClicked: string,
    setIsClicked: Dispatch<SetStateAction<string>>;
}

const GlobalNavBar: FC<GlobalNavBarProps> = ({isClicked, setIsClicked}) => {
    const onHandleMenuChange = (data: string) => {
        setIsClicked(data);
    };

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Flex alignItems='center'
                  bgColor='#24252A'
                  flexDirection='row'
                  fontSize='25px'
                  height='80px'
                  justify='space-between'
                  padding='0 5%'
                  verticalAlign='center'>
                <Flex flexDirection='row'>
                    <Text as='b' color='#61dafb' marginRight={2}>ICT171</Text>
                    <Text as='b' color='white'>Assignment 1</Text>
                </Flex>
                <Flex flexDirection='row'>
                    {navInfo.map((data) => {
                        return (
                            <Button
                                _hover={{ bgColor:'#61dafb' }}
                                bgColor={data.name === isClicked ? '#61dafb' : '#24252A'}
                                color='white'
                                fontSize='20px'
                                borderRadius='15px'
                                key={data.name}
                                marginLeft='20px'
                                onClick={() => onHandleMenuChange(data.name)}
                                width='110px'
                            >
                                {data.name}
                            </Button>
                        )
                    })}
                    <Button
                        _hover={{ bgColor:'#61dafb' }}
                        bgColor={'#24252A'}
                        borderRadius='15px'
                        color='white'
                        fontSize='20px'
                        key="login"
                        marginLeft='20px'
                        onClick={onOpen}
                        width='110px'
                    >
                        {"login"}
                    </Button>
                    <Button
                        _hover={{ bgColor:'#61dafb' }}
                        bgColor={'#24252A'}
                        borderRadius='15px'
                        color='white'
                        fontSize='20px'
                        key="sign up"
                        marginLeft='20px'
                        onClick={onOpen}
                        width='110px'
                    >
                        {"sign up"}
                    </Button>
                </Flex>
            </Flex>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent bgColor='#24252A'>
                    <DrawerHeader color='#61dafb'>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Text color={"white"}>Email :</Text>
                        <Input color={"white"} focusBorderColor='#61dafb' placeholder='Enter an email' mb={3}/>
                        <Text color={"white"}>Password :</Text>
                        <Input color={"white"} focusBorderColor='#61dafb' placeholder='Enter a password' mb={3}/>
                        <Text color={"white"}>Phone number :</Text>
                        <InputGroup>
                            <InputLeftAddon children='+61' />
                            <Input type='tel' focusBorderColor='#61dafb' placeholder='Enter a phone number' />
                        </InputGroup>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button bgColor={"white"} mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button bgColor='#61dafb' minW='80px' variant='solid'> Save </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default GlobalNavBar;