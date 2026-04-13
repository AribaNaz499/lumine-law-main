import { Text, Container, Box, HStack, VStack } from "@chakra-ui/react";
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
import BannerImg from "../../../assets/services/main/intellectual/pageBanner.jpg";

const Copyright = () => {
  const [spouseState, setSpouseState] = useState(false);
  const [decisionState, setDecisionState] = useState(false);

  return (
    <>
      <Container
        width="100%"
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
          <title>Lumine Law Copyright Services</title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner */}
          <Box
            width={"100%"}
            height={{
              base: "230px",
              lg: "310px",
              xl: "330px",
              "2xl": "380px",
            }}
            bgImage={`linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)), url(${BannerImg})`}
            bgSize={"cover"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              fontSize={{ xs: "19px", lg: "28px", xl: "34px", "2xl": "43px" }}
              fontWeight={600}
              fontFamily={"CeraRoundPro"}
              width={"90%"}
              lineHeight={1.1}
              textAlign={"left"}
            >
              Copyright
            </Text>
          </Box>

          {/* Main Content */}
          <Box width={"100%"} display={"flex"} flexFlow={"column"} color={"black"}>
            <Box width={"85%"} alignSelf={"center"} mb={"5%"} my={{ xs: "5%", md: "2.5%" }}>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                textAlign={"justify"}
                lineHeight="1.5"
                color="black"
              >
                At Lumine Law, we provide expert legal advice on copyright protection and enforcement in the UK. Copyright is a vital intellectual property right that safeguards original works of authorship, including literature, music, art, and software. Our team can help you understand your rights, navigate registration processes, and address infringement issues to ensure your creative works are fully protected. Whether you are a creator or a business, we offer tailored solutions to secure and defend your intellectual property in today's digital landscape.
              </Text>
            </Box>
          </Box>

          {/* Dropdowns */}
          <VStack justifyContent={"space-around"} alignItems={"center"} mb={"50px"}>

            {/* Our Services */}
            <Box display={"flex"} flexDir={"column"} color={"black"} width={"85%"} justifyContent={"center"} alignItems={"center"}>
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ xs: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ xs: "4px", sm: "6px", md: "7px", lg: "8px", xl: "9px", "2xl": "10px" }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !spouseState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setSpouseState(!spouseState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Our Services
                </Text>
                {!spouseState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {spouseState && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text
                    textAlign={"justify"}
                    fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                    lineHeight={1.8}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    color="gray.800"
                  >
                    A copyright is a form of intellectual property protection granted to the creators of original works, such as literary, artistic, musical, or dramatic creations. It provides the creators with exclusive rights to control the use and distribution of their work.
                  </Text>
                  <Text
                    textAlign={"justify"}
                    fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                    mt={{ lg: "-7", xs: "-4" }}
                    fontWeight={400}
                    lineHeight={1.8}
                    fontFamily={"CeraRoundPro"}
                    color="gray.800"
                  >
                    With copyrights the creator has the sole right to reproduce the work, prepare derivative works based on the original, distribute copies of the work, publicly display the work, and perform the work publicly. These rights are granted automatically upon the creation of the work and do not require registration, although registering with government authorities can provide additional benefits and legal protections.
                  </Text>
                  <Text
                    textAlign={"justify"}
                    fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                    mt={{ lg: "-7", xs: "-4" }}
                    lineHeight={1.8}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    color="gray.800"
                  >
                    It is important to note that copyright protects the expression of ideas, not the ideas themselves. Additionally, there are limitations and exceptions to copyright, such as fair use or fair dealing provisions, which allows certain uses of copyrighted works without the permission from the copyright owner.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* How can Lumine Solicitors Help? */}
            <Box display={"flex"} flexDir={"column"} color={"black"} width={"85%"} justifyContent={"center"} alignItems={"center"}>
              <HStack
                borderY={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ xs: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ xs: "4px", sm: "6px", md: "7px", lg: "8px", xl: "9px", "2xl": "10px" }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !decisionState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setDecisionState(!decisionState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  How can Lumine Solicitors Help?
                </Text>
                {!decisionState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {decisionState && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text
                    textAlign={"justify"}
                    fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                    lineHeight={1.8}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    color="gray.800"
                  >
                    Intellectual property is a valuable asset that can be used to generate revenue, attract investors, and differentiate a company's products or services from competitors. However, without proper protection, intellectual property can be stolen or infringed upon, resulting in lost revenue and damage to a company's reputation.
                  </Text>
                  <Text
                    textAlign={"justify"}
                    fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                    mt={{ lg: "-7", xs: "-4" }}
                    lineHeight={1.8}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    color="gray.800"
                  >
                    For assistance with copyright issues, please do not hesitate to contact Lumine Solicitors at{" "}
                    <strong>020 3950 2246</strong> or reach out to us through our website. Let us help you navigate the complexities of intellectual property law and achieve the best possible resolution for your situation.
                    <strong>
                      <Link to={"/contact"}>
                        <Text as="span" fontWeight={700} color="#E91E63" _hover={{ color: "#10102c" }}>
                          Contact Us HERE
                        </Text>
                      </Link>{" "}
                    </strong>
                  </Text>
                </VStack>
              )}
            </Box>
          </VStack>

          {/* Other Services */}
          <AllServiceLinks />
          <AllPrices />
          <AllNewsInsights />
          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default Copyright;