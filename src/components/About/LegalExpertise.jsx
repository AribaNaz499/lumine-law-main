import React from "react";
import { Helmet } from "react-helmet";
import { Link as ReactRouterLink } from "react-router-dom"; 
import { Container, Box, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import BannerImg2 from "../../assets/about/aboutUsBanne2.jpg";
import "../../styles/fonts.css";

const LegalExpertise = () => {
const services = [
  {
    title: "Immigration Law",
    desc: "Guiding you through visas, appeals, and applications.",
    icon: "📜",
    path: "/all-services/immigration",
  },
  {
    title: "Family Matters",
    desc: "Supporting families with care, disputes and children.",
    icon: "👨‍👩‍👧",
    path: "/all-services/family-and-children",
  },
  {
    title: "Property Law",
    desc: "Handling sales, leases, landlord and tenant issues.",
    icon: "🏠",
    path: "/all-services/residential", // ✅ FIXED
  },
  {
    title: "Civil Litigation",
    desc: "Resolving disputes with strong legal representation.",
    icon: "⚖️",
    path: "/all-services/dispute-resolution",
  },
  {
    title: "Wills & Probate",
    desc: "Protecting your wishes with estate planning guidance.",
    icon: "📝",
    path: "/all-services/wills-probate", // ✅ FIXED
  },
  {
    title: "Business Law",
    desc: "Advising companies on commercial and intellectual property.",
    icon: "💼",
    path: "/all-services/commercial",
  },
];

    return (
        <>
            <Helmet>
                <title>Lumine Law About Us</title>
            </Helmet>

            <Container
                width="100vw"
                maxWidth="100%"
                backgroundColor="white"
                overflowX="hidden"
                m={0}
                p={0}
            >
                <Box
                    width={"100%"}
                    bgImage={`linear-gradient(#00000044, #00000044), url(${BannerImg2})`}
                    bgSize={"cover"}
                    bgPos={"center center"}
                    minH={{ base: "fit-content", lg: "100vh" }}
                    pt={{ base: "40px", md: "60px" }}
                    pb={{ base: "60px", md: "80px" }}
                    bgRepeat={"no-repeat"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    px={{ base: "4%", md: "6%", lg: "8%" }}
                >
                    <Text
                        fontSize={{ base: "14px", lg: "16px" }}
                        fontWeight={300}
                        fontFamily={"CeraRoundPro"}
                        color="#deb92c"
                    >
                        Legal Expertise
                    </Text>

                    <Text
                        fontSize={{ base: "24px", md: "32px", lg: "40px" }}
                        fontWeight={400}
                        fontFamily={"CeraRoundPro"}
                        color="#deb92c"
                        mt={"8px"}
                        textAlign="center"
                    >
                        Dedicated to Your Legal Needs
                    </Text>

                    <SimpleGrid 
                        columns={{ base: 1, md: 2, lg: 3 }} 
                        // Spacing ko thora kam kiya taaki Nest Hub pe content bikhre nahi
                        spacingX={{ base: 0, md: "15px", lg: "25px" }} 
                        spacingY={{ base: "12px", md: "15px" }}      
                        width={"100%"}
                        gap={5}
                        maxWidth="1300px" 
                        marginTop={{ base: "30px", md: "40px" }}
                    >
                        {services.map((service, index) => (
                            <Box 
                                as={ReactRouterLink} 
                                to={service.path} 
                                key={index} 
                                transition="all 0.3s"
                                _hover={{ transform: "translateY(-5px)" }}
                                textDecoration="none"
                                height="100%"
                            >
                                <Box
                                    backgroundColor="#392F0C"
                                    // Padding ko optimize kiya Nest Hub Max ke liye
                                    p={{ base: "12px", md: "15px", lg: "20px" }} 
                                    textAlign="left"
                                    minH={{ base: "90px", md: "100px", lg: "120px" }} 
                                    height="100%"
                                    display="flex"
                                    alignItems="center"
                                    cursor="pointer"
                                >
                                    <Flex 
                                        direction="row" 
                                        alignItems="center" 
                                        gap={{ base: 3, md: 4 }}
                                        w="100%"
                                    >
                                        <Box 
                                            fontSize={{ base: "28px", md: "32px" }} 
                                            color="#deb92c" 
                                            flexShrink={0} 
                                        >
                                            {service.icon}
                                        </Box>

                                        <Box overflow="hidden">
                                            <Text
                                                color="white"
                                                fontSize={{ base: "15px", md: "17px", lg: "18px" }}
                                                fontWeight={"500"}
                                                fontFamily="CeraRoundPro"
                                                lineHeight="1.2"
                                            >
                                                {service.title}
                                            </Text>
                                            <Text
                                                color="rgba(255, 255, 255, 0.9)"
                                                fontSize={{ base: "11px", md: "12px", lg: "13px" }}
                                                fontFamily="Montserrat"
                                                lineHeight="1.2"
                                                mt={1}
                                                noOfLines={2} 
                                            >
                                                {service.desc}
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>
            </Container>
        </>
    );
};

export default LegalExpertise;