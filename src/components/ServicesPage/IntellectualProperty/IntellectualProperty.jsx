import { Suspense } from "react";
import {
  Text,
  Container,
  Box,
  VStack,
  HStack,
  List,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import AllPrices from "../../NavLinks/AllPrices";
import BannerImg from "../../../assets/services/main/intellectual/intellectual-banner.webp";
import "../../../styles/fonts.css";
import AllServiceLinks from "../../NavLinks/AllServiceLinks";

// FULL ORIGINAL DATA
const introContent = {
  mainText:
    "Intellectual property (IP) rights are designed to protect the creations of human intellect, such as inventions, literary and artistic works, symbols, names, images, and designs. These rights allow individuals or organizations to have exclusive control over their creations and prevent others from using them without permission.",
  subText: "There are several reasons why IP rights are important:",
  listItems: [
    {
      title: "Encouraging Innovation",
      content:
        "IP rights provide an incentive for creators and innovators to invest time and resources in developing new ideas and products. The ability to protect their creations from unauthorized use gives them the confidence to take risks and explore new areas of research and development.",
    },
    {
      title: "Promoting Economic Growth",
      content:
        "IP rights can stimulate economic growth by creating new products and services, generating employment opportunities, and driving technological advancement.",
    },
    {
      title: "Protecting Consumer Interests",
      content:
        "IP rights ensure access to high-quality products and prevent counterfeit goods.",
    },
    {
      title: "Encouraging Creativity and Cultural Expression",
      content:
        "IP rights help preserve and promote cultural heritage.",
    },
  ],
  conclusion:
    "We, at Lumine Solicitors help individuals and businesses protect their intellectual property rights.",
};

const IPServices = [
  { title: "Copyright", path: "/all-services/intellectual-property/copyright" },
  { title: "Patent", path: "/all-services/intellectual-property/patent" },
  { title: "Trademark", path: "/all-services/intellectual-property/trademark" },
];

// Service Button - SIRF FONT SIZE CHHOTA
const IPServiceButton = ({ title, path }) => (
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
      xs: "10px",
      sm: "12px",
      md: "13px",
      lg: "14px",
    }}
    fontWeight={500}
    fontFamily="CeraRoundPro"
    cursor="pointer"
    p="10px 5px"
  >
    {title}
  </GridItem>
);

const IntellectualProperty = () => {
  return (
    <Container
      width="100vw"
      maxWidth="100%"
      minHeight="100vh"
      backgroundColor="#99acbd"
      overflow="auto"
      m={0}
      p={0}
      display="flex"
      flexDirection="column"
    >
      <Helmet>
        <title>Lumine Law Intellectual Property Services</title>
      </Helmet>

      <Box width="100%" flex="1" pt="50px">

        {/* Banner - SIRF FONT SIZE CHHOTA */}
        <Box
          width="100%"
          height={{ xs: "310px", lg: "310px", xl: "360px" }}
          bgImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BannerImg})`}
          bgSize="cover"
          bgPos="center"
          display="flex"
          alignItems="center"
          textAlign={"left"}
        >
          <Text
            fontSize={{ xs: "32px", lg: "40px", xl: "44px" }}
            fontWeight={700}
            fontFamily="CeraRoundPro"
            width="90%"
            ml="5%"
            color="white"
          >
            Intellectual Property
          </Text>
        </Box>

        {/* Content - SIRF FONT SIZE CHHOTA */}
        <Box width="100%" display="flex" flexFlow="column" color="white">
          <Box
            width="92%"
            alignSelf="center"
            mb="5%"
            my={{ xs: "5%", md: "2.5%" }}
          >
            <Text
              fontFamily="CeraRoundPro"
              fontSize={{ xs: "17px", lg: "19px", xl: "22px", "2xl": "25px" }}
              fontWeight={450}
              textAlign="justify"
              mb="2.5%"
              lineHeight={1.1}
              mt={"-3.5"}
              color="black"
            >
              {introContent.mainText}
            </Text>

            <Text
              fontFamily="CeraRoundPro"
              fontWeight={400}
              fontSize={{ xs: "14px", lg: "14px", xl: "15px", "2xl": "17px" }}
              textAlign="justify"
              color="black"
              mt={"-2"}
            >
              {introContent.subText}
            </Text>

            <List.Root
              as="ol"
              ml={4.5}
              textAlign="justify"
              fontSize={{
                xs: "13px",
                sm: "13px",
                md: "14px",
                lg: "14px",
                xl: "15px",
                "2xl": "18px",
              }}
              color="black"
              fontWeight={400}
              fontFamily="CeraRoundPro"
            >
              {introContent.listItems.map((item, index) => (
                <List.Item key={index} _marker={{ color: "black" }}>
                  {item.title}: {item.content}
                </List.Item>
              ))}
            </List.Root>

            <Text
              fontFamily="CeraRoundPro"
              fontWeight={400}
              fontSize={{ xs: "13px", lg: "14px", xl: "15px", "2xl": "17px" }}
              textAlign="justify"
              color="black"
            >
              {introContent.conclusion}
            </Text>
          </Box>
        </Box>

        {/* Services */}
        <Box display="flex" justifyContent="center" mt={10} mb={10}>
          <Grid
            templateColumns={{ xs: "repeat(2,1fr)", lg: "repeat(3,1fr)" }}
            width={{ xs: "95%", md: "90%", lg: "85%" }}
            gap={{ xs: "10px", md: "15px", lg: "20px" }}
          >
            {IPServices.map((service) => (
              <IPServiceButton key={service.title} {...service} />
            ))}
          </Grid>
        </Box>

        {/* Services Links WHITE BG */}
        <Box bg="white" width="100%" py={8}>
          <Suspense fallback={<div>Loading Services...</div>}>
            <AllServiceLinks />
          </Suspense>
        </Box>

        {/* Prices */}
        <Box width="100%" py={8}>
          <Suspense fallback={<div>Loading Prices...</div>}>
            <AllPrices />
          </Suspense>
        </Box>

        {/* News */}
        <Box width="100%" mt={"-4%"}>
          <Suspense fallback={<div>Loading News...</div>}>
            <AllNewsInsights />
          </Suspense>
        </Box>

        <Footer />
      </Box>
    </Container>
  );
};

export default IntellectualProperty;