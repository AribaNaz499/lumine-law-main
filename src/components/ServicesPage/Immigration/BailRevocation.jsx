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
const BailRevocation = () => {
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

          <title>
            Lumine Law Immigration Bail and Revocation of a Deportation Order
            Services
          </title>


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
              fontSize={{ xs: "20px", lg: "30px", xl: "36px", "2xl": "45px" }}
              fontWeight={600}
              fontFamily={"CeraRoundPro"}
              width={"90%"}
              textAlign={"left"}
              lineHeight={1.1}
            >
              Immigration Bail and Revocation of
              <br />
              a Deportation Order


            </Text>
          </Box>

          {/* Main */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            color={"black"}
          >
            {/* Heading Section */}
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
                fontSize={{ xs: "10px", lg: "19px", xl: "25px", "2xl": "35px" }}
                textAlign={"left"}
              >
                IMMIGRATION BAIL AND REVOCATION OF A DEPORTATION ORDER

              </Heading>

              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"left"}
                mt={5}
              >
                Immigration bail and revocation of a deportation order are two mechanisms in UK immigration law that afford certain people a temporary right to stay in the UK, even when their immigration status has been called into question or when they are at risk of being removed from the UK. The intention behind these provisions is to do justice and afford people an opportunity to contest the decisions that deny them the right to remain in the UK.
              </Text>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"left"}

              >
                Immigration Bail
              </Text>

              <VStack align="start" spacing={4} width="100%">
                <Text
                  fontFamily={"CeraRoundPro"}
                  fontWeight={400}
                  fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                  textAlign={"left"}
                  color="black"
                >
                  Immigration bail is a form of temporary release granted to those detained under immigration powers, especially removal or deportation from the UK. It enables an individual to be released from detention pending further legal action, for example, appeal, or until their immigration status is clarified.

                </Text>

                <Text
                  fontFamily={"CeraRoundPro"}
                  fontWeight={400}
                  fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                  textAlign={"left"}
                  color="black"
                  mt={-2}
                >
                  It is generally issued either by an immigration judge at a tribunal or by the Home Office. There are mainly two kinds of bail:

                </Text>

                <List.Root
                  as="ol"
                  styleType="decimal"
                  ml={5}
                  spacing={3}
                  fontFamily={"CeraRoundPro"}
                  fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                  color="black"
                >
                  <List.Item textAlign="justify">
                    <Text as="span">Conditional Bail: </Text> The individual is released from detention, but only on the strict conditions and may include any of the following conditions:
                  </List.Item>

                  <Text
                    fontFamily={"CeraRoundPro"}
                    fontWeight={400}
                    fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                    textAlign={"left"}
                    color="black"
                  >
                    Returning to a particular immigration office for routine periods.
                  </Text>

                  <Text
                    fontFamily={"CeraRoundPro"}
                    fontWeight={400}
                    fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                    textAlign={"left"}
                    color="black"
                  >
                    Surrender of their passport or travel document.

                  </Text>

                  <Text
                    fontFamily={"CeraRoundPro"}
                    fontWeight={400}
                    fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                    textAlign={"left"}
                    color="black"
                  >
                    Giving an address to be located at.


                  </Text>

                  <List.Item textAlign="justify">
                    <Text as="span">Unconditional Bail:  </Text> The individual is released from detention without any specific conditions, though this is less common and generally applies to individuals who pose no flight risk or threat to public safety
                  </List.Item>

                  <Text
                    fontFamily={"CeraRoundPro"}
                    fontWeight={400}
                    fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                    textAlign={"left"}
                    color="black"
                  >
                    Procedure for cancelling a deportation order
                  </Text>


                  <List.Root
                    as="ol"
                    styleType="decimal"
                    ml={{ lg: "5", xs: "-2" }}
                    spacing={3}
                    fontFamily={"CeraRoundPro"}
                    fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                    color="black"
                  >



                    <List.Root
                      as="ol"
                      styleType="disc"
                      ml={5}
                      spacing={3}
                      fontFamily={"CeraRoundPro"}
                      fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                      color="black"
                    >
                      <List.Item textAlign="justify">
                        <Text as="span">Revocation: </Text>  If a person wants his deportation order to be revoked, he is at liberty to file an application with the Home Office or appeal to the First-tier Tribunal (Immigration and Asylum Chamber) for the revocation. The grounds stated in the application should be supported by proof.
                      </List.Item>
                      <List.Item textAlign="justify">
                        Appeal of the Decision If the Home Office declines the revocation request, the person can appeal against the decision. The appeal will be heard by an immigration judge who will consider the evidence and decide whether to revoke the deportation order.
                      </List.Item>
                      <List.Item textAlign="justify">
                        <Text as="span"> Timing: </Text>It should be noted that the request for revocation has to come forth soon after the deportation order is made. The case would be adversely affected with delays in requesting a revocation and that the person might be deported before the application is considered.
                      </List.Item>
                      <List.Item textAlign="justify">
                        <Text as="span">  Decision: </Text>   On revocation of the deportation order, the individual will be granted permission to remain in the UK, and any restrictions that might have been enforced by the deportation order will be lifted. Notwithstanding this, it is not guaranteed, as each case would be dealt with on its merit.
                      </List.Item>

                    </List.Root>

                  </List.Root>
                </List.Root>

                {/* Application Process Section */}
                <Text
                  fontFamily={"CeraRoundPro"}
                  fontWeight={400}
                  fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                  textAlign={"left"}
                  color="black"
                  mt={4}
                >
                  For personalized assistance with your legal needs, contact us or visit Lumine for expert guidance tailored to your specific situation. Our experienced team is here to help you navigate the complexities with confidence and ease.

                </Text>







              </VStack>
            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mb={"50px"}
          >
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
                  Immigration Bail
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
                    lineHeight={1.9}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    ml={3}
                    mr={3}
                  >
                    If the Home Office is holding you on immigration matters, you can apply for immigration bail. You may be held because they believe you are in the UK illegally or have broken rules of your stay. Immigration bail will not be granted for criminal matters.                  </Text>

                  <Text
                    mt={-7}
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    lineHeight={1.9}
                    mb={2}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    ml={3}
                    mr={3}
                  >
                    When are you more likely to get immigration bail?


                  </Text>

                  <Text
                    mt={-9}
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    lineHeight={1.9}
                    mb={2}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    ml={3}
                    mr={3}
                  >
                    You may be more likely to get immigration bail if:
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
                    mt={-9}
                    ml={{ lg: "-3", xs: "1" }}
                    lineHeight={1.8}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}

                  >
                    <List.Item>
                      You have somewhere to stay in the UK. This address can be used to keep in touch with you, and knowledge of where you are increases the chances of a bail applicant successfully being released.
                    </List.Item>
                    <List.Item>
                      You have at least 1 ‘Financial Condition Supporter’. This is a reliable person who will pay money if you fail to follow the bail conditions of your bail & will also attend any bail hearings.
                    </List.Item>
                  </List.Root>

                  <Text
                    mt={{ lg: "-7", xs: "-1" }}
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    lineHeight={1.9}
                    mb={2}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    ml={3}
                    mr={3}
                  >
                    If your application is successful, you will be released from detention, but you will have to obey conditions
                  </Text>

                  <Text
                    mt={{ lg: "-9", xs: "-4" }}
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    lineHeight={1.9}
                    mb={2}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    ml={3}
                    mr={3}
                  >
                    What conditions can be attached to immigration bail?
                  </Text>

                  <Text
                    mt={-9}

                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    lineHeight={1.9}
                    mb={2}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    ml={3}
                    mr={3}
                  >
                    If successful, you will be released from detention, but usually with conditions such as:
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
                    mt={{ lg: "-9", xs: "-5" }}

                    ml={{ lg: "-3", xs: "1" }}
                    lineHeight={1.8}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}

                  >
                    <List.Item>
                      Restriction on where you can live.
                    </List.Item>
                    <List.Item>
                      If you breach your bail conditions, you/someone promises to pay a sum of money
                    </List.Item>
                    <List.Item>
                      Electronic monitoring – However this is not mandatory
                    </List.Item>
                  </List.Root>


                </VStack>
              )}
            </Box>

            {/* Administrative Review */}
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
                  Revocation of a Deportation Order
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
                    mr={3}
                    mb={4}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    A deportation order prevents you from re-entering the country whilst their deportation order is in effect You can apply for revocation of a deportation order made against you on the basis that it is for the public good, unless the deportation breaches rights under the Human Rights Act 1998.
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
                    mr={3}
                    mb={4}
                    mt={-10}

                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    An application for revocation of a deportation order must be made from outside the UK after you have been deported, unless removal breaches a person’s human rights. Lumine Solicitors can assist you in navigating this process effectively.
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
                    mr={3}
                    mb={2}
                    mt={-10}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    Circumstances in which you can apply for revocation of a deportation order may include:

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
                    mt={{ lg: "-9", xs: "-5" }}
                    ml={{ lg: "-3", xs: "1" }}
                    lineHeight={1.8}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}

                  >
                    <List.Item >
                      where deportation is no longer justified
                    </List.Item>
                    <List.Item >
                      where deportation order is invalid but the deportation action continues


                    </List.Item>
                    <List.Item >
                      where deportation is no longer lawful
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Judicial Review */}
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
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    mr={4}
                    ml={3}
                    fontWeight={400}
                    lineHeight={1.9}
                    fontFamily={"CeraRoundPro"}
                  >

                    At Lumine Solicitors we offer expert advice to you on the application process for revocation of a deportation order, as well as reviewing your immigration history to see whether you qualify. Following this, we will ensure complex evidential requirements are met and will submit this to the home office.


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
                    mr={4}
                    ml={3}
                    mt={{ lg: "-7", xs: "-3", md: "-4" }}
                    fontWeight={400}
                    lineHeight={1.9}
                    fontFamily={"CeraRoundPro"}
                  >
                    For all immigration matters, Please do not hesitate to get in touch with Lumine solicitors
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

export default BailRevocation;  