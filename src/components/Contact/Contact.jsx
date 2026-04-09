import React, { Suspense } from "react";
import {
  Container,
  Box,
  Grid,
  GridItem,
  Text,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Field } from "../../lib/chakra-components/ui/field";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../../styles/fonts.css";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { TiPrinter } from "react-icons/ti";
import { TfiEmail } from "react-icons/tfi";
import { Helmet } from "react-helmet";
const AllServiceLinks = React.lazy(() => import("../NavLinks/AllServiceLinks"));
const AllPrices = React.lazy(() => import("../NavLinks/AllPrices"));
const AllNewsInsights = React.lazy(() => import("../NavLinks/AllNewsInsights"));

const Contact = () => {
  return (
    <Container
      width="100vw"
      maxWidth="100%"
      height="100vh"
      overflow="auto"
      m={0}
      p={0}
      backgroundColor={"white"}
    >
      <Helmet>
        <title>Lumine Law Contact</title>
      </Helmet>
      <Box width="100%" height="calc(100% - 50px)" p={0} m={0} pt={"50px"}>
        {/* Contact Header */}
<Grid
  width={"100%"}
  backgroundColor={"#F7E1C1"}
  templateColumns={{ xs: "1fr", xl: "1fr 2fr 1fr" }}
  borderTop={"1px solid black"}
  borderBottom={"1px solid black"}
  // minHeight ko halka sa kam kiya gaya hai
  minHeight={"280px"} 
>
  {/* 1. Left Section: Contact Us */}
  <GridItem
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    borderRight={"2px solid black"}
    p={"15px"}
  >
    <Text
      fontSize={{ xs: "22px", xl: "32px" }}
      fontFamily={"CeraRoundPro, sans-serif"}
      fontWeight={400}
      color={"black"}
    >
      Contact Us
    </Text>
  </GridItem>

  {/* 2. Middle Section: Har cheez separate line mein */}
  <GridItem borderRight={"2px solid black"}>
    <Grid templateRows={"repeat(4, 1fr)"} height={"100%"}>
      
      {/* Address Row */}
      <Box p={"12px 25px"} display="flex" alignItems="center">
        <HStack spacing={4}>
          <IoLocationOutline size={"2em"} color="black"/>
          <VStack align="flex-start" spacing={0} color={"black"}>
            <Text fontSize="19px"  fontWeight="600" mb={{lg:'-2'}}>Address</Text>
            <Text fontSize="16px">University House, 11-13 Lower Grosvenor Place, London, SW1W 0EX</Text>
          </VStack>
        </HStack>
      </Box>

      {/* Telephone Row */}
      <Box 
        p={"12px 25px"} 
        display="flex" 
        alignItems="center" 
        borderTop={"2px solid black"}
      >
        <HStack spacing={4}>
          <LuPhoneCall size={"2em"} color="black" />
          <VStack align="flex-start" spacing={0} color={"black"}>
            <Text fontSize="19px" fontWeight="600" mb={{lg:'-2'}}>Telephone</Text>
            <Text fontSize="16px">02039502246</Text>
          </VStack>
        </HStack>
      </Box>

      {/* Fax Row */}
      <Box 
        p={"12px 25px"} 
        display="flex" 
        alignItems="center" 
        borderTop={"2px solid black"}
        borderBottom={"2px solid black"}
      >
        <HStack spacing={4}>
          <TiPrinter size={"2em"} color="black" />
          <VStack align="flex-start" spacing={0} color={"black"}>
            <Text fontSize="19px" fontWeight="600" mb={{lg:'-2'}}>Fax</Text>
            <Text fontSize="16px">020 3006 2508</Text>
          </VStack>
        </HStack>
      </Box>

      {/* Email Address Row */}
      <Box p={"12px 25px"} display="flex" alignItems="center">
        <HStack spacing={4}>
          <TfiEmail size={"2em"} color="black" />
          <VStack align="flex-start" spacing={0} color={"black"}>
            <Text fontSize="19px" fontWeight="600" mb={{lg:'-2'}}>Email Address</Text>
            <Text fontSize="16px" color="black">
              info@luminelaw.co.uk
            </Text>
          </VStack>
        </HStack>
      </Box>
    </Grid>
  </GridItem>

  {/* 3. Right Section: Opening Hours */}
  <GridItem 
    p={"20px 30px"} 
    display={"flex"} 
    flexDir={"column"} 
    justifyContent={"center"} 
    alignItems={"flex-start"}
  >
    <VStack align="flex-start" spacing={3} color={"black"}>
      <Text fontSize="20px" fontWeight="600">Opening Hours</Text>
      <Box>
        <Text fontSize="15px" mb={3}>Mon-Fri: 9:30 am - 5:30pm</Text>
        <Text fontSize="15px">Sat-Sun: Closed</Text>
      </Box>
    </VStack>
  </GridItem>
</Grid>

        {/* Main */}
        <VStack
          width="100%"
          my={"20px"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"20px"}
          mb={"50px"}
        >
          {/* get in touch */}
          <Text
            fontSize={{
              xs: "16px",
              sm: "18px",
              md: "20px",
              lg: "24px",
              xl: "30px",
              "2xl": "36px",
            }}
            fontWeight={600}
            fontFamily={"CeraRoundPro"}
            textAlign={"left"}
            color={"black"}
            mb={"25px"}
          >
            Get In Touch
          </Text>
    <Grid
  templateColumns={{ xs: "1fr", xl: "repeat(2, 1fr)" }}
  templateRows={{ xs: "repeat(2, 1fr)", xl: "1fr" }}
  justifyContent={"center"}
  alignItems={"center"}
  width={"100%"}
>
  <GridItem
    justifySelf={"center"}
    display={"flex"}
    flexDirection={"column"}
    justifyContent={"center"}
    alignItems={"center"}
    gap={"10px"}
    border={"1px solid #dddcdc"}
    borderRadius={"12px"}
    width={"98%"}
    py={"10px"}
    backgroundColor={"#ffe7c5"}
  >
    {/* instructions */}
    <Text
      fontSize={{
        xs: "13px",
        sm: "15px",
        md: "17px",
        xl: "19px",
        "2xl": "21px",
      }}
      fontWeight={500}
      fontFamily={"CeraRoundPro"}
      textAlign={"center"}
      color={"black"}
      mb={"25px"}
    >
      Please fill in the form and we'll get back to you as soon as we can.
    </Text>

    {/* form */}
    <VStack
      gap="6"
      justifyContent={"center"}
      alignItems={"flex-start"}
      textAlign={"left"}
    >
      {/* Names */}
      <VStack gap={"10px"}>
        {/* First */}
        <Field
          orientation="vertical"
          label="First Name"
          required
          unstyled="true"
          fontSize={{
            xs: "12px",
            sm: "12px",
            md: "14px",
            xl: "16px",
            "2xl": "18px",
          }}
          fontWeight={600}
          color={"black"}
          fontFamily={"CeraRoundPro"}
          ml={{lg:"-10"}}
          mr={{lg:"10"}}
        >
          <Input
            placeholder="John"
            flex="1"
            fontFamily={
              "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
            }
            backgroundColor={"white"}
            color={"black"}
            mr={{ lg: "25px" }}
            width={{lg:"50"}}
            borderColor={"black"}
            borderRadius={"4px"}
          />
        </Field>

        {/* Last */}
        <Field
          orientation="vertical"
          label="Last Name"
          required
          unstyled="true"
          fontSize={{
            xs: "12px",
            sm: "12px",
            md: "14px",
            xl: "16px",
            "2xl": "18px",
          }}
          fontWeight={600}
            ml={{lg:"-10"}}
          mr={{lg:"10"}}
          fontFamily={"CeraRoundPro"}
          color={"black"}
        >
          <Input
            placeholder="Doe"
            flex="1"
            fontFamily={
              "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
            }
            backgroundColor={"white"}
            color={"black"}
             fontWeight={600}
        
           mr={{ lg: "25px" }}
            width={{lg:"50"}}
            borderColor={"black"}
            borderRadius={"4px"}
          />
        </Field>
      </VStack>

      {/* Email */}
      <Field
        label="Email Address"
        required
        unstyled="true"
        fontSize={{
          xs: "12px",
          sm: "12px",
          md: "14px",
          xl: "16px",
          "2xl": "18px",
        }}
        fontWeight={600}
          ml={{lg:"-10"}}
          mr={{lg:"10"}}
        fontFamily={"CeraRoundPro"}
        color={"black"}
      >
        <Input
          placeholder="me@example.com"
          fontFamily={
            "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
          }
          backgroundColor={"white"}
          color={"black"}
          borderColor={"black"}
             fontWeight={600}
        width={"90%"}
           mr={{ lg: "25px" }}
            // width={{lg:"50"}}
            borderRadius={"4px"}
        />
      </Field>

      {/* Number */}
      <Field
        label="Phone Number"
        required
        unstyled="true"
        fontSize={{
          xs: "12px",
          sm: "12px",
          md: "14px",
          xl: "16px",
          "2xl": "18px",
        }}
          ml={{lg:"-10"}}
          mr={{lg:"10"}}
        fontWeight={600}
        fontFamily={"CeraRoundPro"}
        color={"black"}
      >
        <Input
          placeholder="+44 1234567890"
          fontFamily={
            "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
          }
          backgroundColor={"white"}
          color={"black"}
          borderColor={"black"}
          borderRadius={"4px"}
          width={"90%"}
          mr={{ lg: "25px" }}
            // width={{lg:"50"}}
        />
      </Field>

      {/* Message */}
      <Field
        label="Message"
        required
        unstyled="true"
        fontSize={{
          xs: "12px",
          sm: "12px",
          md: "14px",
          xl: "16px",
          "2xl": "18px",
        }}
       ml={{lg:"-10"}}
          mr={{lg:"10"}}
        fontWeight={600}
        fontFamily={"CeraRoundPro"}
        color={"black"}
        width={"100%"}
      >
        <Textarea
          placeholder="Hi, I would like to know more about..."
          fontFamily={
            "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
          }
          backgroundColor={"white"}
          color={"black"}
          borderColor={"black"}
          borderRadius={"4px"}
          minHeight={"150px"}
          maxHeight={"200px"}
            width={"90%"}
          mr={{ lg: "25px" }}
          minWidth={"150px"}
        />
      </Field>
    </VStack>

    <Button
      fontSize={{
        xs: "12px",
        md: "14px",
        lg: "14px",
        xl: "16px",
        "2xl": "18px",
      }}
      py={{
        xs: "6px",
        md: "8px",
        lg: "10px",
        xl: "12px",
        "2xl": "15px",
      }}
      backgroundColor={"black"}
      color={"white"}
      border={"1px solid #FFFFFF"}
      mr={"55%"}
      fontWeight={500}
      fontFamily={"CeraRoundPro"}
      _hover={{
        borderColor: "#beab7c",
        backgroundColor: "black",
        color: "#beab7c",
        transition: "all 0.3s ease",
      }}
    >
      Send Now
    </Button>
  </GridItem>

  <GridItem
    alignSelf={{ xs: "center", lg: "flex-start" }}
    justifySelf={"center"}
    width="90%"
  >
    {/* Google Maps */}
    <Box
      width={"100%"}
      height={{
        xs: "400px",
        sm: "450px",
        md: "500px",
        lg: "550px",
        xl: "600px",
        "2xl": "600px",
      }}
      mt={6}
      mb={"50px"}
      borderRadius="8px"
      overflow="hidden"
      border="1px solid white"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.004089600194!2d-0.19325174666734102!3d51.494792439171626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4b49fb8783%3A0x22f7a54aa37a1eb3!2sLumine%20Solicitors!5e0!3m2!1sen!2s!4v1732136989695!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Box>
  </GridItem>
</Grid>
        </VStack>

        {/* Other Services */}
        <Suspense fallback={<div>Loading All Services ...</div>}>
          <AllServiceLinks />
        </Suspense>

        {/* Prices */}
        <Suspense fallback={<div>Loading All Prices ...</div>}>
          <AllPrices />
        </Suspense>

        {/* News and Insights */}
        <Suspense fallback={<div>Loading All News and Insights ...</div>}>
          <AllNewsInsights />
        </Suspense>

        {/* Footer */}
        <Footer />
      </Box>
    </Container>
  );
};

export default Contact;
