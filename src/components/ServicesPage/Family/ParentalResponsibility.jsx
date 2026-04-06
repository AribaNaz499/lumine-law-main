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

const ParentalResponsiblity = () => {
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
          <title>Lumine Law Parental Responsibility Services</title>
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
              fontSize={{ xs: "30px", lg: "40px", xl: "44px", "2xl": "50px" }}
              fontWeight={700}
              fontFamily={"CeraRoundPro"}
              width={"90%"}
              textAlign={"left"}
            >
              Parental Responsibility
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
                fontWeight={600}
                color={"#bf9b30"}
                fontSize={{ xs: "14px", lg: "26px", xl: "32px", "2xl": "42px" }}
                textAlign={"left"}

              >
                What is Parental Responsibility?
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"justify"}
                lineHeight={1.6}
                mt={{ lg: "6" }}
                mr={{ lg: 8 }}
              >
                Parental responsibility refers to all of the rights, duties, and responsibilities a parent has in relation to their child. Both parents will usually have parental responsibility and can meet it individually on a day-to-day basis, provided they do so within the terms of the order.
              </Text>
            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mb={"50px"}
          >
            {/* Who Gets Parental Responsibility? */}
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
                  Who Gets Parental Responsibility?
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
                    While a child's birth mother automatically has parental
                    responsibility, the biological father only has
                    responsibility if he was married to the mother at the time
                    of birth or has married her since. Unmarried fathers don't
                    automatically have parental responsibility if the child was
                    born before 1 December 2003, though they do if the birth
                    happened after that date and they are named on the birth
                    certificate. These days, most unmarried fathers only need to
                    ensure their name is on the birth certificate to have
                    parental responsibility.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Who Can Apply for Parental Responsibility? */}
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
                  Who Can Apply for Parental Responsibility?
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
                    lineHeight={1.8}
                  >
                    Every child needs someone with their best interests at heart
                    to be responsible for their welfare. The law allows people
                    other than biological parents to acquire parental
                    responsibility in a variety of circumstances. These include:
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
                    lineHeight={1.8}
                    mt={{ lg: "-8", md: "-7", xs: "-5" }}
                  >
                    <List.Item>
                      <strong>Unmarried biological fathers</strong>:Can gain
                      parental responsibility either by entering into an
                      agreement with the mother, applying to the court for a
                      Parental Responsibility Order, or by subsequently marrying
                      the biological mother.
                    </List.Item>
                    <List.Item>
                      <strong>
                        Step-parents, grandparents, civil partners, and same-sex
                        partners
                      </strong>
                      : Can acquire parental responsibility either by adopting
                      the child or by being appointed a guardian, usually after
                      someone else with parental responsibility has died.
                      solutions.
                    </List.Item>
                    <List.Item>
                      <strong>Robust Court Representation</strong>: When
                      litigation is necessary, we provide strong representation
                      to secure the best possible outcome.
                    </List.Item>
                    <List.Item>
                      <strong>Special Guardians</strong>: Appointed by a court
                      to ensure a child is looked after and who can overrule
                      other people with parental responsibility if necessary.
                    </List.Item>
                    <List.Item>
                      <strong>Local authorities</strong>: Acquire parental
                      responsibility, usually after taking a child into care
                      following care proceedings.
                    </List.Item>
                  </List.Root>
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
                    lineHeight={1.7}

                    fontFamily={"CeraRoundPro"}
                  >
                    At Lumine, we offer comprehensive services to assist you
                    with parental responsibility matters effectively:
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
                    mt={{ lg: "-7", md: "-6", xs: "-4" }}
                    lineHeight={1.7}

                  >
                    <strong>Initial Consultation</strong>: We offer an initial
                    consultation to understand your unique circumstances and
                    provide you with clear advice on parental responsibility,
                    your rights, and the next steps.
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
                    mt={{ lg: "-7", md: "-6", xs: "-4" }}
                    lineHeight={1.7}

                  >
                    <strong>Parental Responsibility Agreements</strong>: Our
                    experienced solicitors assist in drafting and reviewing
                    parental responsibility agreements to ensure they meet legal
                    standards and reflect the best interests of the child.
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
                    mt={{ lg: "-7", md: "-6", xs: "-4" }}
                    lineHeight={1.7}


                  >
                    <strong>Court Applications</strong>: If necessary, we help
                    you apply to the court for parental responsibility orders,
                    providing robust representation to protect your interests
                    and achieve a fair outcome.
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
                    lineHeight={1.7}
                    mt={{ lg: "-7", md: "-6", xs: "-4" }}

                  >
                    <strong>Mediation and Negotiation</strong>: We employ
                    mediation and negotiation techniques to resolve disputes
                    related to parental responsibility, promoting cooperation
                    and reducing conflict.
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
                    lineHeight={1.8}
                    pr={{lg:"9"}}
                  >
                    At Lumine, we understand the intricacies of parental
                    responsibility cases and are dedicated to providing
                    personalized and effective solutions. Here's how we can
                    help:
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
                      lineHeight={1.7}
                    mt={{ lg: "-7", md: "-6", xs: "-4" }}
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
                      lineHeight={1.7}
                    mt={{ lg: "-7", md: "-6", xs: "-4" }}
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
                    fontFamily={"CeraRoundPro"}
                      lineHeight={1.7}
                    mt={{ lg: "-7", md: "-6", xs: "-4" }}
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
                      lineHeight={1.7}
                    mt={{ lg: "-7", md: "-6", xs: "-4" }}
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
                      lineHeight={1.7}
                    mt={{ lg: "-7", md: "-6", xs: "-4" }}
                    pr={{lg:"10"}}
                  >
                    For assistance with parental responsibility matters, please
                    do not hesitate to get in touch with Lumine solicitors{" "}
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

export default ParentalResponsiblity;
