import React, { Suspense } from "react";
import {
    Text,
    Container,
    Box,
    Heading,
    List, // Naye version mein iska use niche dekhein
} from "@chakra-ui/react";

import Footer from "../Footer/Footer";
import "../../styles/fonts.css";
import BannerImg from "../../assets/landing/newsInsightsFour.jpg";
import { Helmet } from "react-helmet";

// Lazy imports
const AllServiceLinks = React.lazy(() => import("../NavLinks/AllServiceLinks"));
const AllNewsInsights = React.lazy(() => import("../NavLinks/AllNewsInsights"));
const AllPrices = React.lazy(() => import("../NavLinks/AllPrices"));

const InternationalStudentsThrive = () => {
    return (
        <Box backgroundColor="white" minHeight="100vh">
            <Helmet>
                <title>Lumine Law - How Lumine Solicitors help international students thrive in UK?</title>
            </Helmet>

            <Container width="100vw" maxWidth="100%" m={0} p={0} display="flex" flexDirection="column">

                {/* Banner Section */}
                <Box
                    width="100%"
                    height={{ base: "140px", md: "160px", lg: "210px", xl: "260px" }}
                    bgImage={`url(${BannerImg})`}
                    bgSize="cover"
                    bgPos="center"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text
                        fontSize={{ base: "16px", md: "20px", lg: "24px", xl: "30px" }}
                        fontWeight={400}
                        fontFamily="CeraRoundPro"
                        bg="#2423236b"
                        color="white"
                        px="6px"
                        py="4px"
                        textAlign="left"
                        lineHeight={{lg:"1.2" , xs:"1", md:"1.2"}}
                        mt={{ lg: "6" , xs:"9" }}
                    >
                        How Lumine Solicitors help international students thrive in <br />
                        UK?
                    </Text>
                </Box>

                {/* Main Content Area */}
                <Box width="100%" px={{ base: 4, md: 10, lg: 20 }} py={10} color="black">
                    <Box maxWidth="1200px" mx="auto">
                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "20px", lg: "28px" }}
                            mb={0.5}
                            color={"gray.800"}
                            textAlign={"left"}
                        >
                            How Lumine Solicitors help international students thrive in UK?
                        </Heading>

                        <Text mb={0} fontSize="15px" lineHeight={1.5} color={"gray.700"}
                            textAlign={"left"}>
                            Studying in the United Kingdom is a rewarding experience for foreign students, but immigration may be a complex affair. Lumine Solicitors specializes in helping students secure their Student Visa—a do-or-die step in achieving their educational aspirations.
                        </Text>

                        <Text fontStyle="italic" fontSize={"15px"} color={"gray.700"}
                            textAlign={"left"} mb={0}>How We Grasp the Student Visa</Text>
                        <Text mb={0} color={"gray.700"}
                            textAlign={"left"} fontSize="15px" lineHeight={1.8}>
                            A Student Visa (formerly known as a Tier 4 Visa) is immigration to the UK for individuals ready to study from recognized centers.
                        </Text>

                        {/* List Sections */}
                        <Box mb={0}>
                            {[
                                { title: "Sponsorship under Licence:", desc: "The students must be accepted by a UK Visas and Immigration (UKVI) approved institution before applying." },
                                { title: "Qualifying Courses:", desc: "Assisting students so that the course they have chosen is a recognized full-time course." },
                                { title: "Financial Requirements:", desc: "Personal advice on how to show capability to fund oneself in education and living expenses." }
                            ].map((item, index) => (
                                <Box color={"gray.700"}
                                    textAlign={"left"} key={index} mb={1}>
                                    <Text color={"gray.700"}
                                        textAlign={"left"} >{index + 1}. {item.title}</Text>
                                    <Text color={"gray.700"}
                                        textAlign={"left"}> {item.desc}</Text>
                                </Box>
                            ))}
                        </Box>

                        <Text fontStyle="italic" fontSize={"15px"} color={"gray.700"}
                            textAlign={"left"} mb={0}>Helping Students Thrive Beyond Visa Acquisition</Text>

                        {/* 🔹 FIXED: Chakra UI v3 Compatible List */}
                        <List.Root spacing={3} mb={1}
                            color={"gray.700"} textAlign={"left"} ps={5} >
                            <List.Item>
                                <Text as="span" >Advisory Services:</Text> Offering periodic guidance on student rights and employment.
                            </List.Item>
                            <List.Item>
                                <Text as="span">Integration Support:</Text> Helping students settle into their new life and cultural adaptation.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >Career Counselling:</Text> Providing advice on career opportunities after study.
                            </List.Item>
                        </List.Root>

                        <Text fontSize={"15px"} fontStyle="italic" color={"gray.700"} textAlign={"left"} mb={0}>Contact Lumine Solicitors</Text>
                        <Text fontSize="15px" textAlign={"left"} color={"gray.700"}>
                            Here at Lumine Solicitors, our vision is to enable international students by providing them with the tools and support necessary to excel academically and personally during their study in the UK. For professional guidance on how to complete the application for a student visa and other services, call us today at 020 3950 2246 or check out our website for further details. Allow us to help make your studying career in the UK a success!

                        </Text>
                    </Box>
                </Box>

                {/* Footer and Lazy Loaded Components */}
                <Box mt="auto">
                    <Suspense fallback={<Box p={4}>Loading Prices...</Box>}>
                        <AllPrices />
                    </Suspense>
                    <Suspense fallback={<Box p={4}>Loading Services...</Box>}>
                        <AllServiceLinks />
                    </Suspense>
                    <Suspense fallback={<Box p={4}>Loading News...</Box>}>
                        <AllNewsInsights />
                    </Suspense>
                    <Footer />
                </Box>
            </Container>
        </Box>
    );
};

export default InternationalStudentsThrive;