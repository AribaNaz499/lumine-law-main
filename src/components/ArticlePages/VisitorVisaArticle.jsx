import React, { Suspense } from "react";
import {
    Text,
    Container,
    Box,
    HStack,
    VStack,
    Grid,
    GridItem,
    Flex,
    Heading
} from "@chakra-ui/react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../../styles/fonts.css";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import ImmigrationImg from "../../assets/pricing/property-prices.webp";
import ResidentialImg from "../../assets/pricing/immigration.webp";
import BannerImg from "../../assets/landing/newsInsightTwo.webp";
import { Helmet } from "react-helmet";
const AllServiceLinks = React.lazy(() => import("../NavLinks/AllServiceLinks"));
const AllNewsInsights = React.lazy(() => import("../NavLinks/AllNewsInsights"));
const AllPrices = React.lazy(() => import("../NavLinks/AllPrices"));


const Evisa = () => {
    const [purchaseState, setPurchaseState] = useState(false);
    const [disbursementsState, setDisbursementsState] = useState(false);
    const [serviceState, setServiceState] = useState(false);
    const [leaseholdState, setLeaseholdState] = useState(false);
    const [houseState, setHouseState] = useState(false);
    const [residentialState, setResidentialState] = useState(false);
    const [timescaleState, setTimescaleState] = useState(false);

    return (
        <>
            <Container
                width="100vw"
                maxWidth="100%"
                minHeight="100vh"
                backgroundColor={"white"}
                overflow="auto"
                m={0}
                p={0}
                display="flex"
                flexDirection="column"
            >
                <Helmet>
                    <title>Lumine Law - Visitor Visa in UK</title>
                </Helmet>

                <Box width="100%" flex="1" p={0} m={0} pt={0}>
                    {/* Banner */}
                    <Box
                        width={"100%"}
                        height={{
                            base: "140px",
                            sm: "150px",
                            md: "160px",
                            lg: "210px",
                            xl: "260px",
                            "2xl": "310px",
                        }}
                        bgImage={` url(${BannerImg})`}
                        bgSize={"cover"}
                        bgPos={"center"}
                        bgRepeat={"no-repeat"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        _loading={"eager"}
                        px={{ base: 2, sm: 3, md: 4 }}
                    >
                        <Text
                            as="span"
                            display="inline-block"
                            fontSize={{ 
                                base: "16px",
                                sm: "18px",
                                md: "20px",
                                lg: "24px",
                                xl: "30px",
                                "2xl": "34px"
                            }}
                            fontWeight={400}
                            letterSpacing={1.1}
                            fontFamily={"CeraRoundPro"}
                            backgroundColor={"#2423236b"}
                            mt={{ base: 0, xs:"7", lg: "-6" }}
                            px={{ base: "6px", sm: "8px", md: "10px" }}
                            py={{ base: "2px", sm: "3px", md: "4px" }}
                            textAlign="center"
                            lineHeight={{ base: "1.3", md: "1.4" }}
                        >
                            All you need to know about Visitor Visa in UK
                        </Text>
                    </Box>

                    {/* Main Content Area */}
                    <Box
                        width={"100%"}
                        display={"flex"}
                        flexFlow={"column"}
                        color={"black"}
                    >
                        {/* Section 1: Intro and Parliament Links */}
                        <Box width={{ base: "95%", sm: "92%", md: "90%" }} alignSelf={"center"}>
                            <Heading
                                as={"h3"}
                                fontFamily={"CeraRoundPro"}
                                fontWeight={700}
                                color={"black"}
                                fontSize={{ 
                                    base: "18px",
                                    sm: "20px",
                                    md: "22px",
                                    lg: "12px",
                                    xl: "16px",
                                    "2xl": "22px"
                                }}
                                textAlign={"left"}
                                mt={{ base: "10%", sm: "8%", md: "7%", lg: "7%", xs: "7" }}
                            >
                                Visitor Visa in UK
                            </Heading>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ 
                                    base: "12px",
                                    sm: "12px",
                                    md: "13px",
                                    lg: "14px",
                                    xl: "14px",
                                    "2xl": "16px"
                                }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={{ base: 3, md: 0 }}
                            >
                                A UK Visitor Visa is a short-stay visa granted to applicants who want to travel to the United Kingdom for purposes of tourism, business, visiting relatives, or for other specified reasons such as attending a conference or for medical treatment. The standard visitor visa typically allows for a stay of up to 6 months, with some exceptions, such as for medical treatment or long-term visitor visas, which allow for multiple entries over a period of 2, 5, or 10 years.
                            </Text>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ 
                                    base: "12px",
                                    sm: "12px",
                                    md: "13px",
                                    lg: "14px",
                                    xl: "14px",
                                    "2xl": "16px"
                                }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={{ base: 3, md: 0 }}
                            >
                                Ineligibility Requirements Eligible persons need to present intentions and reasons of eligibility such as that of proving one's genuineness, especially being visitors to the country. One's leave from the UK is established and confirmed on exiting the nation. One will demonstrate having substantial funds for all costs incurred over his period of stay without depending on public funds throughout their stay.
                            </Text>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ 
                                    base: "12px",
                                    sm: "12px",
                                    md: "13px",
                                    lg: "14px",
                                    xl: "14px",
                                    "2xl": "16px"
                                }}
                                textAlign={"left"}
                                lineHeight={1.7}
                            >
                                _
                            </Text>

                        </Box>

                        {/* Section 2: Official News and Social Media */}
                        <Box width={{ base: "95%", sm: "92%", md: "90%" }} alignSelf={"center"} mt={{ base: 4, sm: 5, md: 6 }}>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ 
                                    base: "12px",
                                    sm: "12px",
                                    md: "13px",
                                    lg: "14px",
                                    xl: "14px",
                                    "2xl": "16px"
                                }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mt={{ base: 0, lg: "-6", md: "-5", xs: "-6" }}
                                mb={{ base: 3, md: 0 }}
                            >
                                In applying for a UK Visitor Visa, an applicant needs to apply using the online application form available at the UKVI website. This process involves submitting a variety of documents, including proof of the purpose of the visit, such as invitation letters or event details, proof of sufficient funds to cover the stay, accommodation details, and evidence that they have ties to their home country, ensuring they intend to return after their visit. Once the online application is completed, applicants are expected to book an appointment to provide biometric information, such as fingerprints and a photograph, at a visa application center.
                            </Text>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ 
                                    base: "12px",
                                    sm: "12px",
                                    md: "13px",
                                    lg: "14px",
                                    xl: "14px",
                                    "2xl": "16px"
                                }}
                                textAlign={"left"}
                                lineHeight={1.7}
                            >
                                _

                            </Text>
                        </Box>

                        {/* Section 3: Transition Details and BRP Info */}
                        <Box width={{ base: "95%", sm: "92%", md: "90%" }} alignSelf={"center"} mb={{ base: 6, sm: 8, md: 10 }}>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ 
                                    base: "12px",
                                    sm: "12px",
                                    md: "13px",
                                    lg: "14px",
                                    xl: "14px",
                                    "2xl": "16px"
                                }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={{ base: 3, md: 0 }}
                            >
                                The standard fee for a visitor visa is usually £100, although this may vary depending on the type of visa or the duration. After the application has been submitted, the processing time is usually about 3 weeks.
                            </Text>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ 
                                    base: "12px",
                                    sm: "12px",
                                    md: "13px",
                                    lg: "14px",
                                    xl: "14px",
                                    "2xl": "16px"
                                }}
                                textAlign={"left"}
                                lineHeight={1.7}
                            >
                                _

                            </Text>
                        </Box>
                        {/* Section 4 */}
                        <Box width={{ base: "95%", sm: "92%", md: "90%" }} alignSelf={"center"} mb={{ base: 6, sm: 8, md: 10 }}>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ 
                                    base: "12px",
                                    sm: "12px",
                                    md: "13px",
                                    lg: "14px",
                                    xl: "14px",
                                    "2xl": "16px"
                                }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mt={{ base: 0, lg: "-9" }}
                                mb={{ base: 3, md: 0 }}
                            >
                                While in the UK on a visitor visa, there are certain conditions that must be adhered to, such as not engaging in work or full-time study. The visa is for short-term visits, and visitors are expected to leave the UK at the end of their permitted stay. Extensions to the visitor visa are not common and are usually granted only in exceptional circumstances, such as ongoing medical treatment. In addition, visitors should be able to prove they have health insurance that is not actually mandatory, and they must provide proof of accommodation arrangements, such as hotel bookings or letters from friends or family. If the application is refused the applicant is informed of the reasons and can either appeal to have the decision overturned or reapply with additional documentation.
                            </Text>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ 
                                    base: "12px",
                                    sm: "12px",
                                    md: "13px",
                                    lg: "14px",
                                    xl: "14px",
                                    "2xl": "16px"
                                }}
                                textAlign={"left"}
                                lineHeight={1.7}
                            >
                                _

                            </Text>
                        </Box>
                        <Box width={{ base: "95%", sm: "92%", md: "90%" }} alignSelf={"center"} mb={{ base: 6, sm: 8, md: 10 }}>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ 
                                    base: "12px",
                                    sm: "12px",
                                    md: "13px",
                                    lg: "14px",
                                    xl: "14px",
                                    "2xl": "16px"
                                }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mt={{ base: 0, lg: "-9" }}
                                mb={{ base: 3, md: 0 }}
                            >
                                In a nutshell, the UK Visitor Visa is one of the most important routes for people who want to visit the UK for short stays for various reasons. Applicants must ensure they meet all eligibility criteria, submit the required documentation, and adhere to the conditions of their visa to avoid complications during their stay. It is, therefore, advisable for those who would want to apply for this visa to seek the services of an immigration advisor or legal professional to ensure compliance with the rules and increase the chances of a successful application.

                            </Text>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ 
                                    base: "12px",
                                    sm: "12px",
                                    md: "13px",
                                    lg: "14px",
                                    xl: "14px",
                                    "2xl": "16px"
                                }}
                                textAlign={"left"}
                                lineHeight={1.7}
                            >
                                _

                            </Text>
                        </Box>

                        <Box width={{ base: "95%", sm: "92%", md: "90%" }} alignSelf={"center"} mb={{ base: 6, sm: 8, md: 10 }}>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ 
                                    base: "12px",
                                    sm: "12px",
                                    md: "13px",
                                    lg: "14px",
                                    xl: "14px",
                                    "2xl": "16px"
                                }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mt={{ base: 0, lg: "-9" }}
                            >
                                For personalized assistance with your legal needs, contact us or visit Lumine for expert guidance tailored to your specific situation. Our experienced team is here to help you navigate the complexities with confidence and ease.
                            </Text>
                        </Box>
                    </Box>
                    {/* Prices */}
                    <Suspense fallback={<div>Loading All Prices ...</div>}>
                        <AllPrices />
                    </Suspense>

                    {/* All Services */}
                    <Suspense fallback={<div>Loading All Services ...</div>}>
                        <AllServiceLinks />
                    </Suspense>

                    {/* News and Insights */}
                    <Suspense fallback={<div>Loading All News and Insights ...</div>}>
                        <AllNewsInsights />
                    </Suspense>

                    <Footer />
                </Box>
            </Container>
        </>
    );
};

export default Evisa;