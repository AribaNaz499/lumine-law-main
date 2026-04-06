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

const Divorce = () => {
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
        overflow="auto"
        m={0}
        p={0}
        display="flex"
        flexDirection="column"
      >
        <Helmet>
          <title>Lumine Law Divorce Services</title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner */}
          <Box
            width={"100%"}
            height={{
              xs: "250px",
              lg: "300px",
              xl: "350px",
              "2xl": "400px",
            }}
            bgImage={`url(${BannerImg})`}
            bgSize={"cover"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            _loading={"eager"}
          >
            <Text
              fontSize={{ xs: "20px", lg: "30px", xl: "36px", "2xl": "45px" }}
              fontWeight={600}
              fontFamily={"CeraRoundPro"}
              width={"90%"}
              textAlign={"left"}
            >
              Divorce
            </Text>
          </Box>

          {/* Main */}
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
                fontWeight={400}
                color={"#bf9b30"}
                fontSize={{ xs: "12px", lg: "20px", xl: "24px", "2xl": "34px" }}
                textAlign={"left"}
                ml={{ lg: "2" }}

              >
                Requirements
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"justify"}
                ml={{ lg: "2" }}
                mt={{ lg: "3" }}

              >
                You can apply for a divorce, provided that:
              </Text>
              <List.Root
                textAlign={"justify"}
                fontSize={{
                  xs: "12px",
                  sm: "12px",
                  md: "14px",
                  lg: "14px",
                  xl: "16px",
                  "2xl": "18px",
                }}
                fontWeight={400}
                fontFamily={"CeraRoundPro"}
                mt={{ lg: "1" }}
                ml={{ lg: "5" }}
              >
                <List.Item>
                  You have been married for at least 12 months

                </List.Item>
                <List.Item>
                  Your marriage is legally recognised in the UK

                </List.Item>
                <List.Item>
                  Your marriage has permanently broken down irretrievably

                </List.Item>
              </List.Root>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"justify"}
                ml={{ lg: "2" }}
                mt={{ lg: "3" }}
                lineHeight={1.7}

              >
                As of April 6, 2022, a new law has come into effect, replacing the previous system with no fault divorce. Under this law, individuals seeking divorce or dissolution can apply jointly with their spouse or civil partner, or individually. There’s no longer a requirement to provide a reason for the marriage breakdown or to assign blame to any party. Instead, a statement confirming the irretrievable breakdown of the marriage suffices.
              </Text>
            </Box>
            <Box
              width={"90%"}
              alignSelf={"center"}
              mb={"5%"}
              my={{ xs: "5%", md: "2.5%" }}
            >
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                color={"#bf9b30"}
                fontSize={{ xs: "12px", lg: "20px", xl: "24px", "2xl": "34px" }}
                textAlign={"left"}
                ml={{ lg: "2" }}
                mt={{ lg: -8 }}

              >
                How Long does the Divorce process take?
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"justify"}
                ml={{ lg: "2" }}
                mt={{ lg: "3" }}
                lineHeight={1.8}

              >
                Various factors, including the agreement on finances by both partners and the timely return of paperwork, can influence the duration of the divorce process. On average, divorce proceedings typically last between 6 and 8 months. We recognise the importance of completing the divorce process but advise against rushing such a significant decision to ensure client satisfaction.

              </Text>
            </Box>
            <Box
              width={"90%"}
              alignSelf={"center"}
              mb={"5%"}
              my={{ xs: "5%", md: "2.5%" }}
            >
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                color={"#bf9b30"}
                fontSize={{ xs: "12px", lg: "20px", xl: "24px", "2xl": "34px" }}
                textAlign={"left"}
                ml={{ lg: "2" }}
                mt={{ lg: -8 }}

              >
                Child Arrangements
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"justify"}
                ml={{ lg: "2" }}
                mt={{ lg: "3" }}
                lineHeight={1.8}

              >
                Lumine solicitors understand how complex and sensitive the divorce process is. Thus, we offer children’s services to make your divorce process smoother, including:
              </Text>
              <List.Root
                textAlign={"justify"}
                fontSize={{
                  xs: "12px",
                  sm: "12px",
                  md: "14px",
                  lg: "14px",
                  xl: "16px",
                  "2xl": "18px",
                }}
                fontWeight={400}
                fontFamily={"CeraRoundPro"}
                mt={{ lg: "1" }}
                ml={{ lg: "5" }}
              >
                <List.Item>
                  Child arrangements
                </List.Item>
                <List.Item>
                  Parental responsibility
                </List.Item>
              </List.Root>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"justify"}
                ml={{ lg: "2" }}
                mt={{ lg: "3" }}
                lineHeight={1.8}

              >
                Please don’t hesitate to reach out to us if you need assistance with our children’s services.
              </Text>
            </Box>
            <Box
              width={"90%"}
              alignSelf={"center"}
              mb={"5%"}
              my={{ xs: "5%", md: "2.5%" }}
            >
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                color={"#bf9b30"}
                fontSize={{ xs: "12px", lg: "20px", xl: "24px", "2xl": "34px" }}
                textAlign={"left"}
                ml={{ lg: "2" }}
                mt={{ lg: -8 }}

              >
                Financial Settlement
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"justify"}
                ml={{ lg: "2" }}
                mt={{ lg: "3" }}
                lineHeight={1.8}

              >
                Financial settlement is often considered one of the most difficult aspects of divorce. Therefore, Lumine Solicitors divorce team can provide you with tailored advice so you can reach a swift solution to the financial settlement in your divorce matter.
              </Text>
            </Box>
            <Box
              width={"90%"}
              alignSelf={"center"}
              mb={"5%"}
              my={{ xs: "5%", md: "2.5%" }}
            >
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                color={"#bf9b30"}
                fontSize={{ xs: "12px", lg: "20px", xl: "24px", "2xl": "34px" }}
                textAlign={"left"}
                ml={{ lg: "2" }}
                mt={{ lg: -8 }}

              >
                How Can Lumine Solicitors Help?
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"justify"}
                ml={{ lg: "2" }}
                mt={{ lg: "3" }}
                lineHeight={1.8}

              >
                Lumine Solicitors dedicated team is here to provide you with stress-free guidance through the divorce process, including childcare arrangements and financial settlements. We will discuss your circumstances with you to get a better understanding of your case and explain to you the legal process and options available to you.
              </Text>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"justify"}
                ml={{ lg: "2" }}
                mt={{ lg: "-1   \z" }}
                lineHeight={1.8}

              >
                Whether you’re considering divorce, initiating proceedings, or dealing with disagreements over assets or child custody, you can rely on us on us to provide you with compassionate and knowledgeable guidance during this challenging time.
              </Text>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"justify"}
                ml={{ lg: "2" }}
                mt={{ lg: "-1" }}
                lineHeight={1.8}

              >
                For all immigration matters, Please do not hesitate to get in touch on 020 3950 2246 or Contact Us HERE
              </Text>
            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mb={"50px"}
          >
            {/* Divorce vs. Separation */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "13px",
                  xl: "14px",
                  "2xl": "15px",
                }}
                alignItems={"center"}
                py={{
                  xs: "4px",
                  sm: "6px",
                  md: "7px",
                  lg: "8px",
                  xl: "9px",
                  "2xl": "10px",
                }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !eligibilityState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setEligibilityState(!eligibilityState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "13px",
                    sm: "13px",
                    md: "15px",
                    lg: "15px",
                    xl: "17px",
                    "2xl": "19px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Divorce vs. Separation
                </Text>
                {!eligibilityState ? (
                  <GoPlus color={"#bf9b30"} size={"1.8em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.8em"} />
                )}
              </HStack>

              {eligibilityState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  {/* Divorce */}
                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={600}
                    fontFamily={"CeraRoundPro"}
                  >
                    Divorce
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    Divorce is the legal process of dissolving a marriage. For
                    civil partnerships, this is known as dissolution. To be
                    eligible for divorce, you must have been married for more
                    than one year.
                  </Text>

                  {/* Separation */}
                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={600}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}

                  >
                    Separation
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    A formal separation, without legally ending the marriage, is
                    known as judicial separation and is a legal process. An
                    informal separation can be done by a Deed of Separation.
                    Separation does not require you to show that the marriage
                    has irretrievably broken down. This option is suitable for
                    those who are against divorce on religious grounds, have
                    been married less than a year, or have decided not to
                    divorce just yet.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    Our specialist divorce solicitors can help you draw up a
                    Separation Agreement, covering how family assets, debts, and
                    income are divided, ongoing maintenance payments, childcare
                    arrangements, and living arrangements.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Starting a Divorce or Dissolution of Civil Partnership */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "13px",
                  xl: "14px",
                  "2xl": "15px",
                }}
                alignItems={"center"}
                py={{
                  xs: "4px",
                  sm: "6px",
                  md: "7px",
                  lg: "8px",
                  xl: "9px",
                  "2xl": "10px",
                }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !spouseState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setSpouseState(!spouseState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "13px",
                    sm: "13px",
                    md: "15px",
                    lg: "15px",
                    xl: "17px",
                    "2xl": "19px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Starting a Divorce or Dissolution of Civil Partnership
                </Text>
                {!spouseState ? (
                  <GoPlus color={"#bf9b30"} size={"1.8em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.8em"} />
                )}
              </HStack>

              {spouseState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    lineHeight={1.8}
                  >
                    The new no-fault procedure, effective from 6 April 2022,
                    requires proving that the marriage has irretrievably broken
                    down. Either party can apply for divorce, and it can also be
                    done jointly.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Steps to Take if Considering Divorce */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "13px",
                  xl: "14px",
                  "2xl": "15px",
                }}
                alignItems={"center"}
                py={{
                  xs: "4px",
                  sm: "6px",
                  md: "7px",
                  lg: "8px",
                  xl: "9px",
                  "2xl": "10px",
                }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !applicationState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setApplicationState(!applicationState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "13px",
                    sm: "13px",
                    md: "15px",
                    lg: "15px",
                    xl: "17px",
                    "2xl": "19px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Steps to Take if Considering Divorce
                </Text>
                {!applicationState ? (
                  <GoPlus color={"#bf9b30"} size={"1.8em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.8em"} />
                )}
              </HStack>

              {applicationState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  {/* Talk to Your Partner */}
                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}

                  >
                    Talk to Your Partner
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    Aim for constructive communication, especially if children
                    are involved.
                  </Text>

                  {/* Seek Legal Advice */}
                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                  >
                    Seek Legal Advice
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    Ensure you are comfortable with your solicitor, who should
                    understand both your legal needs and the emotional aspects
                    of your situation. Your solicitor will advise you on the
                    best strategy and approach to take.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    "Divorce is never pleasant, but Jacqueline Major, who looked
                    after me throughout the whole proceedings, was always a
                    source of calm, professional, and pragmatic advice, as well
                    as an unfailingly warm and supportive human being. I feel
                    very fortunate to have met Jacqueline and been represented
                    by her."
                  </Text>
                </VStack>
              )}
            </Box>

            {/* The Divorce Process */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "13px",
                  xl: "14px",
                  "2xl": "15px",
                }}
                alignItems={"center"}
                py={{
                  xs: "4px",
                  sm: "6px",
                  md: "7px",
                  lg: "8px",
                  xl: "9px",
                  "2xl": "10px",
                }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !screening && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setScreening(!screening)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "13px",
                    sm: "13px",
                    md: "15px",
                    lg: "15px",
                    xl: "17px",
                    "2xl": "19px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  The Divorce Process
                </Text>
                {!screening ? (
                  <GoPlus color={"#bf9b30"} size={"1.8em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.8em"} />
                )}
              </HStack>

              {screening && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  {/* The Divorce Application */}
                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    The Divorce Application
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    Divorce proceedings begin by submitting an application to
                    court, which can be issued as a sole or joint application.
                  </Text>

                  {/* Judicial Separation & Annulment */}
                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                  >
                    Judicial Separation & Annulment
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    For marriages of less than a year, judicial separation or
                    annulment proceedings can commence. However, judicial
                    separation does not terminate the marriage, and you would
                    not be free to re-marry.
                  </Text>

                  {/* 20-Week Wait Period */}
                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                  >
                    20-Week Wait Period
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    There is a 20-week period after the application is issued
                    before applying for a conditional order, allowing time for
                    reflection and arrangement of financial matters and child
                    care.
                  </Text>

                  {/* Applying for the Final Order */}
                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                  >
                    Applying for the Final Order
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    Six weeks after the Conditional Order is made, the Final
                    Order can be applied for, dissolving the marriage or civil
                    partnership.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Our Services */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "13px",
                  xl: "14px",
                  "2xl": "15px",
                }}
                alignItems={"center"}
                py={{
                  xs: "4px",
                  sm: "6px",
                  md: "7px",
                  lg: "8px",
                  xl: "9px",
                  "2xl": "10px",
                }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !decisionState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setDecisionState(!decisionState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "13px",
                    sm: "13px",
                    md: "15px",
                    lg: "15px",
                    xl: "17px",
                    "2xl": "19px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Our Services
                </Text>
                {!decisionState ? (
                  <GoPlus color={"#bf9b30"} size={"1.8em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.8em"} />
                )}
              </HStack>

              {decisionState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    At Lumine, we offer comprehensive services to assist you
                    with the divorce process effectively:
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    <strong>Initial Consultation</strong>: We offer an initial
                    consultation to understand your unique circumstances and
                    provide you with clear advice on the divorce process, your
                    rights, and the next steps.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    <strong>Filing for Divorce</strong>: Our experienced
                    solicitors guide you through the process of filing for
                    divorce, ensuring all legal requirements are met and helping
                    you understand your options.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    <strong>Negotiation and Mediation</strong>: We employ
                    negotiation and mediation techniques to reach amicable
                    agreements on issues such as property division, child
                    arrangements, and financial settlements.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    <strong>Court Representation</strong>: If necessary, we
                    provide robust representation in court to protect your
                    interests and achieve a fair outcome.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={600}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    Key Benefits of Our Service:
                  </Text>

                  <List.Root
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    <List.Item>
                      <strong>Expert Financial Guidance</strong>: We specialize
                      in complex financial arrangements, ensuring that your
                      financial interests are protected.
                    </List.Item>
                    <List.Item>
                      <strong>Constructive Approach</strong>: Our solicitors are
                      committed to negotiation and mediation to achieve amicable
                      solutions.
                    </List.Item>
                    <List.Item>
                      <strong>Robust Court Representation</strong>: When
                      litigation is necessary, we provide strong representation
                      to secure the best possible outcome.
                    </List.Item>
                    <List.Item>
                      <strong>Transparent Costs</strong>: We provide clear
                      estimates of our fees upfront, ensuring transparency and
                      no surprises.
                    </List.Item>
                    <List.Item>
                      <strong>Clear Communication</strong>: We explain the
                      process in detail and keep you informed at every stage.
                    </List.Item>
                    <List.Item>
                      <strong>Responsive Support</strong>: We recognize the
                      importance and sensitivity of the divorce process and
                      strive to respond quickly to your needs.
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Help */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                borderY={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{
                  xs: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "13px",
                  xl: "14px",
                  "2xl": "15px",
                }}
                alignItems={"center"}
                py={{
                  xs: "4px",
                  sm: "6px",
                  md: "7px",
                  lg: "8px",
                  xl: "9px",
                  "2xl": "10px",
                }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !helpState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setHelpState(!helpState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "13px",
                    sm: "13px",
                    md: "15px",
                    lg: "15px",
                    xl: "17px",
                    "2xl": "19px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  How can Lumine Solicitors help?
                </Text>
                {!helpState ? (
                  <GoPlus color={"#bf9b30"} size={"1.8em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.8em"} />
                )}
              </HStack>

              {helpState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    At Lumine, we understand the intricacies of divorce
                    proceedings and are dedicated to providing personalized and
                    effective solutions. Here's how we can help:
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    <strong>Expert Advice</strong>: We offer clear, concise, and
                    practical legal advice tailored to your specific
                    circumstances.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    <strong> Compassionate Support</strong>: Our team provides
                    compassionate support throughout the divorce process,
                    ensuring you feel understood and supported.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                    fontFamily={"CeraRoundPro"}
                  >
                    <strong> Strategic Approach</strong>: We develop customized
                    strategies to achieve the best possible outcome for you.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    <strong> Cost Certainty</strong>: We offer fixed,
                    competitive, and transparent fee packages to maintain cost
                    certainty.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-4", md: "-5" }}
                    lineHeight={1.8}
                  >
                    For assistance with divorce matters, please do not hesitate
                    to get in touch with Lumine solicitors{" "}
                    <strong>020 3950 2246</strong> or{" "}
                    <strong>
                      <Link
                        to={"/contact"}
                        style={{ color: "#e91e63" }}
                        onMouseEnter={(e) => (e.target.style.color = "#091838")}
                        onMouseLeave={(e) => (e.target.style.color = "#e91e63")}
                      >
                        Contact Us HERE
                      </Link>{" "}                    </strong>
                    We are here to help you navigate the complexities of family
                    law and achieve the best possible resolution for your
                    situation.
                  </Text>
                </VStack>
              )}
            </Box>
          </VStack>

          {/* Other Services */}
          <AllServiceLinks />

          {/* Prices */}
          <AllPrices />

          {/* News and Insights */}
          <AllNewsInsights />

          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default Divorce;
