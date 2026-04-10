import React, { Suspense } from "react";

import {
  Text,
  Container,
  Box,
  HStack,
  VStack,
  List,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../../styles/fonts.css";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import DebtRecoovery from "../../assets/pricing/debtRecovery.jpg";
import Immigration from "../../assets/pricing/immigration.jpg";
import BannerImg from "../../assets/pricing/priceBanner.jpg";
import { Helmet } from "react-helmet";
import AllServiceLinks from "../NavLinks/AllServiceLinks";
import AllNewsInsights from "../NavLinks/AllNewsInsights";
import AllPrices from "../NavLinks/AllPrices";


const PropertyPrices = () => {
  const [purchaseState, setPurchaseState] = useState(false);
  const [disbursementsState, setDisbursementsState] = useState(false);
  const [serviceState, setServiceState] = useState(false);
  const [leaseholdState, setLeaseholdState] = useState(false);
  const [houseState, setHouseState] = useState(false);
  const [feeState, setFeeState] = useState(false);
  const [residentialState, setResidentialState] = useState(false);
  const [likelyState, setLikelyState] = useState(false);
  const [additionalState, setAdditionalState] = useState(false);
  const [timescaleState, setTimescaleState] = useState(false);
  const [nameState, setNameState] = useState(false);

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
          <title>Lumine Law Property Prices </title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner */}
          <Box
            width={"100%"}
            height={{
              base: "220px",
              sm: "260px",
              md: "300px",
              lg: "335px",
              xl: "350px",
              "2xl": "350px",
            }}
            bgImage={`linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${BannerImg})`}
            bgSize={"cover"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            display={"flex"}
            justifyContent={"flex-start"}
            px={{ base: "5%", md: "3.5%" }}
            alignItems={"center"}
            _loading={"eager"}
          >
            <Text
              color="white"
              fontSize={{ base: "28px", sm: "32px", md: "40px", lg: "48px" }}
              fontFamily={"CeraRoundPro"}
              marginRight={"20px"}
              textShadow="2px 2px 4px rgba(0,0,0,0.3)"
            >
              Property Prices
            </Text>
          </Box>

          {/* Purchase */}
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
              my={{ base: "4%", md: "2.5%" }}
            >
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={700}
                mt={"-12px"}
                font={"bold"}
                fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "21px", xl: "23px", "2xl": "25px" }}
                textAlign={"left"}
                color={"#BF9B30"}
              >
                Purchase of residential property freehold and leasehold
              </Text>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={300}
                mt={"18px"}
                fontSize={{ base: "12px", sm: "13px", md: "14px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign={"left"}
                color={"#222221bd"}
              >
                Our fees cover all the work required to complete the purchase of your new home, including dealing with registration at the Land Registry and dealing with the payment of Stamp Duty Land Tax (Stamp Duty) if the property is in England
              </Text>
              <Box
                fontFamily="CeraRoundPro"
                fontWeight={300}
                fontSize={{ base: "12px", sm: "13px", md: "14px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign="left"
              >
                <Box
                  as="ul"
                  mt={1}
                  style={{ listStyleType: 'disc' }}
                  pl={10}
                  color="black"
                >
                  <Box as="li">
                    <Box as="span" color="#0c0b0bbd">
                      VAT will be added to the Legal Fees and some disbursements at a rate of 20%
                    </Box>
                  </Box>
                </Box>
                <Text
                  fontFamily={"CeraRoundPro"}
                  fontWeight={300}
                  fontSize={{ base: "12px", sm: "13px", md: "14px", lg: "14px", xl: "16px", "2xl": "18px" }}
                  textAlign={"left"}
                  mt={1}
                  color={"#222221bd"}
                >
                  Disbursements are costs related to your matter that are payable to third parties, such as search fees. We handle the payment of the disbursements on your behalf to ensure a smoother process. There are certain disbursements which will be set out in the individual lease relating to the Property. The disbursements which we anticipate will apply are set out separately below. This list is not exhaustive and other disbursements may apply depending on the terms of the lease. We will update you on the specific fees upon receipt and review of the lease from the seller's solicitors.
                </Text>
              </Box>
            </Box>
          </Box>

          {/* Purchase Dropdown info */}
          <VStack justifyContent={"space-around"} alignItems={"center"}>
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {purchaseState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ base: "16px", md: "30px" }}
                  mb={{ base: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ base: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Text
                    textAlign={"justify"}
                    fontSize={{ base: "12px", sm: "13px", md: "14px", lg: "14px", xl: "16px", "2xl": "18px" }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    Our fees cover all the work required to complete the
                    purchase of your new home, including dealing with
                    registration at the Land Registry and dealing with the
                    payment of Stamp Duty Land Tax (Stamp Duty) if the property
                    is in England*
                  </Text>

                  <List.Root
                    textAlign={"justify"}
                    fontSize={{ base: "12px", sm: "13px", md: "14px", lg: "14px", xl: "16px", "2xl": "18px" }}
                    fontWeight={600}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>
                      VAT will be added to the Legal Fees and some disbursements
                      at a rate of 20%
                    </List.Item>
                  </List.Root>

                  <Text
                    textAlign={"justify"}
                    fontSize={{ base: "12px", sm: "13px", md: "14px", lg: "14px", xl: "16px", "2xl": "18px" }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    Disbursements are costs related to your matter that are
                    payable to third parties, such as search fees. We handle the
                    payment of the disbursements on your behalf to ensure a
                    smoother process. There are certain disbursements which will
                    be set out in the individual lease relating to the Property.
                    The disbursements which we anticipate will apply are set out
                    separately below. This list is not exhaustive and other
                    disbursements may apply depending on the terms of the lease.
                    We will update you on the specific fees upon receipt and
                    review of the lease from the seller's solicitors.
                  </Text>

                  <Box
                    width={"100%"}
                    display={"flex"}
                    flexFlow={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontFamily={"HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"}
                    overflowX="auto"
                  >
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 3fr 1fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{ base: "11px", md: "12px", lg: "14px" }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>
                        Fees for acting on behalf of a mortgage lender
                      </GridItem>
                      <GridItem justifySelf={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "left" }}>
                        £150.00
                      </GridItem>
                      <GridItem justifySelf={"end"}> VAT@ 20%</GridItem>
                    </Grid>

                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 3fr 1fr"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{ base: "11px", md: "12px", lg: "14px" }}
                      fontWeight={"500"}
                      backgroundColor={"#f3f3f3"}
                      _hover={{ backgroundColor: "#ebe8e8" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>Search fees:</GridItem>
                      <GridItem justifySelf={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "left" }}>
                        £350 - £450 approx
                      </GridItem>
                      <GridItem justifySelf={"end"}> </GridItem>
                    </Grid>

                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 3fr 1fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{ base: "11px", md: "12px", lg: "14px" }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>HM Land Registry fee:</GridItem>
                      <GridItem justifySelf={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "left" }}>
                        This depends on the purchase price of your property,
                        this amount can be calculated using HMLR's website:{" "}
                        <Link style={{ textDecoration: "underline" }}>
                          http://landregistry.data.gov.uk/fees-calculator.html
                        </Link>
                      </GridItem>
                      <GridItem justifySelf={"end"}></GridItem>
                    </Grid>

                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 3fr 1fr"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{ base: "11px", md: "12px", lg: "14px" }}
                      fontWeight={"500"}
                      backgroundColor={"#f3f3f3"}
                      _hover={{ backgroundColor: "#ebe8e8" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>Stamp Duty Land Tax</GridItem>
                      <GridItem justifySelf={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "left" }}>
                        This will depend upon the purchase price of your
                        property. You can calculate the amount due by using
                        HMRC's website:
                        <Link style={{ textDecoration: "underline" }}>
                          https://www.tax.service.gov.uk/calculate-stamp-duty-land-tax/#/intro
                        </Link>
                      </GridItem>
                      <GridItem justifySelf={"end"}></GridItem>
                    </Grid>

                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 3fr 1fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{ base: "11px", md: "12px", lg: "14px" }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>Electronic money transfer admin fee:</GridItem>
                      <GridItem justifySelf={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "left" }}>£25</GridItem>
                      <GridItem justifySelf={"end"}></GridItem>
                    </Grid>

                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 3fr 1fr"}
                      py={"20px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{ base: "11px", md: "12px", lg: "14px" }}
                      fontWeight={"500"}
                      backgroundColor={"#f3f3f3"}
                      _hover={{ backgroundColor: "#ebe8e8" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>Bankruptcy search</GridItem>
                      <GridItem justifySelf={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "left" }}>£2 per person</GridItem>
                      <GridItem justifySelf={"end"}></GridItem>
                    </Grid>

                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 3fr 1fr"}
                      backgroundColor={"#ffffff"}
                      py={"20px"}
                      borderTop={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{ base: "11px", md: "12px", lg: "14px" }}
                      fontWeight={"500"}
                      _hover={{ backgroundColor: "#f3f3f3" }}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>Land Registry Priority Search</GridItem>
                      <GridItem justifySelf={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "left" }}>£3</GridItem>
                      <GridItem justifySelf={"end"}></GridItem>
                    </Grid>
                  </Box>
                </VStack>
              )}
            </Box>

            {/* Our fee assumes that */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {feeState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ base: "16px", md: "30px" }}
                  mb={{ base: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ base: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <List.Root
                    as={"ol"}
                    textAlign={"justify"}
                    fontSize={{ base: "12px", sm: "13px", md: "14px", lg: "14px", xl: "16px", "2xl": "18px" }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>This is a standard transaction and that no unforeseen matters arise including for example (but not limited to) a defect in title which requires remedying prior to completion or the preparation of additional documents ancillary to the main transaction</List.Item>
                    <List.Item>This is the assignment of an existing lease and is not the grant of a new lease</List.Item>
                    <List.Item>The transaction is concluded in a timely manner and no unforeseen complication arise</List.Item>
                    <List.Item>All parties to the transaction are co-operative and there is no unreasonable delay from third parties providing documentation</List.Item>
                    <List.Item>No indemnity policies are required. Additional disbursements may apply if indemnity policies are required.</List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>
          </VStack>

          {/* Sales Dropdown info */}
          <VStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mb={"50px"}

          >

            {/* Residential sale freehold and leasehold estimated fee */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}

            >
              <HStack
                // borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ base: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ base: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                cursor={"pointer"}
                transition={"all 0.3s ease"}
                backgroundColor={residentialState ? "black" : "#f9f9f9"}
                onClick={() => setResidentialState(!residentialState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ base: "11px", sm: "12px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={700}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}

                >
                  Residential Sale Freehold and Leasehold Estimated Fee
                </Text>
                {!residentialState ? (
                  <GoPlus color={"#bf9b30"} size={"1.6em"} fontWeight={"bold"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.6em"} fontWeight={"bold"} />
                )}
              </HStack>

              {residentialState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ base: "16px", md: "30px" }}
                  mb={{ base: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ base: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Text
                    textAlign={"left"}
                    fontSize={{ base: "12px", sm: "13px", md: "14px", lg: "14px", xl: "16px", "2xl": "18px" }}
                    fontWeight={300}
                    mb={"-25px"}
                    fontFamily={"CeraRoundPro"}
                    color={"gray.800"}

                  >
                    Our fee for dealing with a normal conveyancing property sale is:
                  </Text>

                  <Box
                    width={"100%"}
                    display={"flex"}
                    flexFlow={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontFamily={"HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"}
                    overflowX="auto"
                  >
                    <Grid
                      width={"100%"}
                      templateColumns={"1fr 1fr 1fr"}
                      backgroundColor={"#d9edf7"}
                      py={"10px"}
                      borderY={"1px solid #bfbfbf"}
                      px={"10px"}
                      fontSize={{ base: "11px", sm: "12px", lg: "13px" }}
                      fontWeight={"600"}
                    >
                      <GridItem justifySelf={"start"} textAlign={"left"}>Sale Price</GridItem>
                      <GridItem justifySelf={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "left" }}>Our Legal Fees (Freehold)</GridItem>
                      <GridItem justifySelf={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "left" }}>Our Legal Fees (Leasehold)</GridItem>
                    </Grid>

                    {[
                      ["£0 - £250,000", "£650", "£700", "#ffffff"],
                      ["£251,000 - £500,000", "£750", "£800", "#f3f3f3"],
                      ["£501,000 - £999,000", "£950", "£1,000", "#ffffff"],
                      ["£1,000,000+", "0.15% - 0.175%", "0.15% - 0.175%", "#f3f3f3"],
                    ].map(([price, free, lease, bg], i) => (
                      <Grid
                        key={i}
                        width={"100%"}
                        templateColumns={"1fr 1fr 1fr"}
                        backgroundColor={bg}
                        py={"10px"}
                        borderY={"1px solid #bfbfbf"}
                        px={"10px"}
                        fontSize={{ base: "11px", sm: "12px", lg: "12px" }}
                        fontWeight={"500"}
                        _hover={{ backgroundColor: bg === "#ffffff" ? "#f3f3f3" : "#ebe8e8" }}
                      >
                        <GridItem justifySelf={"start"} textAlign={"left"}>{price}</GridItem>
                        <GridItem justifySelf={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "left" }}>{free}</GridItem>
                        <GridItem justifySelf={{ base: "center", md: "start" }} textAlign={{ base: "center", md: "left" }}>{lease}</GridItem>
                      </Grid>
                    ))}
                  </Box>

                  <Text
                    textAlign={"left"}
                    marginTop={"18px"}
                    fontSize={{ base: "11px", sm: "12px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                    fontWeight={600}
                    color={"gray.800"}

                    fontFamily={"CeraRoundPro"}
                  >
                    Please note VAT will be added to our legal fees
                  </Text>

                  <Text
                    textAlign={"left"}
                    lineHeight={"1.5"}
                    fontSize={{ base: "11px", sm: "12px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                    marginTop={"-20px"}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    color={"gray.800"}

                  >
                    If there are charges/ mortgage over the property you are
                    selling we charge an additional fee of £125 plus VAT per
                    mortgage assuming the mortgage is with a high street lender.
                    This includes:
                  </Text>

                  <List.Root
                    ml={"-25px"}
                    textAlign={"left"}
                    marginTop={"-25px"}
                    lineHeight={"1.8"}
                    fontSize={{ base: "11px", sm: "12px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                    fontWeight={400}
                    color={"gray.800"}
                    letterSpacing={"0.5"}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>Obtaining a redemption statement</List.Item>
                    <List.Item>Transferring the redemption amount to the Lender on completion</List.Item>
                    <List.Item>Obtaining discharge documents and sending to the Buyer's solicitors following completion</List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Likely disbursements */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <HStack
                // borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ base: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ base: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                cursor={"pointer"}
                transition={"all 0.3s ease"}
                backgroundColor={likelyState ? "black" : "#f9f9f9"}
                onClick={() => setLikelyState(!likelyState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ base: "11px", sm: "12px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={700}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Likely Disbursements
                </Text>
                {!likelyState ? (
                  <GoPlus color={"#bf9b30"} size={"1.6em"} fontWeight={"bold"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.6em"} fontWeight={"bold"} />
                )}
              </HStack>

              {likelyState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ base: "16px", md: "30px" }}
                  mb={{ base: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ base: "15px", md: "30px" }}
                  width={"100%"}
                  lineHeight={1.8}
                >
                  <Text
                    textAlign={"justify"}
                    fontSize={{ base: "11px", sm: "11px", md: "12px", lg: "12px", xl: "15px", "2xl": "16px" }}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                    color={"gray.800"}

                    pr={{ base: "0px", md: "40px", lg: "60px" }}
                  >
                    (These are costs related to your matter that are payable to
                    third parties. We handle the payment of the disbursements on
                    your behalf to ensure a smoother process)
                  </Text>

                  <List.Root
                    textAlign={"justify"}
                    ml={{ base: "-10px", md: "-15px", lg: "-20px" }}
                    fontSize={{ base: "11px", sm: "11px", md: "12px", lg: "12px", xl: "15px", "2xl": "16px" }}
                    mt={"-25px"}
                    color={"gray.800"}
                    fontWeight={400}
                    lineHeight={1.7}
                    fontFamily={"CeraRoundPro"}
                  >
                    <List.Item>Land Registry Title Documents (Freehold) £6 each (no VAT)</List.Item>
                    <List.Item>Land Registry Title Documents (Leasehold) £6 (no VAT)</List.Item>
                    <List.Item>Copy Lease £3.00 if it is available electronically or £12 if the land registry need to manually process this</List.Item>
                    <List.Item>Acquiring any planning permission documents – price depends on the individual local authority</List.Item>
                  </List.Root>
                </VStack>
              )}
            </Box>

            {/* Potential additional disbursements */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <HStack
                // borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ base: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ base: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                cursor={"pointer"}
                transition={"all 0.3s ease"}
                backgroundColor={additionalState ? "black" : "#f9f9f9"}
                onClick={() => setAdditionalState(!additionalState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ base: "11px", sm: "12px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={700}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Potential Additional Disbursements
                </Text>
                {!additionalState ? (
                  <GoPlus color={"#bf9b30"} size={"1.6em"} fontWeight={"bold"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.6em"} fontWeight={"bold"} />
                )}
              </HStack>

              {additionalState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ base: "16px", md: "30px" }}
                  mb={{ base: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ base: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Text
                    textAlign={"justify"}
                    fontSize={{ base: "11px", sm: "12px", md: "12px", lg: "13px", xl: "15px", "2xl": "17px" }}
                    fontWeight={400}
                    color={"gray.800"}
                    fontFamily={"CeraRoundPro"}
                  >
                    In Leasehold matters we may also need to pay a fee to the
                    Landlords Solicitors or Agents in respect of providing
                    replies to Standard Leasehold Enquiries of the Landlord.
                    This cost varies from one property to the next, depending on
                    the fees confirmed in the Lease/ agreed with the landlord.
                    We will advise you of this cost, however this usually ranges
                    between £100 – £250 plus VAT.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    marginTop={"-29px"}
                    fontSize={{ base: "11px", sm: "12px", md: "12px", lg: "13px", xl: "15px", "2xl": "17px" }}
                    fontWeight={400}
                    color={"gray.800"}
                    fontFamily={"CeraRoundPro"}
                  >
                    You should note that these disbursements can vary from
                    property to property and can on occasion be significantly
                    more than the ranges given above. We can give you an
                    accurate indication of costs once we have had sight of the
                    specific documents. Other disbursements may apply depending
                    on the terms of your Lease.
                  </Text>

                  <Text
                    textAlign={"justify"}
                    fontSize={{ base: "11px", sm: "12px", md: "12px", lg: "13px", xl: "15px", "2xl": "17px" }}
                    marginTop={"-29px"}
                    color={"gray.800"}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    You should note that for all new clients of the firm, we
                    will conduct an electronic ID search for Anti Money
                    Laundering compliance. The administrative fee for arranging
                    these checks is £15 plus VAT. If we are arranging the
                    transfer of funds electronically, we will charge a fee for
                    our time involved in arranging each transfer, for example
                    sending the proceeds of sale to you on completion, the cost
                    of this and the amount we pay to the bank for the transfer
                    is £25 plus VAT per transfer.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Average timescales */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <HStack
                // borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ base: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ base: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                cursor={"pointer"}
                transition={"all 0.3s ease"}
                backgroundColor={timescaleState ? "black" : "#f9f9f9"}
                onClick={() => setTimescaleState(!timescaleState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ base: "11px", sm: "12px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={700}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Average Timescales
                </Text>
                {!timescaleState ? (
                  <GoPlus color={"#bf9b30"} size={"1.6em"} fontWeight={"bold"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.6em"} fontWeight={"bold"} />
                )}
              </HStack>

              {timescaleState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ base: "16px", md: "30px" }}
                  mb={{ base: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ base: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Text
                    textAlign={"justify"}
                    fontSize={{ base: "11px", sm: "12px", md: "12px", lg: "13px", xl: "15px", "2xl": "17px" }}
                    lineHeight={"1.7"}
                    color={"gray.800"}
                    fontWeight={400}
                    fontFamily={"CeraRoundPro"}
                  >
                    How long it will take from you accepting the buyer(s) offer
                    to completing the sale will depend on various factors. The
                    average process takes between 5 to 7 weeks to exchange, and
                    a further one or two weeks before completion, dependent on
                    all parties involved being agreeable to the completion date.
                    The process can also be quicker or slower, depending on any
                    parties in the chain. Leasehold matters often take longer
                    due to the additional parties involved in the transaction,
                    including landlords/ managing agents/ companies.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* As Part of Our Professional Services we will */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={"90%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <HStack
                // borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ base: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ base: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                cursor={"pointer"}
                transition={"all 0.3s ease"}
                backgroundColor={nameState ? "black" : "#f9f9f9"}
                onClick={() => setNameState(!nameState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ base: "11px", sm: "12px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={700}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  As Part of Our Professional Services we will:
                </Text>
                {!nameState ? (
                  <GoPlus color={"#bf9b30"} size={"1.6em"} fontWeight={"bold"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.6em"} fontWeight={"bold"} />
                )}
              </HStack>

              {nameState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ base: "16px", md: "30px" }}
                  mb={{ base: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ base: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Flex flexFlow={{ base: "column", md: "row" }} gap={"15px"}>
                    <List.Root
                      textAlign={"justify"}
                    fontSize={{ base: "11px", sm: "12px", md: "12px", lg: "13px", xl: "15px", "2xl": "17px" }}
                      mt={1}
                      color={"gray.800"}
                      ml={"-20px"}
                      lineHeight={1.8}
                      fontWeight={400}
                      fontFamily={"CeraRoundPro"}
                    >
                      <List.Item>Take initial instructions from you and provide you any initial advice, according to the terms of your sale</List.Item>
                      <List.Item>Acquire title documents from the Land Registry and prepare the contract pack</List.Item>
                      <List.Item>Provide you guidance if needed on the initial property information forms for the property you are selling</List.Item>
                      <List.Item>Draft your sale contract and issue to the buyer's solicitors</List.Item>
                      <List.Item>Take your instructions and respond to any enquiries raised by your Buyer's solicitors</List.Item>
                      <List.Item>Send you the final contract and arrange for you to sign in readiness for exchange of contracts</List.Item>
                      <List.Item>Agree a completion date</List.Item>
                      <List.Item>Exchange Contracts and notify you that exchange has taken place</List.Item>
                      <List.Item>Approve the Transfer Deed from the Buyer's solicitors and send to you for signature and witnessing</List.Item>
                      <List.Item>Request your Estate Agents Commission invoice for settlement upon completion</List.Item>
                      <List.Item>Complete your transaction and send you the proceeds of sale once all fees and balances due have been settled</List.Item>
                      <List.Item>Send executed transfer to the Buyer's solicitors</List.Item>
                      <List.Item>In relation to leasehold properties we will also</List.Item>
                      <List.Item>Obtain a copy of your Lease from the Land Registry/ you</List.Item>
                      <List.Item>Advise on service charge and ground rent as per the lease</List.Item>
                      <List.Item>Contact the Landlord/ Managing Agent for replies to Standard Leasehold Enquiries and raise any specific enquiries raised by the Buyer's solicitors to the Landlord or their agents</List.Item>
                      <List.Item>Advise you of any additional costs required pursuant to the Lease in respect of landlord/ managing agents/ management company involved, as appropriate</List.Item>
                    </List.Root>
                  </Flex>
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

export default PropertyPrices;