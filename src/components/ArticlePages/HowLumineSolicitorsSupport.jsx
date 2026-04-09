import React, { Suspense } from "react";
import {
    Text,
    Container,
    Box,
    Heading,
    List,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Footer from "../Footer/Footer";
import "../../styles/fonts.css";
import BannerImg from "../../assets/services/main/immigration/immigration-banner.webp";
import { Helmet } from "react-helmet";

// Lazy imports for footer sections
const AllServiceLinks = React.lazy(() => import("../NavLinks/AllServiceLinks"));
const AllNewsInsights = React.lazy(() => import("../NavLinks/AllNewsInsights"));
const AllPrices = React.lazy(() => import("../NavLinks/AllPrices"));

const HowLumineSolicitorsSupport = () => {
    return (
        <Box backgroundColor="white" minHeight="100vh">
            <Helmet>
                <title>How Lumine Solicitors Support Employers and Applicants with Skilled Worker Visas</title>
            </Helmet>

            <Container width="100vw" maxWidth="100%" m={0} p={0} display="flex" flexDirection="column">

                {/* Header Banner */}
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
                        px="10px"
                        py="4px"
                        lineHeight={{lg:"1.1", xs:"1"}}
                        mt={{ lg: "4", xs:"9" }}
                        letterSpacing={"0.8"}
                        textAlign="left"
                    >
                        How Lumine Solicitors support employer and applicants with <br /> skilled workers visa?
                    </Text>
                </Box>

                {/* Main Content Area */}
                <Box width="100%" px={{ base: 4, md: 10, lg: 20 }} py={10} color="black">
                    <Box maxWidth="1200px" mx="auto">

                        <Heading
                            as="h1"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "22px", lg: "30px" }}
                            
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"gray.800"}
                            fontWeight="400"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                        >
                            How Lumine Solicitors support employer and applicants with skilled workers visa?
                        </Heading>

                        <Text mb={5} color={"gray.700"} fontSize="15px" lineHeight={1.6} textAlign={"left"}>
                            With the prevailing competitive nature of the current environment, the
                            <Link to="/navigating-the-skilled-worker-visa" style={{ color: "#E91E63", fontWeight: "400", marginLeft: "5px", marginRight: "5px" }}>
                                Skilled Worker Visa
                            </Link>
                            has proven to be a saviour immigration path for foreign nationals seeking employment in the UK. Not only does this path of immigration bridge skills shortages in most industries—whether it is healthcare, engineering, IT, or education—but it is an immigration path of entry for the aspirational class who seek their destiny in the UK. But it may be a complex process. This is where Lumine Solicitors step in, providing quality support to employers and applicants alike in the Skilled Worker Visa application.
                        </Text>

                        {/* Employer Support Section */}
                        <Text textAlign={"left"}  mb={0} fontSize="16px" color={"gray.700"}>Comprehensive Support for Employers</Text>
                        <Text mb={0} textAlign={"left"} fontSize="15px" color={"gray.700"}>
                            Lumine Solicitors offers specialist advice to UK employers to ensure the successful recruitment of high-quality overseas workers. As the Skilled Worker Visa necessitates Home Office sponsorship for companies, Lumine advises on application for and maintenance of a Sponsor Licence. These critical services include:
                        </Text>

                        <List.Root color={"gray.700"} listStyle={"disc"} textAlign={"left"} ml={4} spacing={3} mb={0} ps={5} variant="unordered">
                            <List.Item>
                                <Text as="span">Application Support:</Text> Employers are assisted by Lumine’s specialist team to prepare requisite paperwork and evidence to show compliance with the Home Office.
                            </List.Item>
                            <List.Item>
                                <Text as="span">Eligibility Guidance:</Text> Employers are given direct advice regarding whose work qualifies under Skilled Worker Visa rules so job postings satisfy Home Office criteria.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >Certificate of Sponsorship:</Text> Lumine helps employers with the creation of a valid Certificate of Sponsorship (CoS), a fundamental aspect of preparing the visa application for new hires.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >Training and Compliance:</Text> The company also trains candidates on how to be a licensed sponsor, what is their responsibilities and role are, and how to adopt best compliance techniques on an ongoing basis.
                            </List.Item>
                        </List.Root>

                        {/* Applicant Support Section */}
                        <Text  mb={0} textAlign={"left"} color={"gray.700"} fontSize="16px">Tailored Assistance for Applicants</Text>
                        <Text mb={0} textAlign={"left"} color={"gray.700"} fontSize="15px">
                            For international citizens who aspire to work in the UK, the Skilled Worker Visa is the gateway to a successful career. Lumine Solicitors makes the comprehension of the complexity of applying for the visa less enigmatic by:
                        </Text>

                        <List.Root spacing={3} mb={0} listStyle={"disc"} ml={4} textAlign={"left"} color={"gray.700"} ps={5} variant="unordered">
                            <List.Item>
                                <Text as="span" >Eligibility Consultation:</Text> The candidates are provided with a customized assessment to verify whether they are eligible according to the eligibility criteria of the visa, i.e., verification by the employer and need to meet the relative salary and English test requirement.
                            </List.Item>
                            <List.Item>
                                <Text as="span">Preparation for Application:</Text> The employees assist the candidates in preparing the documents that are necessitated, i.e., Certificate of Sponsorship and biometric residence permit (BRP), so evidentiary requirements are met.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >Point-Based System:</Text> Lumine advises clients on how to obtain the necessary minimum 70 points under the UK point-based immigration system and to accrue maximum available points based on job offer, qualification, and skills.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >Submission and Follow-Up:</Text> After preparing the application, Lumine assists with the submission of the application and gives updates to the applicants regarding the application status, which takes 3 weeks for non-UK applicants and 8 weeks for UK applicants.
                            </List.Item>
                        </List.Root>

                        {/* Long-term Success Section */}
                        <Text mb={0} color={"gray.700"}  textAlign={"left"} fontSize="16px">Facilitating Long-Term Success</Text>
                        <Text mb={4} color={"gray.700"} textAlign={"left"} fontSize="15px" lineHeight={1.8}>
                            Besides assisting in obtaining a Skilled Worker Visa, Lumine Solicitors also provide employers and workers with long-term solutions. They advise clients on Indefinite Leave to remain (ILR) routes after five years of work, where clients can settle in the UK. The firm also provides advice on how the visa impacts family because the applicant would have their child and spouse join them in the UK, hence standing a higher chance of successful settlement.
                        </Text>

                        {/* Conclusion */}
                        <Text textAlign={"left"} size="md" mb={0} color={"gray.700"}>Conclusion</Text>
                        <Text mb={6} textAlign={"left"} color={"gray.700"} fontSize="15px" lineHeight={1.6}>
                            In a sense, Lumine Solicitors become instrumental in simplifying the application for the Skilled Worker Visa for the employers and applicants. They can simplify the application process and make it enjoyable through the use of detailed guidance, individualized advice, and working support. If you are an employer facing the need to recruit to bridge skills gaps or an employee looking for new opportunities in the UK, Lumine Solicitors is committed to making your dreams come true with ease and confidence. For more details, call Lumine Solicitors on 020 3950 2246 or browse their services online.
                        </Text>

                    </Box>
                </Box>

                {/* Footer and Lazy Loaded Sections */}
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

export default HowLumineSolicitorsSupport;