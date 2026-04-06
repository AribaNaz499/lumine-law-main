import React, { Suspense } from "react";
import {
  Text,
  Container,
  Box,
  HStack,
  VStack,
  Grid,
  GridItem,
  Flex,
  Heading
} from "@chakra-ui/react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../../styles/fonts.css";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import ImmigrationImg from "../../assets/pricing/property-prices.webp";
import ResidentialImg from "../../assets/pricing/immigration.webp";
import BannerImg from "../../assets/pricing/debtRecovery.jpg";
import { Helmet } from "react-helmet";
const AllServiceLinks = React.lazy(() => import("../NavLinks/AllServiceLinks"));
const AllNewsInsights = React.lazy(() => import("../NavLinks/AllNewsInsights"));
const AllPrices = React.lazy(() => import("../NavLinks/AllPrices"));


const DebtRecovery = () => {
  const [purchaseState, setPurchaseState] = useState(false);
  const [disbursementsState, setDisbursementsState] = useState(false);
  const [serviceState, setServiceState] = useState(false);
  const [leaseholdState, setLeaseholdState] = useState(false);
  const [houseState, setHouseState] = useState(false);
  const [residentialState, setResidentialState] = useState(false);
  const [timescaleState, setTimescaleState] = useState(false);

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
          <title>Lumine Law Debt Recovery Prices </title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner */}
          <Box
            width={"100%"}
            height={{
              xs: "240px",
              lg: "290px",
              xl: "340px",
              "2xl": "390px",
            }}
            bgImage={`linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${BannerImg})`}
            bgSize={"cover"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            _loading={"eager"}
          >
            <Text
              fontSize={{ xs: "28px", lg: "38px", xl: "44px", "2xl": "54px" }}
              fontWeight={500}
              fontFamily={"CeraRoundPro"}
              width={"90%"}
              textAlign={"left"}
            >
              Debt Recovery Prices
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
              alignSelf={"center"}
              mb={"5%"}
              my={{ xs: "5%", md: "2.5%" }}
            >
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={650}
                color={"#bf9b30"}
                fontSize={{ xs: "12px", lg: "20px", xl: "24px", "2xl": "34px" }}
                textAlign={"left"}
                ml={{ lg: "1" }}
                mt={{ lg: "-3" }}

              >
                Instructing Us
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"left"}
                ml={{ lg: "1" }}
                mt={{ lg: "5" }}
                lineHeight={1.6}

              >
                Usually all we require from you to action an instruction is a copy of the outstanding invoices/statement of account, together with the debtor’s contact details and any relevant correspondence between you and the debtor.
              </Text>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"left"}
                ml={{ lg: "1" }}
                lineHeight={1.6}
              >
                Should further action be required our solicitors can assist you with issuing legal proceedings or even bankruptcy and winding up proceedings. For more information please do not hesitate to contact us.

              </Text>
            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mb={"50px"}
          >


            {/* Debt Recovery – the Costs Involved DONE*/}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                // borderTop={"1px solid #adacac"}
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
                // _hover={{ backgroundColor: !timescaleState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={timescaleState ? "black" : "#f9f9f9"}
                onClick={() => setTimescaleState(!timescaleState)}
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
                  Debt Recovery – the Costs Involved
                </Text>
                {!timescaleState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {timescaleState && (
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
                    These costs apply where your claim relates to an unpaid
                    invoice or invoices which are not disputed and enforcement
                    action is not needed. If the other party disputes your claim
                    at any point, we will discuss any further work required and
                    provide you with revised advice about costs which might be
                    on a fixed fee basis, conditional fee or an hourly rate
                    basis.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Our fees DONE*/}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                // borderTop={"1px solid #adacac"}
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
                // _hover={{ backgroundColor: !serviceState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={serviceState ? "black" : "#f9f9f9"}
                onClick={() => setServiceState(!serviceState)}
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
                  Our Fees
                </Text>
                {!serviceState ? (
                  <GoPlus color={"#bf9b30"} size={"1.8em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.8em"} />
                )}
              </HStack>

              {serviceState && (
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

                  >
                    We can give you a more accurate estimate of costs once we
                    have more information about your specific case.
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
                    fontWeight={600}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-7", xs: "-4", md: "-6" }}
                  >
                    Undefended/Undisputed
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
                    mt={{ lg: "-7", xs: "-4", md: "-6" }}
                    lineHeight={1.8}
                  >
                    Our estimated fees structure in relation to the
                    undisputed claim is noted below from stage 1-4. Our
                    estimated fees are exclusive of VAT and all
                    disbursements such as court fees, counsel fees and any
                    other necessary disbursements which you may need to
                    incur.
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
                    fontWeight={600}
                    fontFamily={"CeraRoundPro"}
                    mt={{ lg: "-7", xs: "-4", md: "-6" }}

                  >
                    Defended
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
                                              mt={{lg:"-7", xs:"-4", md:"-6"}}
lineHeight={1.8}
                  >
                    If the matter is defended we charge hourly fees which
                    start from £175+ VAT, excluding all disbursements.
                  </Text>


                </VStack>
              )}
            </Box>

            {/* Pre-action advice (stage 1) DONE */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                // borderTop={"1px solid #adacac"}
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
                // _hover={{ backgroundColor: !residentialState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={residentialState ? "black" : "#f9f9f9"}
                onClick={() => setResidentialState(!residentialState)}
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
                  Pre-Action Advice (Stage 1)
                </Text>
                {!residentialState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {residentialState && (
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
                  >
                    Our Fixed fee starts from £75 plus VAT, our hourly rates
                    depend on the circumstances of the instructions and advice
                    required.
                  </Text>

                  <Box
                    border={"1px solid black"}
                    width={"100%"}
                    my={"15px"}
                  ></Box>

                  <Box
                    width={"100%"}
                    display={"flex"}
                    flexFlow={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontFamily={
                      "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                    }
                  >
                    {/* Main - 1 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"2fr 1fr"}
                      backgroundColor={"#d9edf7"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "14px",
                        lg: "16px",
                      }}
                      fontWeight={"600"}
                    >
                      <GridItem
                        justifySelf={"start"}
                        textAlign={"left"}
                      ></GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        Our Charges
                      </GridItem>
                    </Grid>

                    {/* 2 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"2fr 1fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Individual/ Sole trade- Standard letter before action UK
                      </GridItem>
                      <GridItem
                        ustifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £100.00 - £500.00
                      </GridItem>
                    </Grid>

                    {/* 3 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"2fr 1fr"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      backgroundColor={"#f3f3f3"}
                      _hover={{ backgroundColor: "#ebe8e8" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Company- Standard letter before action
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £100.00 - £500.00
                      </GridItem>
                    </Grid>

                    {/* 4 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"2fr 1fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Follow up letters
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £25.00
                      </GridItem>
                    </Grid>

                    {/* 5 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"2fr 1fr"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      backgroundColor={"#f3f3f3"}
                      _hover={{ backgroundColor: "#ebe8e8" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Bespoke non-standard drafted letters
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        From £20.00 per letter
                      </GridItem>
                    </Grid>
                  </Box>
                </VStack>
              )}
            </Box>

            {/* Issuing a claim (stage 2) DONE */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                // borderTop={"1px solid #adacac"}
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
                // _hover={{ backgroundColor: !purchaseState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={purchaseState ? "black" : "#f9f9f9"}
                onClick={() => setPurchaseState(!purchaseState)}
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
                  Issuing a Claim (Stage 2)
                </Text>
                {!purchaseState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {purchaseState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Box
                    width={"100%"}
                    display={"flex"}
                    flexFlow={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontFamily={
                      "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                    }
                  >
                    {/* Main - 1 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 1fr 3fr"}
                      backgroundColor={"#d9edf7"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "14px",
                        lg: "16px",
                      }}
                      fontWeight={"600"}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Debt
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        Court fees
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        {" "}
                        Our legal fees
                      </GridItem>
                    </Grid>

                    {/* 2 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 1fr 3fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Up to £300
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £35
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        {" "}
                        £90 plus VAT – and a success fee of 12.5%, 22.5% or
                        32.5% depending on whether the debt is recovered at
                        stage 1, 2 or 3.
                      </GridItem>
                    </Grid>

                    {/* 3 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 1fr 3fr"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      backgroundColor={"#f3f3f3"}
                      _hover={{ backgroundColor: "#ebe8e8" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        £300 – £500
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £50
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        {" "}
                        £90 plus VAT – and a success fee of 12.5%, 22.5% or
                        32.5% depending on whether the debt is recovered at
                        stage 1, 2 or 3.
                      </GridItem>
                    </Grid>

                    {/* 4 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 1fr 3fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        £500 – £1,000
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £70
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £125 plus VAT– and a success fee of 12.5%, 22.5% or
                        32.5% depending on whether the debt is recovered at
                        stage 1, 2 or 3.
                      </GridItem>
                    </Grid>

                    {/* 5 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 1fr 3fr"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      backgroundColor={"#f3f3f3"}
                      _hover={{ backgroundColor: "#ebe8e8" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        £1,000 – £1,500
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £80
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £145 plus VAT– and a success fee of 12.5%, 22.5% or
                        32.5% depending on whether the debt is recovered at
                        stage 1, 2 or 3.
                      </GridItem>
                    </Grid>

                    {/* 6 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 1fr 3fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        £1,500 – £3,000
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £115
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £150 plus VAT– and a success fee of 10.5%, 18.5% or
                        22.5% depending on whether the debt is recovered at
                        stage 1, 2 or 3.
                      </GridItem>
                    </Grid>

                    {/* 7 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 1fr 3fr"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      backgroundColor={"#f3f3f3"}
                      _hover={{ backgroundColor: "#ebe8e8" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        £3,000 – £5,000
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £205
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £150 plus VAT– and a success fee of 6.5%, 15.5% or 20.5%
                        depending on whether the debt is recovered at stage 1, 2
                        or 3.
                      </GridItem>
                    </Grid>

                    {/* 8 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 1fr 3fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderTop={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        £5,000 – £10,000
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £455
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £170 plus VAT– and a success fee of 4.5%, 16.5% or 18.5%
                        depending on whether the debt is recovered at stage 1, 2
                        or 3.
                      </GridItem>
                    </Grid>

                    {/* 9 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 1fr 3fr"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      backgroundColor={"#f3f3f3"}
                      _hover={{ backgroundColor: "#ebe8e8" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        £10,000 - £100,000
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        5% of claim
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £260 plus VAT– and a success fee of 3.5%, 14.5% or 13.5%
                        depending on whether the debt is recovered at stage 1, 2
                        or 3.
                      </GridItem>
                    </Grid>
                  </Box>

                  <Text
                    textAlign={"left"}
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
                  >
                    If you wish to proceed with a claim then please note that
                    the interest and compensation may take the debt into a
                    higher banding resulting in a higher fee.
                  </Text>

                  <Text
                    textAlign={"left"}
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
                  >
                    Once the court has served the claim a debtor has 14 days in
                    which to file a defence or enter an acknowledgement. After
                    the 14-day period has expired a request can be made to the
                    court for judgment to be entered providing the debtor has
                    not filed an acknowledgement or a defence.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Request for judgement (stage 3) DONE */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                // borderTop={"1px solid #adacac"}
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
                // _hover={{ backgroundColor: !disbursementsState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={disbursementsState ? "black" : "#f9f9f9"}
                onClick={() => setDisbursementsState(!disbursementsState)}
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
                  Request for Judgement (Stage 3)
                </Text>
                {!disbursementsState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {disbursementsState && (
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
                    fontWeight={600}
                    fontFamily={"CeraRoundPro"}
                  >
                    Request for Judgment – £75 – £200 plus VAT Set Fee
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
                    mt={{lg:"-6", md:"-7", xs:"-4"}}
                    lineHeight={1.7}
                  >
                    If judgment is obtained but not duly settled then further
                    action will be required to enforce the judgment and secure
                    payment. We will need to discuss any third-party fees in
                    respect of enforcement with you separately. Please note that
                    we reserve the right to charge an additional fee if we are
                    required to arrange third party enforcement.
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
                      mt={{lg:"-6", md:"-7", xs:"-4"}}
                    lineHeight={1.7}
                  >
                    Timescale: It usually takes the court about 10 working days
                    to enter judgment following receipt of a request for
                    judgment.
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
                    fontWeight={600}
                      mt={{lg:"-6", md:"-7", xs:"-4"}}
                    lineHeight={1.7}
                    fontFamily={"CeraRoundPro"}
                  >
                    Defended Claims
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
                      mt={{lg:"-6", md:"-7", xs:"-4"}}
                    lineHeight={1.7}
                  >
                    Please Note: The above set fees are only applicable in
                    undefended actions. If your debt claim becomes defended at
                    any point, then we reserve the right to charge the
                    applicable hourly rate set out in our retainer letter to
                    you.
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
                    fontWeight={600}
                    fontFamily={"CeraRoundPro"}
                      mt={{lg:"-6", md:"-7", xs:"-4"}}
                    lineHeight={1.7}
                  >
                    Additional services if necessary
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
                      mt={{lg:"-6", md:"-7", xs:"-4"}}
                    lineHeight={1.7}
                  >
                    Where possible indications of third-party costs are given.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Enforcement of judgement (stage 4) DONE */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* Initial Button */}
              <HStack
                // borderTop={"1px solid #adacac"}
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
                // _hover={{ backgroundColor: !leaseholdState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={leaseholdState ? "black" : "#f9f9f9"}
                onClick={() => setLeaseholdState(!leaseholdState)}
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
                  Enforcement of Judgement (Stage 4)
                </Text>
                {!leaseholdState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {leaseholdState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Box
                    width={"100%"}
                    display={"flex"}
                    flexFlow={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontFamily={
                      "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                    }
                  >
                    {/* Main - 1 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"2fr 1fr 1fr"}
                      backgroundColor={"#d9edf7"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "14px",
                        lg: "16px",
                      }}
                      fontWeight={"600"}
                    >
                      <GridItem
                        justifySelf={"start"}
                        textAlign={"left"}
                      ></GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        Disbursement £
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "center" }}
                        textAlign={{ xs: "center", md: "center" }}
                      >
                        Our Charges £
                      </GridItem>
                    </Grid>

                    {/* 2 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"2fr 1fr 1fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Issuing warrant of execution to Bailiff
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £110.00 court fee (less £30.00 if via CCBC)
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "center" }}
                        textAlign={{ xs: "center", md: "center" }}
                      >
                        £100 - £300
                      </GridItem>
                    </Grid>

                    {/* 3 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"2fr 1fr 1fr"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      backgroundColor={"#f3f3f3"}
                      _hover={{ backgroundColor: "#ebe8e8" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        High Court Enforcement Officers
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £66.00
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "center" }}
                        textAlign={{ xs: "center", md: "center" }}
                      >
                        £200 - £400
                      </GridItem>
                    </Grid>

                    {/* 4 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"2fr 1fr 1fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Re-issue of warrant of execution
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £33.00
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "center" }}
                        textAlign={{ xs: "center", md: "center" }}
                      >
                        £50
                      </GridItem>
                    </Grid>

                    {/* 5 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"2fr 1fr 1fr"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      backgroundColor={"#f3f3f3"}
                      _hover={{ backgroundColor: "#ebe8e8" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Charging Order on property to be dealt with on paper
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £110.00
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "center" }}
                        textAlign={{ xs: "center", md: "center" }}
                      >
                        £400
                      </GridItem>
                    </Grid>

                    {/* 6 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"2fr 1fr 1fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Prep for Charging Order hearing if objection filed
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        Agent's fee for attendance
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "center" }}
                        textAlign={{ xs: "center", md: "center" }}
                      >
                        £250
                      </GridItem>
                    </Grid>

                    {/* 7 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"2fr 1fr 1fr"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      backgroundColor={"#f3f3f3"}
                      _hover={{ backgroundColor: "#ebe8e8" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Third party Debt order to first hearing
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £110.00 and agent's fee for attendance
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "center" }}
                        textAlign={{ xs: "center", md: "center" }}
                      >
                        £250
                      </GridItem>
                    </Grid>

                    {/* 8 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"2fr 1fr 1fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderTop={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Order to obtain information through Court
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £55.00 and agent's fee for service
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "center" }}
                        textAlign={{ xs: "center", md: "center" }}
                      >
                        £150
                      </GridItem>
                    </Grid>

                    {/* 9 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"2fr 1fr 1fr"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      backgroundColor={"#f3f3f3"}
                      _hover={{ backgroundColor: "#ebe8e8" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Application for substituted service of Information Order
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £100.00
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "center" }}
                        textAlign={{ xs: "center", md: "center" }}
                      >
                        £200 - £400
                      </GridItem>
                    </Grid>

                    {/* 10 */}
                    <Grid
                      width={"100%"}
                      templateColumns={"2fr 1fr 1fr"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{
                        xs: "12px",
                        lg: "14px",
                      }}
                      fontWeight={"500"}
                      backgroundColor={"#f3f3f3"}
                      _hover={{ backgroundColor: "#ebe8e8" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Attachment of Earnings
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £110.00
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "center" }}
                        textAlign={{ xs: "center", md: "center" }}
                      >
                        £200 - £400
                      </GridItem>
                    </Grid>
                  </Box>

                  <Text
                    textAlign={"left"}
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
                  >
                    If we are required to enter into correspondence about the
                    enforcement then the matter will no longer be treated as a
                    fixed fee enforcement and additional charges will apply
                    based on the applicable hourly rate set out in our client
                    care letter to you.
                  </Text>
                </VStack>
              )}
            </Box>
          </VStack>

        {/* Prices */}
                 <Suspense fallback={<div>Loading All Prices ...</div>}>
                   <AllPrices />
                 </Suspense>

          {/* All Services */}
          <Suspense fallback={<div>Loading All Services ...</div>}>
            <AllServiceLinks />
          </Suspense>

          {/* News and Insights */}
          <Suspense fallback={<div>Loading All News and Insights ...</div>}>
            <AllNewsInsights />
          </Suspense>

          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default DebtRecovery;
