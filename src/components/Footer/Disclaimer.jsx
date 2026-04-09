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
// const AllServiceLinks = React.lazy(() => import("../NavLinks/AllServiceLinks"));
// const AllNewsInsights = React.lazy(() => import("../NavLinks/AllNewsInsights"));
// const AllPrices = React.lazy(() => import("../NavLinks/AllPrices"));

const Disclaimer = () => {
    return (
        <Box backgroundColor="white" minHeight="100vh">
            <Helmet>
                <title>How Lumine Solicitors Support Employers and Applicants with Skilled Worker Visas</title>
            </Helmet>

            <Container width="100vw" maxWidth="100%" m={0} p={0} display="flex" flexDirection="column">
                {/* Main Content Area */}
                <Box width="100%" px={{ base: 4, md: 10, lg: 20 }} py={10} color="black" mt={{ lg: "8" }}>
                    <Box maxWidth="1200px" mx="auto">

                        <Text

                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "11px", lg: "15px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"black"}

                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={0}
                        >
                            Confidentiality:
                        </Text>

                        <Text mb={0} color={"black"} fontSize="15px" lineHeight={1.6} textAlign={"left"}>
                            This email is confidential and may be privileged. It is intended solely for the addressee(s) and should be read, copied, or used only by the intended recipient. If you have received this email in error, please contact the sender immediately by email or telephone, then delete the email and any attachments without disclosing their contents.
                        </Text>

                        <Text

                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "11px", lg: "15px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            // mt={{ lg: "3" }}
                            color={"black"}

                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={0}
                        >
                            Bank Details and Payment Verification:
                        </Text>
                        <Text mb={0} textAlign={"left"} fontSize="15px" color={"black"}>
                            We will never send an email notifying you of changes to our bank account details. Our bank details remain unchanged during your transaction. Should you receive an email purporting to be from Lumine Solicitors that provides different bank details or indicates a change, it is unlikely to be genuine and should be ignored. It is your responsibility to verify our bank details by telephone or in person with us before making payment to avoid misunderstandings, delays, or fraud. We accept no responsibility for funds transferred into an incorrect account.
                        </Text>

                        <Text

                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "11px", lg: "15px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            // mt={{ lg: "3" }}
                            color={"black"}

                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={0}
                        >
                            Cyber Security:
                        </Text>

                        <Text mb={0} textAlign={"left"} fontSize="15px" color={"black"}>
                            Cybercrime, spoofing, and phishing are on the rise. Third parties may use email addresses that resemble ours (for example, “luminelaw.uk” and “luminelaw.com”) and may also use the names of our personnel to impersonate our firm. Genuine emails will only be sent from our official domain, “luminelaw.co.uk”. Please do not click on any links or open attachments in emails that do not originate from our genuine domain. If you receive a suspicious email, do not reply or act on its contents; contact us immediately using your trusted contact details.
                        </Text>

                        <Text

                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "11px", lg: "15px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            // mt={{ lg: "3" }}
                            color={"black"}

                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={0}
                        >
                            Viruses:
                        </Text>
                        <Text mb={0} textAlign={"left"} fontSize="15px" color={"black"}>
                            To the extent permitted by law, we accept no liability for any damage caused by viruses. It is your responsibility to scan any attachments for viruses before opening them. Although we believe this email and its attachments to be virus free, no warranty is given, and you should assume full responsibility for virus checking.
                        </Text>



                    </Box>
                </Box>

                {/* Footer and Lazy Loaded Sections */}
                <Box mt="auto">


                    <Footer />
                </Box>
            </Container>
        </Box>
    );
};

export default Disclaimer;