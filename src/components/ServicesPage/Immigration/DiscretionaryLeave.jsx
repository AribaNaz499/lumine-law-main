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
import BannerImg from "../../../assets/services/main/immigration/Asylum.jpg";
import { Heading } from "@chakra-ui/react"
const DiscretionaryLeave = () => {
  const [spouseState, setSpouseState] = useState(false);
  const [eligibilityState, setEligibilityState] = useState(false);
  const [applicationState, setApplicationState] = useState(false);
  const [decisionState, setDecisionState] = useState(false);
  const [appeal, setAppeal] = useState(false);
  const [review, setReview] = useState(false);
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

          <title>Lumine Law Discretionary Leave Services</title>

        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner */}
          <Box
            width={"100%"}
            height={{
              xs: "230px",
              lg: "310px",
              xl: "330px",
              "2xl": "380px",
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
              fontSize={{ xs: "17px", lg: "27px", xl: "33px", "2xl": "41px" }}
              fontWeight={600}
              fontFamily={"CeraRoundPro"}
              width={"90%"}
              textAlign={"left"}
              lineHeight={1.1}
            >
              Discretionary Leave

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
              width={"93%"}
              alignSelf={"center"}
              mb={"5%"}
              my={{ xs: "5%", md: "2.5%" }}
            >

              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                color={"#bf9b30"}
                fontSize={{ xs: "10px", lg: "15px", xl: "22px", "2xl": "32px" }}
                textAlign={"left"}

              >
                DISCRETIONARY LEAVE

              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                mt={5}
                mr={2}
              >
                Discretionary Leave is a form of temporary leave granted to individuals who are in the UK but do not meet the usual requirements for asylum or other forms of leave to remain. This leave is granted case-by-case basis and at the discretion of the Home Office, which is generally granted to individuals facing exceptional circumstances that may not neatly fit within any of the categories of immigration, but are still in need of protection or permission to remain in the UK for a short time.

              </Text>
              <VStack align="start" spacing={4} mt={5} width="100%">
                <Text
                  fontFamily={"CeraRoundPro"}
                  fontWeight={400}
                  fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  textAlign={"left"}
                  color="black"
                >
                  The reasons why a person would be given Discretionary Leave are diverse, but common ones include:
                </Text>

                <List.Root
                  as="ol"
                  styleType="decimal"
                  ml={5}
                  spacing={3}
                  fontFamily={"CeraRoundPro"}
                  fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  color="black"
                >
                  <List.Item textAlign="justify">
                    <Text as="span">Humanitarian Protection:</Text> A person who does not meet the asylum requirements but is at risk of suffering harm in his or her own country may be awarded Discretionary Leave. As long as the victims are threatened by violence, persecution, or other grave danger to their lives, there is still a chance for humanitarian protection, even without qualification under formal refugee status.
                  </List.Item>

                  <List.Item textAlign="justify">
                    <Text as="span" >Compassionate Grounds:</Text> In other cases, Discretionary Leave can be awarded on compassionate grounds, including that one has members of the family in the UK or any other personal reasons to warrant an exemption. The grounds may be related to the applicant's health, well-being, or remaining in the UK for other current legal or humanitarian matters.
                  </List.Item>

                  <List.Item textAlign="justify">
                    <Text as="span" >Victims of Trafficking or Exploitation:</Text> Those individuals who are being trafficked or exploited or who, as a part of cooperation with investigations, might be provided with Discretionary Leave so that they can receive support and assistance to recover and rebuild their lives.
                  </List.Item>

                  <List.Item textAlign="justify">
                    <Text as="span" >Time-limited stay owing to unresolved immigration claims:</Text> Some people are offered Discretionary Leave if their immigration claims have not been sorted out, which may include pending appeals or other applications that may take more time to process. In such circumstances, the Home Office may offer the person an opportunity to stay in the UK until they receive a determination on their application.
                  </List.Item>
                </List.Root>
              </VStack>
              <Text
                mb={8}
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                mt={5}


              >
                For personalized assistance with your legal needs, contact us or visit Lumine for expert guidance tailored to your specific situation. Our experienced team is here to help you navigate the complexities with confidence and ease.


              </Text>
            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mb={"50px"}
          >
            {/* What is Discretionary Leave */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"93%"}
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
                    xs: "11px",
                    sm: "11px",
                    md: "13px",
                    lg: "13px",
                    xl: "15px",
                    "2xl": "17px",
                  }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  What is Discretionary Leave?
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
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    color={"gray.800"}
                    lineHeight={1.9}
                    mb={2}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    ml={3}
                    mr={3}
                  >
                    Discretionary leave is a way in which the Home Office can grant a period of leave to migrants outside of the UK's Immigration Rules. This is in exceptional and compassionate circumstances. This route is considered if applying under the asylum, humanitarian protection, family, or private life routes is not possible. However, since the UK offers other immigration routes within the Rules, the Home Office is not obliged to grant discretionary leave

                  </Text>
                </VStack>
              )}
            </Box>

            {/* Benefits */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"93%"}
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
                    xs: "11px",
                    sm: "11px",
                    md: "13px",
                    lg: "13px",
                    xl: "15px",
                    "2xl": "17px",
                  }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Benefits
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
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    color={"gray.800"}
                    mr={3}
                    mb={4}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    Discretionary Leave to Remain has several benefits. The main benefits include the ability to:

                  </Text>

                  <List.Root
                    textAlign={"justify"}
                    fontSize={{
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    color={"gray.800"}
                    mt={-9}
                    lineHeight={1.8}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}

                  >
                    <List.Item >
                      Claim public funds (e.g., benefits)

                    </List.Item>
                    <List.Item >
                      Work without restriction

                    </List.Item>
                    <List.Item >Study


                    </List.Item>


                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Eligibility Requirements */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"93%"}
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
                    xs: "11px",
                    sm: "11px",
                    md: "13px",
                    lg: "13px",
                    xl: "15px",
                    "2xl": "17px",
                  }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Eligibility Requirements
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
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    color={"gray.800"}
                    ml={3}
                    mr={3}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    There are no set eligibility criteria for discretionary leave, but there must be clear evidence of exceptional and compassionate circumstances. Lumine solicitors will thoroughly examine your unique circumstances to determine whether discretionary leave can be granted.


                  </Text>
                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    color={"gray.800"}
                    ml={3}
                    mr={3}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={-6}
                  >
                    The types of cases in which discretionary leave may be considered include:


                  </Text>

                  <List.Root
                    textAlign={"justify"}
                    fontSize={{
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    color={"gray.800"}
                    mt={-6}
                    lineHeight={1.8}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}

                  >
                    <List.Item >
                      Medical grounds

                    </List.Item>
                    <List.Item >
                      Exceptional circumstances E.g., if a human rights claim has been refused

                    </List.Item>
                    <List.Item >Slavery cases E.g., trafficking


                    </List.Item>
                    <List.Item >Children of parents with discretionary leave to remain


                    </List.Item>
                  </List.Root>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    color={"gray.800"}
                    ml={3}
                    mt={-6}
                    mr={3}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    Other unique circumstances, not falling within the points listed above, may be so compelling that discretionary leave is granted.



                  </Text>
                </VStack>
              )}
            </Box>


            {/* If Your Application is Successful */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"93%"}
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
                _hover={{ backgroundColor: !review && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setReview(!review)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "11px",
                    sm: "11px",
                    md: "13px",
                    lg: "13px",
                    xl: "15px",
                    "2xl": "17px",
                  }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  If Your Application is Succesful
                </Text>
                {!review ? (
                  <GoPlus color={"#bf9b30"} size={"1.8em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.8em"} />
                )}
              </HStack>

              {review && (
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
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    color={"gray.800"}
                    ml={3}
                    mr={9}
                    lineHeight={1.9}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    If your discretionary leave application is successful, you will have no prohibition on where to study or work in the UK and recourse to public funds.

                  </Text>
                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    color={"gray.800"}
                    mt={{lg: "-8" , xs: "-4"}}
                    ml={3}
                    fontWeight={400}
                    lineHeight={1.9}
                    fontFamily={"CeraRoundPro"}
                  >
                    For all immigration matters, Please do not hesitate to get
                    in touch
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

export default DiscretionaryLeave;