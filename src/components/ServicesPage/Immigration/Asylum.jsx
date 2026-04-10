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

const Asylum = () => {
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
        overflowX="hidden" // Prevents horizontal scroll on mobile
        m={0}
        p={0}
        display="flex"
        flexDirection="column"
      >
        <Helmet>
          <title>Lumine Law Asylum Services</title>
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
              fontSize={{ xs: "22px", lg: "28px", xl: "34px", "2xl": "44px" }}
              fontWeight={600}
              fontFamily={"CeraRoundPro"}
              width={"90%"}
              textAlign={"left"}
            >
              Asylum
            </Text>
          </Box>

          {/* Main Content */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            color={"black"}
            px={{ base: "5%", md: "0" }} // Mobile padding to keep text inside
          >
            {/* Heading */}
            <Box
              width={{ base: "100%", md: "90%" }} // Full width on mobile
              alignSelf={"center"}
              mb={"5%"}
              my={{ xs: "5%", md: "2.5%" }}
            >
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={600}
                color={"#bf9b30"}
                fontSize={{ xs: "14px", lg: "23px", xl: "29px", "2xl": "39px" }}
                textAlign={"left"}
                ml={3}
              >
                ASYLUM
              </Heading>

              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={300}
                color={"black"}
                lineHeight={"1.4"}
                letterSpacing={"0.8"}
                fontSize={{ xs: "9px", lg: "9px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                ml={3}
                mt={8}
              >
                It is an extremely important process for people who are attempting to flee persecution or harm in their home country. Asylum seekers are sheltered in the United Kingdom by those who can show a real threat of violence, imprisonment, or other kind of harm due to race, religion, nationality, political opinion, or membership in a particular social group.
              </Text>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={300}
                color={"black"}
                lineHeight={"1.5"}
                letterSpacing={"0.8"}
                fontSize={{ xs: "9px", lg: "9px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                ml={3}
                mt={7}
              >
                The asylum-seeking process commences with an individual applying for asylum in the UK, usually on entry or upon having entered illegally into the country. The applicant submits personal testimonies and other forms of evidence that support his/her claim of persecution. The applicant will be asked by the Home Office regarding reasons for applying for asylum and all supporting evidence to that claim, and the application is then processed further.
                <br /> <br />
                If the asylum application is successful, the applicant is allowed to stay in the UK, which is usually granted for a first period of 5 years and then can apply for indefinite leave to remain. However, if the application is refused, then the applicant may appeal against that decision. The appeal is made to the First-tier Tribunal (Immigration and Asylum Chamber), where the applicant can present further evidence or challenge the Home Office's assessment. If the First-tier Tribunal rejects the appeal, the applicant may seek further appeal to the Upper Tribunal.
                <br /> <br />
                New evidence or information, which was not known at the time of the original application can be made in a fresh claim. Human rights claim, again based on the violation of rights such as European Convention on Human Rights, can be made by the applicants. In such cases, legal assistance becomes key to ensure that every avenue for appeal is pursed to its fruition.
                <br /> <br />
                For personalized assistance with your legal needs, contact us or visit Lumine for expert guidance tailored to your specific situation. Our experienced team is here to help you navigate the complexities with confidence and ease.
              </Text>
            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mb={"50px"}
            width="100%" // Ensure VStack takes full width for centering
          >
            {/* 0 - What is Asylum? */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={{ base: "90%", md: "85%" }} // Responsive width
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
                  fontSize={{ xs: "13px", sm: "13px", md: "15px", lg: "15px", xl: "17px", "2xl": "19px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  What is Asylum?
                </Text>
                {activeIndex !== 0 ? (
                  <GoPlus color={"#bf9b30"} size={"1.6em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.6em"} />
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
                    fontSize={{ xs: "10px", sm: "10px", md: "12px", lg: "12px", xl: "14px", "2xl": "16px" }}
                    fontWeight={400}
                    lineHeight={1.9}
                    color={"gray.800"}
                    fontFamily={"CeraRoundPro"}
                  >
                    If you are unable to live safely in any part of your own
                    country due to fear of persecution, Lumine Solicitors can
                    help you claim asylum, which enables you to stay in the UK
                    as a refugee.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* 1 - Eligibility Requirements */}
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
                  fontSize={{ xs: "13px", sm: "13px", md: "15px", lg: "15px", xl: "17px", "2xl": "19px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Eligibility Requirements
                </Text>
                {activeIndex !== 1 ? (
                  <GoPlus color={"#bf9b30"} size={"1.6em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.6em"} />
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
                    fontWeight={300}
                    fontFamily={"CeraRoundPro"}
                    mb={"-7"}
                  >
                    To receive refugee status, certain requirements must be
                    fulfilled. The fear of persecution must be because of:
                  </Text>

                  <List.Root
                    textAlign={"left"}
                    lineHeight={1.8}
                    fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                    fontWeight={300}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>Race</List.Item>
                    <List.Item>Nationality</List.Item>
                    <List.Item>Religion</List.Item>
                    <List.Item>
                      Lack of safety due to involvement in a certain social
                      group or sharing certain political values
                    </List.Item>
                  </List.Root>

                  <Text
                    textAlign={"left"}
                    ml={1}
                    fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                    fontWeight={300}
                    mt={"-6"}
                    fontFamily={"CeraRoundPro"}
                  >
                    The government must have failed to provide protection for
                    you within that country, and it must be proven that moving
                    elsewhere within the country is also not safe
                  </Text>
                </VStack>
              )}
            </Box>

            {/* 2 - Screening */}
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
                fontSize={{ xs: "13px", sm: "13px", md: "15px", lg: "15px", xl: "17px", "2xl": "19px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Screening
                </Text>
                {activeIndex !== 2 ? (
                  <GoPlus color={"#bf9b30"} size={"1.6em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.6em"} />
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
                    fontWeight={300}
                    lineHeight={1.9}
                    fontFamily={"CeraRoundPro"}
                  >
                    Screening refers to the interview where your circumstances
                    and history are discussed if you are claiming asylum. If
                    your screening takes place at the UK borders, it will
                    usually be with an immigration officer. Alternatively, if
                    you have been in the UK for a while, your screening can take
                    place at an asylum intake unit.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* 3 - After Screening */}
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
                  fontSize={{ xs: "13px", sm: "13px", md: "15px", lg: "15px", xl: "17px", "2xl": "19px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  After Screening
                </Text>
                {activeIndex !== 3 ? (
                  <GoPlus color={"#bf9b30"} size={"1.6em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.6em"} />
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
                    fontSize={{ xs: "10px", sm: "10px", md: "12px", lg: "12px", xl: "14px", "2xl": "16px" }}
                    fontWeight={300}
                    fontFamily={"CeraRoundPro"}
                  >
                    If your case is considered by the home office, an asylum
                    registration card (ARC) will be sent to your address in the
                    UK.
                  </Text>

                  <Text
                    textAlign={"left"}
                    fontSize={{ xs: "10px", sm: "10px", md: "12px", lg: "12px", xl: "14px", "2xl": "16px" }}
                    fontWeight={300}
                    fontFamily={"CeraRoundPro"}
                    mt={"-7"}
                  >
                    Following this, you are assigned a caseworker, and the
                    reasoning behind your asylum claim is discussed in another
                    interview. This is important as they will also explain the
                    asylum process, and the information provided to them will be
                    used later when reaching a decision on your claim.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* 4 - Timeframe */}
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
                onClick={() => toggle(4)}
              >
                <Text
                  textAlign={"left"}
                 fontSize={{ xs: "13px", sm: "13px", md: "15px", lg: "15px", xl: "17px", "2xl": "19px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  How long does it take to reach a decision?
                </Text>
                {activeIndex !== 4 ? (
                  <GoPlus color={"#bf9b30"} size={"1.6em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.6em"} />
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
                    fontSize={{ xs: "10px", sm: "10px", md: "12px", lg: "12px", xl: "14px", "2xl": "16px" }}
                    fontWeight={300}
                    fontFamily={"CeraRoundPro"}
                    lineHeight={1.7}
                  >
                    The usual time it takes for a decision to be made by the
                    Home Office is around 6 months. However, more complex cases
                    may take longer. If your asylum claim is successful, you
                    will gain refugee status and receive international
                    protection.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* 5 - How Lumine Helps */}
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
                onClick={() => toggle(5)}
              >
                <Text
                  textAlign={"left"}
                 fontSize={{ xs: "13px", sm: "13px", md: "15px", lg: "15px", xl: "17px", "2xl": "19px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  How can Lumine Solicitors help?
                </Text>
                {activeIndex !== 5 ? (
                  <GoPlus color={"#bf9b30"} size={"1.6em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.6em"} />
                )}
              </HStack>

              {activeIndex === 5 && (
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
                    fontSize={{ xs: "10px", sm: "10px", md: "12px", lg: "12px", xl: "14px", "2xl": "16px" }}
                    fontWeight={400}
                    lineHeight={1.9}
                    fontFamily={"CeraRoundPro"}
                  >
                    Lumine Solicitors specializes in providing comprehensive
                    legal assistance for asylum cases, offering a range of
                    services tailored to meet individual needs. Firstly, Lumine
                    Solicitors can provide expert guidance on the asylum
                    process, ensuring that clients understand their rights and
                    obligations every step of the way. Their team of experienced
                    immigration lawyers can help prepare and submit asylum
                    applications, ensuring that all necessary documentation is
                    accurate and complete.
                  </Text>

                  <Text
                    textAlign={"left"}
                    fontSize={{ xs: "10px", sm: "10px", md: "12px", lg: "12px", xl: "14px", "2xl": "16px" }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    mt={"-6"}
                  >
                    For all immigration matters, Please do not hesitate to get
                    in touch with Lumine solicitors{" "}
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

          <AllServiceLinks />
          <AllPrices />
          <AllNewsInsights />
          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default Asylum;