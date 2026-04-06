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
const EntryClearance = () => {
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
            Lumine Law Entry Clearance Applications from Outside of the UK
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
              Eu settlement scheme applications


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
                fontWeight={600}
                color={"#bf9b30"}
                fontSize={{ xs: "14px", lg: "26px", xl: "32px", "2xl": "42px" }}
                textAlign={"left"}
              >
                EU SETTLEMENT SCHEME APPLICATIONS
              </Heading>

              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"left"}
                mt={5}
              >
                The EU Settlement Scheme is a scheme for European Union (EU), European Economic Area (EEA), and Swiss nationals and their family members who have been living in the UK prior to the end of the Brexit transition period on December 31, 2020. The program allows applicants from these countries to apply for Settled Status or Pre-Settled Status, depending on the length of time they had spent in the UK, granting them the right to continue living, working, and accessing public services in the UK post-Brexit.
              </Text>

              <VStack align="start" spacing={4} mt={5} width="100%">
                <Text
                  fontFamily={"CeraRoundPro"}
                  fontWeight={400}
                  fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                  textAlign={"left"}
                  color="black"
                >
                  The EU Settlement Scheme is a significant program for EU citizens and their families to preserve their rights in the UK following the country’s exit from the EU. The deadline for the application of the EU Settlement Scheme was June 30, 2021; however, provisions for late applications exist under certain conditions.
                </Text>

                <Text
                  fontFamily={"CeraRoundPro"}
                  fontWeight={400}
                  fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                  textAlign={"left"}
                  color="black"
                >
                  Eligibility for the EU Settlement Scheme
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
                    <Text as="span">EU, EEA, and Swiss Citizens: </Text> Individuals from these countries who were living in the UK before the end of 2020 can apply. The scheme also applies to their family members, whether or not they are from an EU/EEA/Swiss country.
                  </List.Item>

                  <List.Item textAlign="justify">
                    <Text as="span">Family Members: </Text> Non-EU family members, such as spouses, civil partners, children, and other dependent relatives, can also apply for the EU Settlement Scheme if they were living in the UK with their EU/EEA/Swiss relative before the cut-off date.
                  </List.Item>

                  <List.Item textAlign="justify">
                    <Text as="span">Length of Residence:</Text>
                    <List.Root
                      as="ul"
                      styleType="disc"
                      ml={5}
                      spacing={3}
                      fontFamily={"CeraRoundPro"}
                      fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                      color="black"
                    >
                      <List.Item textAlign="justify">
                        <Text as="span">Permanent Residence or Settled Status: </Text> This status is granted to those who have been continuously in the UK for 5 years or more when applying. An applicant with settled status can live in the UK permanently and will receive access to free healthcare, free education, and other public services.
                      </List.Item>
                      <List.Item textAlign="justify">
                        <Text as="span">Pre-Settled Status: </Text> Those who have been in the UK for fewer than 5 years at the time of application can apply for Pre-Settled Status. They would then have a legal right to stay in the UK and can apply for Settled Status when they have completed their 5-year stay in the country.
                      </List.Item>
                    </List.Root>
                  </List.Item>
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
                  Application Process for the EU Settlement Scheme
                </Text>

                <Text
                  fontFamily={"CeraRoundPro"}
                  fontWeight={400}
                  fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                  textAlign={"left"}
                  color="black"
                >
                  The application process is quite simple, and it can be done entirely online. The following is a step-by-step process:
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
                    <Text as="span">Create an Account: </Text> For the application to the EU Settlement Scheme, a person needs to begin by opening an account on the GOV.UK website. This account will require a person to enter personal details like full name, nationality, and details of their family members who apply with them.
                  </List.Item>

                  <List.Item textAlign="justify">
                    <Text as="span">Evidence of Identity and Nationality: </Text> The applicants need to demonstrate their identity and nationality. This is usually done through a copy of a valid passport, national ID card, or biometric residence card. In case of non-EU family members, additional documentation may be necessary.
                  </List.Item>

                  <List.Item textAlign="justify">
                    <Text as="span">Evidence of Residence: </Text> The applicant needs to give evidence that they have been resident in the UK. Such evidence may include:
                    <List.Root as="ul" styleType="disc" ml={5} mt={2} spacing={1}>
                      <List.Item>Payslips</List.Item>
                      <List.Item>Bank statements</List.Item>
                      <List.Item>Utility bills</List.Item>
                      <List.Item>Tenancy agreements</List.Item>
                      <List.Item>Other evidence showing continuous residence</List.Item>
                    </List.Root>
                  </List.Item>
                </List.Root>

                <Text
                  fontFamily={"CeraRoundPro"}
                  fontWeight={400}
                  fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                  textAlign={"justify"}
                  color="black"
                >
                  The Home Office may rely on existing data, such as HMRC or NHS records, to check this information for some applicants, which will make the process easier.
                </Text>

                <List.Root
                  as="ol"
                  styleType="decimal"
                  ml={5}
                  start={4}
                  spacing={3}
                  fontFamily={"CeraRoundPro"}
                  fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                  color="black"
                >
                  <List.Item textAlign="justify">
                    <Text as="span">Criminality Check: </Text> The Home Office may check criminal records, but minor offenses should not be a basis for disqualification of an applicant. However, serious criminal convictions may lead to the refusal of an application.
                  </List.Item>
                  <List.Item textAlign="justify">
                    <Text as="span">Submit Application: </Text> After providing all the information required, an online application is submitted. The entire process is free for most applicants; however, there are some fees that may apply to certain family members or individuals.
                  </List.Item>
                  <List.Item textAlign="justify">
                    <Text as="span">Receive a Decision: </Text> After submission, the Home Office will process the application and notify the applicant of their decision. If successful, the applicant will be granted either Settled Status or Pre-Settled Status depending on their eligibility. In cases where more information is needed, the Home Office may request additional documentation.
                  </List.Item>
                </List.Root>
              </VStack>

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
                  What is The EU Settlement Scheme?
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
                    The Home Office introduced the EU Settlement Scheme as a way for EU, EEA, and Swiss nationals to continue living in the UK. The scheme will classify your immigration status as either ‘settled’ or ‘pre-settled’.
                  </Text>

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
                    The deadline for making an application to the EU Settlement Scheme was 30 June 2021. If you can demonstrate that you had ‘reasonable grounds’ for not applying on time, you may still be able to apply after 30 June 2021. If you have pre-settled status and are applying for settled status, this deadline does not apply to you.

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
                    According to the UK government website You must meet <strong> one </strong> of the following eligibility criteria for the scheme, which for most people is either:



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
                    ml={{lg: "-3" , xs: "1"}}
                    lineHeight={1.8}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}

                  >
                    <List.Item >
                      you’re from the EU, Switzerland, Norway, Iceland or Liechtenstein and you started living in the UK by 31 December 2020
                    </List.Item>
                    <List.Item >
                      a non-visa national not a British national and is seeking entry for a period exceeding six months, or for a purpose for which prior entry clearance is required under these Rules;


                    </List.Item>
                    <List.Item >you’re the family member of someone from the EU, Switzerland, Norway, Iceland or Liechtenstein who started living in the UK by 31 December 2020 and had settled or pre-settled status
                    </List.Item>

                    <Text>
                      You may also be eligible if:
                    </Text>
                    <List.Item >
                      you used to have a family member from the EU, Switzerland, Norway, Iceland or Liechtenstein who started living in the UK by 31 December 2020 (but you’ve separated, they’ve died or the family relationship has broken down)
                    </List.Item>

                    <List.Item >
                      you’re the family member of a British citizen who you lived in the EU, Switzerland, Norway, Iceland or Liechtenstein – you must have lived with them in that country by 31 December 2020 and returned to the UK with them before you apply
                    </List.Item>

                    <List.Item >
                      you’re the family member of a British citizen who also is a citizen of an EU country, Switzerland, Norway, Iceland or Liechtenstein, and they lived in the UK as a citizen of one of these countries before getting British citizenship.
                    </List.Item>

                    <List.Item >
                      you have a family member who is an eligible person of Northern Ireland
                    </List.Item>
                    <List.Item >
                      you’re the child of someone from the EU, Switzerland, Norway, Iceland or Liechtenstein who used to live and work in the UK – you must be in education in the UK
                    </List.Item>
                    <List.Item >
                      you’re the family member of a person who is exempt from immigration control
                    </List.Item>
                    <List.Item >
                      you’re the family member of a ‘frontier worker’.
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
                  How long does it take to reach a decision?
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
                    Your EU settlement scheme application will usually take 5 days to process. However, it can take as long as a month or even longer if more information is required by the Home Office.


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

                    We are able to provide guidance on the best options for you, taking into account your unique circumstances whether you’re already living in the UK or intend to move to the UK. We will also advice you on complex evidential requirements/documents for your application, submit your online application and book your appointment with UKVCAS for your biometrics.
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

export default EntryClearance;