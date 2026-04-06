import React from "react";
import { Box, Text, HStack, VStack, Grid, GridItem } from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

const VisitVisa = ({ isOpen, onToggle }) => {
  // Data for disbursements table
  const visaData = [
    {
      type: "Business Visitor Visa UK",
      cost: "£1,000",
    },
    {
      type: "Family Visitor Visa UK",
      cost: "£1,000",
    },
    {
      type: "Child Visitor",
      cost: "£1,000",
    },
    { type: "Entertainer Visitor Visa UK", cost: "£1,000" },
    {
      type: "General Visitor Visa UK",
      cost: "£1,000",
    },
    {
      type: "Parent of A Child At School",
      cost: "£1,000",
    },
    {
      type: "Prospective Entrepreneur Visa UK",
      cost: "£1,000",
    },
    {
      type: "Sports Visitors Visa UK",
      cost: "£1,000",
    },
    {
      type: "Student Visitor Visa UK",
      cost: "£1,000",
    },
    {
      type: "UK Visa For PLAB Test",
      cost: "£1,000",
    },
    {
      type: "Visitor For Marriage/Civil Partnership",
      cost: "£1,000",
    },
    {
      type: "Visitor For Private Medical Treatment",
      cost: "£1,000",
    },
    {
      type: "Visitor In Transit Visa UK",
      cost: "£1,000",
    },
    {
      type: "Visitor Under Approved Destination Status (ADS) Agreement With China",
      cost: "£1,000",
    },
    {
      type: "Visitors Undertaking Permitted Paid Engagements",
      cost: "£1,000",
    },
  ];

  const TableRow = ({ type, cost, isAlternate }) => (
    <Grid
      width="100%"
      templateColumns="3fr 1fr"
      py="20px"
      px="10px"
      // borderBottom="1px solid #bfbfbf"
      backgroundColor={isAlternate ? "#f3f3f3" : "#ffffff"}
      fontSize={{ xs: "12px", lg: "14px" }}
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
      py="20px"
      px="10px"
      backgroundColor="#d9edf7"
      borderY="1px solid #bfbfbf"
      fontSize={{ xs: "14px", lg: "16px" }}
      fontWeight="600"
    >
      <GridItem justifySelf="start" textAlign="left">
        Type Of Visa
      </GridItem>
      <GridItem justifySelf="start" textAlign="left">
        Our Cost
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
            xs: "13px",
            sm: "13px",
            md: "15px",
            lg: "15px",
            xl: "17px",
            "2xl": "19px",
          }}
          fontWeight={500}
          fontFamily="CeraRoundPro"
          color="#bf9b30"
        >
          Visitor Visa
        </Text>
        {!isOpen ? (
          <GoPlus color="#bf9b30" size="1.8em" />
        ) : (
          <AiOutlineMinus color="#bf9b30" size="1.8em" />
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

export default VisitVisa;
