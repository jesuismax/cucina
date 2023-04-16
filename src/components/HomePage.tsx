import type { FC } from 'react';

import React, {Dispatch, SetStateAction} from 'react';

import {Button, Flex, Text } from "@chakra-ui/react";

type HomePageProps = {
    isClicked: string,
    setIsClicked: Dispatch<SetStateAction<string>>;
}
const HomePage: FC<HomePageProps> = ({isClicked, setIsClicked}) => {
    const onHandleMenuChange = (data: string) => {
        setIsClicked(data);
    };

    return (
        <>
            <Flex flexDirection='column' justifyContent='center' alignItems='center' width='100%' height='400px'>
                <Text color='white' fontSize='50px'>My Expense Management System</Text>
                <Button _hover={{color:'#61dafb', bgColor:'white'}}
                        bgColor='#61dafb'
                        borderRadius='15px'
                        color='white'
                        height='45px'
                        onClick={() => onHandleMenuChange('about')}
                >
                    Learn more about it
                </Button>
            </Flex>

            <Flex position='absolute'
                  justifyContent='center'
                  alignItems='center'
                  width='100%'
                  mt={3}
            >
                <Text color='#61dafb'>
                    Max Sailly - 34733598 - Assignment 1
                </Text>
            </Flex>
        </>

    );
}

export default HomePage;