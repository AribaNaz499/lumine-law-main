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
import BannerImg from "../../../assets/services/main/immigration/Asylum.jpg";
import { Heading } from "@chakra-ui/react"
const ReviewsAppeals = () => {
  const [spouseState, setSpouseState] = useState(false);
  const [eligibilityState, setEligibilityState] = useState(false);
  const [applicationState, setApplicationState] = useState(false);
  const [decisionState, setDecisionState] = useState(false);
  const [appeal, setAppeal] = useState(false);
  const [review, setReview] = useState(false);
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
          <title>
            Lumine Law Administrative Reviews, Appeals, and Judicial Reviews
            Services
          </title>
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
            _loading={"eager"}
          >
            <Text
              fontSize={{ xs: "18px", lg: "28px", xl: "33px", "2xl": "43px" }}
              fontWeight={600}
              fontFamily={"CeraRoundPro"}
              width={"90%"}
              textAlign={"left"}
              lineHeight={1.1}
            >
              Administrative Reviews, Appeals, and
              <br />
              Judicial Reviews
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
              width={"93%"}
              alignSelf={"center"}
              mb={"5%"}
              my={{ xs: "5%", md: "2.5%" }}
            >

              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={600}
                color={"#bf9b30"}
                fontSize={{ xs: "13px", lg: "25px", xl: "29px", "2xl": "39px" }}
                textAlign={"left"}
                ml={3}
              >
                ADMINISTRATIVE REVIEWS, APPEALS, AND JUDICIAL REVIEWS
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                mt={9}
              >
                The decisions made by the Home Office can sometimes be wrong or unjust in the complex world of immigration law, putting individuals in a tough spot. However, there are a few legal remedies available to contest such decisions, including Administrative Reviews, Appeals, and Judicial Reviews. Lumine Law specializes in guiding its clients through these complex processes to ensure that their cases are presented effectively and justly.
              </Text>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                mt={5}

              >
                An Administrative Review is an option for people who believe a mistake was made in the processing of their visa or immigration application. This review allows the original decision to be reassessed by a different caseworker within the Home Office. This process is commonly used for certain visa categories, such as Tier 4 student visas, Tier 2 work visas, and some visitor visas. The Home Office has guidelines as to how one might apply for a review, which one can find online at GOV.UK.
              </Text>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                mt={5}

              >
                If the case is not resolved by an Administrative Review, or if the decision affects fundamental rights, the case is then appealed. Appeals are usually based on human rights and are heard before the First-tier Tribunal (Immigration and Asylum Chamber). The First-tier Tribunal hears cases including asylum claims, human rights applications, and some family visas. The case may go to the Upper Tribunal if the First-tier Tribunal rejects the appeal. The Immigration Act of 2014 holds rules on appeals, and the ruling can be accessed in detail through the HM Courts & Tribunals Service.
              </Text>

              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                mt={5}
              >
                The application of a Judicial Review can be made in instances where an immigration decision might be unlawful. Unlike an appeal, a judicial review does not look at the merits of a case but the legality of how the decision has been reached. High-level scrutiny is carried out by the High Court and is often a potent tool when it is suspected that there are procedural errors or abuse of power. The process and requirements for Judicial Reviews can be found in the Civil Procedure Rules. There are extended resources on this matter on the Judiciary UK website.
              </Text>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                mt={5}

              >
                At Lumine Law, we appreciate that each case is different and deserves a customized solution to effectively litigate against an immigration decision. Our experienced team of lawyers is well-equipped with expert advice and representation to assist clients in their journey through the legal landscape toward the best outcome. We always keep ourselves abreast of new legal developments and apply well-established principles of law in order to help our clients find justice in every aspect of immigration law.
                <br />
                For personalized assistance with your legal needs, contact us or visit Lumine for expert guidance tailored to your specific situation. Our experienced team is here to help you navigate the complexities with confidence and ease.
              </Text>

            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mb={"50px"}
          >
            {/* What is Administrative Reviews, Appeals, and Judicial Reviews */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"93%"}
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
                  fontSize={{ xs: "13px", sm: "13px", md: "15px", lg: "15px", xl: "17px", "2xl": "19px" }}
                  fontWeight={"600"}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Administrative Reviews, Appeals, and Judicial Reviews
                </Text>
                {!spouseState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
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
                      xs: "10px",
                      sm: "10px",
                      md: "12px",
                      lg: "12px",
                      xl: "14px",
                      "2xl": "16px",
                    }}
                    color={"gray.800"}
                    lineHeight={1.7}
                    mb={2}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    There is a possibility that your visa application may be
                    rejected by the Home Office. In such cases, depending on the
                    circumstances, you may have a right of administrative review
                    or right of appeal.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Administrative Review */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"93%"}
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
                _hover={{ backgroundColor: !eligibilityState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setEligibilityState(!eligibilityState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "13px", sm: "13px", md: "15px", lg: "15px", xl: "17px", "2xl": "19px" }}
                  fontWeight={"600"}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Administrative Review
                </Text>
                {!eligibilityState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {eligibilityState && (
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
                      xs: "10px",
                      sm: "10px",
                      md: "12px",
                      lg: "12px",
                      xl: "14px",
                      "2xl": "16px",
                    }}
                    color={"gray.800"}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    Through administrative review, Lumine Solicitors can request
                    that the Home Office reconsider a decision if you believe
                    they have made a mistake. The only ground for administrative
                    review is that the Home Office has made a casework error.
                    E.g., if the home Office decision maker applied the wrong
                    Immigration Rules.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "10px",
                      sm: "10px",
                      md: "12px",
                      lg: "12px",
                      xl: "14px",
                      "2xl": "16px",
                    }}
                    color={"gray.800"}
                    fontWeight={400}
                    mt={-6}
                    fontFamily={"CeraRoundPro"}
                  >
                    A few circumstances in which administrative review can occur
                    include:
                  </Text>

                  <List.Root
                    textAlign={"justify"}
                    fontSize={{
                      xs: "10px",
                      sm: "10px",
                      md: "12px",
                      lg: "12px",
                      xl: "14px",
                      "2xl": "16px",
                    }}
                    color={"gray.800"}
                    mt={-6}
                    lineHeight={1.7}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}

                  >
                    <List.Item ml={-4}>
                      If your application for leave was refused
                    </List.Item>
                    <List.Item ml={-4}>
                      If you were granted limited leave to enter/remain rather
                      than indefinite leave to enter or remain
                    </List.Item>
                    <List.Item ml={-4}>If your Leave has been cancelled</List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Successful Administrative Review */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"93%"}
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
                  fontSize={{ xs: "13px", sm: "13px", md: "15px", lg: "15px", xl: "17px", "2xl": "19px" }}
                  fontWeight={"600"}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Successful Administrative Review
                </Text>
                {!applicationState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
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
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    color={"gray.800"}
                    ml={3}
                    mr={3}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    If the Home Office finds that the original decision
                    contained a casework error, then they will consider whether
                    correcting the error will change the outcome of the case.
                  </Text>

                  <Text
                    textAlign={"justify"}
                   fontSize={{
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    mt={{lg:"-6"}}
                    color={"gray.800"}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    ml={3}
                    mr={3}
                  >
                    If the error in the original decision changes the decision,
                    creating a new one, the home office will refund your
                    administrative review fee. The original application will be
                    followed if the new judgment determines that the leave
                    should have been granted.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Appeals */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"93%"}
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
                _hover={{ backgroundColor: !appeal && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setAppeal(!appeal)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "13px", sm: "13px", md: "15px", lg: "15px", xl: "17px", "2xl": "19px" }}
                  fontWeight={"600"}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Appeals
                </Text>
                {!appeal ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {appeal && (
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
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    lineHeight={1.8}
                    color={"gray.800"}
                    ml={3}
                    mr={8}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    Appeals tend to be more complicated than administrative
                    reviews. If you want to challenge a decision made by the
                    Home Office because you think that decision was wrong you
                    may be able to appeal that decision. If you are in the UK
                    and want to appeal, it will be held before a Judge at the
                    First-Tier Immigration Tribunal and must be within 14 days
                    of receiving a decision; if you were denied entry clearance,
                    you must do so within 28 days. There is a hierarchy of
                    tribunals and courts in the appeals system; thus if an
                    appeal is rejected by the First-Tier Tribunal, there may be
                    an additional right of appeal to the Upper Tribunal,
                    followed by higher courts.
                  </Text>

                  <Text
                    textAlign={"justify"}
                      fontSize={{
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    lineHeight={1.8}
                    color={"gray.800"}
                    ml={3}
                    mr={3}
                    mt={-6}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    The following are a few examples of decisions that Lumine
                    Solicitors can appeal:
                  </Text>

                  <List.Root
                    textAlign={"justify"}
                     fontSize={{
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    color={"gray.800"}
                    lineHeight={1.7}
                    mt={-6}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>
                      A human rights claim refusal e.g., family and private life
                      grounds claims
                    </List.Item>
                    <List.Item>
                      A protection claim refusal e.g., asylum
                    </List.Item>
                    <List.Item>British citizenship Revocation</List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Judicial Review */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"93%"}
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
                _hover={{ backgroundColor: !review && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setReview(!review)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "13px", sm: "13px", md: "15px", lg: "15px", xl: "17px", "2xl": "19px" }}
                  fontWeight={"600"}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Judicial Review
                </Text>
                {!review ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {review && (
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
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    lineHeight={1.8}
                    color={"gray.800"}
                    ml={3}
                    mr={9}

                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    A judicial review can challenge the lawfulness of a decision
                    by the Home Office if you believe it was illegal or
                    unreasonable. It is usually a remedy of last resort and is
                    more concerned with whether the law has been applied
                    correctly rather than if the correct decision was made.
                  </Text>

                  <Text
                    textAlign={"justify"}
                     fontSize={{
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    lineHeight={1.8}
                    color={"gray.800"}
                    ml={3}
                    mr={3}
                    mt={-8}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    Grounds For Immigration Judicial Review
                  </Text>

                  <Text
                    textAlign={"justify"}
                     fontSize={{
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    lineHeight={1.8}
                    color={"gray.800"}
                    ml={3}
                    mr={3}
                    mt={-8}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    There Are Specific Grounds Required For Immigration Judicial
                    Review. Some Are As Follows:
                  </Text>

                  <List.Root
                    textAlign={"justify"}
                     fontSize={{
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    lineHeight={1.8}
                    color={"gray.800"}

                    mr={3}
                    mt={-8}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>
                      Irrationality: a decision is unreasonable (e.g. the
                      Wednesbury case)
                    </List.Item>
                    <List.Item>
                      Illegality: the decision-maker lacked the authority
                      required to make the legal decision
                    </List.Item>
                    <List.Item>
                      Procedural misconduct: the procedure that led to the
                      decision was legally incorrect
                    </List.Item>
                    <List.Item>
                      The Human Rights Act 1998 was breached because of the
                      decision
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Decision */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"93%"}
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
                  fontSize={{ xs: "13px", sm: "13px", md: "15px", lg: "15px", xl: "17px", "2xl": "19px" }}
                  fontWeight={"600"}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  How long does it take to reach a decision?
                </Text>
                {!decisionState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
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
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    lineHeight={1.8}
                    color={"gray.800"}
                    mr={4}
                    ml={3}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    An administrative review decision can take up to 6 months of
                    even longer depending on the case. The Home Office will get
                    in touch with you with an update if you haven’t heard
                    anything about your application after six months.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Help */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"93%"}
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
                  fontSize={{ xs: "13px", sm: "13px", md: "15px", lg: "15px", xl: "17px", "2xl": "19px" }}
                  fontWeight={"600"}
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
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    color={"gray.800"}
                    mr={4}
                    ml={3}
                    lineHeight={1.8}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    We at Lumine Solicitors will provide professional advice to
                    you on whether it is worth applying for an admirative
                    review/appeal/ judicial review based on your unique
                    circumstances and will support you in making such an
                    application. Additionally, we can help with drafting grounds
                    for your application that are in line with the requirements
                    for a successful claim and represent you in any court
                    proceedings.
                  </Text>

                  <Text
                    textAlign={"justify"}
                      fontSize={{
                      xs: "11px",
                      sm: "11px",
                      md: "13px",
                      lg: "13px",
                      xl: "15px",
                      "2xl": "17px",
                    }}
                    lineHeight={1.8}
                    color={"gray.800"}
                    mt={"-8"}
                    ml={3}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    For all immigration matters, Please do not hesitate to get
                    in touch
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

export default ReviewsAppeals;
