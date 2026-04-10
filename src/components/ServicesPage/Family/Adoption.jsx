import { Text, Container, Box, HStack, VStack, List } from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "../../../styles/fonts.css";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import BannerImg from "../../../assets/services/main/family/bannerImg.jpg";
import { Helmet } from "react-helmet";
import AllServiceLinks from "../../NavLinks/AllServiceLinks";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import AllPrices from "../../NavLinks/AllPrices";

const Adoption = () => {
  const [spouseState, setSpouseState] = useState(false);
  const [eligibilityState, setEligibilityState] = useState(false);
  const [applicationState, setApplicationState] = useState(false);
  const [decisionState, setDecisionState] = useState(false);
  const [helpState, setHelpState] = useState(false);

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
          <title>Lumine Law Adoption and Surrogacy Services</title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner - FIXED */}
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
              fontSize={{ xs: "19px", lg: "27.5px", xl: "33.5px", "2xl": "42.5px" }}
              fontWeight={600}
              fontFamily={"CeraRoundPro"}
              width={"90%"}
              lineHeight={1.1}
              textAlign={"left"}
            >
              Adoption and Surrogacy
            </Text>
          </Box>

          {/* Dropdown info */}
          <VStack justifyContent={"space-around"} alignItems={"center"} mb={"50px"} mt={"6"}>

            {/* Adoption and Surrogacy in the UK */}
            <Box display={"flex"} flexDir={"column"} color={"black"} width={"85%"} justifyContent={"center"} alignItems={"center"}>
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ xs: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ xs: "4px", sm: "6px", md: "7px", lg: "8px", xl: "9px", "2xl": "10px" }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !eligibilityState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setEligibilityState(!eligibilityState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Adoption and Surrogacy in the UK
                </Text>
                {!eligibilityState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {eligibilityState && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    Adoption and surrogacy in the UK are regulated to ensure the best interests of the child and the rights of all parties involved.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Adoption in the UK */}
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
                  Adoption in the UK
                </Text>
                {!spouseState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {spouseState && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    Adoption involves a legal process where all parental rights and responsibilities are transferred from the birth parents to the adoptive parents. This process ensures the child becomes a permanent member of the adoptive family.
                  </Text>
                  <List.Root textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"} mt={-7} lineHeight={1.7} color="gray.800">
                    <List.Item><strong>Eligibility</strong>: Prospective adoptive parents must be over 21 years old. They can be single, married, in a civil partnership, or cohabiting.</List.Item>
                    <List.Item><strong>Assessment</strong>: The assessment process involves a thorough evaluation of the prospective parents' suitability, including background checks, home visits, and interviews.</List.Item>
                    <List.Item><strong>Approval</strong>: Once approved, the prospective parents are matched with a child, and the placement process begins.</List.Item>
                    <List.Item><strong>Legal Finalization</strong>: The final step involves applying to the court for an adoption order, making the adoption legally binding.</List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Surrogacy in the UK */}
            <Box display={"flex"} flexDir={"column"} color={"black"} width={"85%"} justifyContent={"center"} alignItems={"center"}>
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ xs: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ xs: "4px", sm: "6px", md: "7px", lg: "8px", xl: "9px", "2xl": "10px" }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !applicationState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setApplicationState(!applicationState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Surrogacy in the UK
                </Text>
                {!applicationState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {applicationState && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    Surrogacy involves an agreement where a woman (the surrogate) agrees to carry and give birth to a child for another person or couple (the intended parents).
                  </Text>
                  <List.Root textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <List.Item><strong>Types of Surrogacy</strong>: There are two types of surrogacy: traditional (the surrogate is the biological mother) and gestational (the surrogate carries an embryo created from the intended parents).</List.Item>
                    <List.Item><strong>Legal Framework</strong>: Surrogacy agreements are not legally enforceable in the UK, but obtaining a parental order is crucial to transfer legal parenthood from the surrogate to the intended parents.</List.Item>
                    <List.Item><strong>Parental Order</strong>: Intended parents must apply for a parental order within six months of the child's birth. This order ensures the intended parents become the legal parents.</List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

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
                  Our Services
                </Text>
                {!decisionState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {decisionState && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    At Lumine, we offer comprehensive services to assist you with adoption and surrogacy matters effectively:
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Initial Consultation</strong>: We offer an initial consultation to understand your unique circumstances and provide you with clear advice on the adoption or surrogacy process, your rights, and the next steps.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Adoption Applications</strong>: Our experienced solicitors assist with the preparation and submission of adoption applications, ensuring compliance with legal requirements and supporting you through the process.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Surrogacy Agreements</strong>: We provide expert guidance on drafting and reviewing surrogacy agreements, ensuring that all parties' rights and responsibilities are clearly defined and legally protected.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Court Representation</strong>: If necessary, we provide robust representation in court to protect your interests and achieve a fair outcome in adoption or surrogacy proceedings.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* How can Lumine Solicitors help? */}
            <Box display={"flex"} flexDir={"column"} color={"black"} width={"85%"} justifyContent={"center"} alignItems={"center"}>
              <HStack
                borderY={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ xs: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ xs: "4px", sm: "6px", md: "7px", lg: "8px", xl: "9px", "2xl": "10px" }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !helpState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setHelpState(!helpState)}
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
                {!helpState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {helpState && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    At Lumine, we understand the intricacies of adoption and surrogacy cases and are dedicated to providing personalized and effective solutions. Here's how we can help:
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Expert Advice</strong>: We offer clear, concise, and practical legal advice tailored to your specific circumstances.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Compassionate Support</strong>: Our team provides compassionate support throughout the process, ensuring you feel understood and supported.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Strategic Approach</strong>: We develop customized strategies to achieve the best possible outcome for you.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    <strong>Cost Certainty</strong>: We offer fixed, competitive, and transparent fee packages to maintain cost certainty.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={-7} fontWeight={400} fontFamily={"CeraRoundPro"} lineHeight={1.7} color="gray.800">
                    For assistance with adoption and surrogacy matters, please do not hesitate to get in touch with Lumine solicitors{" "}
                    <strong>020 3950 2246</strong> or{" "}
                    <strong>
                      <Link to={"/contact"} style={{ color: "#e91e63" }} onMouseEnter={(e) => (e.target.style.color = "#091838")} onMouseLeave={(e) => (e.target.style.color = "#e91e63")}>
                        Contact Us HERE
                      </Link>{" "}
                    </strong>
                    We are here to help you navigate the complexities of family law and achieve the best possible resolution for your situation.
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

export default Adoption;