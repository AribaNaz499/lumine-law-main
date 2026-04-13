import React, { Suspense } from "react";
import {
  Text,
  Container,
  Box,
  HStack,
  VStack,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import AllPrices from "../../NavLinks/AllPrices";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import AllServiceLinks from "../../NavLinks/AllServiceLinks";

// Import all images
import BannerImg from "../../../assets/services/main/immigration/immigrationBanner.jpeg";
import "../../../styles/fonts.css";

const immigrationServices = [
  { title: "Administrative Reviews, Appeals and Judicial Reviews", path: "/all-services/immigration/reviews-appeals" },
  { title: "Asylum", path: "/all-services/immigration/asylum" },
  { title: "British Citizenship Application", path: "/all-services/immigration/british-citizenship-application" },
  { title: "Certificate of Sponsorship", path: "/all-services/immigration/cos" },
  { title: "Creative Worker Visa", path: "/all-services/immigration/creative-worker" },
  { title: "Discretionary Leave", path: "/all-services/immigration/discretionary-leave" },
  { title: "Entry Clearance Applications from Outside of the UK", path: "/all-services/immigration/entry-clearance" },
  { title: "EU Settlement Scheme Applications", path: "/all-services/immigration/eu-settlement" },
  { title: "Immigration Bail and Revocation of a Deportation Order", path: "/all-services/immigration/bail-revocation" },
  { title: "Indefinite Leave to Remain", path: "/all-services/immigration/indefinite-leave" },
  { title: "Innovator Founder Visa", path: "/all-services/immigration/innovator-founder" },
  { title: "Private Life/Humans Right-Based Applications", path: "/all-services/immigration/human-rights" },
  { title: "Skilled Migrant Sponsorship Licence Applications", path: "/all-services/immigration/skilled-migrant" },
  { title: "Skilled Worker Visa", path: "/all-services/immigration/skilled-worker-visa" },
  { title: "Spouse Visa", path: "/all-services/immigration/spouse-visa" },
  { title: "Student Visa", path: "/all-services/immigration/student-visa" },
  { title: "Switching Visa Categories from within the UK", path: "/all-services/immigration/visa-categories" },
  { title: "UK Visitor Visa", path: "/all-services/immigration/uk-visitor-visa" },
  { title: "Visa Extensions from within the UK", path: "/all-services/immigration/visa-extensions" },
];

const ImmigrationServiceButton = ({ service }) => (
  <GridItem
    as={Link}
    to={service.path}
    color="black"
    border="1px solid black"
    borderRadius="8px"
    width="100%"
    height={{ base: "90px", xs: "100px", sm: "125px", md: "150px", lg: "175px" }}
    display="flex"
    justifyContent="center"
    alignItems="center"
    backgroundColor="white"
    _hover={{ backgroundColor: "#000000", color: "white", transition: "0.3s ease all", fontWeight: "600" }}
    fontSize={{ base: "10px", xs: "11px", sm: "11px", md: "13px", lg: "14px" }}
    fontWeight={500}
    fontFamily="CeraRoundPro"
    cursor="pointer"
    p="10px 5px"
    textAlign="center"
  >
    {service.title}
  </GridItem>
);

const Banner = () => (
  <Box width="100%" height={{ base: "220px", xs: "260px", lg: "310px", xl: "360px", "2xl": "410px" }} position="relative" overflow="hidden">
    <Box position="absolute" top="0" left="-12" right="0" bottom="0" bgImage={`url(${BannerImg})`} bgSize="cover" bgPos="center" bgRepeat="no-repeat" transition="transform 0.3s ease" _hover={{ transform: "scale(1.05)" }} />
    <Box position="absolute" top="0" left="0" right="0" bottom="0" bg="rgba(0, 0, 0, 0.3)" zIndex={1} />
    <Box position="relative" zIndex={2} display="flex" justifyContent="flex-start" alignItems="center" width="100%" height="100%">
      <Text fontSize={{ base: "22px", xs: "30px", sm: "34px", md: "38px", lg: "42px", xl: "44px" }} fontWeight={650} fontFamily="CeraRoundPro" ml={{ base: "5%", md: "5%" }} color="white" textShadow="2px 2px 4px rgba(0,0,0,0.5)">
        Top Immigration Solicitor in London
      </Text>
    </Box>
  </Box>
);

const MainContent = () => (
  <Box width="100%" display="flex" flexFlow="column" color="black" px={{ base: "5%", md: "0" }}>
    <HStack justifyContent="flex-start" alignItems="center" mt="2%" mb="1%" ml={{ base: "0", md: "5%" }}>
      <Text fontFamily="CeraRoundPro" fontSize={{ base: "21px", md: "29px" }} fontWeight={400}>What is Immigration?</Text>
    </HStack>
    <Box width={{ base: "100%", md: "95%" }} alignSelf="center" mb={{ base: "10%", xs: "15%", sm: "10%", md: "7.5%", xl: "5%" }}>
      <Text fontFamily="CeraRoundPro" fontWeight={400} ml={{ base: 0, md: 9 }} fontSize={{ base: "12px", md: "14px" }} textAlign="justify">
        Immigration refers to the legal process of moving to another country to live, work, study or join family members. In the UK, immigration is regulated by strict laws, eligibility requirements and visa categories that applicants must meet.
        <br /> <br />
        Whether you need a work visa, spouse visa, student visa, ILR, or British citizenship, immigration law ensures that every application follows official Home Office rules. This is why many people choose to work with an experienced immigration solicitor in London who can guide them through the complex process, prepare strong documentation, and increase their chances of approval.
      </Text>
    </Box>
  </Box>
);

const ImmigrationServicesGrid = () => (
  <Box width="100%" display="flex" flexFlow="column" alignItems="center" color="black" mb={{ base: "20px", xs: "25px", lg: "50px" }}>
    <Grid templateColumns={{ base: "repeat(2, 1fr)", xs: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }} width={{ base: "90%", xs: "80%", md: "85%", lg: "85%", xl: "90%" }} justifySelf="center" justifyItems="center" gap={{ base: "8px", lg: "12px", xl: "17px" }}>
      {immigrationServices.map((service, index) => <ImmigrationServiceButton key={index} service={service} />)}
    </Grid>
  </Box>
);

const ImageContentSection = () => (
  <Box bg="white" width="100%" py={10} px={{ base: "5%", md: "8%" }} color="gray.700">
    <VStack align="flex-start" spacing={{ base: 6, md: 10 }} maxW="1300px" mx="auto">
      <Box textAlign={"left"} color={"#7a7a7a"}>
        <Heading as="h2" fontSize={{ base: "20px", md: "29px" }} fontWeight="600" mb={4} mt={{ base: 0, md: '-87px' }} >
          Immigration Lawyers & Solicitors in London
        </Heading>
        <Text fontSize={{ base: "13px", md: "15px" }} lineHeight="1.3" textAlign="justify">
          Looking for reliable and experienced immigration lawyers in London? Whether you're applying for a visa, seeking permanent residence, or planning to bring family to the UK, our team of highly qualified immigration solicitors in London is here to guide you every step of the way.
        </Text>
        <Text fontSize={{ base: "13px", md: "15px" }} lineHeight="1.3" textAlign="justify"> At Lumine Solicitors, we're proud to be recognised among the top immigration lawyers London has to offer. With a combined experience of over 85 years, our legal team provides practical, results-driven advice on all aspects of UK immigration law. We represent both individuals and businesses, offering clear, honest, and up-to-date legal support tailored to your circumstances.
        </Text>
      </Box>

      <Box textAlign={"left"} color={"#7a7a7a"}>
        <Heading as="h2" fontSize={{ base: "20px", md: "25px" }} mt={6} fontWeight="600" mb={3}>
          Trusted UK Immigration Solicitors in London
        </Heading>
        <Text fontSize={{ base: "13px", md: "15px" }} lineHeight="1.3" textAlign="justify">
          Our award-winning team of UK immigration lawyers in London is known for its high success rates and unmatched client care. As one of the most respected immigration law firms London offers, we handle a wide range of immigration matters — from family visas and sponsorship applications to business immigration and British citizenship.
        </Text>
        <Text fontSize={{ base: "13px", md: "15px" }} lineHeight="1.3" textAlign="justify">
          We understand that navigating the UK's complex immigration system can be overwhelming. That's why our clients trust us to deliver expert legal support that is efficient, cost-effective, and focused on outcomes.
        </Text>
        <Text fontSize={{ base: "13px", md: "15px" }} lineHeight="1.3" textAlign="justify">
          Whether you are in the UK or overseas, our immigration law solicitors in London can support you remotely through Zoom, Microsoft Teams, or phone consultations.
        </Text>
      </Box>

      <Box w="100%" color={"#7a7a7a"}>
        <Heading as="h3" fontSize={{ base: "20px", md: "25px" }} textAlign={"left"} fontWeight="600" mb={4}>
          Immigration Services We Provide
        </Heading>
        <Text textAlign={"left"} fontSize={{ base: "13px", md: "15px" }} mt={"-7px"} mb={"14px"}>
          Our firm offers legal assistance for all types of immigration matters. Below is a selection of our most in-demand services:
        </Text>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 1 }} spacingY={2} spacingX={10} ml={{ base: 2, md: 5 }}>
          {[
            "Asylum and Human Rights Applications", "Skilled Worker Visas", "Temporary Worker Visas",
            "Global Business Mobility Visas", "UK Expansion Worker Visas", "Innovator and Start-up Visas",
            "High Potential Individual Visas", "Global Talent Visas", "Student Visas",
            "Spouse and Partner Visas", "Adult Dependant Visas", "Sponsor Licence Applications and Compliance",
            "Indefinite Leave to Remain (ILR)", "Naturalisation / British Citizenship", "EU Settlement Scheme"
          ].map((item) => (
            <HStack key={item} align="center">
              <Box w="6px" h="6px" bg="gray.500" borderRadius="50%" flexShrink={0} />
              <Text fontSize="15px" fontWeight={item === "Skilled Worker Visas" ? "bold" : "normal"}>
                {item}
              </Text>
            </HStack>
          ))}
        </SimpleGrid>
        <Text textAlign={'left'} fontSize={"15px"} mt={"23px"} mb={1} >
          If your immigration matter isn't listed above, don't worry — we can still help. Our team deals with even the most complex and niche cases. We offer full legal support for both individual and corporate immigration needs.
        </Text>
      </Box>

      <Box color={"#7a7a7a"}>
        <Heading as="h3" fontSize={{ base: "21px", md: "25px" }} textAlign={"left"} fontWeight="600" mb={4}>
          Why Choose Lumine Solicitors?
        </Heading>
        <Text textAlign={"left"} fontSize={{ base: "13px", md: "15px" }}  mb={"22px"}>
          When selecting UK immigration solicitors, it's important to choose a firm that understands your goals and puts your case first. Here's why clients choose us over other immigration solicitors London wide:
        </Text>
        <VStack align="flex-start" spacing={3} lineHeight={"1.2"} ml={{ base: 2, md: 5 }} mt={4}>
          <Text fontSize="15px"><strong>• Proven Track Record:</strong> We've successfully handled thousands of immigration cases.</Text>
          <Text fontSize="15px"><strong>• Transparent Fees:</strong> No hidden charges — we provide clear costs from day one.</Text>
          <Text fontSize="15px"><strong>• Remote Consultations:</strong> Assist you via secure video or phone calls.</Text>
          <Text fontSize="15px"><strong>• Client-Centred Approach:</strong> Your case is unique. We listen, advise, and act in your best interest.</Text>
        </VStack>
        <Text ml={{ base: 3, md: "-38%" }} mt={8} fontSize="15px" ><strong>Full UK Coverage: </strong>While based in London, we work with clients throughout the UK and globally.</Text>
      </Box>

      <Box color={"#7a7a7a"}>
        <Heading as="h3" fontSize={{ base: "18px", md: "25px" }} mt={2} textAlign={"left"} fontWeight="600" mb={4}>
          Good Immigration Solicitors London Can Count On
        </Heading>
        <Text textAlign={"left"} fontSize={"15px"}  >
          Finding good immigration lawyers in London doesn't have to be difficult. Our commitment to legal excellence, ethical advice, and client satisfaction makes us the go-to choice for individuals, families, and businesses seeking immigration support.
        </Text>
        <Text textAlign={"left"} fontSize={"15px"} mb={"22px"}>
          We're not just any <strong>immigration attorneys in London</strong> — we are your long-term partners in achieving immigration success. Whether you need help applying for a work visa, resolving a refused application, or bringing a family member to the UK, our experienced legal team is ready to support you.
        </Text>
      </Box>

      <Box color={"#7a7a7a"}>
        <Heading as="h3" fontSize={{ base: "18px", md: "25px" }} textAlign={"left"} fontWeight="600" mb={2} >
          Get in Touch Today
        </Heading>
        <Text textAlign={"left"} fontSize={"15px"} mb={"22px"}>
          If you're searching for the <strong>best immigration lawyers London</strong> has to offer, contact Lumine Solicitors today. Speak directly with an experienced <strong>immigration lawyer London</strong> based, and receive honest, professional advice tailored to your needs.
        </Text>
      </Box>
    </VStack>
  </Box>
);

const Immigration = () => {
  return (
    <Container width="100vw" maxWidth="100%" minHeight="100vh" backgroundColor="#a2cce0" overflowX="hidden" m={0} p={0} display="flex" flexDirection="column">
      <Helmet><title>Lumine Law Immigration Services</title></Helmet>

      <Box width="100%" flex="1" p={0} m={0} pt={{ base: "20px", md: "50px" }}>
        <Banner />
        <MainContent />
        <ImmigrationServicesGrid />

        <Box bg="white" width="100%" py={8}>
          <Suspense fallback={<div>Loading All Services ...</div>}>
            <AllServiceLinks />
          </Suspense>
        </Box>

        <ImageContentSection />

        <Box width="100%" py={8}>
          <Suspense fallback={<div>Loading All Prices ...</div>}>
            <AllPrices />
          </Suspense>
        </Box>

        <Box width="100%" mt={"-4%"}>
          <Suspense fallback={<div>Loading All News and Insights ...</div>}>
            <AllNewsInsights />
          </Suspense>
        </Box>

        <Footer />
      </Box>
    </Container>
  );
};

export default Immigration;