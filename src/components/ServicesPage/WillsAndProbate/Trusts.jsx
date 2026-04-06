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
import BannerImg from "../../../assets/services/main/wills-probate/banner.jpg";

const Trusts = () => {
  const [spouseState, setSpouseState] = useState(false);
  const [eligibilityState, setEligibilityState] = useState(false);
  const [applicationState, setApplicationState] = useState(false);
  const [decisionState, setDecisionState] = useState(false);
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
          <title>Lumine Law Trusts Services</title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner */}
          <Box
            width={"100%"}
            height={{
              xs: "295px",
              lg: "320px",
              xl: "345px",
              "2xl": "370px",
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
              fontSize={{ xs: "32px", lg: "42px", xl: "46px", "2xl": "56px" }}
              fontWeight={700}
              fontFamily={"CeraRoundPro"}
              width={"90%"}
              maxWidth={"1400px"}
              mx={"auto"}
              textAlign={"left"}
            >
              Trusts
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
              width={"90%"}
              maxWidth={"1400px"}
              mx={"auto"}
              mb={"5%"}
              my={{ xs: "5%", md: "2.5%" }}
            >
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11.5px", lg: "13.5px", xl: "15.5px", "2xl": "17.5px" }}
                textAlign={"justify"}
              >
                Trusts are a form of wealth management. This includes property
                investments or land for a family member or another person whom
                you wish to benefit (trustees). Different types of trusts are
                taxed differently, so it is important to get the right legal
                advice.
              </Text>

              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11.5px", lg: "13.5px", xl: "15.5px", "2xl": "17.5px" }}
                textAlign={"justify"}
                mt={4}
              >
                Our solicitors will work with you in accordance with your needs
                and offer you advice on the drafting, creation, and
                administration of your trust for your loved ones. We guarantee
                to communicate effectively with you to maintain your peace of
                mind through the process.
              </Text>
            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mb={"50px"}
            width={"100%"}
          >
            {/* Administering Trusts */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              maxWidth={"1400px"}
              mx={"auto"}
              justifyContent={"center"}
              alignItems={"flex-start"}
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
                backgroundColor={"black"}
                onClick={() => setSpouseState(!spouseState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "13px",
                    sm: "13px",
                    md: "15px",
                    lg: "15px",
                    xl: "17px",
                    "2xl": "19px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Administering Trusts
                </Text>
                {!spouseState ? (
                  <GoPlus color={"#bf9b30"} size={"1.8em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.8em"} />
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
                  textAlign={"justify"}
                  width={"100%"}
                >
                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    lineHeight={1.7}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    Administering a trust can be a challenging task, often
                    requiring significant time and expertise. At our firm, we
                    understand the complexities involved in trust management and
                    offer tailored solutions to assist trustees in fulfilling
                    their duties effectively.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    lineHeight={1.7}
                    fontWeight={400}
                                                            mt={{lg:"-7", xs:"-4"}}

                    fontFamily={"CeraRoundPro"}
                  >
                    We aim to maximise benefits for beneficiaries while ensuring
                    assets are protected. Our team is committed to delivering
                    personalised assistance tailored to the unique needs of each
                    trust, and our services include:
                  </Text>

                  <List.Root
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    lineHeight={1.7}
                    fontWeight={400}
                                                            mt={{lg:"-7", xs:"-4"}}


                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>
                      Guaranteeing complete adherence to legal and tax
                      regulations
                    </List.Item>
                    <List.Item>
                      Administration and management of trusts
                    </List.Item>
                    <List.Item>
                      Offering guidance on trustees' legal authority and
                      responsibility
                    </List.Item>
                    <List.Item>
                      Serving as a professional trustee when required
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Will Trusts */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              maxWidth={"1400px"}
              mx={"auto"}
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
                backgroundColor={"black"}
                onClick={() => setEligibilityState(!eligibilityState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                    xl: "18px",
                    "2xl": "20px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Will Trusts
                </Text>
                {!eligibilityState ? (
                  <GoPlus color={"#bf9b30"} size={"1.8em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.8em"} />
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
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    lineHeight={1.7}
                  >
                    A will trust offers a way for your assets to be safeguarded
                    while providing for your loved ones' future. This can be
                    incorporated into your will to take effect after your death.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                                        mt={{lg:"-7", xs:"-4"}}

                  >
                    In essence, will trusts provide:
                  </Text>

                  <List.Root
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    color={"black"}
                                        mt={{lg:"-7", xs:"-4"}}

                    lineHeight={1.7}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item color={"black"}>A flexible approach</List.Item>
                    <List.Item color={"black"}>
                      Providing benefits to individuals in unforeseen ways
                      during will drafting
                    </List.Item>
                    <List.Item>
                      Adjustments to new circumstances as they arise
                    </List.Item>
                  </List.Root>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                                        mt={{lg:"-7", xs:"-4"}}

                    lineHeight={1.7}

                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    Our experienced solicitors will help you set up a will
                    trust, manage finances that meet your specific needs, and
                    provide comprehensive support throughout the process.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Discretionary and Family Trusts */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              maxWidth={"1400px"}
              mx={"auto"}
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
                backgroundColor={"black"}
                onClick={() => setApplicationState(!applicationState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "13px",
                    sm: "13px",
                    md: "15px",
                    lg: "15px",
                    xl: "17px",
                    "2xl": "19px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Discretionary and Family Trusts
                </Text>
                {!applicationState ? (
                  <GoPlus color={"#bf9b30"} size={"1.8em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.8em"} />
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
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    lineHeight={1.8}
                  >
                    A discretionary trust, often referred to as a family trust
                    or trust fund, is a legal arrangement in which an individual
                    (referred to as the settlor) transfers property, assets, or
                    funds to a trustee. The trustee is then responsible for
                    holding and managing these assets on behalf of a group of
                    beneficiaries. Unlike other types of trusts, the identities
                    and entitlements of beneficiaries to the trust's income or
                    capital are not predetermined.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                                        mt={{lg:"-7", xs:"-4"}}

                    lineHeight={1.7}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    These are best suited for those who are unable to manage
                    their assets, such as children, who may have a disability or
                    mental illness that affects their capacity to make
                    decisions.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    lineHeight={1.8}
                                        mt={{lg:"-7", xs:"-4"}}

                  >
                    With our expertise in trust creation and administration, our
                    services include:
                  </Text>

                  <List.Root
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    lineHeight={1.8}
                                        mt={{lg:"-7", xs:"-4"}}

                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>Optimising tax efficiency</List.Item>
                    <List.Item>
                      Providing expert guidance on legal requirements
                    </List.Item>
                    <List.Item>Updating you on changes to tax laws</List.Item>
                    <List.Item>
                      Managing all compliance requirements, including trust
                      registration, preparing tax returns, and assessing fees.
                    </List.Item>
                    <List.Item>
                      Ensuring your assets and family are protected
                    </List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Personal Injury Trusts */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              maxWidth={"1400px"}
              mx={"auto"}
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
                backgroundColor={"black"}
                onClick={() => setHelpState(!helpState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "13px",
                    sm: "13px",
                    md: "15px",
                    lg: "15px",
                    xl: "17px",
                    "2xl": "19px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Personal Injury Trusts
                </Text>
                {!helpState ? (
                  <GoPlus color={"#bf9b30"} size={"1.8em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.8em"} />
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
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    lineHeight={1.7}
                  >
                    A personal injury trust allows individuals who have obtained
                    compensation from a successful personal injury claim to
                    safeguard their compensation from being considered for
                    means-tested benefits. We can help you or a loved one set up
                    a personal injury trust.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    lineHeight={1.7}
                    mt={{ lg: "-7", xs: "-4" }}
                  >
                    The benefits of a personal injury trust include:
                  </Text>

                  <List.Root
                    textAlign={"justify"}
                    fontSize={{
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    lineHeight={1.8}
                    mt={{ lg: "-7", xs: "-4" }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>Tax-efficiency</List.Item>
                    <List.Item>Management of future care costs</List.Item>
                    <List.Item>Protection from means-tested benefits</List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* How can Lumine Solicitors Help? */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              maxWidth={"1400px"}
              mx={"auto"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                borderBottom={"1px solid #adacac"}
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
                backgroundColor={"black"}
                onClick={() => setDecisionState(!decisionState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "13px",
                    sm: "13px",
                    md: "15px",
                    lg: "15px",
                    xl: "17px",
                    "2xl": "19px",
                  }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  How can Lumine Solicitors Help?
                </Text>
                {!decisionState ? (
                  <GoPlus color={"#bf9b30"} size={"1.8em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.8em"} />
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
                      xs: "12px",
                      sm: "12px",
                      md: "14px",
                      lg: "14px",
                      xl: "16px",
                      "2xl": "18px",
                    }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    lineHeight={1.7}
                  >
                    If you have any further queries or are interested in our
                    trusts services please do not hesitate to get in touch with
                    Lumine solicitors <strong>020 3950 2246</strong> or{" "}
                    <strong>
                      <Link
                        to={"/contact"}
                        style={{ color: "#efdc6b" }}
                        onMouseLeave={(e) => (e.target.style.color = "#efdc6b")}
                      >
                        Contact Us HERE
                      </Link>
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

export default Trusts;