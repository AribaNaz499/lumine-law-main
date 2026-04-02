import { Text, Box, VStack, Grid, GridItem, Flex } from "@chakra-ui/react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import "../../styles/fonts.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

// Import all images
import ImmigrationImg from "../../assets/services/main/immigration/ImmigrationImg.jpg";
import ResidentialImg from "../../assets/services/main/residential/residentialImg.jpg";
import DisputeImg from "../../assets/services/main/dispute/disputeImg.jpg";
import LandlordImg from "../../assets/services/main/landlord/landlordImg.jpg";
import FamilyImg from "../../assets/services/main/family/familychildrenImg.jpg";
import IntellectualImg from "../../assets/services/main/intellectual/intellectualProperty.jpg";
import CommercialImg from "../../assets/services/main/commercial/commercialImg.jpg";
import WillsProbateImg from "../../assets/services/main/wills-probate/willprobateImg.jpg";
import AllServicesImg from "../../assets/services/all/privatecrimeImg.jpg";

const services = [
  {
    title: "Immigration",
    path: "/all-services/immigration",
    image: ImmigrationImg,
    description: "Lumine Solicitors specialised immigration team, based in London, offers a wide range of services to cover all immigration.",
    textColor: "#ffffff",
  },
  {
    title: "Residential Property",
    path: "/all-services/residential",
    image: ResidentialImg,
    description: "When it comes to legal matters concerning property we provide expertise that you can rely on and trust. Whether it’s for residential .",
    textColor: "#ffffff",
  },
  {
    title: "Commercial Property",
    path: "/all-services/commercial",
    image: CommercialImg,
    description: "When it comes to legal matters concerning property we provide expertise that you can rely on and trust. Whether it’s for residential .",
    textColor: "#ffffff",
  },
  {
    title: "Intellectual Property",
    path: "/all-services/intellectual-property",
    image: IntellectualImg,
    description: "Intellectual Property services to safeguard your creations and innovations.",
    textColor: "#ffffff",
  },
  {
    title: "Dispute Resolution and Civil Litigation",
    path: "/all-services/dispute-resolution",
    image: DisputeImg,
    description: "Dispute resolution solicitors in London offer a range of services to settle disputes between individuals and also for businesses.",
    textColor: "#ffffff",
  },
  {
    title: "Landlord & Tenant Disputes",
    path: "/all-services/landlord-tenant",
    image: LandlordImg,
    description: "Lumine Solicitors specialised immigration team, based in London, offers a wide range of services to cover all immigration.",
    textColor: "#ffffff",
  },
  {
    title: "Family & Children",
    path: "/all-services/family-and-children",
    image: FamilyImg,
    description: "When it comes to legal matters concerning property we provide expertise that you can rely on and trust. Whether it’s for residential .",
    textColor: "#ffffff",
  },
  {
    title: "Wills and Probate",
    path: "/all-services/wills-probate",
    image: WillsProbateImg,
    description: "Dispute resolution solicitors in London offer a range of services to settle disputes between individuals and also for businesses.",
    textColor: "#ffffff",
  },
  {
    title: "Private Crime",
    path: "/all-services/private-crime",
    image: AllServicesImg,
    description: "We offer high-end criminal defence representation to private clients, professionals, and public figures facing serious criminal allegations.",
    textColor: "#ffffff",
  },
];

const ServiceCard = ({ service }) => (
  <GridItem
    width="100%"
    height={{
      base: "290px",
      sm: "290px",
      md: "310px",
      lg: "360px",
      xl: "380px",
      "2xl": "410px",
    }}
    padding={{ base: "20px", lg: "25px" }} 
    borderRadius="12px" // Thoda smooth look ke liye
    cursor="pointer"
    position="relative"
    _hover={{
      opacity: "0.9",
      transform: "scale(1.02)",
      transition: "all 0.3s ease",
    }}
    bgImage={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${service.image})`}
    bgPos="center"
    bgSize="cover"
    bgRepeat="no-repeat"
  >
    <Link to={service.path} style={{ textDecoration: "none", height: "100%", display: "block" }}>
      <Flex
        direction="column"
        height="100%"
        justifyContent="space-between" // Isse content upar-niche phail jayega
        alignItems="center"
        textAlign="center"
      >
        {/* Empty Box: Taake text bilkul center mein hi rahe */}
        <Box height="20px" /> 

        {/* Text Container: Yeh hamesha center mein rahega */}
        <VStack spacing={3} width="100%">
          <Text
            fontSize={{ base: "18px", md: "20px", lg: "22px" }}
            fontFamily="CeraRoundPro"
            fontWeight={500}
            color={service.textColor}
          >
            {service.title}
          </Text>

          <Text
            fontSize={{ base: "13px", md: "14px", lg: "15px" }}
            color={service.textColor}
            fontFamily="CeraRoundPro"
            fontWeight={300}
            lineHeight="1.6"
            maxW="90%"
            mx="auto"
          >
            {service.description}
          </Text>
        </VStack>

        {/* Arrow Section: Yeh hamesha bottom mein rahega */}
        <Box width="100%" display="flex" justifyContent="flex-start">
          <HiOutlineArrowLongRight 
            color={service.textColor} 
            size="45px" // Image ke mutabiq ye size perfect hai
          />
        </Box>
      </Flex>
    </Link>
  </GridItem>
);

const AllServiceLinks = () => {
  return (
    <Box mb="50px" _loading="lazy">
      {/* Header */}
      <Box width="100%" display="flex" flexFlow="column" color="black">
        <Box width="90%" alignSelf="center">
          <Text
            color="black"
            fontSize={{
              xs: "28px",
              sm: "28px",
              md: "30px",
              lg: "32px",
              xl: "34px",
              "2xl": "36px",
            }}
            fontWeight={400}
            mb={{
              xs: "25px",
              sm: "30px",
              md: "35px",
              lg: "40px",
              xl: "45px",
              "2xl": "50px",
            }}
            textAlign="left"
          >
            Services
          </Text>
        </Box>
      </Box>

      {/* List */}
      <Box
        width="100%"
        display="flex"
        flexFlow="column"
        alignItems="center"
        color="black"
      >
        <Grid
          width="92%"
          templateColumns={{
            base: "repeat(1, 1fr)",   // Mobile: 1 card
            sm: "repeat(2, 1fr)",     // Small tablets: 2 cards
            md: "repeat(2, 1fr)",     // Tablets: 2 cards
            lg: "repeat(4, 1fr)",     // Desktop: 4 cards
            xl: "repeat(4, 1fr)",     // Large desktop: 4 cards
            "2xl": "repeat(4, 1fr)"   // Extra large: 4 cards
          }}
          gap={{
            base: "12px",
            sm: "15px",
            md: "18px",
            lg: "20px",
            xl: "22px",
            "2xl": "25px",
          }}
          justifyItems="center"
          alignItems="center"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AllServiceLinks;
