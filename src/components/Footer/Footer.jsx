import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Center,
  Link,
  Grid,
  GridItem,
  Flex,
  Stack,
  Button
} from "@chakra-ui/react";
import AccreditLogo from "../../assets/footer/accredit.png";
import LexcelLogo from "../../assets/footer/lexcel.png";
import LumineLogo from "../../assets/navbar/logo.webp";
import TwitterLogo from "../../assets/footer/twitter.png";
import LinkedInLogo from "../../assets/footer/linkedin.png";
import InstagramLogo from "../../assets/footer/instagram.png";
import FacebookLogo from "../../assets/footer/facebook.png";
import TikTokLogo from "../../assets/footer/tiktok.png";
import { FaLocationDot } from "react-icons/fa6";
import { BsPrinterFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "../../styles/fonts.css";
import { PiPhoneCallFill } from "react-icons/pi";
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Box
        width={"100%"}
        borderTop={"0.5px solid #707070"}
        px={{ xs: "5%", lg: "2.5%" }}
        py={{ xs: "20px", lg: "20px" }}
        style={{ fontFamily: "CeraRoundPro" }}
        backgroundColor={"black"}
        _loading={"lazy"}
      >
        {/* Top */}
        <Flex
          flexDir={{ xs: "column", lg: "row" }}
          justifyContent={{ xs: "center", lg: "space-between" }}
          alignItems={"center"}
        >
          {/* address + all */}
          <Box justifyContent={"center"} alignItems={"center"}>
            <Text
              fontSize={{
                xs: "29px",
                xl: "31px",
                "2xl": "35px",
              }}
              color={"#BF9B30"}
              fontWeight={400}
              mb={"7px"}
              textAlign={"left"}
            >
              Our Location
            </Text>
            <VStack justifyContent={"center"} alignItems={"flex-start"}>
              <HStack>
                <FaLocationDot
                  color={"#DEB92C"}
                  fontSize={{
                    xs: "12px",
                    xl: "13px",
                    "2xl": "15px",
                  }}
                />
                <Text
                  color={"white"}
                                      fontSize={{ xs: "11px", xl: "14px", "2xl": "15px" }}

                  _hover={{ color: "#DEB92C" }}
                  fontWeight={300}
                  lineHeight={1.7}
                >
                  Address: University House, 11-13 Lower Grosvenor Place, London, SW1W 0EX
                </Text>
              </HStack>
              <HStack>
                <PiPhoneCallFill
                  color={"#DEB92C"}
                  fontSize={{
                    xs: "12px",
                    xl: "13px",
                    "2xl": "15px",
                  }}
                />
                <Text
                  color={"white"}
                  lineHeight={1.7}
                                     fontSize={{ xs: "11px", xl: "14px", "2xl": "15px" }}

                  _hover={{ color: "#DEB92C" }}
                  cursor={"pointer"}
                  fontWeight={300}
                >
                  Tel: 02039502246
                </Text>
              </HStack>
              <HStack>
                <BsPrinterFill
                  color={"#DEB92C"}
                  fontSize={{
                    xs: "12px",
                    xl: "13px",
                    "2xl": "15px",
                  }}
                />
                <Text
                  color={"white"}
                                      fontSize={{ xs: "11px", xl: "14px", "2xl": "15px" }}

                  lineHeight={1.7}
                  _hover={{ color: "#DEB92C" }}
                  fontWeight={300}
                >
                  Fax: 02030062503
                </Text>
              </HStack>
              <HStack>
                <MdEmail
                  color={"#DEB92C"}
                  fontSize={{
                    xs: "12px",
                    xl: "13px",
                    "2xl": "15px",
                  }}
                />
                <Text
                  color={"white"}
                                      fontSize={{ xs: "11px", xl: "14px", "2xl": "15px" }}

                  lineHeight={1.7}
                  fontWeight={300}
                  _hover={{ color: "#DEB92C" }}
                  cursor={"pointer"}
                >
                  Email: info@luminelaw.com
                </Text>
              </HStack>
            </VStack>
          </Box>

          {/* certs - SRA Digital Badge with same size as other images */}
          <HStack my={{ xs: "10px", md: "0px" }} spacing={8} gap={4}>
            {/* SRA Digital Badge - size fixed like other images */}
            <Box
                           height={{
                xs: "55px",
                md: "65px",
                lg: "65px",
                xl: "75px",
              }}
              width={{
                xs: "70px",
                md: "75px",
                lg: "80px",
                xl: "90px",
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <div style={{ 
                position: "relative", 
                width: "100%", 
                height: "100%",
                paddingBottom: "59.1%"
              }}>
                <iframe 
                  frameBorder="0" 
                  scrolling="no" 
                  allowTransparency="true" 
                  src="https://cdn.yoshki.com/iframe/55845r.html" 
                  style={{ 
                    border: "0px", 
                    margin: "0px", 
                    padding: "0px", 
                    backgroundColor: "transparent", 
                    top: "20px", 
                    left: "0px", 
                    width: "100%", 
                    height: "60%", 
                    position: "absolute" 
                  }}
                  title="SRA Digital Badge"
                ></iframe>
              </div>
            </Box>

            {/* Accredit Logo */}
            <Image
              src={AccreditLogo}
              alt="Conveyancing Quality Scheme Accreditation"
                            height={{
                xs: "55px",
                md: "65px",
                lg: "65px",
                xl: "75px",
              }}
              width={{
                xs: "70px",
                md: "75px",
                lg: "80px",
                xl: "90px",
              }}
              objectFit={"contain"}
              loading="lazy"
            />

            {/* Lexcel Logo */}
            <Image
              src={LexcelLogo}
              alt="Lexcel"
              height={{
                xs: "55px",
                md: "65px",
                lg: "65px",
                xl: "75px",
              }}
              width={{
                xs: "70px",
                md: "75px",
                lg: "80px",
                xl: "90px",
              }}
              objectFit={"contain"}
              loading="lazy"
            />
          </HStack>
        </Flex>

        {/* Center Text - Grey line full width on 4K */}
        <Box width={"100%"}>
          <Center>
            <Text
              fontSize={{
                xs: "12px",
                xl: "13px",
                "2xl": "15px",
              }}
              fontWeight={400}
              my={{
                xs: "10px",
                sm: "11px",
                md: "13px",
                lg: "15px",
                xl: "17px",
                "2xl": "18px",
              }}
              pb={{
                xs: "8px",
                sm: "10px",
                md: "10px",
                lg: "12px",
                xl: "14px",
                "2xl": "16px",
              }}
              color={"white"}
              textAlign={"center"}
              px={{ base: "9px", lg: "18px" }}
            >
              Lumine Solicitors and Lumine Law are the trading names of Lumine Law
              Limited, a company registered in England & Wales (company
              registration no: 10996865). This firm is authorised and regulated by
              the Solicitors Regulation Authority (SRA No.645265).
            </Text>
          </Center>
          
          {/* Grey line - full width across the screen */}
          <Box
            width={"100vw"}
            position={"relative"}
            left={"50%"}
            right={"50%"}
            marginLeft={"-50vw"}
            marginRight={"-50vw"}
            borderBottom={"0.5px solid #707070"}
          />
        </Box>

        {/* Bottom */}
        <Grid
          templateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
          templateRows={{ xs: "repeat(3, 0.6fr)", md: "1fr" }}
          mt={"20px"}
        >
          {/* 1st col */}
          <GridItem
            justifyContent={"center"}
            alignSelf={"center"}
            justifySelf={{ xs: "center", md: "flex-start" }}
          >
            <VStack
              width={{
                xs: "2xs",
                md: "2xs",
                lg: "250px",
                xl: "275px",
                "2xl": "300px",
              }}
            >
              {/* Logo and Name */}
              <HStack>
                <Image
                  src={LumineLogo}
                  alt="Lumine Logo"
                  height={{
                    xs: "28px",
                    md: "34px",
                    lg: "40px",
                    xl: "40px",
                    "2xl": "52px"
                  }}
                  width={{
                    xs: "28px",
                    md: "34px",
                    lg: "40px",
                    xl: "40px",
                    "2xl": "52px"
                  }}
                  fit={"cover"}
                  loading="lazy"
                />
                <Text
                  fontSize={{
                    xs: "20px",
                    lg: "22px",
                    xl: "24px",
                    "2xl": "29px",
                  }}
                  fontWeight={600}
                  color={"white"}
                  whiteSpace="nowrap"
                >
                  LUMINE SOLICITORS
                </Text>
              </HStack>
              <Text
                                    fontSize={{ xs: "11px", xl: "14px", "2xl": "15px" }}

                fontWeight={400}
                mt={{ lg: "2" }}
                ml={{ lg: "-16" }}
                color={"#BF9B27"}
              >
                Integrity Innovation Impact
              </Text>
            </VStack>
          </GridItem>

          {/* second col */}
          <GridItem justifyContent={"center"} alignSelf={"center"}>
            <Center
              gap={{
                xs: "14px",
                sm: "16px",
                md: "18px",
                lg: "20px",
                xl: "25px",
                "2xl": "30px",
              }}
            >
              {/* LinkedIn */}
              <Link href="https://www.linkedin.com/company/lumine-solicitors/">
                <Image
                  src={LinkedInLogo}
                  alt="LinkedIn Logo"
                  height={{
                    xs: "29px",
                    xl: "35px",
                    "2xl": "39px",
                  }}
                  width={{
                    xs: "29px",
                    xl: "35px",
                    "2xl": "39px",
                  }}
                  cursor={"pointer"}
                  loading="lazy"
                />
              </Link>

              {/* Twitter */}
              <Link href="https://twitter.com/luminelaw">
                <Image
                  src={TwitterLogo}
                  alt="Twitter Logo"
                  height={{
                    xs: "29px",
                    xl: "35px",
                    "2xl": "39px",
                  }}
                  width={{
                    xs: "29px",
                    xl: "35px",
                    "2xl": "39px",
                  }}
                  cursor={"pointer"}
                  loading="lazy"
                />
              </Link>

              {/* Facebook */}
              <Link href="https://www.facebook.com/luminelaw.co.uk?_rdc=1&_rdr">
                <Image
                  src={FacebookLogo}
                  alt="Facebook Logo"
                  height={{
                    xs: "29px",
                    xl: "35px",
                    "2xl": "39px",
                  }}
                  width={{
                    xs: "29px",
                    xl: "35px",
                    "2xl": "39px",
                  }}
                  cursor={"pointer"}
                  loading="lazy"
                />
              </Link>

              {/* Instagram */}
              <Link href="https://www.instagram.com/luminesolicitors/">
                <Image
                  src={InstagramLogo}
                  alt="Instagram Logo"
                  height={{
                    xs: "29px",
                    xl: "35px",
                    "2xl": "39px",
                  }}
                  width={{
                    xs: "29px",
                    xl: "35px",
                    "2xl": "39px",
                  }}
                  cursor={"pointer"}
                  loading="lazy"
                />
              </Link>

              {/* Tiktok */}
              <Link href="https://www.tiktok.com/@luminesolicitors?_t=8pIu7DAd1ZR&_r=1">
                <Image
                  src={TikTokLogo}
                  alt="TikTok Logo"
                  height={{
                    xs: "29px",
                    xl: "35px",
                    "2xl": "39px",
                  }}
                  width={{
                    xs: "29px",
                    xl: "35px",
                    "2xl": "39px",
                  }}
                  cursor={"pointer"}
                  loading="lazy"
                />
              </Link>
            </Center>
          </GridItem>

          {/* third col */}
          <GridItem justifyContent={"center"} alignSelf={"center"}>
            <VStack
              gap={{
                xs: "8px",
                sm: "10px",
                md: "11px",
                lg: "12px",
                xl: "13px",
                "2xl": "15px",
              }}
            >
              <HStack
                gap={{
                  xs: "40px",
                  sm: "50px",
                  md: "60px",
                  lg: "70px",
                  xl: "80px",
                  "2xl": "90px",
                }}
              >
                <Stack direction="row" spacing={4}>
                  <Button
                    as={RouterLink}
                    to="/privacy-policy"
                    variant="link"
                    color="white"
                    fontWeight={400}
                    fontSize={{ xs: "11px", xl: "14px", "2xl": "15px" }}
                  >
                    Privacy Policy
                  </Button>

                  <Button
                    as={RouterLink}
                    to="/disclaimer"
                    variant="link"
                    color="white"
                    fontWeight={400}
                    fontSize={{ xs: "11px", xl: "14px", "2xl": "15px" }}
                  >
                    Disclaimer
                  </Button>
                </Stack>
              </HStack>
              <Text
                                   fontSize={{ xs: "11px", xl: "14px", "2xl": "15px" }}
                fontWeight={400}
                fontFamily={
                  "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif"
                }
                color={"white"}
              >
                © Copyright 2026 Lumine Law | All Rights Reserved
              </Text>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;