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

const FinancialSettlements = () => {
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
          <title>Lumine Law Financial Settlements Services</title>
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
              Financial Settlements
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
                fontWeight={600}
                color={"#bf9b30"}
                fontSize={{ xs: "14px", lg: "26px", xl: "30px", "2xl": "40px" }}
                textAlign={"left"}
                ml={{ lg: "2" }}
              >
                What is a Financial Settlement?
              </Heading>
              <List.Root
                textAlign={"justify"}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                as={"ol"}
                fontWeight={400}
                fontFamily={"CeraRoundPro"}
                mt={{ lg: "3" }}
                lineHeight={1.4}
                color="black"
              >
                <List.Item>
                  A financial settlement aims to equitably divide marital resources, enabling each party to independently move forward while meeting their financial obligations and those of any children. Fairness is determined by individual circumstances.
                </List.Item>
              </List.Root>

              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                textAlign={"justify"}
                lineHeight={1.4}
                color="black"
              >
                When terms are agreed upon, preparing a draft Consent Order is necessary for court approval. The sealed Order ensures a legally binding agreement. If agreement isn't reached voluntarily, arbitration or a court application may be considered.
              </Text>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                textAlign={"justify"}
                lineHeight={1.4}
                color="black"
              >
                The financial settlement encompasses all financial claims at the end of a marriage, covering assets, income, pensions, property, and movable items like cars, artwork, and jewellery. It also addresses potential maintenance for a spouse and/or children.
              </Text>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                textAlign={"justify"}
                lineHeight={1.7}
                color="black"
              >
                We understand that each couple has unique financial needs and priorities. Our approach ensures we consider your priorities to achieve the best possible outcome.
              </Text>
            </Box>
          </Box>

          {/* Dropdown info - FIXED */}
          <VStack justifyContent={"space-around"} alignItems={"center"} mb={"50px"}>

            {/* What is a Financial Settlement? */}
            {/* <Box display={"flex"} flexDir={"column"} color={"black"} width={"90%"} justifyContent={"center"} alignItems={"center"}>
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ xs: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ xs: "4px", sm: "6px", md: "7px", lg: "8px", xl: "9px", "2xl": "10px" }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !eligibilityState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setEligibilityState(!eligibilityState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  What is a Financial Settlement?
                </Text>
                {!eligibilityState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {eligibilityState && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    A financial settlement aims to equitably divide marital resources, enabling each party to independently move forward while meeting their financial obligations and those of any children. Fairness is determined by individual circumstances.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    When terms are agreed upon, preparing a draft Consent Order is necessary for court approval. The sealed Order ensures a legally binding agreement. If agreement isn't reached voluntarily, arbitration or a court application may be considered.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    The financial settlement encompasses all financial claims at the end of a marriage, covering assets, income, pensions, property, and movable items like cars, artwork, and jewellery. It also addresses potential maintenance for a spouse and/or children.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    We understand that each couple has unique financial needs and priorities. Our approach ensures we consider your priorities to achieve the best possible outcome.
                  </Text>
                </VStack>
              )}
            </Box> */}

            {/* When Might Family Financial Issues Arise? */}
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
                  When Might Family Financial Issues Arise?
                </Text>
                {!spouseState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {spouseState && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <List.Root textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <List.Item><strong>Separation of Unmarried Couples</strong>: Issues can arise when parties separate after living together as a couple without marriage or a Civil Partnership.</List.Item>
                    <List.Item><strong>Divorce</strong>: Financial issues commonly surface during the divorce process.</List.Item>
                    <List.Item><strong>Judicial Separation</strong>: Separation sanctioned by a court without ending the marriage can lead to financial disputes</List.Item>
                    <List.Item><strong>Dissolution of a Civil Partnership</strong>: Ending a Civil Partnership may involve financial settlements.</List.Item>
                    <List.Item><strong>Child-related Claims</strong>: Claims may be made by or on behalf of a child against a parent.</List.Item>
                    <List.Item><strong>Death of a Partner or Spouse</strong>: Financial issues can arise if no reasonable financial provision has been made upon the death of a partner or spouse.</List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* What are Marital Assets? */}
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
                  What are Marital Assets?
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
                    The "marital pot" includes all income and assets each party is entitled to worldwide, regardless of ownership timing relative to marriage. Full financial disclosure via Form E is crucial for fair divorce financial settlements, and we assist in preparing and exchanging these documents.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Financial Applications in Divorce Proceedings */}
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
                  Financial Applications in Divorce Proceedings
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
                    The court process begins with a financial application, where the court provides directions for case progression, including exchanging financial disclosures using Form E.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    Typically, a financial application involves three court hearings:
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={600} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    Financial Dispute Resolution Hearing
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    Here, a judge reviews provided information and encourages negotiation. If an agreement isn't reached, the matter proceeds to a Final Hearing.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={600} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    Final Hearing
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    A judge considers all evidence, including witness statements and oral testimonies, to determine the financial settlement terms.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={600} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    First Directions Hearing
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    This procedural hearing decides necessary case steps, such as document requests or valuations.
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
                    At Lumine, we offer comprehensive services to assist you with the financial settlements effectively:
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Initial Consultation</strong>: We offer an initial consultation to understand your unique circumstances and provide you with clear advice on financial settlements, your rights, and the next steps.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Asset Valuation and Division</strong>: Our experienced solicitors assist in valuing and dividing marital assets, ensuring a fair and equitable distribution.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Spousal Maintenance</strong>: We provide guidance on spousal maintenance, helping you understand your rights and obligations, and negotiating fair agreements.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={{ lg: "-7", xs: "-4", md: "-6" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Pension Sharing</strong>: We offer expert advice on pension sharing arrangements to ensure that retirement assets are fairly divided.
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
                    At Lumine Solicitors, we understand the intricacies of financial settlements and are dedicated to providing personalized and effective solutions. Here's how we can help:
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
                    For assistance with financial settlements, please do not hesitate to get in touch with Lumine solicitors{" "}
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

export default FinancialSettlements;