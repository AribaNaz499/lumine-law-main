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

const VisitorVisa = () => {
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
          <title>Lumine Law UK Visitor Visa Services</title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner - FIXED */}
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
              fontWeight={600}
              fontFamily={"CeraRoundPro"}
              width={"90%"}
              textAlign={"left"}
              lineHeight={1.1}
            >
              UK Visitor Visa
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
                fontSize={{ xs: "11px", lg: "29px", xl: "32px", "2xl": "42px" }}
                textAlign={"left"}
                ml={3}
              >
                UK VISITOR VISA
              </Heading>

              {/* Main Content - Color BLACK, Font Size Fixed */}
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
                A UK Visitor Visa is a short-stay visa granted to applicants who want to travel to the United Kingdom for purposes of tourism, business, visiting relatives, or for other specified reasons such as attending a conference or for medical treatment. The standard visitor visa typically allows for a stay of up to 6 months, with some exceptions, such as for medical treatment or long-term visitor visas, which allow for multiple entries over a period of 2, 5, or 10 years.
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
                In applying for a UK Visitor Visa, an applicant needs to apply using the online application form available at the UKVI website. This process involves submitting a variety of documents, including proof of the purpose of the visit, such as invitation letters or event details, proof of sufficient funds to cover the stay, accommodation details, and evidence that they have ties to their home country, ensuring they intend to return after their visit. Once the online application is completed, applicants are expected to book an appointment to provide biometric information, such as fingerprints and a photograph, at a visa application center. The standard fee for a visitor visa is usually £100, although this may vary depending on the type of visa or the duration. After the application has been submitted, the processing time is usually about 3 weeks.
                <br /><br />
                While in the UK on a visitor visa, there are certain conditions that must be adhered to, such as not engaging in work or full-time study. The visa is for short-term visits, and visitors are expected to leave the UK at the end of their permitted stay. Extensions to the visitor visa are not common and are usually granted only in exceptional circumstances, such as ongoing medical treatment. In addition, visitors should be able to prove they have health insurance that is not actually mandatory, and they must provide proof of accommodation arrangements, such as hotel bookings or letters from friends or family. If the application is refused the applicant is informed of the reasons and can either appeal to have the decision overturned or reapply with additional documentation.
                <br /><br />
                In a nutshell, the UK Visitor Visa is one of the most important routes for people who want to visit the UK for short stays for various reasons. Applicants must ensure they meet all eligibility criteria, submit the required documentation, and adhere to the conditions of their visa to avoid complications during their stay. It is, therefore, advisable for those who would want to apply for this visa to seek the services of an immigration advisor or legal professional to ensure compliance with the rules and increase the chances of a successful application.
                <br /><br />
                For personalized assistance with your legal needs, contact us or visit Lumine for expert guidance tailored to your specific situation. Our experienced team is here to help you navigate the complexities with confidence and ease.
              </Text>
            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack justifyContent={"space-around"} alignItems={"center"} mb={"50px"} width="100%">
            
            {/* Dropdown 0 - What is a Visitor Visa? */}
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
                  What is a Visitor Visa?
                </Text>
                {activeIndex !== 0 ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {activeIndex === 0 && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text textAlign={"left"} mb={6} fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={400} fontFamily={"CeraRoundPro"} color={"gray.800"}>
                    At Lumine Solicitors, we can apply for your Visitor visa if you wish to come to the UK temporarily (often for up to 6 months), for tourism, visiting friends or family, carrying out a business-related activity, or studying. You must also adhere to the conditions outlined in Appendix V.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Dropdown 1 - Requirements */}
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
                  Requirements
                </Text>
                {activeIndex !== 1 ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {activeIndex === 1 && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text textAlign={"left"} fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={400} fontFamily={"CeraRoundPro"} mb={"-5"} color={"gray.800"}>
                    The following are a few of the main requirements for a UK visitor visa:
                  </Text>
                  <List.Root textAlign={"left"} lineHeight={1.8} fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={400} fontFamily={"CeraRoundPro"} color={"gray.800"}>
                    <List.Item>
                      You intend to leave the UK at the end of your visit and return to your country of origin (this is generally met by showing strong family/financial ties to your country of residence)
                    </List.Item>
                    <List.Item>
                      You will be able to maintain and accommodate yourself without recourse to public funds or working during your stay in the UK
                    </List.Item>
                    <List.Item>
                      You will be able to cover the expense of your travel to the UK and should have return ticket. In most cases, the applicant's travel expenses are covered by the UK sponsor.
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Dropdown 2 - How can Lumine Solicitors help? */}
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
                onClick={() => toggle(2)}
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
                {activeIndex !== 2 ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {activeIndex === 2 && (
                <VStack justifyContent={"center"} alignItems={"flex-start"} gap={{ xs: "20px", md: "30px" }} mb={{ xs: "4px", md: "10px" }} borderTop={"1px solid #adacac"} py={{ xs: "15px", md: "30px" }} width={"100%"}>
                  <Text textAlign={"left"} fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={400} lineHeight={1.9} fontFamily={"CeraRoundPro"} color={"gray.800"}>
                    At Lumine Solicitors, we strive to simplify the visa procedure for you. Whether it's applying for a UK visitor visa, extending your existing visa, or bringing dependents along, we're here to assist you. With our proficient team of immigration solicitors, we provide professional advice on selecting the appropriate visa type and guarantee a hassle-free application process.
                  </Text>
                  <Text textAlign={"left"} fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }} fontWeight={400} fontFamily={"CeraRoundPro"} mt={"-6"} color={"gray.800"}>
                    For all immigration matters, Please do not hesitate to get in touch with Lumine solicitors{" "}
                    <strong>020 3950 2246</strong> or{" "}
                    <strong>
                      <Link to={"/contact"} style={{ color: "#e91e63" }} onMouseEnter={(e) => (e.target.style.color = "#091838")} onMouseLeave={(e) => (e.target.style.color = "#e91e63")}>
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

export default VisitorVisa;