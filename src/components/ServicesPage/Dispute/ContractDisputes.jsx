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

const ContractDisputes = () => {
  const [spouseState, setSpouseState] = useState(false);
  const [eligibilityState, setEligibilityState] = useState(false);
  const [applicationState, setApplicationState] = useState(false);
  const [screening, setScreening] = useState(false);
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
          <title>Lumine Law Contract Disputes Services</title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner */}
          <Box
            width={"100%"}
            height={{
              xs: "290px",
              lg: "320px",
              xl: "350px",
              "2xl": "360px",
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
              Contract Disputes
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
                ml={6}
                mr={6}
              >
                Contract disputes can arise in both personal and business
                contexts, often leading to significant financial and operational
                challenges. Virtually every commercial relationship you enter as
                a business is governed by contracts, making disputes almost
                inevitable. These disputes can stem from various issues such as
                alleged misrepresentation, breach of contract, or failure to
                comply with fiduciary duties in agreements based on trust and
                confidence, such as agency agreements. Understanding and
                navigating the complexities of contract law under the updated UK
                laws is essential for achieving a fair and timely resolution.
              </Text>

              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"justify"}
                ml={6}
                mr={6}
                mt={{ lg: "6", xs: "2" }}
              >
                At Lumine Solicitors, we recognize the profound impact that
                contract disputes can have on your business operations and
                personal affairs. Our goal is to help you resolve these disputes
                efficiently and effectively, minimizing disruption and
                safeguarding your interests. We provide expert guidance and
                representation tailored to your specific needs, ensuring that
                you understand your rights and options at every stage of the
                dispute resolution process. Whether your objective is to bring
                an immediate halt to activities being carried out in breach of
                contract, to maintain a valuable commercial relationship, or to
                keep the details of your disputes confidential, we offer
                strategic advice and solutions to meet your goals.
              </Text>
            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mb={"50px"}
            ml={6}
            mr={6}
          >
            {/* Contract Review and Advice */}
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
                    xs: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Contract Review and Advice
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
                    fontWeight={350}
                    fontFamily={"CeraRoundPro"}
                    ml={2}
                    lineHeight={1.8}
                  >
                    Our team of experienced solicitors will thoroughly review
                    your contracts and provide clear, practical advice on your
                    legal position. We help identify potential issues and advise
                    on the best course of action to protect your interests. This
                    includes:
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
                    fontWeight={350}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-6", xs: "-3" }}
                    lineHeight={1.8}
                  >
                    <List.Item>
                      <strong>Contract Analysis</strong>: Detailed examination
                      of contract terms to identify any ambiguities, breaches,
                      or areas of potential conflict.
                    </List.Item>
                    <List.Item>
                      <strong>Legal Position</strong>: Explanation of your
                      rights and obligations under the contract to ensure you
                      are fully informed.
                    </List.Item>
                    <List.Item>
                      <strong>Strategic Advice</strong>: Recommendations on the
                      most appropriate steps to take based on your objectives,
                      whether it be pursuing enforcement, seeking amendments, or
                      initiating dispute resolution processes.
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Alternative Dispute Resolution (ADR) */}
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
                    xs: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Alternative Dispute Resolution (ADR)
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
                    fontWeight={350}
                    fontFamily={"CeraRoundPro"}
                    ml={2}
                    lineHeight={1.8}
                  >
                    We prioritize resolving disputes amicably whenever possible.
                    Our skilled negotiators will work to achieve a mutually
                    satisfactory agreement, utilizing mediation and other ADR
                    methods to facilitate constructive dialogue between parties.
                    Benefits include:
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
                    fontWeight={350}
                    fontFamily={"CeraRoundPro"}
                    ml={2}
                    lineHeight={1.8}
                    mt={{ lg: "-7", xs: "-4" }}
                  >
                    <List.Item>
                      <strong>Confidentiality</strong>: Ensuring that sensitive
                      business information and details of the dispute remain
                      private.
                    </List.Item>
                    <List.Item>
                      <strong>Cost-Effectiveness</strong>: Reducing the
                      financial burden associated with prolonged litigation.
                    </List.Item>
                    <List.Item>
                      <strong>Preservation of Relationships</strong>:
                      Maintaining business relationships by finding a
                      cooperative resolution.
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Litigation */}
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
                    xs: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Litigation
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
                    When a negotiated settlement cannot be reached, we are
                    prepared to represent your interests in court. Our
                    litigation team has extensive experience in handling complex
                    contract disputes, ensuring that your case is presented
                    effectively to achieve a favorable outcome. Our litigation
                    services include:
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
                    fontWeight={350}
                    fontFamily={"CeraRoundPro"}
                    ml={2}
                    lineHeight={1.8}
                    mt={{ lg: "-7", xs: "-4" }}
                  >
                    <List.Item>
                      <strong>Court Representation</strong>: Advocating on your
                      behalf in court to present a compelling case
                    </List.Item>
                    <List.Item>
                      <strong>Evidence Gathering</strong>: Collecting and
                      organizing necessary evidence to support your claims.
                    </List.Item>
                    <List.Item>
                      <strong>Strategic Litigation</strong>: Developing a
                      litigation strategy tailored to your specific situation to
                      maximize the chances of a successful resolution.
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Enforcement of Judgments */}
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
                    xs: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Enforcement of Judgements
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
                    fontWeight={350}
                    fontFamily={"CeraRoundPro"}
                    ml={2}
                    lineHeight={1.8}

                  >
                    If a court judgment is obtained in your favor, we assist
                    with the enforcement process to ensure that you receive the
                    compensation or specific performance ordered by the court.
                    This includes:
                  </Text>

                  <List.Root
                    textAlign={"justify"}
                    fontSize={{
                      xs: "13px",
                      sm: "13px",
                      md: "15px",
                      lg: "15px",
                      xl: "17px",
                      "2xl": "19px",
                    }}
                    fontWeight={350}
                    fontFamily={"CeraRoundPro"}
                    ml={2}
                    lineHeight={1.9}
                    mt={{ lg: "-7", xs: "-4" }}
                  >
                    <List.Item>
                      <strong>Execution of Judgments</strong>: Taking necessary
                      legal steps to enforce court orders, such as garnishment
                      of wages, seizing assets, or placing liens on property.
                    </List.Item>
                    <List.Item>
                      <strong>Follow-Up Actions</strong>: Monitoring compliance
                      with court orders and taking additional legal action if
                      necessary to ensure full enforcement.
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
                    xs: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
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
                    At Lumine, we understand the intricacies of contract
                    disputes under the updated UK laws. Our experienced
                    solicitors are dedicated to providing personalized and
                    effective solutions to your contract-related issues. Here's
                    how we can help:
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "13px",
                      sm: "13px",
                      md: "15px",
                      lg: "15px",
                      xl: "17px",
                      "2xl": "19px",
                    }}
                    fontWeight={350}
                    fontFamily={"CeraRoundPro"}
                    ml={2}
                    lineHeight={1.7}
                    mt={{ lg: "-7", xs: "-4" }}
                  >
                    <strong>Expert Advice</strong>: We offer clear, concise, and
                    practical legal advice tailored to your specific
                    circumstances.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "13px",
                      sm: "13px",
                      md: "15px",
                      lg: "15px",
                      xl: "17px",
                      "2xl": "19px",
                    }}
                    fontWeight={350}
                    fontFamily={"CeraRoundPro"}
                    ml={2}
                    lineHeight={1.7}
                    mt={{ lg: "-7", xs: "-4" }}
                  >
                    <strong>Strategic Approach</strong>: Our team develops
                    customized strategies to resolve contract disputes,
                    maximizing your chances of a successful outcome.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "13px",
                      sm: "13px",
                      md: "15px",
                      lg: "15px",
                      xl: "17px",
                      "2xl": "19px",
                    }}
                    fontWeight={350}
                    fontFamily={"CeraRoundPro"}
                    ml={2}
                    lineHeight={1.7}
                    mt={{ lg: "-7", xs: "-4" }}
                  >
                    <strong>Comprehensive Support</strong>: From initial
                    consultations to court representation, we provide
                    comprehensive support throughout the contract dispute
                    resolution process.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "13px",
                      sm: "13px",
                      md: "15px",
                      lg: "15px",
                      xl: "17px",
                      "2xl": "19px",
                    }}
                    fontWeight={350}
                    fontFamily={"CeraRoundPro"}
                    ml={2}
                    lineHeight={1.7}
                    mt={{ lg: "-7", xs: "-4" }}
                  >
                    <strong>Updated Knowledge</strong>: We stay abreast of the
                    latest legal developments to ensure that our advice and
                    strategies are always current and effective.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "13px",
                      sm: "13px",
                      md: "15px",
                      lg: "15px",
                      xl: "17px",
                      "2xl": "19px",
                    }}
                    fontWeight={350}
                    fontFamily={"CeraRoundPro"}
                    ml={2}
                    lineHeight={1.7}
                    mt={{ lg: "-7", xs: "-4" }}
                  >
                    For assistance with contract disputes, please do not
                    hesitate to get in touch with Lumine solicitors{" "}
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

export default ContractDisputes;
