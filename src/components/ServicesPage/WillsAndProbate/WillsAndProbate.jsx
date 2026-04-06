import React, { Suspense } from "react";
import { Text, Container, Box, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import AllPrices from "../../NavLinks/AllPrices";
import AllServiceLinks from "../../NavLinks/AllServiceLinks"; // Sirf isko link kiya hai

// Assets
import BannerImg from "../../../assets/services/main/wills-probate/willProbateImg.jpeg";

const willsServices = [
  { title: "Estate Planning", path: "/all-services/wills-probate/estate-planning" },
  { title: "Inheritance Tax Planning", path: "/all-services/wills-probate/inheritance-tax-planning" },
  { title: "Power of Attorney", path: "/all-services/wills-probate/power-attorney" },
  { title: "Private Wealth Management", path: "/all-services/wills-probate/private-wealth-management" },
  { title: "Probate", path: "/all-services/wills-probate/probate" },
  { title: "Succession Planning", path: "/all-services/wills-probate/succession-planning" },
  { title: "Trusts", path: "/all-services/wills-probate/trusts" },
  { title: "Wills", path: "/all-services/wills-probate/wills" },
];

// Aapka original button UI (No changes)
const WillsServiceButton = ({ title, path }) => (
  <GridItem
    as={Link}
    to={path}
    color="black"
    border="1px solid black"
    borderRadius="10px"
    width="100%"
    height={{ base: "110px", md: "160px" }}
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
    fontSize={{ base: "14px", md: "16px" }}
    fontWeight={500}
    fontFamily="CeraRoundPro"
    p="8px 3px"
    textAlign="center"
  >
    {title}
  </GridItem>
);

const WillsAndProbate = () => {
  return (
    <>
      <Container width="100vw" maxWidth="100%" minHeight="100vh" backgroundColor="white" m={0} p={0} display="flex" flexDirection="column">
        <Helmet>
          <title>Lumine Law Wills and Probate Services</title>
        </Helmet>

        <Navbar />

        <Box width="100%" flex="1" pt="50px">
          {/* Banner - Same UI */}
          <Box width="100%" height={{ base: "200px", lg: "300px" }} bgImage={`url(${BannerImg})`} bgSize="cover" bgPos="center" display="flex" justifyContent="center" alignItems="center">
            <Text fontSize={{ base: "24px", lg: "45px" }} fontWeight={600} fontFamily="CeraRoundPro" textAlign={"left"} width="90%" color="white">
              Wills and Probate
            </Text>
          </Box>

          {/* Main Content - Same UI */}
          <Box width="90%" color={"black"} mx="auto" mt="2%" >
            <Text fontFamily="CeraRoundPro" fontSize="38px" fontWeight={400} mb="20px" textAlign={"left"}>Wills and Probate</Text>
            <Text fontFamily="CeraRoundPro" fontSize={{ base: "14px", lg: "16px" }} textAlign="justify" mb="30px" mt={{ lg: "-3" }}>
              With regards to road traffic accidents, we can act for you in relation to whiplash and serious injury claims including passenger injury compensation. We can provide you with advice to help you secure the maximum possible compensation.
            </Text>

            <Text fontFamily="CeraRoundPro" fontSize={{ base: "14px", lg: "16px" }} textAlign="justify" mb="12px" mt={{ lg: "-3" }}>
              You should seek medical attention immediately following a road traffic accident. A personal injury solicitor should also be contacted without delay.
            </Text>
            <Text fontFamily="CeraRoundPro" fontSize={{ base: "14px", lg: "16px" }} textAlign="justify" mb="40px" mt={{ lg: "-3" }}>
              In most instances the time limit for issuing a claim is 3 years from the date of the accident. These time limits however may not be applicable in certain cases involving children and individuals lacking capacity.
            </Text>


            {/* Specific Wills Grid - Same UI */}
            <Grid templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} mt={{lg:"20"}} gap="20px" mb="100px">
              {willsServices.map((service) => (
                <WillsServiceButton key={service.title} title={service.title} path={service.path} />
              ))}
            </Grid>
          </Box>

          {/* Ab yahan AllServiceLinks call ho raha hai (No manual UI code here) */}
          <Box width="100%" mb="50px">
            <Suspense fallback={<div>Loading...</div>}>
              <AllServiceLinks />
            </Suspense>
          </Box>

          <AllPrices />
          <AllNewsInsights />
          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default WillsAndProbate;