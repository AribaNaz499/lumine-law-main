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
const InnovatorFounder = () => {
  const [spouseState, setSpouseState] = useState(false);
  const [eligibilityState, setEligibilityState] = useState(false);
  const [applyState, setapplyState] = useState(false);
  const [longState, setLongState] = useState(false);
  const [review, setReview] = useState(false);

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
          <title>Lumine Law Innovator Founder Visa Services</title>
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
              Innovator Founder Visa
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
                fontSize={{ xs: "12px", lg: "19px", xl: "25px", "2xl": "35px" }}
                textAlign={"left"}
                ml={3}
              >
                INNOVATOR FOUNDER VISA
              </Heading>

              <Text
                ml={3}
                mr={2}
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"left"}
                mt={4}
              >
                The Innovator Founder Visa is a UK immigration route intended for those who would like to set up and run an innovative business in the UK. This visa is for entrepreneurs with a unique and viable business idea that they intend to develop their business in the UK. The Innovator Founder Visa forms part of the UK’s move to attract talented entrepreneurs and facilitate innovation, job creation, and economic growth.
              </Text>

              <VStack align="start" spacing={4} mt={5} width="100%">
                <Text
                  fontFamily={"CeraRoundPro"}
                  fontWeight={400}
                  fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                  textAlign={"left"}
                  color="black"
                  ml={3}
                  mt={2}
                >
                  This visa route is primarily for individuals who want to set up a new business or scale an existing one, and it is suited for individuals who have experience in business or are ready to take on a leadership role in the enterprise. Unlike other business visa routes in the UK, the Innovator Founder Visa does not require the applicant to have access to a specific amount of investment funds; instead, the focus is on the innovativeness and potential of the business idea.
                </Text>

                <Text
                  fontFamily={"CeraRoundPro"}
                  fontWeight={400}
                  fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                  textAlign={"left"}
                  color="black"
                  mt={6}
                  ml={3}
                >
                  There are several stages of application process to the Innovator Founder Visa. These are;
                </Text>

                {/* <Text
                  fontFamily={"CeraRoundPro"}
                  fontWeight={400}
                  fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                  textAlign={"left"}
                  color="black"
                  ml={3}
                  mt={-2}
                >
                  To apply for Indefinite Leave to Remain, applicants must have met several eligibility criteria, such as:
                </Text> */}

                <List.Root
                  as="ol"
                  styleType="decimal"
                  ml={5}
                  mt={-2}
                  spacing={3}
                  fontFamily={"CeraRoundPro"}
                  fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                  color="black"
                >
                  <List.Item textAlign="justify">
                    <Text as="span">Obtaining an endorsement; </Text>  it is through getting an approval endorsement from the body that is accepted as a visa. There is normally the submission of the business plan with details to demonstrate that the business meets the eligibility criteria to innovate and scale up. Once a body approves your idea, then an official letter will be provided.

                  </List.Item>
                  <List.Item textAlign="justify">
                    <Text as="span"></Text>Online Application Online application by the applicant following an endorsement in GOV.UK will be filled after getting the endorsement. The online application will require personal details of the applicant with proof of identity and biometric information and letter of endorsement. Further documents are requested to prove the applicant’s proficiency in the English language and financial capability.

                  </List.Item>
                  <List.Item textAlign="justify">
                    <Text as="span">Biometric Information: </Text> Applicants will be required to provide biometric information, such as fingerprints and a photograph, at a UK Visa and Citizenship Application Services (UKVCAS) center during the application process.
                  </List.Item>
                  <List.Item textAlign="justify">
                    <Text as="span">Application Fee: </Text> The application fee for the Innovator Founder Visa is usually £1,021 (as of 2025), although this fee may vary depending on the applicant’s circumstances and whether they are applying from within the UK or from overseas.
                  </List.Item>
                  <List.Item textAlign="justify">
                    <Text as="span">Decision:   </Text>The Home Office will look at the application. This involves scrutinizing the endorsing letter, business plan, and supporting documents. An application decision usually .
                  </List.Item>
                </List.Root>
              </VStack>

              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"left"}
                mt={8}
                mb={8}
                ml={3}
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
                  What is the Innovator Founder Visa?
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
                    The innovator founder visa is now the main visa category for foreign entrepreneurs wishing to establish a business in the UK, effectively replacing the Innovator route and start up visa.

                  </Text>
                </VStack>
              )}
            </Box>


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
                _hover={{ backgroundColor: !applyState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setapplyState(!applyState)}
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
                  Benefits
                </Text>
                {!applyState ? (
                  <GoPlus color={"#bf9b30"} size={"1.8em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.8em"} />
                )}
              </HStack>

              {applyState && (
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
                    There are many benefits of the innovator founder visa. Firstly, you have permission to live/work in the UK for 3 years, and following this, you can apply for indefinite leave to remain. Secondly, it allows you to bring your spouse and children to the UK

                  </Text>
                </VStack>
              )}
            </Box>

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
                  Eligibility Requirements
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
                    You can apply for an Innovator Founder visa through Lumine Solicitors if:
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
                    mt={-10}
                    ml={{lg:"-3" , xs:"1"}}
                    lineHeight={1.8}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}

                  >
                    <List.Item >
                      you want to run an innovative business in the UK

                    </List.Item>
                    <List.Item >
                      you are at least 18 years old
                    </List.Item>
                    <List.Item >
                      your business plan is endorsed by an endorsing body
                    </List.Item>

                    <List.Item >
                      you meet the English language requirements
                    </List.Item>
                    <List.Item >
                      you meet the financial requirements and have enough savings for yourself whilst in the UK
                    </List.Item>
                    <List.Item >
                      you meet other eligibility requirements
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
                    mb={4}
                    fontWeight={400}
                    lineHeight={1.9}
                    fontFamily={"CeraRoundPro"}
                  >

                    Lumine Solicitors will get to know you and your business goals to advise you on the best way forward. We will support you from the beginning to the end of your application and ensure difficult evidential requirements are met. As well as this, we will also assess if you need to apply for an innovator founder visa or if another visa would be more suitable



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
                    mt={-7}
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

export default InnovatorFounder;