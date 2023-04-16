import type { FC } from 'react';

import React from 'react';

import {
        List,
        ListItem,
        ListIcon,
        OrderedList,
        UnorderedList,
        Flex,
        Text,
        Accordion,
        AccordionItem,
        AccordionButton,
        AccordionPanel,
        AccordionIcon,
        Box,
} from "@chakra-ui/react";

const AboutPage: FC = () => {
    return (
        <Flex alignItems='center' justifyContent='center' width='100%'>
            <Accordion allowToggle bgColor='#24252A' width='50%' mt={5}>
                <AccordionItem borderRadius={8}>
                    <h2>
                        <AccordionButton height='50px'>
                            <Box as="span" color={"white"} flex='1' textAlign='left'>
                                Why did I chose this project ?
                            </Box>
                            <AccordionIcon color='white'/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel color={"white"} pb={4}>
                        As my first experience far away from home my parents, moreover in a
                        foreign country started at the beginning of the semester, I had to deal with
                        everything I needed. My most important problem is to manage my money. Food,
                        activities, daily expenses... It has a cost and it is sometimes hard to keep up with
                        it. Thus, I decided to use a expense management system, and instead of finding one,
                        I decided to create mine.

                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderRadius={8}>
                    <h2>
                        <AccordionButton height='50px'>
                            <Box as="span" color={"white"} flex='1' textAlign='left'>
                                What is my project ?
                            </Box>
                            <AccordionIcon color='white'/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel color={"white"} pb={4}>
                        I want to make a expense management system that suits perfectly for students.
                        Indeed, I'd like it to be easy to use, not tons of useless data, that focus
                        on key informations. It is obvious that the main goal of a student is to reduce
                        his budget as much as possible, since this one is not unlimited and to avoid
                        struggling at the end of the month. I want my solution to give the user, the perfect
                        overview of his expenses over the month and how he is managing his budget, taking into
                        acount the objectives he fixed before using it. Without threatening the student
                        about his expenses, I want my project to keep him aware of any gap he is creating
                        with his budget and suggest how he should manage the end of the month, thereby stick
                        with his initial budget. Finally, the only thing I want to keep in mind is to make it as
                        simple as possible.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderRadius={8}>
                    <h2>
                        <AccordionButton height='50px'>
                            <Box as="span" color={"white"} flex='1' textAlign='left'>
                                The license I used for the project
                            </Box>
                            <AccordionIcon color='white'/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel color={"white"} pb={4}>
                        I decided to use the GPL licence for my project as it is a free open source
                        licence that provides users with the freedom to modify,
                        distribute, and use the software for any purpose. The GPL is a strong copyleft license,
                        which means that it requires any modifications or derived works to be released
                        under the same license. It prevents anyone from creating a proprietary version of your work.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem borderRadius={8}>
                    <h2>
                        <AccordionButton height='50px'>
                            <Box as="span" color={"white"} flex='1' textAlign='left'>
                                The technologies I used in this project
                            </Box>
                            <AccordionIcon color='white'/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel color={"white"} pb={4}>
                        <UnorderedList>
                            <ListItem>CSS / HTML / TypeScript / React / Chakra-ui for the website</ListItem>
                            <ListItem>EC2 instance from AWS to host my website</ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Flex>
    );
}

export default AboutPage;