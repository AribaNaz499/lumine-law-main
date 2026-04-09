import React from "react";
import { Box, Text, HStack, VStack, Grid, GridItem } from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

const ImmiApps = ({ isOpen, onToggle }) => {
  // Data for residence table
  const visaData = [
    {
      type: "Bail Application to the Chief Immigration Officer (CIO)",
      cost: "£1,000 - £1,500",
    },
    {
      type: "Bail Application to the Immigration Judge at Asylum and Immigration Tribunal",
      cost: "£1,000",
    },
    {
      type: "For any subsequent bail application, if your first bail application to the Immigration Judge has been unsuccessful",
      cost: "£1,000",
    },
    {
      type: "Revocation of Deportation Order",
      cost: "£1,500 - £2,000",
    },
    {
      type: "Sponsor Licence Application",
      cost: "£2,000 - £3,500",
    },
    { type: "Subject Access Request (SAR)", cost: "£600" },
    { type: "Returning Resident Visa UK", cost: "£2,000 - £2,500" },
    { type: "TOC Application", cost: "£600" },
    { type: "NTL Application", cost: "£600" },
  ];

  const TableRow = ({ type, cost, isAlternate }) => (
    <Grid
      width="100%"
      templateColumns="3fr 1fr"
      py="7px"
      px="10px"
      // borderBottom="1px solid #bfbfbf"
      backgroundColor={isAlternate ? "#f3f3f3" : "#ffffff"}
      fontSize={{ xs: "11px", lg: "13px" }}
      fontWeight="500"
      _hover={{ backgroundColor: isAlternate ? "#ebe8e8" : "#f3f3f3" }}
    >
      <GridItem justifySelf="start" textAlign="left">
        {type}
      </GridItem>
      <GridItem
        justifySelf={{ xs: "center", md: "start" }}
        textAlign={{ xs: "center", md: "left" }}
      >
        {cost}
      </GridItem>
    </Grid>
  );

  const TableHeader = () => (
    <Grid
      width="100%"
      templateColumns="3fr 1fr"
      py="7px"
      px="10px"
      backgroundColor="#d9edf7"
      borderY="1px solid #bfbfbf"
      fontSize={{ xs: "11px", lg: "13px" }}
      fontWeight="600"
    >
      <GridItem justifySelf="start" textAlign="left">
        Discretionary Leave
      </GridItem>
      <GridItem justifySelf="start" textAlign="left">
        £1,500 - £2,500
      </GridItem>
    </Grid>
  );

  return (
    <Box
      display="flex"
      flexDir="column"
      color="black"
      width="90%"
      justifyContent="center"
      alignItems="center"
    >
      <HStack
        borderTop="1px solid #adacac"
        width="100%"
        justifyContent="space-between"
        px={{
          xs: "8px",
          sm: "10px",
          md: "12px",
          lg: "13px",
          xl: "14px",
          "2xl": "15px",
        }}
        py={{
          xs: "4px",
          sm: "6px",
          md: "7px",
          lg: "8px",
          xl: "9px",
          "2xl": "10px",
        }}
        cursor="pointer"
        _hover={{ backgroundColor: !isOpen && "black" }}
        transition="all 0.3s ease"
        backgroundColor={isOpen ? "black" : undefined}
        onClick={onToggle}
      >
        <Text
          textAlign="left"
            fontSize={{
                    xs: "11px",
                    sm: "11px",
                    md: "13px",
                    lg: "13px",
                    xl: "15px",
                    "2xl": "17px",
                  }}
                  fontWeight={600}
          fontFamily="CeraRoundPro"
          color="#bf9b30"
        >
          Other Immigration Applications:
        </Text>
        {!isOpen ? (
          <GoPlus color="#bf9b30" size="1.7em" />
        ) : (
          <AiOutlineMinus color="#bf9b30" size="1.7em" />
        )}
      </HStack>

      {isOpen && (
        <VStack
          width="100%"
          spacing={0}
          borderTop="1px solid #adacac"
          py={{ xs: "15px", md: "30px" }}
        >
          <TableHeader />
          {visaData.map((visa, index) => (
            <TableRow
              key={index}
              type={visa.type}
              cost={visa.cost}
              isAlternate={index % 2 !== 0}
            />
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default ImmiApps;
