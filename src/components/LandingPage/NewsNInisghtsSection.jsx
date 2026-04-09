import {
  Box,
  Text,
  Flex,
  Button,
  VStack,
} from "@chakra-ui/react";
import NewsInsightsBg from "../../assets/landing/news.jpg";
import "../../styles/fonts.css";
import { Link } from "react-router-dom";

const NewsNInsightsSection = () => {
  return (
    <Box
      as="section"
      width="100%"
      height="80%"
      minheight={{ base: "auto", md: "80vh", lg: "100vh" }}
      bgImage={`url(${NewsInsightsBg})`}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack
  width="100%"
  height="100vh"
  display="flex"
  alignItems="center" 
  justifyContent="center" 
  spacing={{ base: 10, md: 16 }} 
  px="5%"
>
  {/* Description Text - Image 1 Look */}
  <Box 
    maxWidth={{ base: "80%", md: "700px", lg: "800px" }}
    width="100%"
  >
    <Text
      color="black"
      fontSize={{ base: "14px", md: "17px", lg: "18px" }}
      fontWeight="500"
      fontFamily="HelveticaNeue-Light, Helvetica Neue, Arial, sans-serif"
      lineHeight={{ base: "1.7", md: "1.8" }} // Line spacing badha di image 1 ki tarah
      textAlign="justify" // SABSE ZAROORI: Ye dono sides se barabar rakhega
      style={{ textJustify: "inter-word" }} // Chrome/Safari ke liye support
    >
      We provide all our clients with premium and bespoke legal services and support. Our
      aim is to simplify the process of accessing quality legal support, irrespective of financial
      or other restrictions. We do provide free initial consultations during which all available
      options will be discussed. We build and maintain relationships with our clients that are
      based on mutual respect. Our hard-earned reputation is based on traditional client-
      centred values, and our objective is to meet our clients' needs in every matter.
    </Text>
  </Box>

  {/* Buttons Section */}
  <Flex
    gap={{ base: "20px", md: "100px", lg: "200px" }}
    direction="row"
    width="100%"
    justify="center"
    align="center"
  >
    <Button
      as={Link}
      to="/news"
      bg="black"
      color="white"
      width={{ base: "110px", md: "145px" }}
      height={{ base: "45px", md: "50px" }}
      borderRadius="4px"
      _hover={{ bg: "#333", transform: "scale(1.05)" }}
      transition="0.2s"
      fontSize="15px"
    >
      News
    </Button>

    <Button
      as={Link}
      to="/insights"
      bg="black"
      color="white"
      width={{ base: "110px", md: "145px" }}
      height={{ base: "45px", md: "50px" }}
      borderRadius="4px"
      _hover={{ bg: "#333", transform: "scale(1.05)" }}
      transition="0.2s"
      fontSize="15px"
    >
      Insights
    </Button>
  </Flex>
</VStack>
    </Box>
  );
};

export default NewsNInsightsSection;