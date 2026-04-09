import React, { Suspense } from "react";
import {
    Text,
    Container,
    Box,
    Heading,
} from "@chakra-ui/react";

import Footer from "../Footer/Footer";
import "../../styles/fonts.css";
import BannerImg from "../../assets/pricing/immigration.jpg";
import { Helmet } from "react-helmet";
const AllServiceLinks = React.lazy(() => import("../NavLinks/AllServiceLinks"));
const AllNewsInsights = React.lazy(() => import("../NavLinks/AllNewsInsights"));
const AllPrices = React.lazy(() => import("../NavLinks/AllPrices"));

const StudentVisaGuide = () => {
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
                    <title>Lumine Law - Step by Step Guide for Student Visas in UK</title>
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
                        <Text
                            as="span"
                            display="inline-block"
                            backgroundColor={"#2423237a"}
                            color={"white"}
                            fontFamily={"CeraRoundPro"}
                            fontSize={{
                                base: "16px",
                                sm: "18px",
                                md: "20px",
                                lg: "24px",
                                xl: "30px",
                                "2xl": "34px"
                            }}
                            fontWeight={400}
                            // Letters ko sath chipkane ke liye negative value use karein
                            letterSpacing="-0.5px"
                            px={{ base: "12px", md: "22px" }}
                            py="8px"
                            // Line height thodi kam taake lines bhi aapas mein nazdeek rahein
                            lineHeight={1}
                            textAlign="left"
                            mt={{xs:"9"}}
                        >
                            Step by Step Guide for Student Visas in UK by Lumine
                            <br />
                            solicitors                                                    </Text>
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
                                    base: "15px",
                                    sm: "16px",
                                    md: "17px",
                                    lg: "12px",
                                    xl: "15px",
                                    "2xl": "18px"
                                }}
                                textAlign={"left"}
                                mt={{ base: "10%", sm: "8%", md: "7%", lg: "7%" }}
                                mb={0}
                                letterSpacing={-0.5}
                            >
                                A STEP-BY-STEP GUIDE TO STUDENT VISAS AND THEIR REQUIREMENTS
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
                                mb={0}
                            >
                                Student Visa, or previously Tier 4 Visa, is the route of the United Kingdom{" "}
                                <Text as="span" color={"red.500"}>immigration for students</Text>
                                {" "}who desire to study in the United Kingdom. It provides non-nationals of the UK an opportunity to undertake full-time study in well-established UK institutions for the same period with the advantage of part-time employment while studying. Furthermore, it can provide a gateway to a post-study work visa or even permanent residence in the UK, based on individual circumstances.
                            </Text>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontStyle={"italic"}
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
                                Eligibility Criteria for a{" "}
                                <Text as="span" color={"red.500"}>Student Visa</Text>
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
                                mb={0}
                            >
                                While applying for a Student Visa, the applicants must meet these eligibility criteria:
                            </Text>

                            {/* Sponsorship */}
                            <Box display={"flex"} alignItems={"flex-start"} ml={6} mb={0} gap={2}>
                                <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>•</Text>
                                <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>Sponsorship from a Licensed Sponsor:</Text>
                            </Box>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={0}
                            >
                                Applicants should be admitted by an approved and recognized UK government educational institution. The institutions must be sponsored by UK Visas and Immigration (UKVI), which allows them to issue a Confirmation of Acceptance for Studies (CAS). This is the document that validates the student's acceptance for a specific course.
                            </Text>

                            {/* Course Qualifications */}
                            <Box display={"flex"} alignItems={"flex-start"} ml={6} mb={0} gap={2}>
                                <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>•</Text>
                                <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>Course Qualifications:</Text>
                            </Box>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={0}
                            >
                                Candidates need to take a full-time program of full time in a qualified institution. They are normally those further education programs and professional programs that are leveled at 3 or above in the Regulated Qualifications Framework (RQF).
                            </Text>

                            {/* Financial Terms */}
                            <Box display={"flex"} alignItems={"flex-start"} ml={6} mb={0} gap={2}>
                                <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>•</Text>
                                <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>Financial Terms:</Text>
                            </Box>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={0}
                            >
                                Prospective candidates have to prove themselves financially capable for sustaining themselves for the duration they are staying in the UK by paying for study fees and general expenses.
                            </Text>

                            {/* English */}
                            <Box display={"flex"} alignItems={"flex-start"} ml={6} mb={0} gap={2}>
                                <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>•</Text>
                                <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>Proficiency in the English Language:</Text>
                            </Box>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={0}
                            >
                                Applicants must demonstrate their grasp of the English language by sitting an approved test or by possessing a degree-level qualification with English as the medium of instruction. The minimum is generally set at CEFR level B1, but a higher level may be insisted on by some universities.
                            </Text>

                            {/* Age */}
                            <Box display={"flex"} alignItems={"flex-start"} ml={6} mb={0} gap={2}>
                                <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>•</Text>
                                <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>Age Requirement:</Text>
                            </Box>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={0}
                            >
                                Applicants must be at least 16 years old. Younger students, aged 16 to 17, may apply for a Child Student Visa if they wish to attend school in the UK and require parental consent.
                            </Text>

                            {/* TB Test */}
                            <Box display={"flex"} alignItems={"flex-start"} ml={6} mb={0} gap={2}>
                                <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>•</Text>
                                <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>Tuberculosis (TB) Test:</Text>
                            </Box>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={{lg:"-2"}}
                            >
                                People from specific countries need to submit a TB test certificate during their application process if they are planning on staying for more than six months. The full list of countries can be obtained on the UK government website.
                            </Text>
                        </Box>

                        {/* Section 2 - Rights */}
                        <Box width={{ base: "95%", sm: "92%", md: "90%" }} alignSelf={"center"} mt={{ base: 2, md: 3 }}>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontStyle={"italic"}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={0}
                            >
                                Rights Reserved under the Student Visa
                            </Text>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={0}
                            >
                                People who have been issued a Student Visa can:
                            </Text>

                            <Box display={"flex"} flexDir={"column"} ml={6} mb={0} gap={1}>
                                {[
                                    "Stay in the UK: Residency is allowed until the end of the course.",
                                    "Study: The student can study at the recognized institution",
                                    "Work: The students can work part time during the term and full time during the holidays",
                                    "Bring Family: The student can bring his/her family members with him/her to his/her institution of study."
                                ].map((item, i) => (
                                    <Box key={i} display={"flex"} alignItems={"flex-start"} gap={2}>
                                        <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>•</Text>
                                        <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>{item}</Text>
                                    </Box>
                                ))}
                            </Box>
                        </Box>

                        {/* Section 3 - Application Process */}
                        <Box width={{ base: "95%", sm: "92%", md: "90%" }} alignSelf={"center"} mt={{ base: 2, md: 3 }}>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontStyle={"italic"}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={0}
                                mt={{lg:"-2"}}
                            >
                                Application Process
                            </Text>

                            <Box display={"flex"} flexDir={"column"} ml={6} mb={1} textAlign={"left"} gap={1}>
                                {[
                                    "Confirmation of Acceptance for Studies (CAS): You need to have a CAS from a recognized sponsor",
                                    "Meeting English Requirements: You will be required to provide evidence of your English language.",
                                    "Financial Evidence: Obtain a document showing that you are able to support yourself during your stay in the country.",
                                    "Healthcare Surcharge: The healthcare surcharge is payable; the fee charged varies with the length of the visa.",
                                    "Submission of Application: Applications made within the UK typically take 8 weeks, while those made outside the UK can take around 3 weeks; priority services can be utilized if you prefer an accelerated application."
                                ].map((item, i) => (
                                    <Box key={i} display={"flex"} alignItems={"flex-start"} gap={2}>
                                        <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>•</Text>
                                        <Text fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>{item}</Text>
                                    </Box>
                                ))}
                            </Box>
                        </Box>

                        {/* Section 4 - Seek Help */}
                        <Box width={{ base: "95%", sm: "92%", md: "90%" }} alignSelf={"center"} mt={{ base: 2, md: 3 }} mb={{ base: 8, md: 10 }}>
                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontStyle={"italic"}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                  mb={0}
                                mt={{lg:"-2"}}
                            >
                                Seek Help
                            </Text>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                            >
                                It might be a little tricky to go through the process of a student visa application. At Lumine Solicitors, our experts are here to offer personalized guidance based on your situation. We provide specialist advice, assist you in getting necessary documents, and keep contact with you throughout the course of the application. For assistance on your student visa application or other immigration issues, please do not hesitate to reach out to us at Lumine Solicitors at crownwell road 020 3950 2246 or explore our website.
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

export default StudentVisaGuide;