
import { Text, Container, Box, HStack, VStack } from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "../../../styles/fonts.css";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import BannerImg from "../../../assets/services/main/sub-services/residential.webp";
import { Helmet } from "react-helmet";
import AllServiceLinks from "../../NavLinks/AllServiceLinks";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import AllPrices from "../../NavLinks/AllPrices";

const TransfersOfEquity = () => {
  const [eligibilityState, setEligibilityState] = useState(false);
  const [helpState, setHelpState] = useState(false);

  return (
    <>
      <Container
        width="100%"
        maxW="100%"
        minH="100vh"
        bg="white"
        overflowX="hidden"
        m={0}
        p={0}
        display="flex"
        flexDirection="column"
      >
        <Helmet>
          <title>Lumine Law Transfers of Equity Services</title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>

          {/* Banner */}
          <Box
            w="100%"
            h={{
              base: "200px",
              sm: "240px",
              md: "280px",
              lg: "340px",
              xl: "360px",
              "2xl": "420px",
            }}
            bgImage={`linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)), url(${BannerImg})`}
            bgSize="cover"
            bgPos="center"
            display="flex"
            alignItems="center"
          >
            <Text
              fontSize={{
                base: "18px",
                sm: "22px",
                md: "26px",
                lg: "30px",
                xl: "36px",
                "2xl": "45px",
              }}
              fontWeight={600}
              fontFamily="CeraRoundPro"
              w={{ base: "92%", md: "85%" }}
              mx="auto"
              textAlign={"left"}
            >
              Transfers of Equity
            </Text>
          </Box>

          {/* Main Content */}
          <Box w="100%" color="black">
            <Box
              w={{ base: "95%", sm: "92%", md: "88%", lg: "84%", xl: "80%" }} mx="auto"
              my={{ base: "20px", md: "30px" }}
            >
              <Text
                fontFamily="CeraRoundPro"
                fontWeight={400}
                fontSize={{
                  base: "12px",
                  sm: "13px",
                  md: "14px",
                  xl: "16px",
                  "2xl": "17.5px",
                }}
                textAlign="justify"
                lineHeight="1.8"
              >
                Transfers of equity involve transferring part or all of property ownership from one individual to another. Whether you’re adding a partner, removing a name, or redistributing shares, this process requires precise legal handling. At Lumine Solicitors, we offer expert guidance and comprehensive services to ensure your transfers of equity are seamless and stress-free. We recognise that transferring equity can have a significant impact on your personal and financial circumstances. Therefore, it’s essential to seek the correct legal support to handle this process smoothly and efficiently.
              </Text>
            </Box>
          </Box>

          {/* Dropdown Info */}
          <VStack spacing={{ base: "20px", md: "30px" }} mb="50px">

            {/* Section 1 */}
            <Box w={{ base: "95%", sm: "92%", md: "88%", lg: "84%", xl: "80%" }} mx="auto">
              <HStack
                borderTop="1px solid #adacac"
                w="100%"
                justifyContent="space-between"
                px={{ base: "10px", md: "16px", lg: "18px" }}
                py={{ base: "10px", md: "12px" }}
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
                    lineHeight="1.9"
                    fontFamily="CeraRoundPro"
                    color={"black"}
                    textAlign={"left"}
                    mt={3}
                    mb={6}
                  >
                    As a Conveyancing Quality Scheme accredited law firm in the UK, we have extensive expertise in managing equity transfers for a variety of clients. Whether you're buying out a joint owner or adding a new name to the property title, our team ensures the process is executed with professionalism and minimal hassle.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Section 2 */}
            <Box w={{ base: "95%", sm: "92%", md: "88%", lg: "84%", xl: "80%" }} mx="auto">
              <HStack
                borderY="1px solid #adacac"
                w="100%"
                justifyContent="space-between"
                px={{ base: "10px", md: "16px", lg: "18px" }}
                py={{ base: "10px", md: "12px" }}
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

          {/* Other Sections */}
          <AllServiceLinks />
          <AllPrices />
          <AllNewsInsights />

          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default TransfersOfEquity;
