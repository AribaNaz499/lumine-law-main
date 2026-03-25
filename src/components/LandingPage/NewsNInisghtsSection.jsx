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
      minheight={{ base: "auto", md: "70vh", lg: "80vh" }}
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
        py={{ base: "60px", sm: "80px", md: "100px", lg: "120px" }}
        px={{ base: "5%", sm: "8%", md: "12%", lg: "15%", xl: "20%" }}
        spacing={{ base: 6, sm: 8, md: 10 }}
        textAlign="center"
      >
        {/* Description Text */}
        <Text
          color="black"
          fontSize={{ base: "15px", sm: "17px", md: "18px", lg: "20px" }}
          fontWeight="400"
          fontFamily="HelveticaNeue-Light, Helvetica Neue, Arial, sans-serif"
          lineHeight={{ base: "1.5", md: "1.6", lg: "1.7" }}
          maxWidth={{ base: "100%", md: "900px", lg: "1000px", xl: "1100px" }}
          px={{ base: 2, sm: 4, md: 6 }}
        >
          We provide all our clients with premium and bespoke legal services and support. Our  
          aim is to simplify the process of accessing quality legal support, irrespective of financial  
          or other restrictions. We do provide free initial consultations during which all available  
          options will be discussed. We build and maintain relationships with our clients that are  
          based on mutual respect. Our hard-earned reputation is based on traditional client-  
          centred values, and our objective is to meet our clients' needs in every matter.
        </Text>

        {/* Buttons Section - Fully Responsive */}
        <Flex 
          gap={{ base: "20px", sm: "30px", md: "40px", lg: "270px" }}
          direction={{ base: "column", sm: "row" }}
          width="100%"
          justify="center"
          align="center"
          mt={{ base: 4, md: 6, lg: 8 }}
          flexWrap="wrap"
        >
          <Button
            as={Link}
            to="/news"
            bg="black"
            color="white"
            width={{ base: "90px", sm: "190px", md: "135px" }}
            height={{ base: "45px", sm: "48px", md: "50px" }}
            borderRadius="4px"
            _hover={{ bg: "#333", transform: "translateY(-2px)" }}
            _active={{ transform: "translateY(0)" }}
            transition="all 0.3s ease"
            fontSize={{ base: "13px", sm: "14px", md: "15px" }}
            fontWeight="500"
            letterSpacing="0.5px"
          >
            News
          </Button>

          <Button
            as={Link}
            to="/insights"
            bg="black"
            color="white"
            width={{ base: "90px", sm: "1900px", md: "135px" }}
            height={{ base: "45px", sm: "48px", md: "50px" }}
            borderRadius="4px"
            _hover={{ bg: "#333", transform: "translateY(-2px)" }}
            _active={{ transform: "translateY(0)" }}
            transition="all 0.3s ease"
            fontSize={{ base: "13px", sm: "14px", md: "15px" }}
            fontWeight="500"
            letterSpacing="0.5px"
          >
            Insights
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default NewsNInsightsSection;