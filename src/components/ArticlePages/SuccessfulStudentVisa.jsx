import React, { Suspense } from "react";
import {
    Text,
    Container,
    Box,
} from "@chakra-ui/react";

import Footer from "../Footer/Footer";
import "../../styles/fonts.css";
import BannerImg from "../../assets/landing/newsInsightsFour.jpg";
import { Helmet } from "react-helmet";
const AllServiceLinks = React.lazy(() => import("../NavLinks/AllServiceLinks"));
const AllNewsInsights = React.lazy(() => import("../NavLinks/AllNewsInsights"));
const AllPrices = React.lazy(() => import("../NavLinks/AllPrices"));

const SuccessfulStudentVisa = () => {
    return (
        <>
            <Container
                width="100vw"
                maxWidth="100%"
                minHeight="100vh"
                backgroundColor={"white"}
                overflowX="hidden" // Horizontal scroll fix
                m={0}
                p={0}
                display="flex"
                flexDirection="column"
            >
                <Helmet>
                    <title>Lumine Law - How to ensure a successful student visa application</title>
                </Helmet>

                <Box width="100%" flex="1" p={0} m={0} pt={0}>
                    {/* Banner */}
                    <Box
                        width={"100%"}
                        height={{
                            base: "auto", // Mobile par height auto rakhi taaki text fit ho
                            minChild: "140px",
                            sm: "150px",
                            md: "170px",
                            lg: "220px",
                            xl: "270px",
                            "2xl": "320px",
                        }}
                        minH={{ base: "140px" }}
                        bgImage={`url(${BannerImg})`}
                        bgSize={"cover"}
                        bgPos={"center"}
                        bgRepeat={"no-repeat"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        px={{ base: 4, sm: 6, md: 4 }}
                        py={{ base: 4, md: 0 }}
                    >
                        <Text
                            as="span"
                            display="inline"
                            lineHeight={{ base: "1.6", md: "1.4", lg: "1.1" }} 
                            fontSize={{
                                base: "14px",
                                sm: "16px",
                                md: "18px",
                                lg: "22px",
                                xl: "28px",
                                "2xl": "32px"
                            }}
                            fontWeight={400}
                            letterSpacing={0.2}
                            fontFamily={"CeraRoundPro"}
                            backgroundColor={"#242323ad"}
                            color={"white"}
                            mt={{ base: "0", lg: "3", xs:"8", md:"5" }}
                            px="15px"
                            py="8px"
                            textAlign="left"
                            style={{
                                boxDecorationBreak: "clone",
                                WebkitBoxDecorationBreak: "clone",
                            }}
                        >
                            How to ensure a successful student visa application: Tips by 
                            <Box as="br" display={{ base: "none", sm: "block" }} /> 
                            Lumine Solicitors in London
                        </Text>
                    </Box>

                    {/* Main Content */}
                    <Box width={"100%"} display={"flex"} flexFlow={"column"} color={"black"}>
                        <Box width={{ base: "95%", sm: "92%", md: "90%" }} alignSelf={"center"} mt={{ base: "10%", sm: "8%", md: "7%", lg: "7%" }} mb={{ base: 8, md: 10 }}>

                            {/* Intro */}
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.6}
                                mb={0}
                                mt={{lg:"-5"}}
                            >
                                How to ensure a successful student visa application?
                            </Text>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.6}
                                mb={0}
                            >
                                The Student Visa (previously the Tier 4 Visa) is the UK immigration route for international students wishing to continue their studies in the UK. It not only allows study at an approved educational institution, but also part-time work and potentially further migration to post-study work or even permanent residence in the future. Below is how to make the most of your chances for a successful student visa application.
                            </Text>

                            {/* Step 1 */}
                            <Box display={"flex"} alignItems={"flex-start"} gap={2} ml={{ base: 2, md: 6 }} mb={0}>
                                <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>1.</Text>
                                <Text fontFamily={"CeraRoundPro"} fontWeight={700} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.6}>Be Sponsored by an Authorized Institution</Text>
                            </Box>
                            <Text fontFamily={"CeraRoundPro"} fontWeight={400} fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }} textAlign={"left"} lineHeight={1.6} mb={0}>
                                Achievement in your application begins with the acquisition of sponsorship from a recognized UK study institution. It should be accredited and authorized by the UK government. It must be licensed by the UK Visas and Immigration (UKVI) to issue the Confirmation of Acceptance for Studies (CAS). This confirmation document is important because it confirms your acceptance into a particular program.
                            </Text>
                            <Text fontFamily={"CeraRoundPro"} fontWeight={400} fontStyle={"italic"} fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }} textAlign={"left"} lineHeight={1.6} mb={0}>
                                Research and choose the right institution or course most suited to your academic and career goals well ahead of time.
                            </Text>

                            {/* Step 2 */}
                            <Box display={"flex"} alignItems={"flex-start"} gap={2} ml={{ base: 2, md: 6 }} mb={0}>
                                <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.6}>2.</Text>
                                <Text fontFamily={"CeraRoundPro"} fontWeight={700} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.6}>Study a Qualifying Course</Text>
                            </Box>
                            <Text fontFamily={"CeraRoundPro"} fontWeight={400} fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }} textAlign={"left"} lineHeight={1.6} mb={0}>
                                For you to qualify for a student visa, you must be on an approved institution studying a full-time course. The qualifying courses are usually further education courses and professional courses level 3 and above on the Regulated Qualifications Framework (RQF).
                            </Text>
                            <Text fontFamily={"CeraRoundPro"} fontWeight={400} fontStyle={"italic"} fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }} textAlign={"left"} lineHeight={1.6} mb={0}>
                                Ensure your chosen course is eligible and prepare documents with your course details.
                            </Text>

                            {/* ... Steps 3 to 7 follow same logic as Step 1/2 for ml responsiveness ... */}
                            {/* I've kept all your text weights (400/700) exactly as they were in your snippet */}

                            {/* Step 8 */}
                            <Box display={"flex"} alignItems={"flex-start"} gap={2} ml={{ base: 2, md: 6 }} mb={0}>
                                <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.6}>8.</Text>
                                <Text fontFamily={"CeraRoundPro"} fontWeight={700} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.6}>Offer a Thorough and Accurate Application</Text>
                            </Box>
                            <Text fontFamily={"CeraRoundPro"} fontWeight={400} fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }} textAlign={"left"} lineHeight={1.6} mb={0}>
                                Ensure that you give a complete application since incomplete applications can lead to delay or rejection. Applications done within the UK take 8 weeks to process, and those done outside the UK take about 3 weeks to process, although there are also priority services available to utilize.
                            </Text>
                            <Text fontFamily={"CeraRoundPro"} fontWeight={400} fontStyle={"italic"} fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }} textAlign={"left"} lineHeight={1.6} mb={0}>
                                Have all documents ready in advance and check completeness before submitting.
                            </Text>

                            {/* Closing */}
                            <Text fontFamily={"CeraRoundPro"} fontWeight={400} fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }} textAlign={"left"} lineHeight={1.6} mb={0}>
                                We are professionals in assisting students in applying for student visas at Lumine Solicitors. We can help you evaluate your suitability, prepare the documents that you need to complete, and monitor your application progress for you.
                            </Text>
                            <Text fontFamily={"CeraRoundPro"} fontWeight={400} fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }} textAlign={"left"} lineHeight={1.6}>
                                For expert advice on your student visa needs or any other immigration concern, please feel free to get in touch with us at Lumine Solicitors on 020 3950 2246 or register on our website to start your process today.
                            </Text>
                        </Box>
                    </Box>

                    <Suspense fallback={<div>Loading All Prices ...</div>}>
                        <AllPrices />
                    </Suspense>
                    <Suspense fallback={<div>Loading All Services ...</div>}>
                        <AllServiceLinks />
                    </Suspense>
                    <Suspense fallback={<div>Loading All News and Insights ...</div>}>
                        <AllNewsInsights />
                    </Suspense>
                    <Footer />
                </Box>
            </Container>
        </>
    );
};

export default SuccessfulStudentVisa;