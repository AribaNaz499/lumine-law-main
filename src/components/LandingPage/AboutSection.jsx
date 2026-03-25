import { Box, Text, VStack } from "@chakra-ui/react";
import AboutBg from "../../assets/landing/aboutImg.png";
import "../../styles/fonts.css";

const AboutSection = () => {
  const paragraphStyles = {
    fontSize: {
      base: "12px",
      sm: "13px",
      md: "14px",       
      lg: "16px",
    },
    fontWeight: 300,
    fontFamily: "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, sans-serif",
    textAlign: "justify",
    color: "#000000",
    lineHeight: "1.6",   
    width: "100%",
  };

  return (
    <Box
      as="section"
      width="100%"
      minHeight="100vh"
      py={{ base: "40px", md: "70px" }}
      px={{ base: "6%", md: "10%" }}
      bgImage={`url(${AboutBg})`}
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
    >
      <VStack 
        align="flex-start" 
        spacing={4}
        width="100%"
      >
        <Text {...paragraphStyles}>
          Lumine Solicitors is an SRA regulated firm of solicitors. We offer the
          dedicated support and advice you require from the very outset of your
          matter. We provide a remarkably personal and approachable service,
          whatever your legal service requirements may be. We are well known for
          the calibre of advice we provide and the successful outcomes we
          acquire for our clients. Lumine Solicitors in London adopts an
          entirely transparent and professional approach, and we focus on
          delivering cost-effective solutions to our clients.
        </Text>

        <Text {...paragraphStyles}>
          During times of personal difficulty, we always strive to successfully
          resolve challenging and technical aspects of disputes and
          applications. We represent both individuals and businesses. Our
          Solicitors are dedicated to client care and will fully explain the
          services we will be providing and a full breakdown and explanation of
          costs and charges will be provided from the outset of the matter.
        </Text>

        <Text
          color="#DEB92C" 
          fontFamily="HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, sans-serif"
          fontWeight={500}
          fontSize={{
            base: "22px",
            md: "26px",
            lg: "30px",
          }}
          mt={{ base: "20px", md: "35px" }} 
          mb={{ base: "10px", md: "15px" }}
        >
          Why You Need Us
        </Text>

        <Text {...paragraphStyles}>
          At Lumine Solicitors, we understand that legal matters can be
          challenging. That is why we provide clear, transparent and practical
          advice from the very start. Whether you are an individual or a
          business, our solicitors deliver approachable and cost-effective
          solutions tailored to achieve the best outcomes.
        </Text>

        <Text {...paragraphStyles}>
          We go beyond legal advice by building lasting relationships based on
          trust and respect. From free initial consultations to regular updates
          and full cost breakdowns, we keep you informed at every stage. With
          Lumine Solicitors, you have a dedicated partner committed to
          protecting your interests and simplifying the legal process.
        </Text>
      </VStack>
    </Box>
  );
};

export default AboutSection;