import React from "react";
import {
  Text,
  Container,
  Box,
  Grid,
  GridItem,
  Heading,
  List,
  ListItem
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import AllPrices from "../../NavLinks/AllPrices";
import AllServiceLinks from "../../NavLinks/AllServiceLinks";

// Import banner image
import BannerImg from "../../../assets/services/main/family/family-banner.webp";

// Family services data
const familyServices = [
  {
    title: "Adoption and Surrogacy",
    path: "/all-services/family-and-children/adoption-surrogacy",
  },
  {
    title: "Child Arrangements",
    path: "/all-services/family-and-children/child-arrangements",
  },
  {
    title: "Consent Orders",
    path: "/all-services/family-and-children/consent-orders",
  },
  {
    title: "Divorce",
    path: "/all-services/family-and-children/divorce",
  },
  {
    title: "Domestic Violence",
    path: "/all-services/family-and-children/domestic-violence",
  },
  {
    title: "Financial Settlements",
    path: "/all-services/family-and-children/financial-settlements",
  },
  {
    title: "Parental Responsibility",
    path: "/all-services/family-and-children/parental-responsbility",
  },
  {
    title: "Pre Nuptial Agreements",
    path: "/all-services/family-and-children/nuptial-agreement",
  },
];

// Reusable Family Service Button Component
const FamilyServiceButton = ({ title, path }) => (
  <GridItem
    as={Link}
    to={path}
    color="black"
    border="1px solid black"
    borderRadius="12px"
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
    {title}
  </GridItem>
);

const Family = () => {
  return (
    <>
      <Container
        width="100vw"
        maxWidth="100%"
        minHeight="100vh"
        backgroundColor="#fccab3"
        overflow="auto"
        m={0}
        p={0}
        display="flex"
        flexDirection="column"
      >
        <Helmet>
          <title>Lumine Law Family and Children Services</title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt="50px">
          {/* Banner */}
          <Box
            width="100%"
            height={{
              xs: "250px",
              lg: "300px",
              xl: "350px",
              "2xl": "400px",
            }}
            bgImage={`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${BannerImg})`}
            bgSize="120%"   // 👈 zoom effect
            bgPos="center"
            bgRepeat="no-repeat"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Text
              fontSize={{ xs: "34px", lg: "44px", xl: "48px", "2xl": "58px" }}
              fontWeight={700}
              fontFamily="CeraRoundPro"
              ml="2.5%"
            >
              Family and Children
            </Text>
          </Box>

          {/* Main Content */}
          <Box width="100%" display="flex" flexFlow="column" color="black">
            <Box
              width="95%"
              alignSelf="center"
              mt={{ xs: "10%", sm: "10%", md: "7.5%", xl: "5%" }}
              mb={{ xs: "10%", sm: "10%", md: "7.5%", xl: "5%" }}
            >
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "16px", sm: "20px", md: "24px", lg: "30px", xl: "32px", "2xl": "36px" }}
                color={"black"}
                textAlign={"left"}
                letterSpacing={0.1}
                mb={3}
                mt={{ lg: "-9" }}
              >
                Family and Children
              </Heading>
              <Text
                fontFamily="CeraRoundPro"
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign="justify"
                mt={{lg:"5"}}
              >
                Legal issues concerning children and family can often be stressful, and at times upsetting. We offer the following legal advice with compassion and understanding:
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
                fontWeight={400}
                fontFamily={"CeraRoundPro"}
                ml={{ lg: "5" }}
                mt={{ lg: "3", xs: "-4" }}
                lineHeight={1.8}
              >
                <List.Item>
                  Divorce
                </List.Item>
                <List.Item>
                  Pre-Nuptial Agreements
                </List.Item>
                <List.Item>
                  Child Arrangements
                </List.Item>
                <List.Item>
                  Parental Responsibility
                </List.Item>
                <List.Item>
                  Consent Orders
                </List.Item>
                <List.Item>
                  Financial Settlements
                </List.Item>
                <List.Item>
                  Domestic Violence
                </List.Item>
                <List.Item>
                  Adoption and Surrogacy
                </List.Item>
              </List.Root>

              <Text
                fontFamily="CeraRoundPro"
                fontWeight={400}
                fontSize={{ xs: "12px", lg: "14px", xl: "16px", "2xl": "18px" }}
                textAlign="justify"
                ml={{lg:"2"}}
                mr={{lg:"4"}}
                mt={{lg:4}}
              >
                We do understand that each family has a unique set of circumstances and financial budgeting arrangements. We offer specialised tailor made services and we offer fixed competitive and transparent fee packages so that cost certainty is always maintained.
              </Text>
            </Box>
          </Box>

          {/* Family Services Grid */}
          <Box
            width="100%"
            display="flex"
            flexFlow="column"
            alignItems="center"
            color="black"
          >
            <Grid
              templateColumns={{ xs: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
              width={{ xs: "110%", md: "100%", lg: "95%", xl: "90%" }}
              justifySelf="center"
              justifyItems="center"
              gap={{ xs: "3px", lg: "8px", xl: "23px" }}
              gapY={0}
              mb="20px"
            >
              {familyServices.map((service) => (
                <FamilyServiceButton
                  key={service.title}
                  title={service.title}
                  path={service.path}
                />
              ))}
            </Grid>
          </Box>

          {/* All Service Links - white background */}
          <Box bg="white" width="100%" py={8}>
            <AllServiceLinks />
          </Box>

          <AllPrices />
          <AllNewsInsights />
          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default Family;