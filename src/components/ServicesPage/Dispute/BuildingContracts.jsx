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
import BannerImg from "../../../assets/services/main/sub-services/dispute.webp";

const BuildingContracts = () => {
  const [spouseState, setSpouseState] = useState(false);
  const [eligibilityState, setEligibilityState] = useState(false);
  const [applicationState, setApplicationState] = useState(false);
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
          <title>Lumine Law Building Contracts Services</title>
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
              Building Contracts
            </Text>
          </Box>

          {/* Main Content - FIXED FONT SIZE */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            color={"black"}
          >
            <Box
              width={"85%"}
              alignSelf={"center"}
              mb={"5%"}
              my={{ xs: "5%", md: "2.5%" }}
            >
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                textAlign={"justify"}
                lineHeight="1.5"
                color="black"
              >
                Building contracts are crucial for the successful execution of construction projects, defining the rights and obligations of all parties involved. Navigating the complexities of building contracts under the updated UK laws is essential for achieving a fair and timely resolution. Lumine Solicitors is here to support you every step of the way. Our experienced team provides the expertise needed to ensure that your building projects proceed smoothly, mitigating risks and resolving any disputes that may arise.
              </Text>

              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                textAlign={"justify"}
                lineHeight="1.5"
                color="black"
                mt={4}
              >
                Building contracts encompass a wide range of agreements, from the initial stages of planning and design to the final stages of construction and completion. Each phase requires careful consideration and legal oversight to ensure that all parties' interests are protected. Whether you are a property owner, contractor, subcontractor, or consultant, understanding the legal framework governing building contracts is essential to avoid disputes and achieve successful project outcomes.
              </Text>
            </Box>
          </Box>

          {/* Dropdown info - FIXED */}
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
                  Our Services
                </Text>
                {!eligibilityState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {eligibilityState && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={450}  mt={"-2"} fontFamily={"CeraRoundPro"} color="gray.800">
                    Contract Drafting and Review
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"}  mt={"-7"} lineHeight={1.7} color="gray.800">
                    Our experienced solicitors will draft and review your building contracts to ensure they are clear, comprehensive, and legally sound. We help identify potential issues and provide advice to prevent disputes before they arise. Our services include:
                  </Text>
                  <List.Root textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}  mt={"-7"} lineHeight={1.7} fontWeight={400} fontFamily={"CeraRoundPro"} color="gray.800">
                    <List.Item><strong>Drafting Contracts</strong>: We create bespoke building contracts tailored to your specific project requirements, ensuring all key elements are covered, including scope of work, timelines, payment terms, and dispute resolution mechanisms.</List.Item>
                    <List.Item><strong>Reviewing Contracts</strong>: We meticulously review existing contracts to identify any ambiguities or potential risks, offering recommendations for amendments to strengthen your legal position.</List.Item>
                  </List.Root>

                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={450}  mt={"-7"} fontFamily={"CeraRoundPro"} color="gray.800">
                    Negotiation and Mediation
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"}  mt={"-7"} lineHeight={1.7} color="gray.800">
                    We prioritize resolving disputes amicably whenever possible. Our skilled negotiators work to achieve mutually satisfactory agreements, utilizing mediation to facilitate constructive dialogue between parties. This approach helps maintain professional relationships and avoid the time and cost associated with litigation. Our mediation services include:
                  </Text>
                  <List.Root textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"}  mt={"-7"} lineHeight={1.7} color="gray.800">
                    <List.Item><strong>Facilitating Negotiations</strong>: We assist in negotiating contract terms and resolving disagreements, ensuring that all parties' interests are fairly represented.</List.Item>
                    <List.Item><strong>Mediation Services</strong>: We act as mediators to help parties reach a voluntary, binding agreement, providing a neutral platform for open communication and resolution.</List.Item>
                  </List.Root>

                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={450}  mt={"-7"} fontFamily={"CeraRoundPro"} color="gray.800">
                    Adjudication and Arbitration
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"}  mt={"-7"} lineHeight={1.7} color="gray.800">
                    For construction disputes that require formal resolution, we provide representation in adjudication and arbitration proceedings. These methods offer a faster and more cost-effective alternative to litigation. Our adjudication and arbitration services include:
                  </Text>
                  <List.Root textAlign={"justify"}  mt={"-7"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"}  lineHeight={1.7} color="gray.800">
                    <List.Item><strong>Adjudication</strong>: We represent clients in adjudication proceedings, a statutory process designed to provide a quick resolution to construction disputes, often within 28 days. Our expertise ensures that your case is presented effectively.</List.Item>
                    <List.Item><strong>Arbitration</strong>: We represent clients in arbitration, a private dispute resolution process where an arbitrator makes a binding decision. Arbitration can be tailored to the needs of the parties and is often quicker and more flexible than court litigation.</List.Item>
                  </List.Root>

                  <Text textAlign={"justify"}  mt={"-7"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={450} fontFamily={"CeraRoundPro"} color="gray.800">
                    Litigation
                  </Text>
                  <Text textAlign={"justify"}  mt={"-7"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400}  fontFamily={"CeraRoundPro"}   lineHeight={1.7} color="gray.800">
                    When a negotiated settlement cannot be reached, we are prepared to represent your interests in court. Our litigation team has extensive experience handling complex building contract disputes, ensuring that your case is presented effectively to achieve a favorable outcome. Our litigation services include:
                  </Text>
                  <List.Root textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}  mt={"-7"} fontWeight={400} fontFamily={"CeraRoundPro"}  lineHeight={1.7} color="gray.800">
                    <List.Item><strong>Court Representation</strong>: We provide robust representation in all levels of court, from county courts to the High Court, ensuring your rights are protected throughout the litigation process.</List.Item>
                    <List.Item><strong>Case Management</strong>: We manage all aspects of your case, from initial filings to trial preparation and post-trial enforcement, providing comprehensive legal support.</List.Item>
                  </List.Root>

                  <Text textAlign={"justify"}  mt={"-7"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={450} fontFamily={"CeraRoundPro"} color="gray.800">
                    Enforcement of Judgments
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"}  mt={"-7"} lineHeight={1.7} color="gray.800">
                    If a court judgment or adjudicator's decision is obtained in your favor, we assist with the enforcement process to ensure that you receive the compensation or specific performance ordered. Our enforcement services include:
                  </Text>
                  <List.Root textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"}  mt={"-7"} lineHeight={1.7} color="gray.800">
                    <List.Item><strong>Executing Judgments</strong>: We take necessary legal steps to enforce judgments, including obtaining charging orders, attachment of earnings orders, and writs of execution.</List.Item>
                    <List.Item><strong>Debt Recovery</strong>: We assist in recovering debts awarded by the court or adjudicator, ensuring that you receive the financial remedy you are entitled to.</List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Building Contract Disputes */}
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
                  Building Contract Disputes
                </Text>
                {!spouseState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {spouseState && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"} color="gray.800">
                    If your business is involved in a building contract dispute where an agreement has been breached, you may be able to claim for damages. Our solicitors are experienced in all types of contract disputes and understand what needs to be done to protect you and your business while reaching an amicable conclusion.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"}  mt={"-7"} color="gray.800">
                    In the event of a breach, it is vital to act quickly as time limits for action are short. The recent introduction of adjudications has increased the need for immediate legal advice regarding building contract disputes. Our team at Lumine Solicitors is ready to provide the expert guidance you need to navigate these challenges effectively.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* How to Avoid a Building Contract Dispute */}
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
                  How to Avoid a Building Contract Dispute
                </Text>
                {!applicationState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {applicationState && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} lineHeight={1.7} fontWeight={400} fontFamily={"CeraRoundPro"} color="gray.800">
                    To avoid disagreements over contracts, it is important to take advice before entering into a contract. Obtain professional advice on matters such as the wording of tenders, letters of intent, and the hiring of contractors, subcontractors, and consultants. Taking advice early may help to prevent a dispute from occurring further down the line, protecting your business as much as possible before an agreement is made.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"}  mt={"-7"} lineHeight={1.7} color="gray.800">
                    At Lumine Solicitors, we are dedicated to providing comprehensive legal support for all your building contract needs, ensuring that your projects are completed successfully and with minimal disruption. Contact us today to learn how we can assist you in managing and resolving building contract issues effectively.
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
                <VStack justifyContent={"center"}  alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} fontWeight={400} fontFamily={"CeraRoundPro"} color="gray.800">
                    At Lumine, we understand the intricacies of building contracts under the updated UK laws. Our experienced solicitors are dedicated to providing personalized and effective solutions to your construction-related issues. Here's how we can help:
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }} mt={"-6"} fontWeight={400} fontFamily={"CeraRoundPro"} color="gray.800">
                    <strong>Expert Advice</strong>: We offer clear, concise, and practical legal advice tailored to your specific circumstances.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}  mt={"-6"} fontWeight={400} fontFamily={"CeraRoundPro"} color="gray.800">
                    <strong>Strategic Approach</strong>: Our team develops customized strategies to manage and resolve building contract disputes, maximizing your chances of a successful outcome.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}  mt={"-6"} fontWeight={400} fontFamily={"CeraRoundPro"} color="gray.800">
                    <strong>Comprehensive Support</strong>: From initial consultations to court representation, we provide comprehensive support throughout the building contract dispute resolution process.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}  mt={"-6"} fontWeight={400} fontFamily={"CeraRoundPro"} color="gray.800">
                    <strong>Updated Knowledge</strong>: We stay abreast of the latest legal developments to ensure that our advice and strategies are always current and effective.
                  </Text>
                  <Text textAlign={"justify"} fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}  mt={"-6"} fontWeight={400} fontFamily={"CeraRoundPro"} color="gray.800">
                    For assistance with building contracts, please do not hesitate to get in touch with Lumine solicitors{" "}
                    <strong>020 3950 2246</strong> or{" "}
                    <strong>
                      <Link to={"/contact"} style={{ color: "#e91e63" }} onMouseEnter={(e) => (e.target.style.color = "#091838")} onMouseLeave={(e) => (e.target.style.color = "#e91e63")}>
                        Contact Us HERE
                      </Link>{" "}
                    </strong>
                    Let us help you navigate the complexities of construction law and achieve the best possible resolution for your situation.
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

export default BuildingContracts;