import React, { Suspense } from "react";
import { Text, Container, Box, Flex } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import "../../styles/fonts.css";
import { Helmet } from "react-helmet";
import BannerImg from "../../assets/about/aboutUs.jpg";

const AllServiceLinks = React.lazy(() => import("../NavLinks/AllServiceLinks"));
const AllPrices = React.lazy(() => import("../NavLinks/AllPrices"));
const AllNewsInsights = React.lazy(() => import("../NavLinks/AllNewsInsights"));

const About = () => {
  return (
    <>
      <Container
        width="100vw"
        maxWidth="100%"
        minHeight="100vh"
        backgroundColor={"white"}
        overflowX="hidden"
        m={0}
        p={0}
        display="flex"
        flexDirection="column"
      >
        <Helmet>
          <title>Lumine Law About Us</title>
        </Helmet>

        {/* Main Wrapper */}
        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          
          {/* 1. Banner Section */}
          <Box
            width={"100%"}
            bgImage={`linear-gradient(#00000044, #00000044), url(${BannerImg})`}
            bgSize={"cover"}
            bgPos={"top center"}
            minH={"50vh"} 
            bgRepeat={"no-repeat"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            px={{ base: "5%", lg: "10%" }}
            position="relative"
          >
            <Text
              fontSize={{ base: "32px", lg: "45px", xl: "50px", "2xl": "60px" }}
              fontWeight={600}
              fontFamily={"CeraRoundPro"}
              color="white"
              mb={2}
            >
              About Us
            </Text>

            <Box display="flex" alignItems="center" gap={2}>
              <Text color="white" fontSize={{ base: "14px", lg: "18px" }}>
                <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a>
              </Text>
              <Text fontSize={"20px"} color={"#f0a028"} lineHeight={"1"}>→</Text>
              <Text color="white" fontSize={{ base: "14px", lg: "18px" }} fontWeight={400}>
                About Us
              </Text>
            </Box>
          </Box>

          {/* 2. Feature Boxes Section (Confidential, Trusted, Protect) */}
          <Box 
            width={"100%"}
            backgroundColor={"#80808011"}
            py={{ base: "40px", md: "60px" }}
            display="flex"
            justifyContent="center"
          >
            <Flex 
              width={{ base: "90%", lg: "85%" }} 
              justifyContent="space-between" 
              flexWrap="wrap" 
              gap={6}
            >
              {/* Box 1 */}
              <Flex width={{ base: "100%", md: "31%" }} backgroundColor="white" >
                <Box width="80px" bg="#ebc51de7" display="flex" justifyContent="center" alignItems="center" py="30px">
                  <Text color="white" fontSize="30px">⚖️</Text>
                </Box>
                <Box p={4} display="flex" flexDirection="column" justifyContent="center">
                  <Text marginLeft={"-78px"} fontSize="20px" color="#ebc51de7">Confidential</Text>
                  <Text marginLeft={"-17px"} color={"black"} fontWeight="400" fontSize={{ base: "20px", lg: "26px" }}>Client Support</Text>
                </Box>
              </Flex>

              {/* Box 2 */}
              <Flex width={{ base: "100%", md: "31%" }} backgroundColor="white">
                <Box width="80px" bg="#ebc51de7" display="flex" justifyContent="center" alignItems="center" py="30px">
                  <Text color="white" fontSize="30px">🤝</Text>
                </Box>
                <Box p={4} display="flex" flexDirection="column" justifyContent="center">
                  <Text marginLeft={"-100px"} fontSize="20px" color="#ebc51de7" >Trusted</Text>
                  <Text marginLeft={"-17px"} color={"black"} fontWeight="400" fontSize={{ base: "20px", lg: "26px" }}>Legal Advice</Text>
                </Box>
              </Flex>

              {/* Box 3 */}
              <Flex width={{ base: "100%", md: "31%" }} backgroundColor="white">
                <Box width="80px" bg="#ebc51de7" display="flex" justifyContent="center" alignItems="center" py="30px">
                  <Text color="white" fontSize="30px">🛡️</Text>
                </Box>
                <Box p={4} display="flex" flexDirection="column" justifyContent="center">
                  <Text marginLeft={"-80px"} fontSize="20px" color="#ebc51de7">Protect</Text>
                  <Text  marginLeft={"-17px"} color={"black"} fontWeight="400" fontSize={{ base: "20px", lg: "26px" }}>Your Rights</Text>
                </Box>
              </Flex>
            </Flex>
          </Box>

          {/* 3. Main Content Section */}
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            color={"black"}
            py={{ base: "40px", md: "80px" }}
          >
            <Box
              width={"90%"}
              maxWidth="1200px"
              alignSelf={"center"}
            >
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ base: "14px", md: "16px", lg: "17px", "2xl": "18px" }}
                textAlign={"justify"}
                lineHeight="1.8"
              >
                Lumine Solicitors is an SRA regulated firm of solicitors. We offer the dedicated support 
                and advice you require from the very outset of your matter. We provide a remarkably personal 
                and approachable service, whatever your legal service requirements may be. We are well known 
                for the calibre of advice we provide and the successful outcomes we acquire for our clients. 
                Lumine Solicitors in London adopts an entirely transparent and professional approach, 
                and we focus on delivering cost-effective solutions to our clients. 
                <br /><br />
                During times of personal difficulty, we always strive to successfully resolve challenging 
                and technical aspects of disputes and applications. We represent both individuals and businesses. 
                Our Solicitors are dedicated to client care and will fully explain the services we will be 
                providing and a full breakdown and explanation of costs and charges will be provided from 
                the outset of the matter. We provide all our clients with premium and bespoke legal services 
                and support.
                <br /><br />
                Our aim is to simplify the process of accessing quality legal support, irrespective of financial 
                or other restrictions. We do provide free initial consultations during which all available 
                options will be discussed. We build and maintain relationships with our clients that are based 
                on mutual respect. Our hard-earned reputation is based on traditional client centred values, 
                and our objective is to meet our clients needs in every matter. 
                <br /><br />
                We correspond with clients in a manner that is best suited to their individual needs. 
                We can use video calls for meetings and appointments where appropriate. Clients are always 
                made aware of our terms of business and costs, who is dealing with their matter, and regular 
                updates on any developments in their case. We are a modern, progressive and growing firm 
                located close to three central London tube stations, Gloucester Road, Earl’s Court and South 
                Kensington. We are also a 4-minute drive from Harrods. Furthermore, we are conveniently 
                located outside of the congestion zone.
              </Text>
            </Box>
          </Box>

          <Footer />
        </Box> 
      </Container>
    </>
  );
};

export default About;