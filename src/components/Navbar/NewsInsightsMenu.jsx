import { useState } from "react";
import { HStack, Image, Text, Box, VStack } from "@chakra-ui/react";
import { Button } from "../../lib/chakra-components/ui/button";
import MenuIcon from "../../assets/navbar/menu-dropdown-icon.png";
import BlackMenuIcon from "../../assets/navbar/menu-dropdown-icon-black.png";
import "../../styles/fonts.css";
import styles from "../../styles/navbar.module.css";
import { Link } from "react-router-dom";

const NewInsightsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box
        position="relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        height="100%"
      >
        <Button
          backgroundColor="inherit"
          color="white"
          size="sm"
          fontSize={{
            xs: "12px",
            md: "14px",
            lg: "14px",
            xl: "16px",
            "2xl": "18px",
          }}
          fontWeight={500}
          height="100%"
          borderRadius="0px"
          position="relative"
          px={{
            xs: "4px",
            md: "8px",
            lg: "12px",
            xl: "14px",
            "2xl": "16px",
          }}
          className={styles.servicesMegaMenuButton}
          data-state={isOpen ? "open" : ""}
          _hover={{
            color: "white",
            backgroundColor: "black",
            borderBottom: "5px solid #BEAB7C",
          }}
          css={{
            transition: "all 0.3s ease",
            borderBottom: isOpen ? "5px solid #BEAB7C" : "none",
          }}
        >
          News & Insights
          <Image src={MenuIcon} width={"auto"} alt="Menu Icon" />
          <Image src={BlackMenuIcon} width={"auto"} alt="Black Menu Icon" />
        </Button>

      {/* Dropdown Box */}
{isOpen && (
  <Box
    position="absolute"
    top="100%"
    left="0"
    minWidth="200px"
    backgroundColor="black"
    zIndex={9999}
  >
    {/* Gold top line */}
    <Box
      width="100%"
      height="5px"
      backgroundColor="#BEAB7C"
    />

    {/* Black box with white border */}
    <Box
      border="1px solid white"
      borderTop="none"
      backgroundColor="black"
      py="8px"
    >
      <VStack alignItems={"stretch"} gap="0px">
        <Text
          as={Link}
          to={"/lumine-law/immigration-news"}
          fontSize={{
            lg: "12px",
            xl: "14px",
            "2xl": "15px",
          }}
          fontWeight={500}
          color={"white"}
          px="16px"
          py="12px"
          display="block"
          textDecoration="none"
          _hover={{
            backgroundColor: "#BEAB7C",
            color: "white",
          }}
          css={{ transition: "all 0.2s ease" }}
        >
          Immigration News
        </Text>

        <Text
          as={Link}
          to={"/lumine-law/litigation"}
          fontSize={{
            lg: "12px",
            xl: "14px",
            "2xl": "15px",
          }}
          fontWeight={500}
          color={"white"}
          px="16px"
          py="12px"
          display="block"
          textDecoration="none"
          _hover={{
            backgroundColor: "#BEAB7C",
            color: "white",
          }}
          css={{ transition: "all 0.2s ease" }}
        >
          Litigation
        </Text>

        <Text
          as={Link}
          to={"/lumine-law/conveyancing"}
          fontSize={{
            lg: "12px",
            xl: "14px",
            "2xl": "15px",
          }}
          fontWeight={500}
          color={"white"}
          px="16px"
          py="12px"
          display="block"
          textDecoration="none"
          _hover={{
            backgroundColor: "#BEAB7C",
            color: "white",
          }}
          css={{ transition: "all 0.2s ease" }}
        >
         Housing & Property
        </Text>
      </VStack>
    </Box>
  </Box>
)}
      </Box>
    </>
  );
};

export default NewInsightsMenu;