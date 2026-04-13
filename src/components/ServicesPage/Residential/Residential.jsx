import { Text, Container, Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Helmet } from "react-helmet";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import AllPrices from "../../NavLinks/AllPrices";
import BannerImg from "../../../assets/services/main/residential/residentialBanner.jpeg";
import ImmigrationImg from "../../../assets/services/main/immigration/main-banner.webp";
import DisputeImg from "../../../assets/services/main/dispute/main-banner.webp";
import LandlordImg from "../../../assets/services/main/landlord/main-banner.webp";
import FamilyImg from "../../../assets/services/main/family/main-banner.webp";
import CommercialImg from "../../../assets/services/main/commercial/main-banner.webp";
import IntellectualImg from "../../../assets/services/main/intellectual/main-banner.webp";
import WillsProbateImg from "../../../assets/services/main/wills-probate/main-banner.webp";
import AllServicesImg from "../../../assets/services/all/bannertest.webp";
import "../../../styles/fonts.css";
import AllServiceLinks from "../../NavLinks/AllServiceLinks";

const residentialServices = [
  {
    title: "Freehold and Leasehold Sales",
    path: "/all-services/residential/freehold-sales",
  },
  {
    title: "Freehold and Leasehold Purchases",
    path: "/all-services/residential/freehold-purchases",
  },
  {
    title: "Lease Terms Advice",
    path: "/all-services/residential/lease-terms-advice",
  },
  {
    title: "Transfers of Equity",
    path: "/all-services/residential/transfer-of-equity",
  },
];

const otherServices = [
  {
    title: "Immigration",
    path: "/all-services/immigration",
    image: ImmigrationImg,
    description: "A lil para about what this service is",
    textColor: "#ffffff",
  },
  {
    title: "Commercial Property",
    path: "/all-services/commercial",
    image: CommercialImg,
    description: "A lil para about what this service is",
    textColor: "#ffffff",
  },
  {
    title: "Intellectual Property",
    path: "/all-services/intellectual-property",
    image: IntellectualImg,
    description: "A lil para about what this service is",
    textColor: "#ffffff",
  },
  {
    title: "Dispute Resolution and Civil Litigation",
    path: "/all-services/dispute-resolution",
    image: DisputeImg,
    description: "A lil para about what this service is",
    textColor: "#ffffff",
  },
  {
    title: "Landlord & Tenant Disputes",
    path: "/all-services/landlord-tenant",
    image: LandlordImg,
    description: "A lil para about what this service is",
    textColor: "#ffffff",
  },
  {
    title: "Family & Children",
    path: "/all-services/family-and-children",
    image: FamilyImg,
    description: "A lil para about what this service is",
    textColor: "#ffffff",
  },
  {
    title: "Wills and Probate",
    path: "/all-services/wills-probate",
    image: WillsProbateImg,
    description: "A lil para about what this service is",
    textColor: "#ffffff",
  },
  {
    title: "All Services",
    path: "/all-services",
    image: AllServicesImg,
    description: "",
    textColor: "#ffffff",
  },
];

const ServiceButton = ({ service }) => (
  <GridItem
    as={Link}
    to={service.path}
    color="black"
    border="1px solid black"
    borderRadius="12px"
    width="100%"
    height={{ xs: "120px", sm: "130px", md: "140px", lg: "150px", xl: "160px", "2xl": "170px" }}
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
      xs: "11.5px",
      sm: "12.5px",
      md: "13.5px",
      lg: "14.5px",
      xl: "14.5px",
      "2xl": "15.5px",
    }}
    fontWeight={500}
    fontFamily="CeraRoundPro"
    cursor="pointer"
    p="8px 4px"
    textAlign="center"
  >
    {service.title}
  </GridItem>
);

const Residential = () => {
  return (
    <Container
      width="100vw"
      maxWidth="100%"
      minHeight="100vh"
      backgroundColor="#c4c0db"
      overflow="auto"
      m={0}
      p={0}
      display="flex"
      flexDirection="column"
    >
      <Helmet>
        <title>Lumine Law Residential Property Services</title>
      </Helmet>

      <Box width="100%" flex="1" p={0} m={0} pt="50px">

        {/* Banner */}
        <Box
          width="100%"
          height={{
            xs: "220px",
            lg: "290px",
            xl: "350px",
            "2xl": "410px",
          }}
          bgImage={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${BannerImg})`}
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          display="flex"
          justifyContent="center"
          alignItems="center"
          _loading={"eager"}
        >
          <Text
            fontSize={{ xs: "32px", lg: "40px", xl: "46px", "2xl": "54px" }}
            fontWeight={600}
            fontFamily="CeraRoundPro"
            width="90%"
            textAlign="left"
            color="white"
          >
            Residential Property
          </Text>
        </Box>

        {/* Heading + Description + Services Grid — PURPLE */}
        <Box
          width="100%"
          backgroundColor="#c4c0db"
          display="flex"
          flexFlow="column"
          color="black"
          pb={{ xs: "30px", lg: "60px" }}
        >
          <Box
            width="90%"
            alignSelf="center"
            my={{ xs: "5%", md: "2.5%" }}
          >
            <Text
              fontFamily="CeraRoundPro"
              fontSize="30px"
              fontWeight={400}
              textAlign="left"
              mb="2.5%"
            >
              Residential Property
            </Text>

            <Text
              fontFamily="CeraRoundPro"
              fontWeight={400}
              letterSpacing={0.5}
              fontSize={{ xs: "10.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
              textAlign="justify"
              lineHeight={1.4}
            >
              When it comes to legal matters concerning property we provide
              expertise that you can rely on and trust. Whether it's for
              residential property dealings or commercial property transactions.
            </Text>
          </Box>

          {/* Services Grid */}
          <Box
            width="100%"
            display="flex"
            flexFlow="column"
            alignItems="center"
          >
            <Grid
              templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
              width={{ base: "95%", md: "100%", lg: "95%", xl: "92%" }}
              justifySelf="center"
              justifyItems="center"
              gap={{ base: "12px", lg: "16px", xl: "20px" }}
            >
              {residentialServices.map((service, index) => (
                <ServiceButton key={index} service={service} />
              ))}
            </Grid>
          </Box>
        </Box>

        {/* All Service Links — WHITE */}
        <Box backgroundColor="white" pb={{ xs: "3px", lg: "10px" }} pt={{ xs: "20px", lg: "40px" }}>
          <AllServiceLinks />
        </Box>

        {/* Pricing — PURPLE with margin top for spacing */}
        <Box backgroundColor="#c4c0db" mt={{ xs: "20px", lg: "40px" }}>
          <AllPrices />
        </Box>

        {/* News Insights — PURPLE, no extra margin (Image 4 style - directly after pricing) */}
        <Box backgroundColor="#c4c0db" 
           mt={"-4%"}
        >
          <AllNewsInsights />
        </Box>

        <Footer />
      </Box>
    </Container>
  );
};

export default Residential;