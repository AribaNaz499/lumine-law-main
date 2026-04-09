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
import BannerImg from "../../assets/landing/newsInsightsFour.jpg";
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
                    <title>Lumine Law Debt Recovery Prices </title>
                </Helmet>

                <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
                    {/* Banner */}
                    <Box
                        width={"100%"}
                        height={{
                            xs: "150px",
                            lg: "200px",
                            xl: "250px",
                            "2xl": "300px",
                        }}
                        bgImage={ `url(${BannerImg})`}
                        bgSize={"cover"}
                        bgPos={"center"}
                        bgRepeat={"no-repeat"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        _loading={"eager"}
                    >
                        <Text
                            as="span" // Ise span ki tarah treat karein
                            display="inline-block" // Taake background sirf content tak rahe
                            fontSize={{ base: "25px", lg: "25px", xl: "31px", "2xl": "35px" }}
                            fontWeight={400}
                            letterSpacing={1.1}
                            fontFamily={"CeraRoundPro"}
                            backgroundColor={"#2423236b"}
                            mt={{ lg: "-12" }}
                            px="8px" // Thodi side padding taake background bilkul chipka hua na lage
                            borderRadius="4px" // Optional: thode corners soft karne ke liye
                        >
                            Key Updates Regarding the UK's Transition to eVisas
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
                        <Box width={"90%"} alignSelf={"center"}>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ xs: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                mt={{ lg: "7%", xs:"7" }}
                                lineHeight={1.7}
                            >
                                Over 4 million UK visa holders have successfully set up their UKVI account to access their eVisa, according to the latest Home Office data. However, an estimated 600,000 people still need to complete this process. If you haven’t done so yet, now is the time to act.
                            </Text>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ xs: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                             lineHeight={1.7}
                                
                                
                            >
                                Setting up your UKVI account is quick and simple—just visit{" "}
                                <Text
                                    as="a"
                                    href="https://www.gov.uk/guidance/online-immigration-status-evisa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    fontWeight={400}
                                    color="#E91E63"
                                    _hover={{ color: "blue.500", textDecoration: "underline" }}
                                    cursor="pointer"
                                >
                                    https://www.gov.uk/guidance/online-immigration-status-evisa
                                </Text>{" "}
                                to get started.
                            </Text>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ xs: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                 lineHeight={1.7}
                    
                            >
                                For further details, you can check out the latest updates from the UK Parliament:{" "}
                                <Text
                                    as="a"
                                    href="https://questions-statements.parliament.uk/written-statements/detail/2025-02-27/hcws482"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    fontWeight={400}
                                    color="#E91E63"
                                    _hover={{ color: "blue.500", textDecoration: "underline" }}
                                    cursor="pointer"
                                >
                                    https://questions-statements.parliament.uk/written-statements/detail/2025-02-27/hcws482
                                </Text>
                            </Text>
                        </Box>

                        {/* Section 2: Official News and Social Media */}
                        <Box width={"90%"} alignSelf={"center"} mt={6}>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ xs: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mt={{lg:"-6", md:"-5", xs:"-6"}}
                            >
                                Official government news:{" "}
                                <Text
                                    as="a"
                                    href="https://www.gov.uk/government/news/millions-have-now-taken-action-to-access-their-evisa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    fontWeight={400}
                                    color="#E91E63"
                                    _hover={{ color: "blue.500", textDecoration: "underline" }}
                                    cursor="pointer"
                                >
                                    https://www.gov.uk/government/news/millions-have-now-taken-action-to-access-their-evisa
                                </Text>
                            </Text>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ xs: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                 lineHeight={1.7}
                                
                            >
                                Home Office announcement:{" "}
                                <Text
                                    as="a"
                                    href="https://x.com/ukhomeoffice/status/1895162625111073199"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    fontWeight={400}
                                    color="#E91E63"
                                    _hover={{ color: "blue.500", textDecoration: "underline" }}
                                    cursor="pointer"
                                >
                                    https://x.com/ukhomeoffice/status/1895162625111073199
                                </Text>
                            </Text>
                        </Box>

                        {/* Section 3: Transition Details and BRP Info */}
                        <Box width={"90%"} alignSelf={"center"} mb={10}>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ xs: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                 lineHeight={1.7}
                            >
                                To ensure a smooth transition, the Home Office has extended the grace period for people using a Biometric Residence Permit (BRP) or an EUSS Biometric Residence Card (BRC). If your BRP or BRC expired on or after 31 December 2024, you can continue using it for international travel until 1 June 2025. However, from 2 June 2025, expired BRPs and BRCs will no longer be accepted as proof of immigration status when entering the UK. If you’re traveling, make sure to link your passport or travel document to your eVisa before your trip by visiting{" "}
                                <Text
                                    as="a"
                                    href="https://www.gov.uk/update-uk-visas-immigration-account-details"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    fontWeight={400}
                                    color="#E91E63"
                                    _hover={{ color: "blue.500", textDecoration: "underline" }}
                                    cursor="pointer"
                                >
                                    https://www.gov.uk/update-uk-visas-immigration-account-details
                                </Text>
                                . Additionally, you may wish to generate a share code in advance, valid for 90 days, which can be done at{" "}
                                <Text
                                    as="a"
                                    href="https://www.gov.uk/view-prove-immigration-status"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    fontWeight={400}
                                    color="#E91E63"
                                    _hover={{ color: "blue.500", textDecoration: "underline" }}
                                    cursor="pointer"
                                >
                                    https://www.gov.uk/view-prove-immigration-status
                                </Text>
                                .
                            </Text>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ xs: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                 lineHeight={1.7}
                                
                            >
                                Updating personal details, such as a name change due to marriage, is now easier than ever with a new automated online process. This update eliminates the need to send physical documents to the Home Office and allows changes to be made online, free of charge. The service is available 24/7, both inside and outside the UK. You can update your details by visiting{" "}
                                <Text
                                    as="a"
                                    href="https://www.gov.uk/update-uk-visas-immigration-account-details"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    fontWeight={400}
                                    color="#E91E63"
                                    _hover={{ color: "blue.500", textDecoration: "underline" }}
                                    cursor="pointer"
                                >
                                    https://www.gov.uk/update-uk-visas-immigration-account-details
                                </Text>
                                .
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
