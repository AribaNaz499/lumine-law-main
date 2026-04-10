import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Container, Box, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import "../../styles/fonts.css";

const Cards = () => {
    const services = [
        { 
            title: "99%", 
            desc: "Successful Case Outcomes", 
        },
        { 
            title: "1500+", 
            desc: "Trusted Clients Served", 
        },
        { 
            title: "7+", 
            desc: "Years of Combined Experience", 
        },
    ];

    return (
        <Container
            width="100%"
            maxWidth="1200px"
            minHeight="auto"
            backgroundColor="white"
            overflowX="hidden"
            centerContent 
            py={10}
        >
            <SimpleGrid
                columns={{ base: 1, md: 3, lg: 3 }}
                spacing={6} 
                gap={5}
                marginTop={"-10px"}
                width="100%"
            >
                {services.map((service, index) => (
                    <Box
                        as={ReactRouterLink}
                        to={service.path || "#"} // Default to # if no path exists
                        key={index}
                        textDecoration="none"
                        _hover={{ textDecoration: "none" }}
                    >
                        <Box
                            /* --- COLOR LOGIC HERE --- */
                            backgroundColor={index === 0 ? "#BF9B30" : "black"} // Red for 1st card, Black for others
                            p="20px"
                            color={"white"}
                            height="150px" // Slightly increased height for better spacing
                            display="flex"
                            flexDirection="column" // Changed to column for better vertical centering
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                            transition="all 0.3s"
                            _hover={{ transform: "scale(1.02)" }} // Subtle pop on hover
                        >
                            <Text
                                color="white"
                                fontSize={{ base: "50px", lg: "60px" }}
                                fontWeight="400"
                                fontFamily="CeraRoundPro"
                                lineHeight="1"
                                mb={2}
                            >
                                {service.title}
                            </Text>
                            <Text
                                fontSize="20px"
                                color={"white"}
                                fontFamily="Montserrat"
                                fontWeight="300"
                                lineHeight="1.2"
                            >
                                {service.desc}
                            </Text>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default Cards;