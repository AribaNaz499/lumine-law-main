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

const NuptialAgreement = () => {
  const [spouseState, setSpouseState] = useState(false);
  const [eligibilityState, setEligibilityState] = useState(false);
  const [applicationState, setApplicationState] = useState(false);
  const [screening, setScreening] = useState(false);
  const [decisionState, setDecisionState] = useState(false);
  const [helpState, setHelpState] = useState(false);

  return (
    <>
      <Container
        width="100vw"
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
          <title>Lumine Law Pre-Nuptial Agreements Services</title>
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
              textAlign={"left"}
              lineHeight={1.1}
            >
              Pre-Nuptial Agreements
            </Text>
          </Box>

          {/* Main - FIXED FONT SIZE, LAYOUT SAME */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            color={"black"}
          >
            {/* Heading */}
            <Box
              width={"90%"}
              alignSelf={"center"}
              mb={"5%"}
              my={{ xs: "5%", md: "2.5%" }}
            >
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={450}
                color={"#DEBA35"}
                fontSize={{ xs: "12px", lg: "18px", xl: "22px", "2xl": "32px" }}
                textAlign={"left"}
                ml={{ lg: "2" }}
              >
                What is a Pre-Nuptial Agreement?
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                textAlign={"justify"}
                lineHeight={1.5}
                color="black"
                mt={{ lg: "3" }}
              >
                A prenup, or prenuptial agreement, is a contract agreed upon before marriage that involves creating a document that clearly defines which property and financial assets belong to each partner. In most cases, both parties will need to sign a prenuptial agreement at least 28 days before the planned wedding date. Lumine solicitors advise that the agreement is created sufficiently in advance of the marriage so parties to the agreement have time to consider the terms.
              </Text>
            </Box>
          </Box>

          {/* Dropdown info - FIXED */}
          <VStack justifyContent={"space-around"} alignItems={"center"} mb={"50px"}>

            {/* The Importance of Pre-Nuptial Agreements */}
            <Box display={"flex"} flexDir={"column"} color={"black"} width={"90%"} justifyContent={"center"} alignItems={"center"}>
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ xs: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ xs: "4px", sm: "6px", md: "7px", lg: "8px", xl: "9px", "2xl": "10px" }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !spouseState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setSpouseState(!spouseState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  The Importance of Pre-Nuptial Agreements
                </Text>
                {!spouseState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {spouseState && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    A pre-nuptial agreement can play a significant role in financial provision should the relationship come to an end. These agreements help outline how assets and finances will be divided, providing clarity and reducing potential conflicts during a separation or divorce.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Who Should Enter a Pre-Nuptial Agreement? */}
            <Box display={"flex"} flexDir={"column"} color={"black"} width={"90%"} justifyContent={"center"} alignItems={"center"}>
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ xs: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ xs: "4px", sm: "6px", md: "7px", lg: "8px", xl: "9px", "2xl": "10px" }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !applicationState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setApplicationState(!applicationState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Who Should Enter a Pre-Nuptial Agreement?
                </Text>
                {!applicationState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {applicationState && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    We recommend entering a pre-nuptial agreement if:
                  </Text>
                  <List.Root textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"} mt={{ lg: "-6", md: "-5", xs: "-4" }} lineHeight={1.7} color="gray.800">
                    <List.Item>You and your partner have unequal levels of wealth.</List.Item>
                    <List.Item>There are significant inheritance prospects or one of you may benefit from gifts from your family.</List.Item>
                    <List.Item>There's potential for future wealth, such as trust funds.</List.Item>
                    <List.Item>There are assets acquired before the marriage that one of you wants to protect.</List.Item>
                    <List.Item>It is a second (or subsequent) marriage where one of you has assets and/or children from a previous marriage.</List.Item>
                    <List.Item>There are family businesses involved.</List.Item>
                    <List.Item>There are existing debts.</List.Item>
                    <List.Item>You've had agreements drawn up in other jurisdictions and need an equivalent agreement in England and Wales.</List.Item>
                  </List.Root>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-6", md: "-5", xs: "-4" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    The starting point for financial provision in divorce is that all assets are considered part of the marital pot and available for distribution by the court. However, a correctly entered pre-marital agreement can effectively protect assets acquired before the marriage or expected in the future from one party's family or efforts.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Are Pre-Nuptial Agreements Legally Binding? */}
            <Box display={"flex"} flexDir={"column"} color={"black"} width={"90%"} justifyContent={"center"} alignItems={"center"}>
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ xs: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ xs: "4px", sm: "6px", md: "7px", lg: "8px", xl: "9px", "2xl": "10px" }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !screening && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setScreening(!screening)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Are Pre-Nuptial Agreements Legally Binding?
                </Text>
                {!screening ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {screening && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    Pre-nuptial agreements are not legally binding in England and Wales. Nevertheless, if properly drafted, they can be fully considered by the court if your relationship ends. The court determines a fair allocation of marital assets in financial proceedings. Recent case law has upheld pre-marital agreements completely when they meet specific requirements:
                  </Text>
                  <List.Root textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} mt={{ lg: "-6", md: "-5", xs: "-4" }} color="gray.800">
                    <List.Item>Financial and domestic contributions should be treated equally.</List.Item>
                    <List.Item>The "yardstick of equality" (equal sharing of marital assets) should always apply unless there is good reason to deviate from it.</List.Item>
                    <List.Item>The needs of both partners must be satisfied first.</List.Item>
                    <List.Item>Compensation for any economic disadvantage suffered by a partner can be awarded (though this is rare and difficult to prove).</List.Item>
                    <List.Item>If there is sufficient money to meet needs and any compensation, then the principle of sharing applies.</List.Item>
                  </List.Root>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-6", md: "-5", xs: "-4" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    The overall aim is fairness to both partners.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Our Services */}
            <Box display={"flex"} flexDir={"column"} color={"black"} width={"90%"} justifyContent={"center"} alignItems={"center"}>
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
                    At Lumine, we offer comprehensive services to assist you with pre-nuptial agreements effectively:
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Initial Consultation</strong>: We offer an initial consultation to understand your unique circumstances and provide you with clear advice on the benefits and implications of a pre-nuptial agreement.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Drafting and Review</strong>: Our experienced solicitors draft and review pre-nuptial agreements to ensure they meet legal standards and protect your interests.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Negotiation</strong>: We assist with negotiations to reach mutually agreeable terms that reflect the wishes and needs of both parties.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Legal Advice</strong>: We provide independent legal advice to ensure that you fully understand the terms and implications of the agreement.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* How can Lumine Solicitors help? */}
            <Box display={"flex"} flexDir={"column"} color={"black"} width={"90%"} justifyContent={"center"} alignItems={"center"}>
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
                    At Lumine, we understand the intricacies of pre-nuptial agreements and are dedicated to providing personalized and effective solutions. Here's how we can help:
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Expert Advice</strong>: We offer clear, concise, and practical legal advice tailored to your specific circumstances.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Compassionate Support</strong>: Our team provides compassionate support throughout the process, ensuring you feel understood and supported.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Strategic Approach</strong>: We develop customized strategies to achieve the best possible outcome for you.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Cost Certainty</strong>: We offer fixed, competitive, and transparent fee packages to maintain cost certainty.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    For assistance with pre-nuptial agreements, please do not hesitate to get in touch with Lumine solicitors{" "}
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

export default NuptialAgreement;