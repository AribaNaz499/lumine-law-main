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
import BannerImg from "../../assets/landing/landingImg.jpg";
import { Helmet } from "react-helmet";

// Lazy imports for footer sections
const AllServiceLinks = React.lazy(() => import("../NavLinks/AllServiceLinks"));
const AllNewsInsights = React.lazy(() => import("../NavLinks/AllNewsInsights"));
const AllPrices = React.lazy(() => import("../NavLinks/AllPrices"));

const HowToApplySkilledWorker = () => {
    return (
        <Box backgroundColor="white" minHeight="100vh">
            <Helmet>
                <title>How to apply for Skilled Worker Visa in UK? | Lumine Solicitors</title>
            </Helmet>

            <Container width="100vw" maxWidth="100%" m={0} p={0} display="flex" flexDirection="column">

                {/* Header Banner - Image 419806.jpg */}
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
                        px="3px"
                        py="0px"
                        textAlign="center"
                        mt={{xs:"6"}}
                    >
                        How to apply for Skilled Worker Visa in UK?
                    </Text>
                </Box>

                {/* Main Content Area */}
                <Box width="100%" px={{ base: 4, md: 10, lg: 20 }} py={10} color="black">
                    <Box maxWidth="1200px" mx="auto">

                        {/* Heading - Left Aligned like Image 40a305.png style */}
                        <Heading
                            as="h1"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "22px", lg: "28px" }}
                            mb={1}
                            mt={{ lg: "3" }}
                            textAlign="left"
                            fontWeight="600"
                            color={"gray.700"}
                        >
                            How to apply for Skilled Worker Visa in UK?
                        </Heading>

                        <Text textAlign={"left"} mb={2} fontSize="15px" lineHeight={1.5} color={"gray.700"}>
                            The <Text as="span" color="#E91E63">Skilled Worker Visa</Text> is perhaps the most prominent route towards employment in the UK for people who are not from the UK. For foreign workers who are being offered employment by a licensed UK employer hired by the UK Government in one of the prescribed skilled occupations, not only is work permitted but also the potential to settle here forever. If you are applying for a Skilled Worker Visa, the following is a step-by-step guide which informs you of the steps and requirements necessary to help you apply to get approved.
                        </Text>

                        <hr style={{ marginBottom: "25px", borderColor: "#39393a" }} />

                        {/* Step 1 - Image 419acf.png */}
                        <Text color={"gray.800"} fontWeight="bold" fontStyle="italic" textAlign="left" mb={0} fontSize="16px" > Step 1: Check Your Eligibility</Text>   
                     <Text mb={0} fontSize="15px" ml={{lg:"-6"}} color={"gray.700"}>
                            You need to verify if you are eligible before applying, and you have to do it to qualify that you qualify the qualification requirement of the Skilled Worker Visa:
                        </Text>

                        <List.Root ml={"3"} color={"gray.700"} textAlign={"left"} listStyle={"disc"} spacing={2} mb={0} ps={5} variant="unordered" fontSize="15px">
                            <List.Item>
                                <Text as="span" >Job Offer:</Text> You must have a job offer from your qualifying employer who holds a valid Sponsor Licence issued by the Home Office.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >Certificate of Sponsorship (CoS):</Text> You must receive a valid CoS with a reference number and your role.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >Eligible Occupation:</Text> Your role must be an eligible occupation as mandated by the Home Office.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >English Language Requirement:</Text> You must demonstrate that you can communicate in English at the required level.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >Salary Threshold:</Text> Your occupation needs to be of at least salary threshold minimum because it is the requirement by Home Office.
                            </List.Item>
                            <List.Item>
                                <Text as="span" >Point-Based Immigration System:</Text> You have to obtain 70 points from various requirements such as your employer's job offer, your pay, and the level of English language proficiency.
                            </List.Item>
                        </List.Root>

                        {/* Step 2 - Image 419acf.png */}
                        <Text color={"gray.800"} fontWeight="bold" fontStyle="italic" textAlign="left" mb={0} fontSize="16px" >Step 2: Gather Required Documents</Text>
                        <Text mb={0} textAlign={"left"} color={"gray.700"} fontSize="15px">
                            Having established your eligibility now, the next thing is that you have with you the documents that will be sent with your application. These are usually:
                        </Text>

                        <List.Root listStyle={"disc"} color={"gray.700"} textAlign={"left"} ml={3} spacing={2} mb={8} ps={5} variant="unordered" fontSize="15px">
                            <List.Item>A valid Certificate of Sponsorship (CoS) from your employer.</List.Item>
                            <List.Item>Evidence of your English language ability, e.g., test result certificate or academic qualification.</List.Item>
                            <List.Item>Your current passport or other travel document.</List.Item>
                            <List.Item>Evidence you are above the relevant minimum salary threshold, e.g., payslips or letter from employer.</List.Item>
                            <List.Item>Any other documentation in favor of your case, such as existing work experience or qualifications.</List.Item>
                        </List.Root>

                        {/* Step 3 - Image 419b0c.png */}
                       <Text color={"gray.800"} fontWeight="bold" fontStyle="italic" textAlign="left" mb={0} fontSize="16px" >Step 3: Apply Online</Text>
                        <Text mb={0} textAlign={"left"} color={"gray.700"} fontSize="15px">
                            You will make your application for the Skilled Worker Visa through the internet on the UK government immigration website. You will open an account and fill in the application form that will contain all your employment as well as personal information.
                        </Text>
                        <Text mb={0} textAlign={"left"} color={"gray.700"} fontSize="15px">
                            You will have to the pay the fees mentioned below:
                        </Text>
                        <List.Root textAlign={"left"} color={"gray.700"} spacing={1} mb={4} ps={5} variant="unordered" fontSize="15px">
                            <List.Item> – Application Fee: This will vary based on your case and period of stay.</List.Item>
                            <List.Item>–  Immigration Health Surcharge: You'll also pay an immigration health surcharge that will give you access to the UK National Health Service (NHS) during your stay in the UK.</List.Item>
                        </List.Root>

                        {/* Step 4 & 5 - Image 419b0c.png */}
                        <Text  color={"gray.800"} fontWeight="bold" fontStyle="italic" textAlign="left" mb={0} fontSize="16px">Step 4: Biometric Information</Text>
                        <Text mb={4} fontSize="15px" color={"gray.700"} textAlign={"left"}>
                            After you have applied, you will be asked to provide biometric data (fingerprint and photo). It might be a local visa application centre, depending on your location, or a biometric appointment.
                        </Text>

                        <Text color={"gray.800"} fontWeight="bold" fontStyle="italic" textAlign="left" mb={0} fontSize="16px">Step 5: Apply and Wait for a Decision</Text>
                        <Text mb={0} textAlign={"left"} fontSize="15px" color={"gray.700"}>
                            After you have applied and provided your biometric data, the processing will typically be as follows:
                        </Text>
                        <List.Root textAlign={"left"}  color={"gray.700"} spacing={1} mb={0} ps={5} variant="unordered" fontSize="15px">
                            <List.Item>–  Outside the UK: Standard 3 weeks.</List.Item>
                            <List.Item> – Inside the UK: Standard 8 weeks.</List.Item>
                        </List.Root>
                        <Text mb={4} fontSize="15px" textAlign={"left"} color={"gray.700"}>You will be contacted during the waiting period to provide additional information or documentation, so keep an eye on your email and mail.</Text>

                        {/* Step 6 & 7 - Image 419b44.png */}
                        <Text color={"gray.800"} fontWeight="bold" fontStyle="italic" textAlign="left" mb={0} fontSize="16px">Step 6: Receive Your Decision</Text>
                        <Text mb={4} textAlign={"left"} fontSize="15px" color={"gray.700"}>
                            You will be informed when a decision has been made on your application. If successful, your Skilled Worker Visa will typically enable you to remain in the UK for five years. You will be issued a biometric residence permit (BRP) that details your status, rights, and terms of stay.
                        </Text>

                      <Text color={"gray.800"} fontWeight="bold" fontStyle="italic" textAlign="left" mb={0} fontSize="16px">Step 7: Prepare for Your Move</Text>
                        <Text  textAlign={"left"} mb={4} fontSize="15px" color={"gray.700"}>
                            If you can secure your Skilled Worker Visa, you can then proceed to prepare yourself for your move. This entails finding accommodation, familiarizing yourself with the rights and obligations of your visa, and preparing yourself mentally for residence and work in the UK.
                        </Text>

                        {/* Conclusion - Image 419b44.png */}
                        <Text color={"gray.800"} fontWeight="bold" fontStyle="italic" textAlign="left" mb={0} fontSize="16px">Conclusion</Text>
                        <Text mb={4} color={"gray.700"} fontSize="15px" lineHeight={1.8} textAlign={"left"}>
                            A Skilled Worker Visa application is a tremendous career jump start to your life in the UK, opening doors to lasting work and even permanent resident status. Although the application process is multi-step and document-intensive, preparation will make the ordeal much less of a hassle for you.
                        </Text>
                        <Text mb={6} color={"gray.700"} fontSize="15px" lineHeight={1.8} textAlign={"left"}>
                            If you need individual guidance or specialist advice on your application, Lumine Solicitors at crownwell road in London can help. With a specialist expert at your fingertips to guide you through the intricacies of immigration law, you can apply for a Skilled Worker Visa with confidence. To find out more, contact Lumine Solicitors on 020 3950 2246 or start on their website.
                        </Text>

                    </Box>
                </Box>

                {/* Footer and Lazy Loaded Sections */}
                <Box mt="auto">
                    <Suspense fallback={<Box p={4}>Loading...</Box>}>
                        <AllPrices />
                        <AllServiceLinks />
                        <AllNewsInsights />
                    </Suspense>
                    <Footer />
                </Box>
            </Container>
        </Box>
    );
};

export default HowToApplySkilledWorker;