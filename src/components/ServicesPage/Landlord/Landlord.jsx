import React from "react";
import {
  Text,
  Container,
  Box,
  List,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../../Footer/Footer";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import AllPrices from "../../NavLinks/AllPrices";
import AllServiceLinks from "../../NavLinks/AllServiceLinks";

import BannerImg from "../../../assets/services/main/landlord/landlordImg.jpg";

const landlordServices = [
  {
    title: "Claims for Disrepair",
    path: "/all-services/landlord-tenant/claims-disrepair",
  },
  {
    title: "Possession Claims",
    path: "/all-services/landlord-tenant/possession-claims",
  },
  {
    title: "Recovery of Rent Arrears",
    path: "/all-services/landlord-tenant/recovery-rent",
  },
];

const LandlordServiceButton = ({ title, path }) => (
  <GridItem
    as={Link}
    to={path}
    color="black"
    border="1px solid black"
    borderRadius="8px"
    width="100%"
    height={{ xs: "100px", sm: "125px", md: "150px", lg: "175px" }}
    display="flex"
    justifyContent="center"
    alignItems="center"
    textAlign="center"
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
  >
    {title}
  </GridItem>
);

const Landlord = () => {
  return (
    <>
      <Container
        width="100vw"
        maxWidth="100%"
        minHeight="100vh"
        backgroundColor="white"
        overflow="auto"
        m={0}
        p={0}
        display="flex"
        flexDirection="column"
      >
        <Helmet>
          <title>Lumine Law Landlord and Tenant Disputes Services</title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt="50px">
          {/* Banner */}
<Box
  width="100%"
  height={{
    xs: "200px",
    lg: "250px",
    xl: "300px",
    "2xl": "350px",
  }}
  bgImage={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${BannerImg})`}
  // CHANGE 1: 'cover' hi use karein taake puri width aur height fill ho jaye
  bgSize="cover" 
  // CHANGE 2: 'center 40%' image ko thoda oopar shift karega taake ghar pura dikhe aur niche wala extra white paper kat jaye
  bgPos="center 50%" 
  bgRepeat="no-repeat"
  display="flex"
  justifyContent="center"
  alignItems="center"
>
  <Text
    fontSize={{ xs: "24px", lg: "32px", xl: "40px", "2xl": "48px" }}
    fontWeight={700}
    fontFamily="CeraRoundPro"
    width="90%"
    textAlign="left"
    color="white"
    textShadow="1px 1px 4px rgba(0,0,0,0.3)"
    // Image 2 jaisa gap dene ke liye
    pl={{ base: "0", lg: "2%" }}
  >
    Landlord and Tenant Disputes
  </Text>
</Box>

          {/* Main Content */}
          <Box width="100%" display="flex" flexFlow="column" color="black">
            <Box
              width="90%"
              alignSelf="center"
              mb="5%"
              my={{ xs: "5%", md: "2.5%" }}
            >
              <Text
                fontFamily="CeraRoundPro"
                fontSize="32px"
                fontWeight={500}
                textAlign="left"
                mb="2.5%"
              >
                Landlord and Tenant Disputes Services
              </Text>

              <Text
                fontFamily="CeraRoundPro"
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign="justify"
              >
                We can assist you in the following areas:
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
                ml={2}
                lineHeight={1.6}
                fontWeight={400}
                fontFamily={"CeraRoundPro"}
              >
                <List.Item>
                  Possession claims including the preparation, service and
                  defence of section 8 and section 21 notices
                </List.Item>
                <List.Item>Recovery of rent arrears</List.Item>
                <List.Item>Claims for disrepair</List.Item>
              </List.Root>
            </Box>

           
          </Box>

          {/* Services Buttons Grid */}
          <Box
            width="100%"
            display="flex"
            flexFlow="column"
            alignItems="center"
            color="black"
            mb={{ xs: "25px", lg: "50px" }}
          >
            <Grid
              templateColumns={{ xs: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
              width={{ xs: "87%", md: "87%", lg: "90%", xl: "90%" }}
              justifySelf="center"
              justifyItems="center"
              gap={{ xs: "10px", lg: "20px", xl: "24px" }}
            >
              {landlordServices.map((service) => (
                <LandlordServiceButton
                  key={service.title}
                  title={service.title}
                  path={service.path}
                />
              ))}
            </Grid>
          </Box>

          {/* All Service Links */}
          <AllServiceLinks />

          {/* Additional Sections */}
          <AllPrices />
          <AllNewsInsights />
          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default Landlord;