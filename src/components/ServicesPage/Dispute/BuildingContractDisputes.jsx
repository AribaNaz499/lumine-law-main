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
import BannerImg from "../../../assets/services/main/sub-services/dispute.webp";

const BuildingContractDisputes = () => {
  const [eligibilityState, setEligibilityState] = useState(false);
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
          <title>Lumine Law Building Contract Disputes Services</title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner */}
          <Box
            width={"100%"}
            height={{
              xs: "300px",
              lg: "330px",
              xl: "360px",
              "2xl": "370px",
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
              Building Contract Disputes
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
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"justify"}
              >
                Building contract disputes can significantly disrupt
                construction projects and lead to substantial financial losses.
                Understanding and navigating the complexities of construction
                law under the updated UK laws is essential for achieving a fair
                and timely resolution. Lumine Solicitors is here to support you
                every step of the way.
              </Text>
            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mb={"50px"}
          >
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
                _hover={{ backgroundColor: !eligibilityState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={eligibilityState && "black"}
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
                  Our Services
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
                    mr={{lg:"9"}}
                  >
                    At Lumine, we offer a comprehensive range of services to
                    help you manage and resolve building contract disputes
                    effectively:
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
                    mt={{ lg: "-7", xs: "-4" }}
                    lineHeight={1.8}
                    mr={{lg:"9"}}
                  >
                    <strong>Contract Review and Drafting</strong>: Our
                    experienced solicitors will review and draft construction
                    contracts to ensure they are clear, comprehensive, and
                    compliant with current laws. We help identify potential
                    issues and provide advice to prevent disputes before they
                    arise.
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
                    mt={{ lg: "-7", xs: "-4" }}
                    lineHeight={1.8}
                    mr={{lg:"9"}}
                  >
                    <strong>Negotiation and Mediation</strong>: We prioritize
                    resolving disputes amicably whenever possible. Our skilled
                    negotiators work to achieve a mutually satisfactory
                    agreement, utilizing mediation to facilitate constructive
                    dialogue between parties.
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
                    lineHeight={1.8}
                    mt={{ lg: "-7", xs: "-4" }}
                    mr={{lg:"9"}}
                  >

                    <strong>Adjudication and Arbitration</strong>: For
                    construction disputes that require formal resolution, we
                    provide representation in adjudication and arbitration
                    proceedings. These methods offer a faster and more
                    cost-effective alternative to litigation.
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
                    lineHeight={1.8}
                    mt={{ lg: "-7", xs: "-4" }}
                    mr={{lg:"9"}}
                  >
                    <strong>Litigation</strong>: When a negotiated settlement
                    cannot be reached, we are prepared to represent your
                    interests in court. Our litigation team has extensive
                    experience handling complex building contract disputes,
                    ensuring that your case is presented effectively to achieve
                    a favorable outcome.
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
                    lineHeight={1.8}
                    mt={{ lg: "-7", xs: "-4" }}
                    mr={{lg:"9"}}
                  >
                    <strong>Enforcement of Judgments</strong>: If a court
                    judgment or adjudicator’s decision is obtained in your
                    favor, we assist with the enforcement process to ensure that
                    you receive the compensation or specific performance
                    ordered.
                  </Text>
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
                    mr={{lg:"9"}}
                  >
                    At Lumine, we understand the intricacies of building
                    contract disputes under the updated UK laws. Our experienced
                    solicitors are dedicated to providing personalized and
                    effective solutions to your construction-related issues.
                    Here's how we can help:
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
                      mt={{ lg: "-7", xs: "-4" }}
                    lineHeight={1.8}
                    mr={{lg:"9"}}
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
                      mt={{ lg: "-7", xs: "-4" }}
                    lineHeight={1.8}
                    mr={{lg:"9"}}
                  >
                    <strong>Strategic Approach</strong>: Our team develops
                    customized strategies to manage and resolve building
                    contract disputes, maximizing your chances of a successful
                    outcome.
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
                      mt={{ lg: "-7", xs: "-4" }}
                    lineHeight={1.8}
                    mr={{lg:"9"}}
                  >
                    <strong>Comprehensive Support</strong>: From initial
                    consultations to court representation, we provide
                    comprehensive support throughout the building contract
                    dispute resolution process.
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
                      mt={{ lg: "-7", xs: "-4" }}
                    lineHeight={1.8}
                    mr={{lg:"9"}}
                  >
                    <strong>Updated Knowledge</strong>: We stay abreast of the
                    latest legal developments to ensure that our advice and
                    strategies are always current and effective.
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
                      mt={{ lg: "-7", xs: "-4" }}
                    lineHeight={1.8}
                    mr={{lg:"9"}}
                  >
                    For assistance with building contract disputes, please do
                    not hesitate to get in touch with Lumine solicitors{" "}
                    <strong>020 3950 2246</strong> or{" "}
                    <strong>
                     <Link
                        to={"/contact"}
                        style={{ color: "#e91e63" }}
                        onMouseEnter={(e) => (e.target.style.color = "#091838")}
                        onMouseLeave={(e) => (e.target.style.color = "#e91e63")}
                      >
                        Contact Us HERE
                      </Link>{" "}
                    </strong>
                    Let us help you navigate the complexities of construction
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

export default BuildingContractDisputes;
