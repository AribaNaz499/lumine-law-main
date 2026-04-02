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
import { ol } from "framer-motion/client";
const VisaCategories = () => {
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
            Lumine Law Switching Visa Categories from Inside the UK Services
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
              Switching Visa Categories from
              <br />
              within the UK

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
                fontSize={{ xs: "10px", lg: "18px", xl: "24px", "2xl": "34px" }}
                textAlign={"left"}

              >
                SWITCHING VISA CATEGORIES FROM WITHIN THE UK
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"left"}
                mt={4}
              >
                Switching of visa categories in the UK implies the process under which a UK individual changes immigration status from one category to another of visas without going out of the country. Opportunities under the UK immigration system include a variety that would allow persons to switch to visa categories when the need is felt to continue in the UK for other work or study, family, etc.
              </Text>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"left"}
                mt={5}

              >
                General Eligibility for Change of Visa Categories
              </Text>

              <List.Root
                as="ol"
                styleType="decimal"
                spacing={3}
                fontFamily={"CeraRoundPro"}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                color="black"
              >
                <List.Item textAlign="justify">
                  <Text as="span">Valid Visa Status:</Text>For a change of visa category, you must be in the UK and holding a valid visa. If your visa has expired, you will need to apply for a new visa from outside the UK, as you can only switch your visa status while your current visa is valid.

                </List.Item>
                <List.Item ml={3} textAlign="justify">
                  <Text as="span">Eligibility criteria of the new visa category: </Text> Every visa category has its eligibility criteria. For example, if you are switching to a Skilled Worker Visa, you will need a job offer from a licensed sponsor, whereas switching to a Spouse Visa requires evidence of a genuine relationship and meeting certain financial thresholds. You must meet the requirements of the visa you are applying to switch to.

                </List.Item>
                <List.Item ml={3} textAlign="justify">
                  <Text as="span"></Text> Not every type of UK Visa allows switching there- Some types may not allow within the UK as a switch route. For example, people here on Visitor’s Visa cannot even switch to different other visa categories as a switch visa in the United Kingdom. So a few other countries’ visas and requirements might keep these people to seek a visa switch from their parent country.
                </List.Item>
                <List.Item ml={3} textAlign="justify">
                  <Text as="span">Time:   </Text> Changing your visa needs to be done prior to your visa expiring. You could technically fall foul of the immigration laws, thus risking deportation or being prohibited from returning to the UK, in case you apply for the new visa once your existing visa is close to expiration.
                </List.Item>
              </List.Root>


              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"left"}
                mt={5}

              >
                Typical Visa Options That You May Be Eligible For
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
                  <Text as="span">Skilled Worker Visa:</Text>You might be eligible for a Skilled Worker Visa if you are currently in the UK on another kind of visa and an employer with a sponsor license has offered you a job. Under this route, you can work in the UK for up to 5 years.

                </List.Item>
                <List.Item textAlign="justify">
                  <Text as="span">Spouse Visa:  </Text> Those holding visas such as the Student Visa or Tier 2 (General) Visa can apply for a Spouse Visa if they marry a UK citizen or a settled person.
                </List.Item>
                <List.Item textAlign="justify">
                  <Text as="span">Student Visa:</Text>  If you are in the UK on a different visa, like a Tier 4 (General) Student Visa, and you want to study further, you can change your visa to a Student Visa. However, you have to fulfill the requirements of the course, provide proof of funds, and get a Confirmation of Acceptance for Studies (CAS).
                </List.Item>
                <List.Item textAlign="justify">
                  <Text as="span">Visitor Visa to Marriage Visa: </Text> If you are in the UK on a Visitor Visa and get married or enter into a civil partnership with a UK citizen or a settled person, you may be able to switch to a Spouse Visa or Fiancé(e) Visa, subject to certain conditions.
                </List.Item>
                <List.Item textAlign="justify">
                  <Text as="span">Global Talent Visa: </Text>Those with significant achievements or expertise in science, engineering, humanities, medicine, digital technology, or the arts, who already in the UK on another visa, can switch to a Global Talent Visa.
                </List.Item>
                <List.Item textAlign="justify">
                  <Text as="span">Graduate Visa: </Text>  This is if one is in the UK on a Student Visa. After finishing the degree-level course, one can be allowed to apply for a change of status in order to switch for a Graduate Visa, which is allowed to remain in the UK for up to 2 years to work or look for work following studies.
                </List.Item>
              </List.Root>


              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
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
            {/* What is Administrative Reviews, Appeals, and Judicial Reviews */}
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
                  What is Switching Visas?
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
                    lineHeight={1.8}
                    mb={2}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    Switching’ is where an applicant with one type of leave to remain/visa category in the UK applies for leave to remain in the UK to seek stay under a different visa category. For example, Lumine Solicitors can assist you in switching from a student visa to a skilled worker visa.
                  </Text>
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
                  What Type of Visas Can You Switch?
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
                  >
                    There are several types of visas you can switch from one type to another, depending on your circumstances. The following are a few examples:
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
                    mt={-5}
                    lineHeight={1.8}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}

                  >
                    <List.Item >
                      Switching Into Work Visas e.g. innovator founder visa

                    </List.Item>
                    <List.Item >
                      Switching Into a Student Visa

                    </List.Item>
                    <List.Item >Switching Into a Skilled Worker Visa
                    </List.Item>
                    <List.Item >Switching into a Leave to Remain as A Family Member Of A British Citizen or Settled Person, e.g. spouse visa 5yr/10yr route
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Successful Administrative Review */}
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
                    ml={3}
                    mr={3}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    The following are a few of the main requirements for switching from one visa type to another:
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

                    mt={-5}
                    lineHeight={1.8}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}

                  >
                    <List.Item >
                      You must be in the UK when you apply, and your current visa must not have expired


                    </List.Item>
                    <List.Item >
                      You must meet the immigration rules for the visa you are applying for

                    </List.Item>
                    <List.Item >You must have adhered to the rules and conditions of stay of your visa

                    </List.Item>
                    <List.Item >You must not have breached the law while in the UK
                    </List.Item>
                    <List.Item >You must not be on immigration bail
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
              width={"93%"}
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
                    mr={4}
                    ml={3}
                    lineHeight={1.9}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    At Lumine Solicitors we can:
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
                    mt={-6}
                    lineHeight={1.9}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}

                  >
                    <List.Item >
                      Confirm if your eligible to switch visas


                    </List.Item>
                    <List.Item >
                      Prepare and submit your visa switch application on your behalf
                    </List.Item>
                    <List.Item >Handle any queries from the Home Office regarding your application
                    </List.Item>
                    <List.Item >We can arrange your same-day service appointment with UK Visas and Immigration for the submission of your application at your convenience
                    </List.Item>
                  </List.Root>


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

export default VisaCategories;
