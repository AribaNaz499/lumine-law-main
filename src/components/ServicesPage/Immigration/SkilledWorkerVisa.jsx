import { Text, Container, Box, HStack, VStack, List } from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "../../../styles/fonts.css";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import BannerImg from "../../../assets/services/main/immigration/Asylum.jpg";
import AllServiceLinks from "../../NavLinks/AllServiceLinks";
import AllPrices from "../../NavLinks/AllPrices";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import { Heading } from "@chakra-ui/react";

const SkilledWorkerVisa = () => {
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
          <title>Lumine Law Skilled Worker Visa Services</title>
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
          >
            <Text
              fontSize={{ xs: "17px", lg: "26px", xl: "32px", "2xl": "41px" }}
              fontWeight={600}
              fontFamily={"CeraRoundPro"}
              width={"90%"}
              textAlign={"left"}
            >
              Skilled Worker Visa
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
                fontWeight={600}
                color={"#bf9b30"}
                fontSize={{ xs: "11px", lg: "22px", xl: "28px", "2xl": "38px" }}
                textAlign={"left"}
                ml={3}
              >
                SKILLED WORKER VISA
              </Heading>

              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                color={"gray.800"}
                lineHeight={"1.5"}
                letterSpacing={"0.8"}
                fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                ml={3}
                mt={8}
              >
                The Skilled Worker Visa is a UK immigration route, designed for foreign nationals who have a job offer from a licensed UK employer in a skilled occupation, intended to allow individuals to live and work in the UK provided they meet certain eligibility requirements including holding an offer of employment in an eligible role under the visa criteria. It is one of the most common routes through which non-EU nationals come to the UK to fill in gaps for specific skills deficiencies. The Skilled Worker Visa is a vital source for companies looking to be able to employ skilled workers who are based abroad in the UK, addressing the deficit in the labor market. It covers many sectors, such as healthcare, engineering, technological skills, teachers, and more. It can also serve as a stepping stone to both long-term employment and to permanent residency in the UK, as individuals who are employed and meet other stipulations can apply for ILR after five years.
              </Text>

              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                color={"gray.800"}
                lineHeight={"1.5"}
                letterSpacing={"0.8"}
                fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                ml={3}
                mt={7}
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
            width="100%"
          >
            {/* 0 - What is Skilled Worker Visa? */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={{ base: "90%", md: "85%" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
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
                  What is a Skilled Worker Visa?
                </Text>
                {activeIndex !== 0 ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {activeIndex === 0 && (
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
                    mb={6}
                    fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    color={"gray.800"}
                  >
                    The Skilled Worker visa enables non-UK workers to do certain eligible jobs for licensed UK employers.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* 1 - Eligibility */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={{ base: "90%", md: "85%" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
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
                  Eligibility
                </Text>
                {activeIndex !== 1 ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {activeIndex === 1 && (
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
                    fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    color={"gray.800"}
                    mb={"-5"}
                  >
                    Certain requirements must be fulfilled to gain a Skilled Worker visa. These include:
                  </Text>

                  <List.Root
                    textAlign={"left"}
                    lineHeight={1.8}
                    fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    color={"gray.800"}
                  >
                    <List.Item>
                      Working for a licensed employer in the UK that has been approved by the Home Office
                    </List.Item>
                    <List.Item>
                      Having a valid 'certificate of sponsorship' issued by your employer
                    </List.Item>
                    <List.Item>
                      Having a biometric residence permit (BRP)
                    </List.Item>
                    <List.Item>
                      Your job being on the list of eligible occupations
                    </List.Item>
                    <List.Item>
                      Meeting the English language requirements and minimum salary requirements
                    </List.Item>
                    <List.Item>
                      Obtaining 70 points under the point-based immigration system
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* 2 - Benefits */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={{ base: "90%", md: "85%" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
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
                  Benefits
                </Text>
                {activeIndex !== 2 ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {activeIndex === 2 && (
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
                    fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                    fontWeight={400}
                    lineHeight={1.9}
                    fontFamily={"CeraRoundPro"}
                    color={"gray.800"}
                  >
                    Lumine Solicitors can assist you in obtaining a Skilled Worker visa, allowing you to reside in the UK for up to 5 years. This visa may also make you eligible to apply for indefinite leave to remain. Additionally, you can bring your eligible spouse and children to the UK, pursue studies, and travel outside the UK.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* 3 - Decision Timeframe */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={{ base: "90%", md: "85%" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
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
                    fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    lineHeight={1.9}
                    color={"gray.800"}
                  >
                    A decision on whether you have successfully gained a Skilled Worker visa usually takes up to 3 weeks if you are not in the UK or 8 weeks if you are within the UK.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* 4 - How Lumine Helps */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={{ base: "90%", md: "85%" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
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
                    fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                    fontWeight={400}
                    lineHeight={1.9}
                    fontFamily={"CeraRoundPro"}
                    color={"gray.800"}
                  >
                    Lumine solicitors will get to know you and your employment goals to advise you on the best way forward. We will support you from the beginning to the end of your application and ensure difficult evidential requirements are met.
                  </Text>

                  <Text
                    textAlign={"left"}
                    fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    color={"gray.800"}
                    mt={"-6"}
                  >
                    For all immigration matters, Please do not hesitate to get in touch with Lumine solicitors{" "}
                    <strong>020 3950 2246</strong> or{" "}
                    <strong>
                      <Link
                        to={"/contact"}
                        style={{ color: "#e91e63" }}
                        onMouseEnter={(e) => (e.target.style.color = "#091838")}
                        onMouseLeave={(e) => (e.target.style.color = "#e91e63")}
                      >
                        Contact Us HERE
                      </Link>
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

export default SkilledWorkerVisa;