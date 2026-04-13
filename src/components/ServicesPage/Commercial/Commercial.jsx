import React, { Suspense } from "react";
import {
  Text,
  Container,
  Box,
  HStack,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import AllPrices from "../../NavLinks/AllPrices";
import AllServiceLinks from "../../NavLinks/AllServiceLinks";

import "../../../styles/fonts.css";
import BannerImg from "../../../assets/services/main/commercial/commercial-banner.webp";

// Commercial services data
const commercialServices = [
  { title: "Advice on Commercial Lease Terms, Survey Reports, and Repairing Obligations", path: "/all-services/commercial/advice-multiple" },
  { title: "Break Clauses and Rent Reviews", path: "/all-services/commercial/break-rent" },
  { title: "Commercial Property Dilapidations", path: "/all-services/commercial/property-dilapidations" },
  { title: "Consents for Alterations", path: "/all-services/commercial/consent-alterations" },
  { title: "Forfeiture and Notices", path: "/all-services/commercial/forfeiture-notices" },
  { title: "Lease Renewals", path: "/all-services/commercial/lease-renewals" },
  { title: "Purchase of Business and Licenses to Assign", path: "/all-services/commercial/business-licenses" },
  { title: "Purchase of Commercial Property", path: "/all-services/commercial/purchase-commercial" },
  { title: "Rent Recovery", path: "/all-services/commercial/rent-recovery" },
  { title: "Sales of Commercial Property", path: "/all-services/commercial/sales-commercial" },
  { title: "Schedules of Conditions", path: "/all-services/commercial/schedules-conditions" },
];

// Service Button
const ServiceButton = ({ service }) => (
  <GridItem
    as={Link}
    to={service.path}
    color="black"
    border="1px solid black"
    borderRadius="8px"
    width="100%"
    height={{ base: "90px", xs: "100px", sm: "125px", md: "150px", lg: "175px" }}
    display="flex"
    justifyContent="center"
    alignItems="center"
    backgroundColor="white"
    _hover={{ backgroundColor: "#000000", color: "white", transition: "0.3s ease all", fontWeight: "600" }}
    fontSize={{ base: "10px", xs: "11px", sm: "11px", md: "14px", lg: "15px" }}
    fontWeight={500}
    fontFamily="CeraRoundPro"
    cursor="pointer"
    p="10px 5px"
    textAlign="center"
  >
    {service.title}
  </GridItem>
);

// Banner
const Banner = () => (
  <Box
    width="100%"
    height={{ base: "220px", xs: "260px", lg: "310px", xl: "360px", "2xl": "410px" }}
    position="relative"
    overflow="hidden"
  >
    <Box
      position="absolute" top="0" left="0" right="0" bottom="0"
      bgImage={`url(${BannerImg})`}
      bgSize="cover" bgPos="center" bgRepeat="no-repeat"
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.05)" }}
    />
    <Box
      position="absolute" top="0" left="0" right="0" bottom="0"
      bg="rgba(0, 0, 0, 0.3)" zIndex={1}
    />
    <Box
      position="relative" zIndex={2}
      display="flex" justifyContent="flex-start" alignItems="center"
      width="100%" height="100%"
    >
      <Text
        fontSize={{ base: "23px", xs: "31px", sm: "35px", md: "39px", lg: "43px", xl: "45px" }}
        fontWeight={650}
        fontFamily="CeraRoundPro"
        ml={{ base: "5%", md: "5%" }}
        color="white"
        textShadow="2px 2px 4px rgba(0,0,0,0.6)"
      >
        Commercial Property
      </Text>
    </Box>
  </Box>
);

// Main Content - SIRF TEXT COLOR BLACK KIYA
const MainContent = () => (
  <Box width="100%" display="flex" flexFlow="column" color="black" px={{ base: "5%", md: "0" }}>
    <HStack justifyContent="flex-start" alignItems="center" mt="2%" mb="1%" ml={{ base: "0", md: "5%" }}>
      <Text fontFamily="CeraRoundPro" fontSize={{ base: "22px", md: "30px" }} mb={"1.5%"} mt={"1.5%"} fontWeight={400} color="black">
        Commercial Property
      </Text>
    </HStack>
    <Box width={{ base: "100%", md: "95%" }} color={"black"} alignSelf="center" mb={{ base: "10%", xs: "15%", sm: "10%", md: "7.5%", xl: "5%" }}>
      <Text
        fontFamily="CeraRoundPro"
        fontWeight={400}
        ml={{ base: 0, md: 9 }}
        fontSize={{ base: "13px", md: "15px" }}
        textAlign="justify"
        color="black"
      >
        When it comes to legal matters concerning property, we provide expertise that you can rely on and trust. Whether it&apos;s for residential property dealings or commercial property transactions.
      </Text>

      {/* Bullet list */}
      <Box ml={{ base: 2, md: 9 }} mt="5px" mb="12px" color={"black"}>
        {[
          "Freehold and leasehold sales",
          "Freehold and leasehold purchases",
          "Transfers of equity",
          "Advice on lease terms",
        ].map((item, i) => (
          <HStack key={i} align="center" mb="5px">
            <Box w="5px" h="5px" bg="black" borderRadius="50%" mt={"-2"} flexShrink={0} />
            <Text fontFamily="CeraRoundPro" fontSize={{ base: "13px", md: "15px" }} color="black" fontWeight={400}>
              {item}
            </Text>
          </HStack>
        ))}
      </Box>

      <Text
        fontFamily="CeraRoundPro"
        fontWeight={400}
        ml={{ base: 0, md: 9 }}
        fontSize={{ base: "13px", md: "15px" }}
        textAlign="justify"
        color="black"
        mt={"-2"}
      >
        We appreciate that moving home can be a stressful experience and we aim to reduce this as much as practically possible. We assist our clients in dealing with the formalities and technicalities of a house purchase or sale to enable matters to be concluded smoothly and quickly.
      </Text>
    </Box>
  </Box>
);

// Services Grid
const CommercialServicesGrid = () => (
  <Box width="100%" display="flex" flexFlow="column" alignItems="center" color="black" mb={{ base: "20px", xs: "25px", lg: "50px" }}>
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", xs: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
      width={{ base: "90%", xs: "80%", md: "85%", lg: "85%", xl: "90%" }}
      justifySelf="center"
      justifyItems="center"
      gap={{ base: "8px", lg: "12px", xl: "17px" }}
    >
      {commercialServices.map((service, index) => (
        <ServiceButton key={index} service={service} />
      ))}
    </Grid>
  </Box>
);

// Main Component
const Commercial = () => {
  return (
    <Container
      width="100vw"
      maxWidth="100%"
      minHeight="100vh"
      backgroundColor="#cecece"
      overflowX="hidden"
      m={0}
      p={0}
      display="flex"
      flexDirection="column"
    >
      <Helmet>
        <title>Lumine Law Commercial Property Services</title>
      </Helmet>

      <Box width="100%" flex="1" p={0} m={0} pt={{ base: "20px", md: "50px" }}>

        {/* Banner */}
        <Banner />

        {/* Main Text Content */}
        <MainContent />

        {/* Services Grid */}
        <CommercialServicesGrid />

        {/* All Service Links — white bg */}
        <Box bg="white" width="100%" py={8}>
          <Suspense fallback={<div>Loading All Services...</div>}>
            <AllServiceLinks />
          </Suspense>
        </Box>

        {/* Pricing — grey bg */}
        <Box width="100%" py={8}>
          <Suspense fallback={<div>Loading Prices...</div>}>
            <AllPrices />
          </Suspense>
        </Box>

        {/* News and Insights */}
        <Box width="100%" mt={"-4%"}>
          <Suspense fallback={<div>Loading News...</div>}>
            <AllNewsInsights />
          </Suspense>
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </Container>
  );
};

export default Commercial;