import { Text, Container, Box, HStack, VStack, List } from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "../../../styles/fonts.css";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AllServiceLinks from "../../NavLinks/AllServiceLinks";
import AllPrices from "../../NavLinks/AllPrices";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import BannerImg from "../../../assets/services/main/family/bannerImg.jpg";
import { Heading } from "@chakra-ui/react"

const ConsentOrders = () => {
  const [eligibilityState, setEligibilityState] = useState(false);
  const [decisionState, setDecisionState] = useState(false);
  const [helpState, setHelpState] = useState(false);

  return (
    <>
      <Container
        width="100%"
        maxWidth="100%"
        minHeight="100vh"
        backgroundColor={"white"}
        overflowX="hidden"
        m={0}
        p={0}
        display="flex"
        flexDirection="column"
      >
        <Helmet>
          <title>Lumine Law Consent Orders Services</title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner - FIXED */}
          <Box
            width={"100%"}
            height={{
              base: "230px",
              lg: "310px",
              xl: "330px",
              "2xl": "380px",
            }}
            bgImage={`linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)), url(${BannerImg})`}
            bgSize={"cover"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              fontSize={{ xs: "19px", lg: "27.5px", xl: "33.5px", "2xl": "42.5px" }}
              fontWeight={600}
              fontFamily={"CeraRoundPro"}
              width={"90%"}
              lineHeight={1.1}
              textAlign={"left"}
            >
              Consent Orders
            </Text>
          </Box>

          {/* Main Content - FIXED */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            color={"black"}
          >
            <Box
              width={"85%"}
              alignSelf={"center"}
              mb={"5%"}
              my={{ xs: "5%", md: "2.5%" }}
            >
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={600}
                color={"#bf9b30"}
                fontSize={{ xs: "14px", lg: "25px", xl: "31px", "2xl": "41px" }}
                textAlign={"left"}
              >
                Four Reasons You Need a Consent Order
              </Heading>
              <List.Root
                textAlign={"justify"}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                as={"ol"}
                fontWeight={400}
                fontFamily={"CeraRoundPro"}
                mt={{ lg: "5" }}
                color="black"
              >
                <List.Item>Avoid Future Disputes: A consent order formalizes your financial settlement, reducing the likelihood of future disagreements. It minimizes the risk of court litigation and associated costs by leaving less room for confusion over the terms.</List.Item>
                <List.Item>Enforce Settlement Agreements: If one party defaults on agreed payments, a consent order allows you to enforce the settlement through the court. Without a consent order, you risk losing claims on sole-owned properties, especially if not professionally advised to place a Restriction on the property.</List.Item>
                <List.Item>Protect Against Future Claims: A consent order protects you and your estate from future claims by your ex-spouse. This includes shielding any future income increases, inheritances, or your estate after death from being claimed by your ex.</List.Item>
                <List.Item>Provide Certainty and Peace of Mind: Making your divorce settlement binding with a consent order gives both parties clarity and security, allowing you to focus on important matters such as effective co-parenting.</List.Item>
              </List.Root>
            </Box>
          </Box>

          {/* Dropdown info - FIXED */}
          <VStack justifyContent={"space-around"} alignItems={"center"} mb={"50px"}>

            {/* Our Services */}
            <Box display={"flex"} flexDir={"column"} color={"black"} width={"85%"} justifyContent={"center"} alignItems={"center"}>
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ xs: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ xs: "4px", sm: "6px", md: "7px", lg: "8px", xl: "9px", "2xl": "10px" }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !decisionState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setDecisionState(!decisionState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Our Services
                </Text>
                {!decisionState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {decisionState && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    At Lumine, we offer comprehensive services to assist you with the consent orders effectively:
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Initial Consultation</strong>: We offer an initial consultation to understand your unique circumstances and provide you with clear advice on the purpose and process of obtaining a consent order.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Drafting Consent Orders</strong>: Our experienced solicitors draft consent orders that accurately reflect the terms of your agreement, ensuring they meet legal standards and are enforceable.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Review and Approval</strong>: We review existing agreements and advise on their suitability for a consent order. We also assist in obtaining court approval to formalize the agreement.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Negotiation and Amendments</strong>: We negotiate with your former spouse regarding any necessary amendments to the draft consent order and respond to changes requested by the court.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Dispute Resolution</strong>: If disputes arise during the process, we employ negotiation and mediation techniques to resolve issues amicably and reach a mutually agreeable consent order.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Enforcement and Breach</strong>: We can take action if your ex breaches the consent order or accuses you of breaching it, ensuring your rights are protected.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* How can Lumine Solicitors help? */}
            <Box display={"flex"} flexDir={"column"} color={"black"} width={"85%"} justifyContent={"center"} alignItems={"center"}>
              <HStack
                borderY={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ xs: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ xs: "4px", sm: "6px", md: "7px", lg: "8px", xl: "9px", "2xl": "10px" }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !helpState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setHelpState(!helpState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  How can Lumine Solicitors help?
                </Text>
                {!helpState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {helpState && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    At Lumine Solicitors, we understand the intricacies of consent orders and are dedicated to providing personalized and effective solutions. Here's how we can help:
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Expert Advice</strong>: We offer clear, concise, and practical legal advice tailored to your specific circumstances.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Compassionate Support</strong>: Our team provides compassionate support throughout the process, ensuring you feel understood and supported.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Strategic Approach</strong>: We develop customized strategies to achieve the best possible outcome for you.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Cost Certainty</strong>: We offer fixed, competitive, and transparent fee packages to maintain cost certainty.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    For assistance with consent orders matters, please do not hesitate to get in touch with Lumine solicitors{" "}
                    <strong>020 3950 2246</strong> or{" "}
                    <strong>
                      <Link to={"/contact"} style={{ color: "#e91e63" }} onMouseEnter={(e) => (e.target.style.color = "#091838")} onMouseLeave={(e) => (e.target.style.color = "#e91e63")}>
                        Contact Us HERE
                      </Link>{" "}
                    </strong>
                    We are here to help you navigate the complexities of family law and achieve the best possible resolution for your situation.
                  </Text>
                </VStack>
              )}
            </Box>
          </VStack>

          {/* Other Services */}
          <AllServiceLinks />
          <AllPrices />
          <AllNewsInsights />
          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default ConsentOrders;