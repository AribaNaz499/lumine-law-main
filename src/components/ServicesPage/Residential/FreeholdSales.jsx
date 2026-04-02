import { Text, Container, Box, HStack, VStack } from "@chakra-ui/react";
import Footer from "../../Footer/Footer";
import "../../../styles/fonts.css";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AllServiceLinks from "../../NavLinks/AllServiceLinks";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import AllPrices from "../../NavLinks/AllPrices";
import BannerImg from "../../../assets/services/main/sub-services/residential.webp";

const FreeholdSales = () => {
  const [eligibilityState, setEligibilityState] = useState(false);
  const [helpState, setHelpState] = useState(false);

  return (
    <Container
      width="100%"
      maxW="100%"
      minH="100vh"
      bg="white"
      overflowX="hidden"   // ✅ FIX
      m={0}
      p={0}
    >
      <Helmet>
        <title>Lumine Law Freehold and Leasehold Sales Services</title>
      </Helmet>

      <Box w="100%" pt="50px">
        
        {/* Banner */}
        <Box
          w="100%"
          h={{ base: "220px", sm: "260px", md: "300px", lg: "400px", xl: "340px", "2xl": "440px" }}
          bgImage={`linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)), url(${BannerImg})`}
          bgSize="cover"
          bgPos="center"
          display="flex"
          alignItems="center"
        >
          <Text
            fontSize={{ base: "18px", sm: "22px", md: "26px", lg: "30px", xl: "36px", "2xl": "45px" }}
            fontWeight={600}
            fontFamily="CeraRoundPro"
            w="90%"
            mx="auto"
            textAlign={"left"}
          >
            Freehold and Leasehold Sales
          </Text>
        </Box>

        {/* Content */}
        <Box w="100%" color="black">
          <Box
            w={{ base: "92%", md: "85%" }}
            mx="auto"
            my={{ base: "20px", md: "30px" }}
          >
            <Text
              fontFamily="CeraRoundPro"
              fontWeight={400}
              fontSize={{ base: "11.5px", md: "13.5px", xl: "15.5px", "2xl": "17.5px" }}
              textAlign="justify"
              lineHeight="1.7"
            >
              At Lumine Solicitors, we understand that selling a property is a
              complex process that requires the right legal expertise. Whether
              you are dealing with freehold or leasehold sales, our expert
              team of solicitors is here to offer comprehensive legal support,
              ensuring a smooth and successful process from start to finish.
              When you purchase a freehold property, you own both the building
              and the land it sits on outright. This type of ownership
              provides greater control and fewer restrictions, which is why
              it's preferred by many homeowners. In contrast, leasehold
              ownership means you own the property for the duration of the
              lease agreement, but not the land it stands on. Leasehold
              properties come with specific terms and conditions that are
              important to understand thoroughly.
            </Text>
          </Box>
        </Box>

        {/* Dropdowns */}
        <VStack spacing={{ base: "20px", md: "30px" }} mb="50px">

          {/* Section 1 */}
          <Box w="85%">
            <HStack
              borderTop="1px solid #adacac"
              w="100%"
              justifyContent="space-between"
              px={{ base: "10px", md: "14px" }}
              py={{ base: "8px", md: "10px" }}
              cursor="pointer"
              bg="black"
              onClick={() => setEligibilityState(!eligibilityState)}
            >
              <Text
                fontSize={{ base: "14px", md: "16px", xl: "18px" }}
                fontWeight={500}
                fontFamily="CeraRoundPro"
                color="#bf9b30"
              >
                Why choose Lumine Solicitors?
              </Text>

              {eligibilityState ? (
                <AiOutlineMinus color="#bf9b30" size="1.8em" />
              ) : (
                <GoPlus color="#bf9b30" size="1.8em" />
              )}
            </HStack>

            {eligibilityState && (
              <VStack
                alignItems="flex-start"
                borderTop="1px solid #adacac"
                py={{ base: "15px", md: "25px" }}
              >
                <Text
                  fontSize={{ base: "12px", md: "14px", xl: "16px" }}
                  lineHeight="1.7"
                  fontFamily="CeraRoundPro"
                  color={"black"}
                  textAlign={"left"}
                >
                  Our solicitors have extensive experience in managing both
                  freehold and leasehold sales. Our clear and concise advice
                  ensures you're well-informed and guided smoothly through the
                  process. We conduct thorough due diligence, investigating
                  all aspects of the property to identify and address any
                  potential issues before they arise. This approach helps to
                  avoid delays and complications.
                </Text>
              </VStack>
            )}
          </Box>

          {/* Section 2 */}
          <Box w="85%">
            <HStack
              borderY="1px solid #adacac"
              w="100%"
              justifyContent="space-between"
              px={{ base: "10px", md: "14px" }}
              py={{ base: "8px", md: "10px" }}
              cursor="pointer"
              bg="black"
              onClick={() => setHelpState(!helpState)}
            >
              <Text
                fontSize={{ base: "14px", md: "16px", xl: "18px" }}
                fontWeight={500}
                fontFamily="CeraRoundPro"
                color="#bf9b30"
              >
                Contact Us Today
              </Text>

              {helpState ? (
                <AiOutlineMinus color="#bf9b30" size="1.8em" />
              ) : (
                <GoPlus color="#bf9b30" size="1.8em" />
              )}
            </HStack>

            {helpState && (
              <VStack
                alignItems="flex-start"
                borderTop="1px solid #adacac"
                py={{ base: "15px", md: "25px" }}
              >
                <Text
                  fontSize={{ base: "12px", md: "14px", xl: "16px" }}
                  fontFamily="CeraRoundPro"
                  color={"black"}
                >
                  For all property matters, please do not hesitate to get in touch with Lumine solicitors{" "}
                  <Text as="span" fontWeight={600}>
                    020 3950 2246
                  </Text>{" "}
                  or{" "}
                  <Link to={"/contact"}>
                    <Text
                      as="span"
                      fontWeight={700}
                      color="#E91E63"
                      _hover={{ color: "#10102c" }}
                    >
                      Contact Us HERE
                    </Text>
                  </Link>
                </Text>
              </VStack>
            )}
          </Box>
        </VStack>

        {/* Sections */}
        <AllServiceLinks />
        <AllPrices />
        <AllNewsInsights />

        <Footer />
      </Box>
    </Container>
  );
};

export default FreeholdSales;