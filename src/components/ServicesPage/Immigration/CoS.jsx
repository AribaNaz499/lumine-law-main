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
const BritishCitizenshipApplication = () => {
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
            Lumine Law British Citizen Application
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
              fontSize={{ xs: "17px", lg: "27px", xl: "32px", "2xl": "42px" }}
              fontWeight={700}
              fontFamily={"CeraRoundPro"}
              width={"90%"}
              textAlign={"left"}
              lineHeight={1.1}
            >
              Certificate of Sponsorship (CoS)
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
                fontWeight={600}
                color={"#bf9b30"}
                fontSize={{ xs: "13px", lg: "22px", xl: "28px", "2xl": "38px" }}
                textAlign={"left"}

              >
                CERTIFICATE OF SPONSORSHIP
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                mt={5}
                mr={2}
              >
                A Certificate of Sponsorship is an essential certificate needed by any individual who wishes to seek a work visa in the United Kingdom. The CoS is a kind of official validation that an employer or a sponsor is indeed offering employment to a foreign worker, and therefore, it’s a necessary piece of the process of obtaining the visa for applicants who wish to enter the UK to work: either in skilled employment, on a temporary work visa, or under any type of work visa.

              </Text>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                mt={5}

              >
                A Certificate of Sponsorship is issued only by a licensed sponsor, approved by the UK Home Office. To hire non-EU workers or workers from outside the UK, employers need to apply for and maintain a sponsor license to issue CoS. The employer must demonstrate their eligibility, including compliance with the Home Office’s strict regulations regarding the recruitment process and employment conditions.
              </Text>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                mt={5}


              >
                Once the employer has been given a sponsor license, they can then issue a CoS to the individual whom they are looking to hire. A CoS is an electronic document with a reference number, which the applicant should use when applying for their visa. The CoS itself is not a paper document but a record on the Home Office’s system and is a proof that the individual meets the requirements of the visa he or she is applying for.
              </Text>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                mt={5}


              >
                An employer must prove, in the application process for the CoS, that the offered role meets the required skill level and salary threshold. For example, the Skilled Worker visa will demand that the job be at the RQF Level 3 (A-level equivalent) and above, while the salary meets specific minimums as defined by the Home Office.

              </Text>

              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                mt={5}


              >
                If the visa application is successful, the individual will be granted the right to work in the UK, and the employer is responsible for ensuring compliance with immigration laws during the duration of the employee’s stay. Employers must maintain accurate records and report any significant changes in the employee’s employment status to the Home Office.
              </Text>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                mt={5}


              >
                Failure to comply with the CoS requirem ents can lead to penalties for both the employer and the applicant, including the revocation of the visa or suspension or revocation of the employer’s sponsor license.
              </Text>

              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}


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
                  What is a Certificate of Sponsorship (CoS)?
                </Text>
                {!spouseState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
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
                    lineHeight={1.7}
                    mb={2}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    For an individual to make a valid application under the Skilled Worker route and other sponsored work routes, a sponsor must first assign a Certificate of Sponsorship (CoS) to them. A CoS serves as an electronic document confirming that an authorised UK employer or educational institution has provided a job offer or admission opportunity to an eligible migrant.

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
                  Types of CoS?
                </Text>
                {!eligibilityState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
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
                    textAlign={"left"}
                    fontSize={{
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    color={"gray.800"}
                    lineHeight={1.7}
                    mr={3}
                    mb={4}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    There are two types of Certificates of Sponsorship available: defined and undefined CoS.
                  </Text>

                  <List.Root
                    textAlign={"left"}


                   fontSize={{
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    color={"gray.800"}
                    lineHeight={1.7}
                    mr={3}
                    mt={-11}
                    // lineHeight={2}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}

                  >
                    <List.Item textAlign={"left"}
                    >
                      The defined CoS, is specifically for individuals applying through the Skilled Worker route from outside of the UK. Upon license confirmation, sponsors typically receive UKVI approval within a day, enabling them to assign the CoS to the applicant once available in the SMS

                    </List.Item>
                    <List.Item textAlign={"left"}
                    >
                      The undefined CoS, On the other hand, is issued for Skilled Worker Visa applications of employees already inside the UK, as well as for other visa categories. When applying for a license, UK sponsors must estimate the annual requirement for undefined CoS.

                    </List.Item>
                  </List.Root>


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
                    color={"gray.800"}
                    lineHeight={1.7}
                    mr={3}
                    mb={4}
                    mt={-6}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    Sponsors can request addition Cos if all others have been utilised. Lumine Solicitors can guide sponsors through the process of obtaining and managing CoS effectively.

                  </Text>


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
                  How Long Does it Take to Get a Certificate of Sponsorship?
                </Text>
                {!applicationState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
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
                    lineHeight={1.7}
                    ml={3}
                    mr={3}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    A defined CoS is usually received by clients within 1 working day of submitting a request. However, according to UKVI, this timeline might extend if additional checks or information are required before a final decision can be made.

                  </Text>

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
                  How can Lumine Solicitors help?
                </Text>
                {!review ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
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
                    lineHeight={1.7}
                    ml={3}
                    mr={9}

                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    At Lumine Solicitors, we offer a comprehensive range of Certificate of Sponsorship services tailored to your needs including expert advice on selecting the right Certificate of Sponsorship, guidance on meeting points-based visa requirements such as minimum salary requirements, assigning roles to the relevant SOC code and assistance with correcting errors on the CoS.

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
                    lineHeight={1.7}
                    mt={"-6"}
                    ml={3}
                    fontWeight={400}
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

export default BritishCitizenshipApplication;
