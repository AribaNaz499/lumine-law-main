import React, { Suspense } from "react";
import {
    Text,
    Container,
    Box,
    Heading,
    List,
} from "@chakra-ui/react";

import Footer from "../Footer/Footer";
import "../../styles/fonts.css";
import BannerImg from "../../assets/landing/newsInsightsFour.jpg";
import { Helmet } from "react-helmet";

// Lazy imports for the sections at the bottom
const AllServiceLinks = React.lazy(() => import("../NavLinks/AllServiceLinks"));
const AllNewsInsights = React.lazy(() => import("../NavLinks/AllNewsInsights"));
const AllPrices = React.lazy(() => import("../NavLinks/AllPrices"));

const NavigatingTheSkilledWorkerVisa = () => {
    return (
        <Box backgroundColor="white" minHeight="100vh">
            <Helmet>
                <title>Lumine Law - Navigating the Skilled Worker Visa Process</title>
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
                        px="10px"
                        py="4px"
                        lineHeight={{lg:"1.1", xs:"1"}}
                        mt={{ lg: "4", md:"6", xs:"9" }}
                        textAlign="left"
                    >
                        Navigating the Skilled Worker Visa Process with the Help of <br /> Lumine Solicitors
                    </Text>
                </Box>

                {/* Main Content Area */}
                <Box width="100%" px={{ base: 4, md: 10, lg: 20 }} py={10} color="black">
                    <Box maxWidth="1200px" mx="auto">

                        <Heading
                            as="h1"
                            textTransform="uppercase"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "20px", lg: "28px" }}
                            mb={1}
                            mt={{ lg: "3" }}
                            color={"gray.800"}
                            lineHeight="1.1"
                            textAlign={"left"}
                        >
                            NAVIGATING THE SKILLED WORKER VISA PROCESS WITH THE HELP OF LUMINE SOLICITORS
                        </Heading>

                        <Text mb={4} letterSpacing={"0.2"} fontSize="15px" color={"gray.700"} lineHeight={1.4} textAlign={"left"}>
                            The Skilled Worker Visa is presently the top tool through which foreign nationals can work in the UK. The visa for individuals with confirmed UK employers offering them jobs to perform skilled work enables them to reside and work in the UK in a bid to cover skill shortages in sectors such as healthcare, engineering, tech, and teaching. However, the method of acquiring it is said to be challenging and complicated. Lumine Solicitors can help guide applicants and employers through the application process for the Skilled Worker Visa.
                        </Text>

                        <Text color="gray.700" fontSize={"15px"} textAlign="left" fontWeight="400" mb={0}> Understanding the  <Text as="span" color="#E91E63" ml={1}>  Skilled Worker Visa </Text> </Text>
                        <Text mb={0} fontSize="15px" textAlign={"left"} color={"gray.700"}>There are several requirements that potential applicants must fulfil to obtain a Skilled Worker Visa:</Text>

                        <List.Root spacing={3} mb={0} ml={"3"} ps={5} color={"gray.700"} textAlign={"left"} listStyle={"disc"} variant="unordered">
                            <List.Item>
                                <Text as="span">Job Offer from an Approved Licensed Employer:</Text> The potential applicant must have a job offer from a Sponsor Licence-registered UK employer that is approved by the Home Office.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >Certificate of Sponsorship (CoS):</Text> An up-to-date CoS, countersigned by the employer, is a document that will need to be utilized in an attempt to proceed with the application for a visa.
                            </List.Item>
                            <List.Item>
                                <Text as="span">Eligible Occupation:</Text> The occupation has to be on the list by the Home Office in eligible occupations.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >Language and Salary Requirements:</Text> The applicant needs to satisfy the English language requirement and the minimum salary requirement for the occupation.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >Point-Based Immigration System:</Text> The applicant must score at least 70 points under the points-based system, and points are awarded based on various factors like job, salary, and language proficiency.
                            </List.Item>
                        </List.Root>

                        <Text fontStyle="italic" mb={4} color={"gray.700"} textAlign={"left"}>It is always tough to navigate through these requirements, but that is where Lumine Solicitors come into play.</Text>

                        <Text color={"gray.700"} textAlign={"left"} size="md" mb={0} >Individualized Assistance to Applicants</Text>
                        <Text mb={0} textAlign={"left"} color={"gray.700"}>Lumine Solicitors offers a full scope of services to Skilled Worker Visa applicants. This is how they walk them through the process:</Text>

                        <List.Root ml={3} spacing={3} color={"gray.700"}  textAlign={"left"} ps={5} variant="unordered" listStyle={"disc"}>
                            <List.Item>
                                <Text as="span" >Personalised Counselling:</Text> Professionals at Lumine hear out the individual case of every applicant, for instance, the job offer one has received, education, and long-term goals. Based on this personalised counselling, they determine what to do in order to acquire the visa.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >Application Preparation:</Text> Document collection and submitting evidence may be intimidating. Lumine helps the applicants prepare documents required, such as the CoS and biometric residence permit (BRP), to make certain that the documents are perfect and correct.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >Qualification Expertise:</Text> Lumine Solicitors provide qualification expertise on the very specifics of the eligibility, advising applicants on where they are and what they have to do in order to comply in an effective way.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >Grasping the Point-Based System:</Text> The point-based immigration system of the UK is complicated. Lumine calculates the points of applicants and suggests ways through which they can maximize their score in order to meet or exceed the threshold level.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >Application Submission and Monitoring:</Text> Lumine puts together the application and performs the submission and reports back on the application status. Overseas applicant decision is made within a time limit of 3 weeks and 8 weeks for UK-based applicants.
                            </List.Item>
                        </List.Root>

                        <Text size="md" mb={0} textAlign={"left"} color={"gray.700"}>Assisting Employers with the Process</Text>
                        <Text mb={0} color={"gray.700"} textAlign={"left"}>Lumine Solicitors also offer helpful assistance to UK employers who want to hire talented foreign staff. Their employer assistance includes:</Text>

                        <List.Root spacing={3} mb={0} listStyle={"disc"} ps={5} variant="unordered" textAlign={"left"} ml={3} color={"gray.700"}>
                            <List.Item>
                                <Text as="span" >Sponsor Licence Acquisition:</Text> The firm provides professional support in application and renewal of a Sponsor Licence from the Home Office.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >Advisory Services:</Text> Lumine advises employers on the type of jobs that can be eligible for the Skilled Worker Visa and prepares the corresponding job descriptions to comply with the Home Office requirements.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >Compliance Training:</Text> They educate employers on their sponsorship obligations, and how to implement long-term solutions for obtaining and maintaining long-term immigration compliance.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >Skilled Worker Visa</Text> is not just an opportunity to work but also likely to result in permanent residence in the UK. Lumine Solicitors inform clients of their Indefinite Leave to Remain (ILR) status after five years' employment. They also assist in bringing qualifying dependents, i.e., spouses and children, to the UK.
                            </List.Item>
                        </List.Root>

                        <Text size="md" mb={0} color={"gray.700"} textAlign={"left"} >Conclusion</Text>
                        <Text mb={6} textAlign={"left"} color={"gray.700"} fontSize="15px" lineHeight={1.5}>
                            The process of applying for the Skilled Worker Visa can be confusing and intimidating for employers and applicants. With the expert assistance of Lumine Solicitors, however, applicants can be assured of going through their application hassle-free. By offering customized assistance, full guidance, and expert advice, Lumine ensures that each one of their clients is fully prepared to succeed in obtaining their Skilled Worker Visa and embarking on a new chapter of professional lives in the UK. Phone Lumine Solicitors now on 020 3950 2246 for personal advice and support or learn more on their website.
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

export default NavigatingTheSkilledWorkerVisa;