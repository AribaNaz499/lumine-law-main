import React, { Suspense } from "react";
import {
    Text,
    Container,
    Box,
    Heading
} from "@chakra-ui/react";

import Footer from "../Footer/Footer";
import "../../styles/fonts.css";
import BannerImg from "../../assets/landing/newsInsightThree.jpg";
import { Helmet } from "react-helmet";
const AllServiceLinks = React.lazy(() => import("../NavLinks/AllServiceLinks"));
const AllNewsInsights = React.lazy(() => import("../NavLinks/AllNewsInsights"));
const AllPrices = React.lazy(() => import("../NavLinks/AllPrices"));

const SwitchingVisaCategories = () => {
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
                    <title>Lumine Law - Switching Visa Categories in UK</title>
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
                        bgImage={`url(${BannerImg})`}
                        bgSize={"cover"}
                        bgPos={"center"}
                        bgRepeat={"no-repeat"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        px={{ base: 2, sm: 3, md: 4 }}
                    >
                        <Box
                            width={"90%"}
                            mx="auto"
                            mt={{ base: 0, lg: "-12" }}
                        ><Text
                            as="span"
                            display="inline-block"
                            backgroundColor={"#2423237a"}
                            color={"white"}
                            fontFamily={"CeraRoundPro"}
                            fontSize={{
                                base: "14px",
                                sm: "16px",
                                md: "18px",
                                lg: "22px",
                                xl: "28px",
                                "2xl": "32px"
                            }}
                            fontWeight={400}
                            letterSpacing="-0.5px"
                            px={{ base: "12px", md: "22px" }}
                            py="8px"
                            lineHeight={1}
                            textAlign="left"
                            mt={{xs:"8"}}
                        >
                                All about switching Visa Categories from within the UK- Tips
                                <br />
                                by Lumine Solicitors in London
                            </Text>
                        </Box>
                    </Box>

                    {/* Main Content */}
                  <Box width={"100%"} display={"flex"} flexFlow={"column"} color={"black"}>

    {/* Section 1 */}
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
            mt={{ base: "10%", sm: "8%", md: "7%", lg: "7%" }}
        >
            SWITCHING VISA CATEGORIES FROM WITHIN THE UK
        </Heading>

        <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7} mt={1} mb={{lg:"-2"}} textAlign={"left"}>–</Text>

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
            mt={1}
        >
            Switching of visa categories in the UK implies the process under which a UK individual changes immigration status from one category to another of visas without going out of the country. Opportunities under the UK immigration system include a variety that would allow persons to switch to visa categories when the need is felt to continue in the UK for other work or study, family, etc.
        </Text>
    </Box>

    {/* Section 2 - General Eligibility */}
    <Box width={{ base: "95%", sm: "92%", md: "90%" }} alignSelf={"center"} mt={{ base: 5, md: 6 }}>
               <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7} mt={-5} mb={{lg:"-2"}} textAlign={"left"}>–</Text>

        <Heading
            as={"h3"}
            fontFamily={"CeraRoundPro"}
            fontWeight={700}
            color={"black"}
            fontSize={{
                base: "15px",
                sm: "16px",
                md: "17px",
                lg: "12px",
                xl: "15px",
                "2xl": "18px"
            }}
            textAlign={"left"}
        >
            General Eligibility for Change of Visa Categories
        </Heading>

        <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7} mt={1} textAlign={"left"}>–</Text>

        <Text
            fontFamily={"CeraRoundPro"}
            fontSize={{
                base: "12px",
                sm: "12px",
                md: "13px",
                lg: "14px",
                xl: "14px",
                "2xl": "16px"
            }}
            textAlign={"left"}
            lineHeight={1.6}
            mb={0}
        >
            <Text as="span" fontWeight={700}>1. Valid Visa Status: </Text>
            For a change of visa category, you must be in the UK and holding a valid visa. If your visa has expired, you will need to apply for a new visa from outside the UK, as you can only switch your visa status while your current visa is valid.
        </Text>

        <Text
            fontFamily={"CeraRoundPro"}
            fontSize={{
                base: "12px",
                sm: "12px",
                md: "13px",
                lg: "14px",
                xl: "14px",
                "2xl": "16px"
            }}
            textAlign={"left"}
            lineHeight={1.6}
            mb={0}
        >
            <Text as="span" fontWeight={700}>2. Eligibility criteria of the new visa category: </Text>
            Every visa category has its eligibility criteria. For example, if you are switching to a Skilled Worker Visa, you will need a job offer from a licensed sponsor, whereas switching to a Spouse Visa requires evidence of a genuine relationship and meeting certain financial thresholds. You must meet the requirements of the visa you are applying to switch to.
        </Text>

        <Text
            fontFamily={"CeraRoundPro"}
            fontSize={{
                base: "12px",
                sm: "12px",
                md: "13px",
                lg: "14px",
                xl: "14px",
                "2xl": "16px"
            }}
            textAlign={"left"}
            lineHeight={1.6}
            mb={0}
        >
            <Text as="span" fontWeight={700}>3. Not every type of UK Visa allows switching there: </Text>
            Some types may not allow within the UK as a switch route. For example, people here on Visitor's Visa cannot even switch to different other visa categories as a switch visa in the United Kingdom. So a few other countries' visas and requirements might keep these people to seek a visa switch from their parent country.
        </Text>

        <Text
            fontFamily={"CeraRoundPro"}
            fontSize={{
                base: "12px",
                sm: "12px",
                md: "13px",
                lg: "14px",
                xl: "14px",
                "2xl": "16px"
            }}
            textAlign={"left"}
            lineHeight={1.6}
        >
            <Text as="span" fontWeight={700}>4. Time: </Text>
            Changing your visa needs to be done prior to your visa expiring. You could technically fall foul of the immigration laws, thus risking deportation or being prohibited from returning to the UK, in case you apply for the new visa once your existing visa is close to expiration.
        </Text>
    </Box>

    {/* Section 3 - Typical Visa Options */}
    <Box width={{ base: "95%", sm: "92%", md: "90%" }} alignSelf={"center"} mt={{ base: 5, md: 6 }}>
                <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7} mt={{lg:"-4"}}  textAlign={"left"}>–</Text>

        <Heading
            as={"h3"}
            fontFamily={"CeraRoundPro"}
            fontWeight={700}
            color={"black"}
            fontSize={{
                base: "15px",
                sm: "16px",
                md: "17px",
                lg: "12px",
                xl: "15px",
                "2xl": "18px"
            }}
            textAlign={"left"}
        >
            Typical Visa Options That You May Be Eligible For
        </Heading>

                <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7} mt={{lg:"-2"}}  textAlign={"left"}>–</Text>

        <Text
            fontFamily={"CeraRoundPro"}
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
            mb={0}
        >
            <Text as="span" fontWeight={700}>1. Skilled Worker Visa: </Text>
            You might be eligible for a Skilled Worker Visa if you are currently in the UK on another kind of visa and an employer with a sponsor license has offered you a job. Under this route, you can work in the UK for up to 5 years.
        </Text>

        <Text
            fontFamily={"CeraRoundPro"}
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
            mb={0}
        >
            <Text as="span" fontWeight={700}>2. Spouse Visa: </Text>
            Those holding visas such as the Student Visa or Tier 2 (General) Visa can apply for a Spouse Visa if they marry a UK citizen or a settled person.
        </Text>

        <Text
            fontFamily={"CeraRoundPro"}
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
            mb={0}
        >
            <Text as="span" fontWeight={700}>3. Student Visa: </Text>
            If you are in the UK on a different visa, like a Tier 4 (General) Student Visa, and you want to study further, you can change your visa to a Student Visa. However, you have to fulfill the requirements of the course, provide proof of funds, and get a Confirmation of Acceptance for Studies (CAS).
        </Text>

        <Text
            fontFamily={"CeraRoundPro"}
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
            mb={0}
        >
            <Text as="span" fontWeight={700}>4. Visitor Visa to Marriage Visa: </Text>
            If you are in the UK on a Visitor Visa and get married or enter into a civil partnership with a UK citizen or a settled person, you may be able to switch to a Spouse Visa or Fiancé(e) Visa, subject to certain conditions.
        </Text>

        <Text
            fontFamily={"CeraRoundPro"}
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
            mb={0}
        >
            <Text as="span" fontWeight={700}>5. Global Talent Visa: </Text>
            Those with significant achievements or expertise in science, engineering, humanities, medicine, digital technology, or the arts, who already in the UK on another visa, can switch to a Global Talent Visa.
        </Text>

        <Text
            fontFamily={"CeraRoundPro"}
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
            <Text as="span" fontWeight={700}>6. Graduate Visa: </Text>
            This is if one is in the UK on a Student Visa. After finishing the degree-level course, one can be allowed to apply for a change of status in order to switch for a Graduate Visa, which is allowed to remain in the UK for up to 2 years to work or look for work following studies.
        </Text>
    </Box>

    {/* Final Section */}
    <Box width={{ base: "95%", sm: "92%", md: "90%" }} alignSelf={"center"} mt={{ base: 5, md: 6 }} mb={{ base: 8, md: 10 }}>
        <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} textAlign={"left"} lineHeight={1.7} mb={1} mt={{lg:"-4"}}>–</Text>
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
            For personalized assistance with your legal needs, contact us or visit Lumine for expert guidance tailored to your specific situation. Our experienced team is here to help you navigate the complexities with confidence and ease.
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

export default SwitchingVisaCategories;