import React, { Suspense } from "react";
import { Text, Container, Box, HStack } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";
import AllServiceLinks from "../NavLinks/AllServiceLinks";

const AllPrices = React.lazy(() => import("../NavLinks/AllPrices"));
const AllNewsInsights = React.lazy(() => import("../NavLinks/AllNewsInsights"));

// Banner Image
import BannerImg from "../../assets/services/all/bannertest.webp";
import "../../styles/fonts.css";

// Banner Component
const Banner = () => (
  <Box
    width="100%"
    height={{
      xs: "250px",
      lg: "300px",
      xl: "350px",
      "2xl": "400px",
    }}
    bgImage={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${BannerImg})`}
    bgSize="cover"
    bgPos="center"
    bgRepeat="no-repeat"
    display="flex"
    justifyContent="space-around"
    alignItems="center"
  >
    <Text
      fontSize={{ xs: "32px", lg: "42px", xl: "48px", "2xl": "58px" }}
      fontWeight={700}
      ml={{ lg: 4 }}
      fontFamily="CeraRoundPro"
      color="white"
    >
      Services
    </Text>
    <Box width={{ xs: "60%", md: "65%", lg: "75%" }} />
  </Box>
);

// Main Content Section
const MainContent = () => (
  <Box width="100%" display="flex" flexFlow="column" color="black">
    <HStack
      justifyContent="space-around"
      alignItems="center"
      my={{ xs: "5%", lg: "2%", xl: "2.5%", "2xl": "1%" }}
    >
      <Text
        fontFamily="CeraRoundPro"
        fontSize={{ xs: "21px", lg: "28px", xl: "34px", "2xl": "38px" }}
        fontWeight={400}
        mb={{lg:"-3"}}
      >
        Our Legal Services
      </Text>
      <Box
        width={{
          xs: "55%",
          md: "60%",
          lg: "62.5%",
          xl: "65%",
          "2xl": "70%",
        }}
      />
    </HStack>

    <Box
      width={{ xs: "95%", lg: "92.5%", xl: "95%" }}
      alignSelf="center"
      mb={{ xs: "5%", lg: "2.5%", xl: "5%", "2xl": "2.5%" }}
    >
      <Text
        fontFamily="CeraRoundPro"
        fontWeight={400}
        fontSize={{ xs: "12px", lg: "13px", xl: "15px", "2xl": "17px" }}
        textAlign="justify"
        lineHeight={1.5}
      >
        At Lumine Solicitors, we provide a wide range of professional legal
        services for individuals, families and businesses across the UK. Built
        on principles of trust, experience and clear communication, our highly
        qualified solicitors deliver tailored advice and effective solutions.
        From immigration and property matters to dispute resolution, family law,
        wills and criminal defence, we are committed to supporting clients
        through complex legal challenges with confidence.
      </Text>

      <Text
        fontFamily="CeraRoundPro"
        fontWeight={400}
        fontSize={{ xs: "12px", lg: "13px", xl: "15px", "2xl": "17px" }}
        textAlign="justify"
        mt={{ lg: "4" }}
        lineHeight={1.5}
      >
        Our expertise covers immigration and visa applications, property and
        conveyancing for both residential and commercial needs, intellectual
        property protection and litigation. We also assist with landlord and
        tenant disputes, family and children matters and succession planning.
        Whether it is securing visas, buying or selling property, protecting
        creative assets, resolving disputes, or safeguarding family interests,
        we aim to provide practical, reliable and cost-effective guidance.
      </Text>

      <Text
        fontFamily="CeraRoundPro"
        fontWeight={400}
        fontSize={{ xs: "11px", lg: "13px", xl: "15px", "2xl": "17px" }}
        textAlign="justify"
        mt={{ lg: "4" }}
        lineHeight={1.5}
      >
        Choosing Lumine Solicitors means working with a team that upholds
        integrity, transparency and client care. With clear fee plans,
        nationwide availability through face-to-face or online consultations and
        regulation by the SRA, we deliver trustworthy legal services with
        professionalism at every stage. Our goal is to give you peace of mind,
        knowing your legal matters are in safe hands.
      </Text>
    </Box>
  </Box>
);

// Main Component
const AllServices = () => {
  return (
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
        <title>Lumine Law Services</title>
      </Helmet>

      <Box width="100%" flex="1" p={0} m={0} pt="50px">
        <Banner />
        <MainContent />

        {/* ✅ Services Links (No extra bg/padding) */}
        <AllServiceLinks />

        <Suspense fallback={<div>Loading All Prices ...</div>}>
          <AllPrices />
        </Suspense>

        <Suspense fallback={<div>Loading All News and Insights ...</div>}>
          <AllNewsInsights />
        </Suspense>

        <Footer />
      </Box>
    </Container>
  );
};

export default AllServices;