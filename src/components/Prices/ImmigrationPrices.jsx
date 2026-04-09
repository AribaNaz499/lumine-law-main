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
  Image,
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
import ResidentialImg from "../../assets/pricing/debt-recovery.webp";
import BannerImg from "../../assets/pricing/immigration.jpg";
import { Helmet } from "react-helmet";
import UKWorkVisa from "./Immigration/UKWorkVisa";
import TimeFrameSection from "./Immigration/TimeFrameSection";
import DisbursementsSection from "./Immigration/DisbursementsSection";
import StudentVisa from "./Immigration/StudentVisa";
import ProofOfResidence from "./Immigration/ProofOfResidence";
import NatBrit from "./Immigration/NatBrit";
import VisitVisa from "./Immigration/VisitVisa";
import ImmiApps from "./Immigration/ImmiApps";
import AppealAdmin from "./Immigration/AppealAdmin";
import AllServiceLinks from "../NavLinks/AllServiceLinks";
import AllNewsInsights from "../NavLinks/AllNewsInsights";
import AllPrices from "../NavLinks/AllPrices";
const ImmigrationPrices = () => {
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
  const [appState, setAppState] = useState(false);
  const [adminState, setAdminState] = useState(false);
  const [judicialState, setJudicialState] = useState(false);

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
          <title>Lumine Law Immigration Prices </title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner */}
          <Box
            width={"100%"}
            height={{
              xs: "250px",
              lg: "300px",
              xl: "350px",
              "2xl": "400px",
            }}
            bgImage={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${BannerImg})`}
            bgSize={"cover"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            _loading={"eager"}
          >
            <Text
              fontSize={{ xs: "32px", lg: "42px", xl: "48px", "2xl": "56px" }}
              fontWeight={400}
              fontFamily={"CeraRoundPro"}
              width={"90%"}
              textAlign={"left"}
            >
              Immigration Prices
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
                fontWeight={600}
                color={"#bf9b30"}
                fontSize={{ xs: "11px", lg: "18px", xl: "22px", "2xl": "31px" }}
                textAlign={"left"}
                ml={{ lg: "2" }}
                mt={{ lg: "-3" }}

              >
                Our fees in relation to different categories of visas

              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
                textAlign={"left"}
                mt={{ lg: "3" }}
                ml={{ lg: "2" }}
                lineHeight={1.4}
              >
                Our exact fees will depend on the circumstances of your particular case. You will need to pay us extra legal fees in relation to any additional family members. We will determine our fees depending on the following circumstances:
              </Text>
              <List.Root
                textAlign={"justify"}
                fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}

                fontWeight={400}
                fontFamily={"CeraRoundPro"}
                ml={{ lg: "3" }}
              >
                <List.Item>
                  The type of application

                </List.Item>
                <List.Item>
                  The amount of supporting evidence that we need to consider

                </List.Item>
                <List.Item>
                  Which language(s) you speak
                </List.Item>
                <List.Item>
                  Whether you are applying with dependants
                </List.Item>
              </List.Root>
            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mb={"50px"}
          >


            {/* Disbursements (not included in the pricing set out below) */}
            <DisbursementsSection
              isOpen={disbursementsState}
              onToggle={() => setDisbursementsState(!disbursementsState)}
            />

            {/* Time frame for immigration applications: */}
            <TimeFrameSection
              isOpen={serviceState}
              onToggle={() => setServiceState(!serviceState)}
            />

            {/* UK work visas: */}
            <UKWorkVisa
              isOpen={leaseholdState}
              onToggle={() => setLeaseholdState(!leaseholdState)}
            />

            {/* Student visas/tier 4: */}
            <StudentVisa
              isOpen={houseState}
              onToggle={() => setHouseState(!houseState)}
            />

            {/* Proof of residence for EU citizens */}
            <ProofOfResidence
              isOpen={feeState}
              onToggle={() => setFeeState(!feeState)}
            />

            {/* Long residence applications: */}
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
                _hover={{ backgroundColor: !residentialState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={residentialState && "black"}
                onClick={() => setResidentialState(!residentialState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{
                    xs: "11px",
                    sm: "11px",
                    md: "13px",
                    lg: "13px",
                    xl: "15px",
                    "2xl": "17px",
                  }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Long Residence Applications:
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
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="7px"
                      px="10px"
                      backgroundColor="#d9edf7"
                      borderY="1px solid #bfbfbf"
                      fontSize={{ xs: "11px", lg: "13px" }}
                      fontWeight="600"
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        ILR – 10 Years Long Residence (Same Day Visa Service)
                      </GridItem>
                      <GridItem justifySelf="start" textAlign="left">
                        £800 - £1,500
                      </GridItem>
                    </Grid>

                    {/* 2 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="7px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#ffffff"}
                      fontSize={{ xs: "11px", lg: "13px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#f3f3f3",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Extension Of Stay – 10 Years Long Residence
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £800 - £1,500
                      </GridItem>
                    </Grid>
                  </Box>
                </VStack>
              )}
            </Box>

            {/* Naturalisation and British citizenship: */}
            <NatBrit
              isOpen={likelyState}
              onToggle={() => setLikelyState(!likelyState)}
            />

            {/* Passport and travel document applications: */}
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
                _hover={{ backgroundColor: !additionalState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={additionalState && "black"}
                onClick={() => setAdditionalState(!additionalState)}
              >
                <Text
                  textAlign={"left"}
                   fontSize={{
                    xs: "11px",
                    sm: "11px",
                    md: "13px",
                    lg: "13px",
                    xl: "15px",
                    "2xl": "17px",
                  }}
                  fontWeight={600}
                  
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Passport and Travel Document Applications:
                </Text>
                {!additionalState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {additionalState && (
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
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="7px"
                      px="10px"
                      backgroundColor="#d9edf7"
                      borderY="1px solid #bfbfbf"
                      fontSize={{ xs: "11px", lg: "13px" }}
                      fontWeight="600"
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Application For British Passport
                      </GridItem>
                      <GridItem justifySelf="start" textAlign="left">
                        £700
                      </GridItem>
                    </Grid>

                    {/* 2 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="7px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#ffffff"}
                      fontSize={{ xs: "11px", lg: "13px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#f3f3f3",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Refugee Travel Document
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £700
                      </GridItem>
                    </Grid>

                    {/* 3 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="7px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#f3f3f3"}
                      fontSize={{ xs: "11px", lg: "13px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#ebe8e8",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Stateless Person Travel Document
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £700
                      </GridItem>
                    </Grid>

                    {/* 4 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="7px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#ffffff"}
                      fontSize={{ xs: "11px", lg: "13px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#f3f3f3",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Certificate Of Travel
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £700
                      </GridItem>
                    </Grid>

                    {/* 5 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="7px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#f3f3f3"}
                      fontSize={{ xs: "11px", lg: "13px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#ebe8e8",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        One Way Travel Document
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £700
                      </GridItem>
                    </Grid>
                  </Box>
                </VStack>
              )}
            </Box>

            {/* Visitor visa: */}
            <VisitVisa
              isOpen={timescaleState}
              onToggle={() => setTimescaleState(!timescaleState)}
            />

            {/* Turkish Citizens: */}
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
                _hover={{ backgroundColor: !nameState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={nameState && "black"}
                onClick={() => setNameState(!nameState)}
              >
                <Text
                  textAlign={"left"}
                    fontSize={{
                    xs: "11px",
                    sm: "11px",
                    md: "13px",
                    lg: "13px",
                    xl: "15px",
                    "2xl": "17px",
                  }}
                  fontWeight={600}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Turkish Citizens:
                </Text>
                {!nameState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {nameState && (
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
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="7px"
                      px="10px"
                      backgroundColor="#d9edf7"
                      borderY="1px solid #bfbfbf"
                      fontSize={{ xs: "11px", lg: "13px" }}
                      fontWeight="600"
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Entry Clearance (Visa) As A Turkish ECAA Businessperson
                      </GridItem>
                      <GridItem justifySelf="start" textAlign="left">
                        £1,500 - £2,500
                      </GridItem>
                    </Grid>

                    {/* 2 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="7px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#ffffff"}
                      fontSize={{ xs: "11px", lg: "13px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#f3f3f3",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Switching Into Turkish ECAA Businessperson Category
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £1,500 - £2,500
                      </GridItem>
                    </Grid>

                    {/* 3 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="7px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#f3f3f3"}
                      fontSize={{ xs: "11px", lg: "13px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#ebe8e8",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Extension Of Stay As A Turkish ECAA Businessperson
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £1,500 - £2,500
                      </GridItem>
                    </Grid>

                    {/* 4 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="7px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#ffffff"}
                      fontSize={{ xs: "11px", lg: "13px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#f3f3f3",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        ILR As Turkish ECAA Businessperson
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £1,500 - £2,500
                      </GridItem>
                    </Grid>

                    {/* 5 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="7px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#f3f3f3"}
                      fontSize={{ xs: "11px", lg: "13px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#ebe8e8",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Dependents of Turkish ECAA Businesspersons
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £1,500 - £2,500
                      </GridItem>
                    </Grid>

                    {/* 6 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="7px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#ffffff"}
                      fontSize={{ xs: "11px", lg: "13px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#f3f3f3",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Turkish ECAA Workers
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £1,500 - £2,500
                      </GridItem>
                    </Grid>

                    {/* 7 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="7px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#f3f3f3"}
                      fontSize={{ xs: "11px", lg: "13px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#ebe8e8",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Dependents of Turkish ECAA Worker
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £800
                      </GridItem>
                    </Grid>
                  </Box>
                </VStack>
              )}
            </Box>

            {/* Immigrations Apps */}
            <ImmiApps
              isOpen={appState}
              onToggle={() => setAppState(!appState)}
            />

            {/* Immigration appeal and admin review: */}
            <AppealAdmin
              isOpen={adminState}
              onToggle={() => setAdminState(!adminState)}
            />

            {/* Judicial review in the upper tribunal: */}
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
                _hover={{ backgroundColor: !judicialState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={judicialState && "black"}
                onClick={() => setJudicialState(!judicialState)}
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
                  Judicial Review in the Upper Tribunal:
                </Text>
                {!judicialState ? (
                  <GoPlus color={"#bf9b30"} size={"1.8em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.8em"} />
                )}
              </HStack>

              {judicialState && (
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
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      backgroundColor="#d9edf7"
                      borderY="1px solid #bfbfbf"
                      fontSize={{ xs: "14px", lg: "16px" }}
                      fontWeight="600"
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Pre Action Protocol For Judicial Review Against The Home
                        Office, UKBA
                      </GridItem>
                      <GridItem justifySelf="start" textAlign="left">
                        £700 - £1,500
                      </GridItem>
                    </Grid>

                    {/* 2 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#ffffff"}
                      fontSize={{ xs: "12px", lg: "14px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#f3f3f3",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Paper Application To Upper Tribunal For Permission To
                        Apply For Judicial Review (JR)
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £1,500 - £3,000
                      </GridItem>
                    </Grid>

                    {/* 3 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#f3f3f3"}
                      fontSize={{ xs: "12px", lg: "14px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#ebe8e8",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Renewal Of An Application For Permission To Apply For
                        Judicial Review (JR) Against The Home Office, UKBA
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £1,500
                      </GridItem>
                    </Grid>

                    {/* 4 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#ffffff"}
                      fontSize={{ xs: "12px", lg: "14px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#f3f3f3",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Judicial Review Against The Home Office, UKVI Following
                        Grant Of Permission To Apply For Judicial Review (JR)
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £3,000 - £4,500
                      </GridItem>
                    </Grid>

                    {/* 5 */}
                    <Grid
                      width="100%"
                      templateColumns="3fr 1fr"
                      py="20px"
                      px="10px"
                      // borderBottom="1px solid #bfbfbf"
                      backgroundColor={"#f3f3f3"}
                      fontSize={{ xs: "12px", lg: "14px" }}
                      fontWeight="500"
                      _hover={{
                        backgroundColor: "#ebe8e8",
                      }}
                    >
                      <GridItem justifySelf="start" textAlign="left">
                        Emergency Injunction To Stop Removal From The UK
                      </GridItem>
                      <GridItem
                        justifySelf={{ xs: "center", md: "start" }}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        £2,000 - £3,000
                      </GridItem>
                    </Grid>
                  </Box>
                </VStack>
              )}
            </Box>
          </VStack>

          {/* All Prices */}
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

export default ImmigrationPrices;
