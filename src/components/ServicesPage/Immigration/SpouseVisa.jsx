import { Text, Container, Box, HStack, VStack, List } from "@chakra-ui/react";
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
import { Heading } from "@chakra-ui/react";

const SpouseVisa = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Container
        width="100vw"
        maxWidth="100%"
        minHeight="100vh"
        backgroundColor={"white"}
        overflowX="hidden"
        m={0}
        p={0}
        display="flex"
        flexDirection="column"
      >
        <Helmet>
          <title>Lumine Law Spouse Visa Services</title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner - NO CHANGE */}
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
          >
            <Text
              fontSize={{ xs: "17px", lg: "27px", xl: "33px", "2xl": "42px" }}
              fontWeight={700}
              fontFamily={"CeraRoundPro"}
              width={"90%"}
              textAlign={"left"}
              lineHeight={1.1}
            >
              Spouse Visa
            </Text>
          </Box>

          {/* Main Content */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            color={"black"}
            px={{ base: "5%", md: "0" }}
          >
            <Box
              width={{ base: "100%", md: "90%" }}
              alignSelf={"center"}
              mb={"5%"}
              my={{ xs: "5%", md: "2.5%" }}
            >
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={700}
                color={"#bf9b30"}
                fontSize={{ xs: "11px", lg: "23px", xl: "29px", "2xl": "39px" }}
                textAlign={"left"}
                ml={3}
              >
                SPOUSE VISA
              </Heading>

              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                color={"black"}
                lineHeight={"1.6"}
                fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                ml={3}
                mt={8}
              >
                The Spouse Visa allows foreign nationals married to a British citizen or someone with settled status in the UK to live together in the UK. It can lead to permanent residence and British citizenship.
              </Text>

              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                color={"black"}
                lineHeight={"1.6"}
                fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                ml={3}
                mt={7}
              >
                The spouse visa enables an eligible foreign national to join and live with their partner in the UK if they are a British citizen or settled person e.g. a person with Indefinite Leave to Remain or EU Settled Status. You must apply for a Spouse Visa to live in the UK with your partner. Eligible applicants include those who are married, in a civil partnership, or unmarried.
                <br /> <br />
                If you're applying for the first time and your partner is outside the UK, they will complete the online application from their home country or their current residence. Upon approval, your partner's visa will be valid for 33 months. Before the 33-month visa period ends, you'll need to apply to extend your partner's visa. This extension can be completed within the UK, allowing your partner to remain in the country while awaiting a decision.
                <br /> <br />
                After continuously living in the UK for five years, your partner can apply for Indefinite Leave to Remain, granting them permanent residency. If you're a British citizen, your partner can also apply for British citizenship immediately after receiving Indefinite Leave to Remain.
                <br /> <br />
                For personalized assistance with your legal needs, contact us or visit Lumine for expert guidance tailored to your specific situation. Our experienced team is here to help you navigate the complexities with confidence and ease.
              </Text>
            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack justifyContent={"space-around"} alignItems={"center"} mb={"50px"} width="100%">
            
            {/* Dropdown 0 - What is a Spouse Visa? */}
            <Box display={"flex"} flexDir={"column"} color={"black"} width={{ base: "90%", md: "85%" }} justifyContent={"center"} alignItems={"center"}>
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ xs: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ xs: "4px", sm: "6px", md: "7px", lg: "8px", xl: "9px", "2xl": "10px" }}
                cursor={"pointer"}
                transition={"all 0.3s ease"}
                backgroundColor={"black"}
                onClick={() => toggle(0)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  What is a Spouse Visa?
                </Text>
                {activeIndex !== 0 ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {activeIndex === 0 && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <List.Root textAlign={"left"} lineHeight={1.8} fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={400} fontFamily={"CeraRoundPro"} color={"gray.800"}>
                    <List.Item>
                      The spouse visa enables an eligible foreign national to join and live with their partner in the UK if they are a British citizen or settled person e.g. a person with Indefinite Leave to Remain or EU Settled Status. You must apply for a Spouse Visa to live in the UK with your partner. Eligible applicants include those who are married, in a civil partnership, or unmarried.
                    </List.Item>
                  </List.Root>
                  <Text textAlign={"left"} mt={{lg:"-8"}} fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.8} color={"gray.800"}>
                    Lumine Solicitors' team of highly experienced professionals is here to expertly guide you through the spouse visa application process.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Dropdown 1 - Eligibility Requirements */}
            <Box display={"flex"} flexDir={"column"} color={"black"} width={{ base: "90%", md: "85%" }} justifyContent={"center"} alignItems={"center"}>
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ xs: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ xs: "4px", sm: "6px", md: "7px", lg: "8px", xl: "9px", "2xl": "10px" }}
                cursor={"pointer"}
                transition={"all 0.3s ease"}
                backgroundColor={"black"}
                onClick={() => toggle(1)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Eligibility Requirements
                </Text>
                {activeIndex !== 1 ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {activeIndex === 1 && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text  textAlign={"left"} fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={400} fontFamily={"CeraRoundPro"} mb={"-5"} color={"gray.800"}>
                    To make a successful application for a UK spouse visa through Lumine Solicitors, you will need to meet the eligibility requirements, including the following:
                  </Text>
                  <List.Root  mt={{lg:"-2"}}  textAlign={"left"} lineHeight={1.8} fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={400} fontFamily={"CeraRoundPro"} color={"gray.800"}>
                    <List.Item>You are in a genuine and subsisting relationship with your partner</List.Item>
                    <List.Item>Your and your partner's income must be at least £29,000 (if your application was submitted prior to 11 April 2024, the old income requirement of £18,600 will apply)</List.Item>
                    <List.Item>Your partner fulfils the English Language requirements</List.Item>
                    <List.Item>You and your partner have adequate accommodation in the UK</List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Dropdown 2 - Application Process */}
            <Box display={"flex"} flexDir={"column"} color={"black"} width={{ base: "90%", md: "85%" }} justifyContent={"center"} alignItems={"center"}>
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ xs: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ xs: "4px", sm: "6px", md: "7px", lg: "8px", xl: "9px", "2xl": "10px" }}
                cursor={"pointer"}
                transition={"all 0.3s ease"}
                backgroundColor={"black"}
                onClick={() => toggle(2)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Application Process
                </Text>
                {activeIndex !== 2 ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {activeIndex === 2 && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <List.Root textAlign={"left"} lineHeight={1.8} fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={400} fontFamily={"CeraRoundPro"} color={"gray.800"}>
                    <List.Item>
                      If you're applying for the first time and your partner is outside the UK, they will complete the online application from their home country or their current residence. Upon approval, your partner's visa will be valid for 33 months.
                    </List.Item>
                  </List.Root>
                  <Text textAlign={"left"} fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.8} mt={"-6"} color={"gray.800"}>
                    Before the 33-month visa period ends, you'll need to apply to extend your partner's visa. This extension can be completed within the UK, allowing your partner to remain in the country while awaiting a decision. After continuously living in the UK for five years, your partner can apply for Indefinite Leave to Remain, granting them permanent residency.
                  </Text>
                  <Text textAlign={"left"} fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.8} mt={"-6"} color={"gray.800"}>
                    If you're a British citizen, your partner can also apply for British citizenship immediately after receiving Indefinite Leave to Remain.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Dropdown 3 - How long does it take */}
            <Box display={"flex"} flexDir={"column"} color={"black"} width={{ base: "90%", md: "85%" }} justifyContent={"center"} alignItems={"center"}>
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ xs: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ xs: "4px", sm: "6px", md: "7px", lg: "8px", xl: "9px", "2xl": "10px" }}
                cursor={"pointer"}
                transition={"all 0.3s ease"}
                backgroundColor={"black"}
                onClick={() => toggle(3)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  How long does it take to reach a decision?
                </Text>
                {activeIndex !== 3 ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {activeIndex === 3 && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <List.Root textAlign={"left"} lineHeight={1.8} fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={400} fontFamily={"CeraRoundPro"} color={"gray.800"}>
                    <List.Item>
                      UK Spouse Visa applications submitted from outside of the UK typically take around 12 weeks (equivalent to 3 months) to be processed. However, if the application is made from within the UK, the processing time is normally between 6 and 8 weeks.
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Dropdown 4 - How can Lumine Solicitors help? */}
            <Box display={"flex"} flexDir={"column"} color={"black"} width={{ base: "90%", md: "85%" }} justifyContent={"center"} alignItems={"center"}>
              <HStack
                borderY={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ xs: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ xs: "4px", sm: "6px", md: "7px", lg: "8px", xl: "9px", "2xl": "10px" }}
                cursor={"pointer"}
                transition={"all 0.3s ease"}
                backgroundColor={"black"}
                onClick={() => toggle(4)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  How can Lumine Solicitors help?
                </Text>
                {activeIndex !== 4 ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {activeIndex === 4 && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text textAlign={"left"} fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={400} lineHeight={1.9} fontFamily={"CeraRoundPro"} color={"gray.800"}>
                    At Lumine Solicitors, we strive to simplify the visa procedure for you. Whether it's applying for a UK spouse visa, extending your existing visa, or bringing dependents along, we're here to assist you. With our proficient team of immigration solicitors, we provide professional advice on selecting the appropriate visa type and guarantee a hassle-free application process.
                  </Text>
                  <Text textAlign={"left"} fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={400} fontFamily={"CeraRoundPro"} mt={"-6"} color={"gray.800"}>
                    For all immigration matters, Please do not hesitate to get in touch with Lumine solicitors{" "}
                    <strong>020 3950 2246</strong> or{" "}
                    <strong>
                      <Link to={"/contact"} style={{ color: "#e91e63" }} onMouseEnter={(e) => (e.target.style.color = "#091838")} onMouseLeave={(e) => (e.target.style.color = "#e91e63")}>
                        Contact Us HERE
                      </Link>{" "}
                    </strong>
                  </Text>
                </VStack>
              )}
            </Box>
          </VStack>

          <AllServiceLinks />
          <AllPrices />
          <AllNewsInsights />
          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default SpouseVisa;