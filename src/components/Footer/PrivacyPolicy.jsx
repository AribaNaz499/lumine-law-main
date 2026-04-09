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

const PrivacyPolicy = () => {
    return (
        <Box backgroundColor="white" minHeight="100vh">
            <Helmet>
                <title>How Lumine Solicitors Support Employers and Applicants with Skilled Worker Visas</title>
            </Helmet>

            <Container width="100vw" maxWidth="100%" m={0} p={0} display="flex" flexDirection="column">
                {/* Main Content Area */}
                <Box width="100%" px={{ base: 4, md: 10, lg: 20 }} py={10} color="black" mt={{ lg: "8" }}>
                    <Box maxWidth="1200px" mx="auto">

                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "13px", lg: "21px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"#bf9b30"}
                            fontWeight="650"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={5}
                        >
                            1. Who we are and our privacy policy
                        </Heading>

                        <Text mb={0} color={"black"} fontSize="15px" lineHeight={1.6} textAlign={"left"}>
                            We take privacy seriously and we are committed to protecting it. Lumine Law Ltd is the data controller in relation to the processing activities described below. This means that we decide why and how your personal information is processed. We are registered with the Information Commissioner’s Office, which is the UK regulator for data protection.

                        </Text>

                        <Text mb={0} textAlign={"left"} fontSize="15px" color={"black"}>
                            Our policy explains when and why we collect personal information about you, how this information is used and the conditions under which it may be disclosed to others and how it is kept secure.
                        </Text>
                        <Text mb={5} textAlign={"left"} fontSize="15px" color={"black"}>
                            This is our main privacy policy. We may, however, provide additional, specific privacy information to you as you interact with us in different ways (e.g. that we will only use certain information for specific purposes). To the extent that any of that information differs from what we say below, those specific statements will apply in those circumstances.
                        </Text>

                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "13px", lg: "21px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"#bf9b30"}
                            fontWeight="650"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={5}
                        >
                            2. Information we collect, how we use it, and how long we keep it for
                        </Heading>

                        <Text mb={0} textAlign={"left"} color={"black"} fontSize="16px">We will only collect information about you if we have a lawful reason to do so. Lawful reasons include performing our contract (where you are our client), where we have a ‘legitimate interest’ (for example, if you are referred to in a matter on which we are advising), and where you have given your permission for us to use your personal information in a particular way (for example, marketing or training updates).
                        </Text>
                        <Text mb={5} textAlign={"left"} color={"black"} fontSize="15px">
                            We may collect personal information about you for the following reasons.
                        </Text>


                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "13px", lg: "21px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"#bf9b30"}
                            fontWeight="650"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={5}
                        >
                            2.1 Providing legal services
                        </Heading>


                        <Text mb={0} color={"black"} textAlign={"left"} fontSize="16px">We use information about you to provide legal services to our clients (this, of course, may also be you). You may have given us this information or it may have been provided by someone else as part of their involvement in the matter.</Text>
                        <Text mb={0} color={"black"} textAlign={"left"} fontSize="15px" lineHeight={1.8}>
                            The information that we hold and process about you will depend on the type of matter we are dealing with. It might simply be your name, address and email address, or may include other personal information such as your date of birth, sensitive personal information such as medical information (for example, if we are dealing with a personal injury case) or financial details (for example, if we are dealing with a property transaction).
                        </Text>

                        <Text textAlign={"left"} size="md" mb={0} color={"black"}>We may also have to ask for information about your personal and financial circumstances to assess your ability to pay amounts due which we are instructed to collect or unpaid bills owed to us. This may be necessary to meet our responsibilities under court rules, other regulations and legislation and best-practice guidance issued by industry or professional organisations or to follow our clients’ policies or processes.
                        </Text>
                        <Text mb={0} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            We normally keep original papers for six years after we have finished work on a matter, after which we will securely destroy them.
                        </Text>
                        <Text mb={5} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            In some circumstances, the Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017 say that we have to collect proof of identity of our client and certain other people related to them. If we ask you for information for this purpose, we will only use the proof of identity and other personal information you give us as part of this process to prevent money laundering or financing terrorism, unless you later agree to us using it in a different way. We will hold this information for six years after the business relationship with our client ends.
                        </Text>

                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "13px", lg: "21px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"#bf9b30"}
                            fontWeight="650"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={5}
                        >
                            2.2 Checking your identity
                        </Heading>

                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "13px", lg: "21px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"#bf9b30"}
                            fontWeight="650"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={5}
                        >
                            2.3 Marketing
                        </Heading>
                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "13px", lg: "21px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"#bf9b30"}
                            fontWeight="650"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={5}
                        >
                            2.4 Automated decision-making and profiling
                        </Heading>
                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "13px", lg: "21px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"#bf9b30"}
                            fontWeight="650"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={5}
                        >
                            2.5 Recruitment
                        </Heading>
                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "13px", lg: "21px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"#bf9b30"}
                            fontWeight="650"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={5}
                        >
                            2.6 Adminstration
                        </Heading>
                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "13px", lg: "21px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"#bf9b30"}
                            fontWeight="650"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={5}
                        >
                            3. Who has access to your information
                        </Heading>
                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "13px", lg: "21px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"#bf9b30"}
                            fontWeight="650"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={5}
                        >
                            3.1 Our client
                        </Heading>
                        <Text mb={0} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            Our professional obligations mean that we have to share your information with our client if we collect it during the course of a matter we are advising them on.
                        </Text>
                        <Text mb={5} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            If we are working with you and another person or organisation on the same matter, (for example, we are acting for your mortgage lender as well as you), or with you on behalf of a another person or organisation (for example, processing an insurance claim in your name on behalf of an insurer), we may have to share information you give us with the other person involved in the matter.
                        </Text>
                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "13px", lg: "21px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"#bf9b30"}
                            fontWeight="650"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={5}
                        >
                            3.2 Third-party experts and suppliers
                        </Heading>
                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "13px", lg: "21px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"#bf9b30"}
                            fontWeight="650"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={5}
                        >
                            3.3 Regulatory purposes and outsourcing
                        </Heading>
                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "13px", lg: "21px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"#bf9b30"}
                            fontWeight="650"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={5}
                        >
                            4. Cross-border transfers
                        </Heading>
                        <Text mb={5} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            In the normal course of doing business, we will not transfer any of your information outside of the EEA. However, if we need to use experts or lawyers in other countries, we make sure that appropriate protection is in place to transfer your information securely.
                        </Text>
                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "13px", lg: "21px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"#bf9b30"}
                            fontWeight="650"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={5}
                        >
                            5. Security precautions
                        </Heading>
                        <Text mb={0} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            We use a variety of physical and technical measures to keep your information available, safe from loss, accurate, and to prevent unauthorised access to it.
                        </Text>
                        <Text mb={0} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            We store electronic data and databases on secure computer systems and control who has access to information (using both physical and electronic means). We use ‘the cloud’, which means that we store client information on servers which we do not own and which are not kept in our offices. We access these servers through secure connections. All of our cloud computing suppliers meet strict requirements for security and confidentiality.
                        </Text>
                        <Text mb={5} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            Our staff receive data protection training and we have a set of detailed data protection policies which they must follow when handling personal information.
                        </Text>
                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "13px", lg: "21px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"#bf9b30"}
                            fontWeight="650"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={5}
                        >
                            6. Cookies and online analysis
                        </Heading>
                        <Text mb={0} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            Cookies are small text files that websites put on your computer so the site can remember who you are. They contain a unique, anonymous identifier, which is usually a string of letters or numbers.
                        </Text>
                        <Text mb={0} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website, and also allows us to improve our site.

                        </Text>
                        <Text mb={0} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            These cookies do not identify any person and are used only to track user experience so we can make improvements.
                        </Text>
                        <Text mb={5} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            If you failed to choose one of the options when we gave you the cookie notice on entering this website, by continuing to use the site you agree to the way we use cookies.
                        </Text>

                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "13px", lg: "21px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"#bf9b30"}
                            fontWeight="650"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={5}
                        >
                            7. Your rights
                        </Heading>
                        <Text mb={0} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            You have the following legal rights.
                        </Text>
                        <Text mb={0} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            The right to ask us to confirm whether we hold your personal information and, if we do, to get a copy of the information we hold. This is known as a ‘subject access request’. Exemptions, including legal privilege, could mean you may not be entitled to receive all the information we hold on you. We will tell you if there is any information we have not provided and the reason for doing this;
                        </Text>
                        <Text mb={0} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            The right to have your information erased, although this may not apply if we need to continue to hold or use it for a lawful reason.
                        </Text>
                        <Text mb={0} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            The right to move your information to another organisation in an electronically readable form.
                        </Text>
                        <Text mb={0} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            The right to have inaccurate information corrected.
                        </Text>
                        <Text mb={0} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            The right to object to your information being used for marketing.
                        </Text>
                        <Text mb={5} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            Please keep in mind that there are exceptions to the rights above and, although we will always try to respond to your satisfaction, there may be situations where we are unable to do so.
                        </Text>
                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "13px", lg: "21px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"#bf9b30"}
                            fontWeight="650"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={5}
                        >
                            8. Complaints about how we handle your information
                        </Heading>
                        <Text mb={0} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            If you believe that we have broken your data protection or privacy rights, you can complain to us direct by contacting our Data Protection Officer using the details set out above.
                        </Text>
                        <Text mb={5} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            If you are not happy with our response, or you want to contact the UK Information Commissioner’s Office, which regulates and enforces data protection law in the UK, you can find details about how to do this at www.ico.org.uk. If you are unhappy about any other aspect of our service, you can find our complaints procedure here.
                        </Text>
                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "13px", lg: "21px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"#bf9b30"}
                            fontWeight="650"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={5}
                        >
                            9. Our information and how to contact us
                        </Heading>
                        <Text mb={0} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            We are a Private Limited Company incorporated in England and Wales. Our registered number is 10996865 and our registered office is at University House, 11-13 Lower Grosvenor Place, London, SW1W 0EX We are trading in the name of Lumine Solicitors and Lumine Law.
                        </Text>
                        <Text mb={5} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
                            For the purposes of anything within this privacy notice, please write to us at Lumine Solicitors, Address: University House, 11-13 Lower Grosvenor Place, London, SW1W 0EX
                        </Text>
                        <Heading
                            as="h3"
                            fontFamily="CeraRoundPro"
                            fontSize={{ base: "13px", lg: "21px" }}
                            lineHeight="1.1"
                            mr={{ lg: "3" }}
                            mt={{ lg: "3" }}
                            color={"#bf9b30"}
                            fontWeight="650"
                            textAlign="left" // Image 1 (image_40a305.png) jaisa left align karne ke liye
                            width="105%"     // Taake alignment container ke start se ho
                            mb={5}
                        >
                            8. Complaints about how we handle your information
                        </Heading>
<Text mb={5} textAlign={"left"} color={"black"} fontSize="15px" lineHeight={1.6}>
We may amend this privacy notice from time to time to make sure it is up to date and accurately reflects how and why we use your personal information. The current version of our privacy notice will always be posted on our website.

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

export default PrivacyPolicy;