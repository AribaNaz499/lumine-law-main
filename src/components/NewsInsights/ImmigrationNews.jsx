import React, { Suspense } from "react";
import {
  Text,
  Container,
  Box,
  Input,
  createListCollection,
  Flex,
} from "@chakra-ui/react";
import { InputGroup } from "../../lib/chakra-components/ui/input-group";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../../lib/chakra-components/ui/select";
import { LuSearch } from "react-icons/lu";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../../styles/fonts.css";
import BannerImg from "../../assets/newsInsights/BannerImg.jpg";
import { Helmet } from "react-helmet";
const AllServiceLinks = React.lazy(() => import("../NavLinks/AllServiceLinks"));
const AllPrices = React.lazy(() => import("../NavLinks/AllPrices"));
import NewsArticle from "../News/NewsArticle.jsx"

const ImmigrationNews = () => {
  const frameworks = createListCollection({
    items: [
      { label: "Type 1", value: "typeOne" },
      { label: "Type 2", value: "typeTwo" },
      { label: "Type 3", value: "typeThree" },
    ],
  });

  return (
    <>
      <Container
        width="100vw"
        maxWidth="100%"
        minHeight="100vh"
        backgroundColor={"white"}
        overflow="auto"
        m={0}
        p={0}
        display="flex"
        flexDirection="column"
      >
        <Helmet>
          <title>Lumine Law News</title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner */}
          <Box
            width={"100%"}
            height={{
              xs: "250px",
              lg: "300px",
              xl: "350px",
              "2xl": "400px",
            }}
bgImage={`linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${BannerImg})`}
            bgSize={"cover"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            _loading={"eager"}
          >
            <Text
              fontSize={{ xs: "34px", lg: "44px", xl: "48px", "2xl": "58px" }}
              fontWeight={400}
              fontFamily={"CeraRoundPro"}
              width={"90%"}
              textAlign={"left"}
            >
              Immigartion
            </Text>
          </Box>

          {/* Main */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            color={"black"}
            minHeight={"100%"}
          >
            {/* Main Heading Box*/}
            <Box
              width={"90%"}
              alignSelf={"center"}
              mb={"5%"}
              my={{ xs: "5%", md: "2.5%" }}
            >
            
            </Box>

            {/* Grid Box - FIXED: Heading inside border container */}
            <Box
              width={"90%"}
              alignSelf={"center"}
              mb={"5%"}
              border={"1px solid black"}
              borderRadius={"8px"}
              p={"20px"}
            >
              {/* Sub Heading - NOW INSIDE THE BORDER */}
              <Box mb={"2.5%"}>
                <Text
                  fontFamily={"CeraRoundPro"}
                  fontSize={"32px"}
                  fontWeight={500}
                  textAlign={"left"}
                  mb={"0.5%"}
                >
                  Immigration
                </Text>
              </Box>

              <NewsArticle />
            </Box>
          </Box>

          {/* Other Services */}
          <Suspense fallback={<div>Loading All Services ...</div>}>
            <AllServiceLinks />
          </Suspense>

          {/* Prices */}
          <Suspense fallback={<div>Loading All Prices ...</div>}>
            <AllPrices />
          </Suspense>

          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default ImmigrationNews;