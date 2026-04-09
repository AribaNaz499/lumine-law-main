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
import { GrAnalytics } from "react-icons/gr";
const AllServiceLinks = React.lazy(() => import("../NavLinks/AllServiceLinks"));
const AllNewsInsights = React.lazy(() => import("../NavLinks/AllNewsInsights"));
const AllPrices = React.lazy(() => import("../NavLinks/AllPrices"));

const UKStudentVisaGuide = () => {
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
                    <title>Lumine Law - UK Student Visa: Your Complete Guide to Studying in the UK</title>
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
                            color={"white"}
                            mt={{ base: 0, lg: "-5", xs:"8" }}
                            px={{ base: "6px", sm: "8px", md: "10px" }}
                            py={{ base: "2px", sm: "3px", md: "4px" }}
                            textAlign="left"
                            lineHeight={1.1}  // ← 1.2, 1.1, 1.0, ya 0.9 nahi, sirf positive

                        >
                            UK Student Visa: Your Complete Guide to Studying in the <br /> UK
                        </Text>
                    </Box>

                    {/* Main Content */}
                    <Box width={"100%"} display={"flex"} flexFlow={"column"} color={"black"}>
                        <Box width={{ base: "95%", sm: "92%", md: "90%" }} alignSelf={"center"}>

                            {/* Main Heading */}
                            <Heading
                                as={"h1"}
                                fontFamily={"CeraRoundPro"}
                                fontWeight={700}
                                color={"gray.700"}
                                fontSize={{ base: "26px", sm: "28px", md: "32px", lg: "34px", xl: "36px", "2xl": "40px" }}
                                textAlign={"left"}
                                mt={{ base: "10%", sm: "8%", md: "7%", lg: "7%" }}
                                mb={1}
                                lineHeight={1.1}
                                maxW={{ base: "100%", sm: "95%", md: "90%" }}  // ← Width limit karo
                                alignSelf="center"
                            >
                                UK Student Visa: Your Complete Guide to Studying in the UK
                            </Heading>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={1}
                            >
                                The <Text as="span" fontWeight={700} color={"gray.800"}>UK Student Visa</Text>, formerly known as the <Text as="span" color={"gray.800"} fontWeight={700}>Tier 4 Visa</Text>, is the official immigration route for international students who wish to pursue education in the United Kingdom. This visa allows students to study at licensed institutions, work part-time, and potentially transition to a post-study work visa or permanent residency. If you are planning to study in the UK, understanding the visa process is crucial to ensuring a smooth transition. In this article, we cover everything you need to know about obtaining a UK Student Visa, including eligibility criteria, the application process, financial requirements, and more.
                            </Text>

                            {/* Types */}
                            <Heading
                                as={"h2"}
                                fontFamily={"CeraRoundPro"}
                                fontWeight={700}
                                color={"gray.700"}
                                fontSize={{ base: "19px", sm: "21px", md: "23px", lg: "25px", xl: "27px", "2xl": "29px" }}
                                textAlign={"left"}
                                mb={1}
                            >
                                Types of UK Student Visas
                            </Heading>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={1}
                            >
                                Before applying, it's important to know which student visa category suits your study plans:
                            </Text>

                            <Box display={"flex"} flexDir={"column"} ml={6} mb={3} gap={0.9}  textAlign={"left"}>
                                {[
                                    { bold: "Student Visa", rest: ": This is for individuals aged 16 and above who plan to pursue full-time courses at a recognized UK educational institution." },
                                    { bold: "Child Student Visa", rest: ": Designed for children aged 4-17 who wish to study at an independent school in the UK." },
                                    { bold: "Short-term Study Visa", rest: ": Suitable for students enrolling in English language courses lasting up to 11 months." },
                                ].map((item, i) => (
                                    <Box key={i} display={"flex"} alignItems={"flex-start"} gap={2}  textAlign={"left"}>
                                        <Text  textAlign={"left"} fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>•</Text>
                                        <Text  textAlign={"left"} fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>
                                            <Text as="span" fontWeight={700}>{item.bold}</Text>{item.rest}
                                        </Text>
                                    </Box>
                                ))}
                            </Box>

                            {/* Eligibility */}
                            <Heading
                                as={"h2"}
                                fontFamily={"CeraRoundPro"}
                                fontWeight={700}
                                color={"gray.700"}
                                fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px", xl: "26px", "2xl": "28px" }}
                                textAlign={"left"}
                                mb={1}
                            >
                                Eligibility Criteria for a UK Student Visa
                            </Heading>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={1}
                            >
                                To qualify for a UK Student Visa, applicants must meet certain eligibility requirements:
                            </Text>

                            <Box display={"flex"} flexDir={"column"} ml={6} mb={5} gap={2} textAlign={"left"}>
                                {[
                                    { bold: "Sponsorship from a Licensed Institution", rest: ": The student must receive an offer from a UKVI-approved educational institution. Once accepted, the institution will issue a ", bold2: "Confirmation of Acceptance for Studies (CAS)", rest2: ", a crucial document for the visa application." },
                                    { bold: "Course Qualification Requirements", rest: ": The selected course must be a ", bold2: "full-time program", rest2: " and meet the required education level, such as an undergraduate or postgraduate degree, a foundation course, or a further education program at Level 3 or higher (RQF standard)." },
                                    { bold: "Financial Requirements", rest: ": The applicant must provide evidence of sufficient funds to cover ", bold2: "tuition fees and living expenses", rest2: " for the entire course duration. The amount required depends on the location of the university, with students in London needing more funds than those in other parts of the UK." },
                                    { bold: "English Language Proficiency", rest: ": Proof of English proficiency is mandatory. Most students take an ", bold2: "approved English language test", rest2: " like IELTS, but exemptions apply if the applicant has previously studied in English." },
                                    { bold: "Age Requirement", rest: ": Applicants must be at least ", bold2: "16 years old", rest2: " to apply for a UK Student Visa." },
                                    { bold: "Tuberculosis (TB) Test Requirement", rest: ": Students from certain countries must provide a ", bold2: "TB test certificate", rest2: " if staying in the UK for more than six months. A list of countries requiring this test is available on the UK government's official website." },
                                ].map((item, i) => (
                                    <Box key={i} display={"flex"} alignItems={"flex-start"} gap={2}  textAlign={"left"}>
                                        <Text  textAlign={"left"} fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>•</Text>
                                        <Text textAlign={"left"} fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>
                                            <Text as="span" textAlign={"left"} fontWeight={700}>{item.bold}</Text>{item.rest}
                                            {item.bold2 && <Text as="span" fontWeight={700}>{item.bold2}</Text>}
                                            {item.rest2 && item.rest2}
                                        </Text>
                                    </Box>
                                ))}
                            </Box>

                            {/* Application Process */}
                            <Heading
                                as={"h2"}
                                fontFamily={"CeraRoundPro"}
                                fontWeight={700}
                                color={"gray.700"}
                                fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px", xl: "26px", "2xl": "28px" }}
                                textAlign={"left"}
                                mb={1}
                            >
                                Application Process for a UK Student Visa
                            </Heading>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={1}
                            >
                                Applying for a UK Student Visa involves several steps:
                            </Text>

                            <Box display={"flex"} flexDir={"column"} ml={6} mb={2} gap={1}  textAlign={"left"}>
                                {[
                                    { num: "1.", bold: "Receive a CAS (Confirmation of Acceptance for Studies)", rest: " from your university." },
                                    { num: "2.", bold: "Complete the online application", rest: " on the UK Home Office website." },
                                    { num: "3.", bold: "Pay the visa fee", rest: " and the Immigration Health Surcharge (IHS)." },
                                    { num: "4.", bold: "Submit the required documents", rest: ", including financial proof and English test results." },
                                    { num: "5.", bold: "Schedule and attend a biometric appointment", rest: " at a visa application center." },
                                    { num: "6.", bold: "Wait for a decision", rest: ", which typically takes 3-8 weeks." },
                                ].map((item, i) => (
                                    <Box key={i} display={"flex"} alignItems={"flex-start"} gap={2}  textAlign={"left"}>
                                        <Text  textAlign={"left"} fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7} minW={"20px"}>{item.num}</Text>
                                        <Text  textAlign={"left"} fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>
                                            <Text  textAlign={"left"} as="span" fontWeight={700}>{item.bold}</Text>{item.rest}
                                        </Text>
                                    </Box>
                                ))}
                            </Box>

                            {/* Required Documents */}
                            <Heading
                                as={"h2"}
                                fontFamily={"CeraRoundPro"}
                                fontWeight={700}
                                color={"gray.700"}
                                fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px", xl: "26px", "2xl": "28px" }}
                                textAlign={"left"}
                                mb={1}
                            >
                                Required Documents for Application
                            </Heading>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={2}
                            >
                                To ensure a successful application, students must submit the following documents:
                            </Text>

                            <Box display={"flex"} flexDir={"column"} ml={6} mb={2} gap={1}  textAlign={"left"}>
                                {[
                                    { bold: "A valid passport", rest: "" },
                                    { bold: "CAS letter", rest: " from a licensed UK institution" },
                                    { bold: "Proof of financial support", rest: " (such as bank statements)" },
                                    { bold: "English language test results", rest: " (if required)" },
                                    { bold: "TB test certificate", rest: " (if applicable)" },
                                    { bold: "Parental consent", rest: " (for applicants under 18)" },
                                ].map((item, i) => (
                                    <Box key={i} display={"flex"} alignItems={"flex-start"} gap={2}  textAlign={"left"}>
                                        <Text   textAlign={"left"} fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>•</Text>
                                        <Text   textAlign={"left"} fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>
                                            <Text as="span" fontWeight={700}>{item.bold}</Text>{item.rest}
                                        </Text>
                                    </Box>
                                ))}
                            </Box>

                            {/* Cost */}
                            <Heading
                                as={"h2"}
                                fontFamily={"CeraRoundPro"}
                                fontWeight={700}
                                color={"gray.700"}
                                fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px", xl: "26px", "2xl": "28px" }}
                                textAlign={"left"}
                                mb={1}
                            >
                                Cost of Applying for a UK Student Visa
                            </Heading>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={2}
                            >
                                The cost of applying for a <Text as="span" fontWeight={700}>UK Student Visa</Text> includes:
                            </Text>

                            <Box display={"flex"} flexDir={"column"} ml={6} mb={2} gap={1}  textAlign={"left"}>
                                {[
                                    { bold: "Visa application fee", rest: ": £490" },
                                    { bold: "Healthcare surcharge", rest: ": Approximately £470 per year" },
                                    { bold: "Additional costs", rest: ": These may include English proficiency tests, TB test fees, and biometric appointment charges." },
                                ].map((item, i) => (
                                    <Box  textAlign={"left"} key={i} display={"flex"} alignItems={"flex-start"} gap={2}>
                                        <Text  textAlign={"left"} fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>•</Text>
                                        <Text  textAlign={"left"} fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>
                                            <Text  textAlign={"left"} as="span" fontWeight={700}>{item.bold}</Text>{item.rest}
                                        </Text>
                                    </Box>
                                ))}
                            </Box>

                            {/* Working */}
                            <Heading
                                as={"h2"}
                                fontFamily={"CeraRoundPro"}
                                fontWeight={700}
                                color={"gray.700"}
                                fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px", xl: "26px", "2xl": "28px" }}
                                textAlign={"left"}
                                mb={1}
                            >
                                Working While Studying in the UK
                            </Heading>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={1}
                            >
                                International students on a <Text as="span" fontWeight={700}>UK Student Visa</Text> have certain work rights:
                            </Text>

                            <Box display={"flex"} flexDir={"column"} ml={6} mb={2} gap={1}  textAlign={"left"}>
                                {[
                                    { bold: "Part-time work", rest: ": Up to ", bold2: "20 hours per week", rest2: " during term time." },
                                    { bold: "Full-time work", rest: ": Allowed during university holidays." },
                                    { bold: "Work restrictions", rest: ": Students cannot work as ", bold2: "self-employed individuals", rest2: " or take up roles as professional sportspersons or entertainers." },
                                ].map((item, i) => (
                                    <Box key={i} display={"flex"} alignItems={"flex-start"} gap={2}  textAlign={"left"}>
                                        <Text  textAlign={"left"} fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>•</Text>
                                        <Text  textAlign={"left"} fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>
                                            <Text  textAlign={"left"} as="span" fontWeight={700}>{item.bold}</Text>{item.rest}
                                            {item.bold2 && <Text as="span" fontWeight={700}>{item.bold2}</Text>}
                                            {item.rest2 && item.rest2}
                                        </Text>
                                    </Box>
                                ))}
                            </Box>

                            {/* Extending */}
                            <Heading
                                as={"h2"}
                                fontFamily={"CeraRoundPro"}
                                fontWeight={700}
                                color={"gray.700"}
                                fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px", xl: "26px", "2xl": "28px" }}
                                textAlign={"left"}
                                mb={1}
                            >
                                Extending or Switching Your Student Visa
                            </Heading>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={2}
                            >
                                Students can extend their <Text as="span" color={"gray.800"} fontWeight={700}>Student Visa</Text> if they continue their education in the UK. Additionally, they may be eligible to switch to other visas, such as a <Text as="span" color={"gray.800"} fontWeight={700}>Skilled Worker Visa</Text>, which allows them to remain in the UK for work.
                            </Text>

                            {/* Graduate Route */}
                            <Heading
                                as={"h2"}
                                fontFamily={"CeraRoundPro"}
                                fontWeight={700}
                                color={"gray.700"}
                                fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px", xl: "26px", "2xl": "28px" }}
                                textAlign={"left"}
                                mb={1}
                            >
                                Post-Study Work Opportunities (Graduate Route)
                            </Heading>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={1}
                            >
                                The <Text as="span" color={"gray.800"} fontWeight={700}>Graduate Route</Text> provides international students with an opportunity to stay in the UK after completing their studies. This route allows:
                            </Text>

                            <Box display={"flex"} flexDir={"column"} ml={6} mb={2} gap={1}  textAlign={"left"}>
                                {[
                                    { bold: "Bachelor's and Master's graduates", rest: " to remain in the UK for up to ", bold2: "2 years", rest2: "." },
                                    { bold: "PhD graduates", rest: " to stay for ", bold2: "3 years", rest2: "." },
                                ].map((item, i) => (
                                    <Box  textAlign={"left"} key={i} display={"flex"} alignItems={"flex-start"} gap={2}>
                                        <Text  textAlign={"left"} fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>•</Text>
                                        <Text  textAlign={"left"} fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>
                                            <Text  textAlign={"left"} as="span" fontWeight={700}>{item.bold}</Text>{item.rest}
                                            <Text  textAlign={"left"} as="span" fontWeight={700}>{item.bold2}</Text>{item.rest2}
                                        </Text>
                                    </Box>
                                ))}
                            </Box>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={1}
                            >
                                During this period, graduates can work, seek employment, or switch to a work visa if they secure a qualifying job.
                            </Text>

                            {/* Common Reasons */}
                            <Heading
                                as={"h2"}
                                fontFamily={"CeraRoundPro"}
                                fontWeight={700}
                                color={"gray.700"}
                                fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px", xl: "26px", "2xl": "28px" }}
                                textAlign={"left"}
                                mb={1}
                            >
                                Common Reasons for Visa Rejection and How to Avoid Them
                            </Heading>

                            <Text
                                fontFamily={"CeraRoundPro"}
                                fontWeight={400}
                                fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                textAlign={"left"}
                                lineHeight={1.7}
                                mb={1}
                            >
                                Visa applications can be denied for various reasons, including:
                            </Text>

                            <Box display={"flex"} flexDir={"column"} ml={6} mb={2} gap={1}  textAlign={"left"}>
                                {[
                                    { bold: "Incomplete documentation", rest: ": Ensure that all required documents are included and properly formatted." },
                                    { bold: "Insufficient funds", rest: ": Clearly demonstrate that you have the financial means to support yourself." },
                                    { bold: "Low English proficiency scores", rest: ": Meet the required language test score." },
                                    { bold: "Incorrect application details", rest: ": Double-check the application form to avoid errors." },
                                ].map((item, i) => (
                                    <Box  textAlign={"left"} key={i} display={"flex"} alignItems={"flex-start"} gap={2}>
                                        <Text  textAlign={"left"} fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>•</Text>
                                        <Text  textAlign={"left"} fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>
                                            <Text  textAlign={"left"} as="span" fontWeight={700}>{item.bold}</Text>{item.rest}
                                        </Text>
                                    </Box>
                                ))}
                            </Box>

                            {/* Tips */}
                            <Heading
                                as={"h2"}
                                fontFamily={"CeraRoundPro"}
                                fontWeight={700}
                                color={"gray.700"}
                                fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px", xl: "26px", "2xl": "28px" }}
                                textAlign={"left"}
                                mb={1}
                            >
                                Tips for a Successful Visa Application
                            </Heading>

                            <Box display={"flex"} flexDir={"column"} ml={6} mb={2} gap={1}  textAlign={"left"}>
                                {[
                                    { bold: "Apply early", rest: " to avoid last-minute delays." },
                                    { bold: "Keep digital and physical copies", rest: " of all important documents." },
                                    { bold: "Prepare for a visa interview", rest: ", if required, to answer any questions confidently." },
                                ].map((item, i) => (
                                    <Box key={i} display={"flex"} alignItems={"flex-start"} gap={2}  textAlign={"left"}>
                                        <Text  textAlign={"left"} fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>•</Text>
                                        <Text  textAlign={"left"} fontFamily={"CeraRoundPro"} fontSize={{ base: "12px", md: "13px", lg: "14px", "2xl": "16px" }} lineHeight={1.7}>
                                            <Text  textAlign={"left"} as="span" fontWeight={700}>{item.bold}</Text>{item.rest}
                                        </Text>
                                    </Box>
                                ))}
                            </Box>

                            {/* Life */}
                            <Box borderTop={"4px solid #949494"} pt={4} mb={5}>
                                <Heading
                                    as={"h2"}
                                    fontFamily={"CeraRoundPro"}
                                    fontWeight={700}
                                    color={"gray.700"}
                                    fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px", xl: "26px", "2xl": "28px" }}
                                    textAlign={"left"}
                                    mb={1}
                                >
                                    Life as an International Student in the UK
                                </Heading>
                                <Text
                                    fontFamily={"CeraRoundPro"}
                                    fontWeight={400}
                                    fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                    textAlign={"left"}
                                    lineHeight={1.7}
                                >
                                    Studying in the UK offers a unique cultural experience with top-tier education, global networking opportunities, and diverse student communities. The UK provides numerous resources for international students, including <Text as="span" color={"gray.800"} fontWeight={700}>student unions, career services, and accommodation support</Text>.
                                </Text>
                            </Box>

                            {/* Conclusion */}
                            <Box borderTop={"4px solid #949494"} pt={4} mb={5}>
                                <Heading
                                    as={"h2"}
                                    fontFamily={"CeraRoundPro"}
                                    fontWeight={700}
                                    color={"gray.700"}
                                    fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px", xl: "26px", "2xl": "28px" }}
                                    textAlign={"left"}
                                    mb={1}
                                >
                                    Conclusion
                                </Heading>
                                <Text
                                    fontFamily={"CeraRoundPro"}
                                    fontWeight={400}
                                    fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                    textAlign={"left"}
                                    lineHeight={1.7}
                                >
                                    The <Text as="span" color={"gray.800"} fontWeight={700}>UK Student Visa</Text> is the gateway to world-class education and career opportunities. Understanding the eligibility criteria, financial requirements, and application process can significantly improve your chances of approval. If you are planning to study in the UK, preparing well and meeting all requirements will help ensure a smooth and successful transition.
                                </Text>
                            </Box>

                            {/* FAQs */}
                            <Box borderTop={"4px solid #949494"} pt={4} mb={{ base: 8, md: 10 }}>
                                <Heading
                                    as={"h2"}
                                    fontFamily={"CeraRoundPro"}
                                    fontWeight={700}
                                    color={"gray.800"}
                                    fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px", xl: "26px", "2xl": "28px" }}
                                    textAlign={"left"}
                                    mb={2}
                                >
                                    FAQs
                                </Heading>

                                {[
                                    { q: "1. Can I work full-time on a UK Student Visa?", a: <>No, students can work up to <Text as="span" fontWeight={700}>20 hours per week</Text> during term time and <Text as="span" fontWeight={700}>full-time during holidays</Text>.</> },
                                    { q: "2. How long does it take to process a UK Student Visa?", a: <>Visa processing usually takes <Text as="span" fontWeight={700}>3-8 weeks</Text>, depending on the country of application.</> },
                                    { q: "3. Can I bring my family on a UK Student Visa?", a: <>Only <Text as="span" fontWeight={700}>postgraduate students</Text> on eligible courses can bring dependents.</> },
                                    { q: "4. What happens if my visa is rejected?", a: <>You can <Text as="span" fontWeight={700}>reapply</Text> after addressing the rejection reasons or file an <Text as="span" fontWeight={700}>appeal</Text> in some cases.</> },
                                    { q: "5. Can I stay in the UK after completing my studies?", a: <>Yes, through the <Text as="span" fontWeight={700}>Graduate Route</Text>, allowing <Text as="span" fontWeight={700}>2-3 years</Text> of post-study work opportunities.</> },
                                ].map((faq, i) => (
                                    <Box key={i} mb={3}>
                                        <Text
                                            fontFamily={"CeraRoundPro"}
                                            fontWeight={700}
                                            fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                            textAlign={"left"}
                                            lineHeight={1.7}
                                        >
                                            {faq.q}
                                        </Text>
                                        <Text
                                            fontFamily={"CeraRoundPro"}
                                            fontWeight={400}
                                            fontSize={{ base: "12px", sm: "12px", md: "13px", lg: "14px", xl: "14px", "2xl": "16px" }}
                                            textAlign={"left"}
                                            lineHeight={1.7}
                                        >
                                            {faq.a}
                                        </Text>                                          
                                    </Box>
                                ))}
                            </Box>

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

export default UKStudentVisaGuide;