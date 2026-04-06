import { useState } from "react";
import { Text, Container, Box, VStack, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import AllPrices from "../../NavLinks/AllPrices";
import AllServiceLinks from "../../NavLinks/AllServiceLinks";
import BannerImg from "../../../assets/services/main/dispute/bannerimg.jpeg";
import "../../../styles/fonts.css";

const disputeServices = [
  {
    title: "Building Contracts",
    path: "/all-services/dispute-resolution/building-contracts",
  },
  {
    title: "Building Contract Disputes",
    path: "/all-services/dispute-resolution/building-contract-disputes", // ✅ FIX
  },
  {
    title: "Contract Disputes",
    path: "/all-services/dispute-resolution/contract-disputes",
  },
  {
    title: "Contracts for the Supply of Goods and Services",
    path: "/all-services/dispute-resolution/supply-goods-services",
  },
  {
    title: "Corporate and Personal Bankruptcy Matters",
    path: "/all-services/dispute-resolution/bankruptcy-matters", // ✅ FIX
  },
  {
    title: "Debt Matters",
    path: "/all-services/dispute-resolution/debt-matters",
  },
  {
    title: "Debt Recovery",
    path: "/all-services/dispute-resolution/debt-recovery", // ✅ FIX
  },
];

const ServiceButton = ({ service }) => (
  <GridItem
    as={Link}
    to={service.path}
    color="black"
    border="1px solid black"
    borderRadius="8px"
    width="100%"
    height={{ xs: "100px", sm: "125px", md: "150px", lg: "175px" }}
    display="flex"
    justifyContent="center"
    alignItems="center"
    backgroundColor="white"
    _hover={{
      backgroundColor: "#000000",
      color: "white",
      transition: "0.3s ease all",
      fontWeight: "600",
      textDecor: "underline",
    }}
    fontSize={{
      xs: "12px",
      sm: "14px",
      md: "15px",
      lg: "16px",
      xl: "16px",
      "2xl": "16px",
    }}
    fontWeight={500}
    fontFamily="CeraRoundPro"
    cursor="pointer"
    p="10px 5px"
    textAlign="center"
  >
    {service.title}
  </GridItem>
);

const DisputeServicesGrid = () => (
  <Box
    width="100%"
    display="flex"
    flexFlow="column"
    alignItems="center"
    color="black"
    mb={{ xs: "25px", lg: "50px" }}
  >
    <Grid
      templateColumns={{ xs: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
      width={{ xs: "90%", md: "90%", lg: "95%", xl: "95%" }}
      justifySelf="center"
      justifyItems="center"
      gap={{ xs: "15px", lg: "20px", xl: "20px" }}
    >
      {disputeServices.map((service, index) => (
        <ServiceButton key={index} service={service} />
      ))}
    </Grid>
  </Box>
);

const Dispute = () => {
  return (
    <Container
      width="100vw"
      maxWidth="100%"
      minHeight="100vh"
      backgroundColor="#93d4eb"
      overflow="auto"
      m={0}
      p={0}
      display="flex"
      flexDirection="column"
    >
      <Helmet>
        <title>
          Lumine Law Dispute Resolution and Civil Litigation Services
        </title>
      </Helmet>

      <Box width="100%" flex="1" p={0} m={0} pt="50px">
        {/* Banner */}
        <Box
          width="100%"
          height={{
            xs: "230px",
            lg: "280px",
            xl: "330px",
            "2xl": "380px",
          }}
          bgImage={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${BannerImg})`}
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          display="flex"
          justifyContent="center"
          alignItems="center"
          _loading={"eager"}
        >
          <Text
            fontSize={{ xs: "32px", lg: "42px", xl: "48px", "2xl": "57px" }}
            fontWeight={700}
            fontFamily="CeraRoundPro"
            width="90%"
            textAlign="left"
          >
            Dispute Resolution and Civil Litigation Services
          </Text>
        </Box>

        {/* Main Content */}
        <Box width="100%" display="flex" flexFlow="column" color="white">
          <Box
            width="90%"
            alignSelf="center"
            mb="5%"
            my={{ xs: "5%", md: "2.5%" }}
          >
            <Text
              fontFamily="CeraRoundPro"
              fontSize="31px"
              fontWeight={400}
              textAlign="justify"
              mb="2.5%"
              color="black"
            >
              Dispute Resolution and Civil Litigation Services
            </Text>

            <Text
              fontFamily="CeraRoundPro"
              fontWeight={400}
              fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
              textAlign="justify"
              color="black"
            >
              Dispute resolution solicitors in London offer a range of services
              to settle disputes between individuals and also for businesses.
            </Text>
          </Box>
        </Box>

        {/* Dispute Services Grid */}
        <DisputeServicesGrid />

        {/* ✅ AllServiceLinks — white bg */}
        <Box bg="white" width="100%" py={8}>
          <AllServiceLinks />
        </Box>

        <AllPrices />
        <AllNewsInsights />
        <Footer />
      </Box>
    </Container>
  );
};

export default Dispute;