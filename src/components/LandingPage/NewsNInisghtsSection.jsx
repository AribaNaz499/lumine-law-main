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
      minH={{ base: "auto", md: "80vh", lg: "100vh" }} // ✅ fix only
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
        maxW="1400px" // ✅ 4K fix (no visual change)
        mx="auto"
        height={{ base: "auto", md: "100vh" }} // ✅ fix mobile overflow
        display="flex"
        alignItems="center"
        justifyContent="center"
        spacing={{ base: 10, md: 16 }}
        px="5%"
      >
        {/* Description Text */}
        <Box 
          maxWidth={{ 
            base: "80%", 
            md: "700px", 
            lg: "800px",
            "2xl": "800px" // ✅ keep same look on 4K
          }}
          width="100%"
        >
          <Text
            color="black"
            fontSize={{ base: "14px", md: "17px", lg: "18px" }}
            fontWeight="500"
            fontFamily="HelveticaNeue-Light, Helvetica Neue, Arial, sans-serif"
            lineHeight={{ base: "1.5", md: "1.6" }}
            textAlign="justify"
            style={{ textJustify: "inter-word" }}
          >
            We provide all our clients with premium and bespoke legal services and support. Our
            aim is to simplify the process of accessing quality legal support, irrespective of financial
            or other restrictions. We do provide free initial consultations during which all available
            options will be discussed. We build and maintain relationships with our clients that are
            based on mutual respect. Our hard-earned reputation is based on traditional client-
            centred values, and our objective is to meet our clients' needs in every matter.
          </Text>
        </Box>

        {/* Buttons */}
        <Flex
          gap={{ base: "8%", md: "18%", lg: "38%" }} // ✅ EXACT same as your UI
          direction="row"
          mt={{ lg: "8" }}
          width="100%"
          justify="center"
          align="center"
        >
          <Button
            as={Link}
            to="/news"
            bg="black"
            color="white"
            width={{ base: "100px", md: "135px" }}
            height={{ base: "38px", md: "43px" }}
            borderRadius="2px"
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
            width={{ base: "100px", md: "135px" }}
            height={{ base: "38px", md: "43px" }}
            borderRadius="2px"
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