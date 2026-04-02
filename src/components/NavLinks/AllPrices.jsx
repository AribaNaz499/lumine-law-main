import { Text, Box, Grid, GridItem } from "@chakra-ui/react";
import "../../styles/fonts.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import ImmigrationImg from "../../assets/pricing/immigration.jpg";
import DebtRecoovery from "../../assets/pricing/debtRecovery.jpg";
import BannerImg from "../../assets/pricing/priceBanner.jpg";

// Price card data
const priceCards = [
  {
    title: "Property Prices",
    path: "/prices/property-prices",
    image: BannerImg,
  },
  {
    title: "Debt Recovery Prices",
    path: "/prices/debt-recovery",
    image: DebtRecoovery,
  },
  {
    title: "Immigration Prices",
    path: "/prices/immigration-prices",
    image: ImmigrationImg,
  },
];

// Reusable price card component
const PriceCard = ({ item }) => (
  <GridItem
    width="100%"
    height={{
      base: "160px",
      sm: "175px",
      md: "185px",
      lg: "210px",
      xl: "235px",
      "2xl": "260px",
    }}
    padding={{ base: "10px 12px", lg: "10px 20px" }}
    border="1px solid black"
    borderRadius="8px"
    cursor="pointer"
    _hover={{
      opacity: "0.8",
      transition: "all 0.5s ease",
    }}
    bgImage={`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${item.image})`}
    bgPos="center"
    bgSize="cover"
    bgRepeat="no-repeat"
  >
    <Link to={item.path} style={{ textDecoration: "none" }}>
      <Box
        height="100%"
        display="flex"
        flexFlow="column"
        justifyContent="space-between"
        alignItems="flex-start"
        gap="10px"
      >
        <Text
          fontSize={{
            base: "15px",
            sm: "16px",
            md: "19px",
            lg: "21px",
            xl: "23px",
            "2xl": "25px",
          }}
          fontFamily="CeraRoundPro"
          fontWeight={400}
          textAlign="left"
          color="#ffffff"
          mt="20px"
        >
          {item.title}
        </Text>

        {/* ✅ Arrow FIX (same as original look) */}
        <Box mb="10px" alignSelf="flex-end">
          <HiOutlineArrowLongRight color="#ffffff" size="2em" />
        </Box>
      </Box>
    </Link>
  </GridItem>
);

const AllPrices = () => {
  return (
    <Box mb="50px" px={{ base: "4%", sm: "4%", md: "4%" }}>
      {/* Header */}
      <Text
        color="black"
        fontSize={{
          base: "22px",
          sm: "24px",
          md: "28px",
          lg: "32px",
          xl: "34px",
          "2xl": "36px",
        }}
        fontWeight={400}
        fontFamily="CeraRoundPro"
        mb={{
          base: "20px",
          sm: "25px",
          md: "30px",
          lg: "40px",
          xl: "45px",
          "2xl": "50px",
        }}
        textAlign="left"
      >
        Pricing
      </Text>

      {/* Cards */}
      <Box
        width="100%"
        display="flex"
        flexFlow="column"
        alignItems="center"
        color="black"
      >
        <Grid
          width="100%"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{
            base: "14px",
            sm: "16px",
            md: "20px",
            lg: "23px",
            xl: "25px",
            "2xl": "27px",
          }}
          justifyItems="center"
          alignItems="center"
        >
          {priceCards.map((card, index) => (
            <PriceCard key={index} item={card} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AllPrices;