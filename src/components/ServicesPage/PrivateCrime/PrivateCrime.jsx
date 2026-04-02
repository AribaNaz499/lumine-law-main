import React from 'react';
import {
    Box,
    Text,
    VStack,
    Container,
    Heading,
    SimpleGrid,
    Flex,
    HStack,
    Grid,
    Input,
    Textarea,
    Button
} from "@chakra-ui/react";
import Footer from "../../Footer/Footer";
import { FaBalanceScale, FaGlobe, FaUserSecret } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

// Import images
import PrivateCrimeImg from "../../../assets/services/main/privateCrime/privateCrime.jpg";
import ImmigrationImg from "../../../assets/services/main/immigration/ImmigrationImg.jpg";
import ResidentialImg from "../../../assets/services/main/residential/residentialImg.jpg";
import CommercialImg from "../../../assets/services/main/commercial/commercialImg.jpg";
import IntellectualImg from "../../../assets/services/main/intellectual/intellectualProperty.jpg";
import SectionBanner from "../../../assets/services/main/privateCrime/sectionBanner.jpg";
import Defence from "../../../assets/services/main/privateCrime/aboutUsCrime.jpg"
import CardsBg from "../../../assets/services/main/privateCrime/cardsBg.jpg"

const PrivateCrime = () => {
    const features = [
        {
            title: "Bespoke Advice",
            desc: "Our strategies are tailored to your specific case and goals and you will have a dedicated team working on your legal and non-legal aims.",
            icon: FaBalanceScale,
        },
        {
            title: "Global Reach",
            desc: "Our team are experienced across the UK, Europe, the Caribbean, South America, and the Middle East and have expertise in cases with transnational reach.",
            icon: FaGlobe,
        },
        {
            title: "Absolute Discretion",
            desc: "We provide confidential management of your case and will work to protect your reputation.",
            icon: FaUserSecret,
        },
    ];

    // Helper function to render icons without using Chakra's Icon component
    const renderIcon = (IconComponent, color, size) => {
        return React.createElement(IconComponent, {
            style: {
                color: color,
                width: size,
                height: size
            }
        });
    };

    return (
        <Box width="100%" bg="black">

            {/* SECTION 1: HERO */}
            <Box
                width="100%"
                height={{ base: "385px", md: "485px", lg: "585px" }}
                bgImage={`linear-gradient(to right, rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0.1) 100%), url(${PrivateCrimeImg})`}
                bgPos="center"
                bgSize="cover"
                display="flex"
                alignItems="center"
            >
                <Container maxW="container.xl">
                    <VStack
                        align="flex-start"
                        spacing={4}
                        maxW={{ base: "100%", md: "800px" }}
                        ml={{ base: "16px", md: "65px" }}
                        pl={{ base: "8px", md: "0" }}
                    >
                        <Text
                            color="white"
                            fontSize={{ base: "18px", md: "20px" }}
                            letterSpacing="1px"
                        >
                            Private Crime Specialists
                        </Text>
                        <Heading
                            as="h1"
                            color="white"
                            fontSize={{ base: "32px", sm: "38px", md: "52px", lg: "56px" }}
                            fontWeight={700}
                            lineHeight="1.1"
                            whiteSpace="normal"
                        >
                            Smart Buy to Let   <br />
                            <Box as="span" ml={{ base: "-120px", md: "-190px" }}>
                                Solutions
                            </Box>
                        </Heading>
                    </VStack>
                </Container>
            </Box>

            {/* SECTION 2: FEATURES */}
            <Box
                py={{ base: 10, md: 16 }}
                position="relative"
                bgImage={`url(${SectionBanner})`}
                bgSize="cover"
                bgPosition="right center"
                bgRepeat="no-repeat"
                overflow="hidden"
            >
                <Box
                    position="absolute"
                    inset={0}
                    bg="rgba(0, 0, 0, 0.2)"
                    zIndex={1}
                />

                <Container maxW="container.xl" position="relative" zIndex={2}>
                    <SimpleGrid
                        columns={{ base: 1, md: 3 }}
                        spacing={{ base: "40px", md: "80px", lg: "110px" }}
                        px={{ base: "4", md: "65px" }}
                        justifyContent={"space-between"}
                    >
                        {features.map((item, index) => (
                            <Flex key={index} gap={3} align="flex-start" justifyContent={"space-between"}>
                                <Box
                                    minW={{ base: "55px", md: "65px" }}
                                    h={{ base: "55px", md: "65px" }}
                                    border="3px solid #bf9b30"
                                    borderRadius="2px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    flexShrink={0}
                                    bg="rgba(0,0,0,0.5)"
                                >
                                    {renderIcon(item.icon, "#bf9b30", "24px")}
                                </Box>
                                <Box>
                                    <Text
                                        color="white"
                                        textAlign="left"
                                        fontSize={{ base: "18px", md: "20px" }}
                                        fontWeight="bold"
                                        mb={3}
                                    >
                                        {item.title}
                                    </Text>
                                    <Text
                                        color="#7a7a7a"
                                        fontSize={{ base: "13px", md: "14px" }}
                                        lineHeight="1.8"
                                        textAlign="left"
                                    >
                                        {item.desc}
                                    </Text>
                                </Box>
                            </Flex>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            {/* SECTION 3: EXACT CONTENT WITH LIST & CONSULTATION */}
                     {/* SECTION 3: EXACT CONTENT WITH LIST & CONSULTATION */}
            <Box bg="white" minH={{ base: "auto", md: "750px" }} position="relative" overflow="hidden" width="100%">
                {/* Background Image - Responsive positioning */}
                <Box
                    position={{ base: "relative", md: "absolute" }}
                    top={0}
                    right={0}
                    width={{ base: "100%", md: "52%" }}
                    height={{ base: "300px", md: "100%" }}
                    zIndex={1}
                    order={{ base: -1, md: 0 }}
                >
                    <img
                        src={Defence}
                        alt="Legal Specialist"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectPosition: 'center',
                            objectFit: 'cover'
                        }}
                    />
                </Box>

                <Container maxW="container.xl" px={{ base: "2", md: "45px" }} position="relative" zIndex={2}>
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        align="center"
                        minH={{ base: "auto", md: "750px" }}
                        justify="flex-start"
                        py={{ base: 8, md: 20 }}
                        gap={{ base: 6, md: 0 }}
                    >
                        <VStack
                            align="flex-start"
                            spacing={7}
                            maxW={{ base: "100%", md: "600px" }}
                            textAlign="left"
                            order={{ base: 1, md: 0 }}
                        >
                            <VStack align="flex-start" spacing={3}>
                                <Text
                                    color="#54595f"
                                    mt={{ base: "0px", md: "-30px" }}
                                    fontSize={{ base: "12px", md: "16px" }}
                                    fontWeight="700"
                                    textTransform="uppercase"
                                    letterSpacing="2px"
                                >
                                    About Us
                                </Text>
                                <Heading
                                    as="h2"
                                    color="#54595f"
                                    fontSize={{ base: "32px", md: "46px", lg: "56px" }}
                                    fontWeight="bold"
                                    lineHeight="1.2"
                                >
                                    Your Defence, Reinforced by <br />
                                    Global{' '}
                                    <Text as="span" color="#deb92c">Expertise</Text>
                                </Heading>
                            </VStack>

                            <Text color="#54595f" fontSize={{ base: "15px", md: "17px" }} lineHeight="1.5">
                                Our criminal team are amongst the best criminal specialists in the United Kingdom and
                                internationally. They will apply their skill gained from successfully representing
                                clients before all levels of Court in the United Kingdom, before the European Court
                                of Human Rights, Commission for the Control of INTERPOL Files, the African Court
                                of Human and People's Rights, as well as working with local Counsel all around the
                                world outside the from the Caribbean to South America and Europe.
                            </Text>

                            <Text color="#4A4A4A" fontSize={{ base: "15px", md: "17px" }} lineHeight="1.5">
                                The service we provide to you is a strictly personal service according to your
                                needs. We can meet you at your place of work, property or hotel, travel to you
                                outside of the United Kingdom to meet with you and manage cases you might be
                                facing across different jurisdictions.
                            </Text>

                            <SimpleGrid columns={{ base: 1, sm: 2 }} spacingX={10} spacingY={4} pt={2} width="100%">
                                <HStack align="center" spacing={2}>
                                    <Text color="#deb92c" fontSize={{ base: "20px", md: "22px" }} fontWeight="bold">→</Text>
                                    <Text color="#54595f" fontSize={{ base: "16px", md: "18px" }} fontWeight="400" letterSpacing={"tighter"}>Sexual Offences</Text>
                                </HStack>
                                <HStack align="center" spacing={2}>
                                    <Text color="#deb92c" fontSize={{ base: "20px", md: "22px" }} fontWeight="bold">→</Text>
                                    <Text color="#54595f" fontSize={{ base: "16px", md: "18px" }} fontWeight="400" letterSpacing={"tighter"}>Drug Offences</Text>
                                </HStack>
                                <HStack align="center" spacing={2}>
                                    <Text color="#deb92c" fontSize={{ base: "20px", md: "22px" }} fontWeight="bold">→</Text>
                                    <Text color="#54595f" fontSize={{ base: "16px", md: "18px" }} fontWeight="400" letterSpacing={"tighter"}>Violent Crime</Text>
                                </HStack>
                                <HStack align="center" spacing={2}>
                                    <Text color="#deb92c" fontSize={{ base: "20px", md: "22px" }} fontWeight="bold">→</Text>
                                    <Text color="#54595f" fontSize={{ base: "16px", md: "18px" }} fontWeight="400" letterSpacing={"tighter"}>Motoring Offences</Text>
                                </HStack>
                            </SimpleGrid>

                            <Box pt={4} pl={{ base: 4, md: 7 }}>
                                <Text as="span" fontSize={{ base: "20px", md: "26px" }} fontWeight="bold" color="#1A1A1A">
                                    Call For Consultation{' '}
                                </Text>
                                <Text
                                    as="span"
                                    fontSize={{ base: "18px", md: "23px" }}
                                    fontWeight="bold"
                                    color="#1A1A1A"
                                    textDecoration="underline"
                                    cursor="pointer"
                                    _hover={{ color: "#deb92c" }}
                                >
                                    02039502246
                                </Text>
                            </Box>
                        </VStack>
                    </Flex>
                </Container>
            </Box>

            {/* SECTION 4: SERVICES GRID (9 CARDS) */}
            <Box bgImage={`url(${CardsBg})`} bgSize="cover" bgPos="center" py={{ base: 12, md: 20 }} position="relative">
                <Box position="absolute" inset={0} bg="rgba(0, 0, 0, 0.5)" zIndex={1} />

                <Container maxW="container.xl" position="relative" zIndex={2} px={{ base: 4, md: "65px" }}>
                    <VStack spacing={{ base: 8, md: 12 }} mb={16}>
                        <VStack spacing={2}>
                            <Text mb={"15px"} color="white" fontWeight="400" textTransform="uppercase" letterSpacing="2px" fontSize={{ base: "12px", md: "14px" }}>
                                OUR SERVICES
                            </Text>
                            <Heading mb={"20px"} color="white" textAlign="center" lineHeight={"1.1"} fontSize={{ base: "16px", md: "18px", lg: "30px" }} fontWeight="600">
                                We provide expert legal advice and defence in a wide <br /> range of <Text as="span" color="#deb92c">criminal matters</Text>
                            </Heading>
                        </VStack>

                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={0} gap={5} w={{ base: "100%", md: "95%" }}>
                            {[
                                {
                                    title: "Serious Fraud & White-Collar Crime",
                                    desc: "We provide expert defence in complex financial crime matters, including tax evasion, money laundering, and insider trading.",
                                    icon: "https://img.icons8.com/ios/50/deb92c/handcuffs.png"
                                },
                                {
                                    title: "Sexual Offences",
                                    desc: "We provide specialist representation in cases involving rape, sexual assault, historic abuse, and online offences.",
                                    icon: "https://img.icons8.com/ios/50/deb92c/law.png"
                                },
                                {
                                    title: "Violent Crime",
                                    desc: "We represent clients in the most serious criminal matters, including charges of murder, manslaughter, grievous bodily harm (GBH), domestic violence, and firearms offences.",
                                    icon: "https://img.icons8.com/ios/50/deb92c/gavel.png"
                                },
                                {
                                    title: "Drug Offences",
                                    desc: "We act in serious criminal cases involving drug importation, trafficking, county lines, and conspiracy offences.",
                                    icon: "https://img.icons8.com/ios/50/deb92c/pill.png"
                                },
                                {
                                    title: "Cybercrime & Financial Misconduct",
                                    desc: "We provide expert defence in complex criminal cases involving drug importation, trafficking, county lines, and conspiracy offences.",
                                    icon: "https://img.icons8.com/ios/50/deb92c/laptop-metrics.png"
                                },
                                {
                                    title: "Motoring Offences",
                                    desc: "We provide expert defence in motoring offences, including drink driving, dangerous driving, speeding, and fatal accidents.",
                                    icon: "https://img.icons8.com/ios/50/deb92c/speed.png"
                                },
                                {
                                    title: "Extradition & INTERPOL",
                                    desc: "We provide expert representation in cases involving European Arrest Warrants (EAWs), Part 2 requests, and INTERPOL Red Notices.",
                                    icon: "https://img.icons8.com/ios/50/deb92c/globe-earth.png"
                                },
                                {
                                    title: "Appeals & Miscarriages of Justice",
                                    desc: "We handle conviction and sentence appeals, CCRC cases, and international appeals with expert representation.",
                                    icon: "https://img.icons8.com/ios/50/deb92c/scales.png"
                                },
                                {
                                    title: "Transnational Criminal cases",
                                    desc: "When your case spans borders, we expertly manage it to achieve the best outcome for you, your family, and your business.",
                                    icon: "https://img.icons8.com/ios/50/deb92c/briefcase.png"
                                }
                            ].map((service, idx) => (
                                <Box
                                    key={idx}
                                    border="4px dotted rgba(255, 255, 255, 0.99)"
                                    p={{ base: 6, md: 10 }}
                                    textAlign="center"
                                    transition="all 0.3s"
                                >
                                    <VStack spacing={5}>
                                        <img src={service.icon} alt={service.title} style={{ width: '50px', height: '50px' }} />
                                        <Text color="#deb92c" fontSize={{ base: "16px", md: "19px" }} fontWeight="bold">
                                            {service.title}
                                        </Text>
                                        <Text color="#ffff" fontSize={{ base: "13px", md: "15px" }} lineHeight="1.7" opacity={0.9}>
                                            {service.desc}
                                        </Text>
                                    </VStack>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </VStack>
                </Container>
            </Box>

            {/* Section 5  */}
            <Box bg="#f5f5f5" pt={{ base: 8, md: 10 }} pb={{ base: 8, md: 10 }}>
                <Container maxW="container.lg" px={{ base: 4, md: "80px" }}>
                    <Grid
                        templateColumns={{ base: "1fr", lg: "1.5fr 1fr 1fr" }}
                        gap={{ base: 6, lg: 14 }}
                        mb={{ base: 8, md: 10 }}
                        alignItems="center"
                    >
                        <VStack
                            align="flex-start"
                            spacing={4}
                            justifyContent="center"
                            height="100%"
                        >
                            <Text
                                color="#888"
                                fontSize={{ base: "12px", md: "13px" }}
                                fontWeight="500"
                                letterSpacing="2px"
                            >
                                TRIVIA
                            </Text>

                            <Heading
                                fontSize={{ base: "24px", md: "28px", lg: "30px" }}
                                lineHeight="1.2"
                                color="#54595f"
                                maxW="95%"
                                textAlign="left"
                            >
                                We are proud of our significant{" "}
                                <Text as="span" color="#deb92c">
                                    accomplishments
                                </Text>
                            </Heading>
                        </VStack>

                        <Text
                            color="#54595f"
                            fontSize={{ base: "13px", md: "15px" }}
                            lineHeight="1.9"
                            textAlign="left"
                        >
                            POCA, confiscation, and forfeiture proceedings can carry severe
                            consequences, including the loss of assets and future earnings. We
                            provide expert representation to defend your position and protect
                            your interests at every stage.
                        </Text>

                        <Text
                            color="#54595f"
                            fontSize={{ base: "13px", md: "15px" }}
                            lineHeight="1.9"
                            textAlign="left"
                        >
                            Our private client service is tailored for HNWIs, professionals,
                            directors, and public figures. With top barristers, experts, and PR
                            support, we safeguard every aspect of your case, from court to public
                            perception.
                        </Text>
                    </Grid>

                    <SimpleGrid
                        columns={{ base: 1, md: 3 }}
                        spacing={0}
                        gap={5}
                        textAlign="center"
                    >
                        <Box
                            bg="#bf9b30"
                            py={{ base: 4, md: 5 }}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Text fontSize={{ base: "32px", md: "40px", lg: "52px" }} color="white">
                                297
                            </Text>
                            <Text fontSize={{ base: "20px", md: "26px" }} color="white" mt={1}>
                                Completed works
                            </Text>
                        </Box>

                        <Box
                            bg="black"
                            py={{ base: 4, md: 5 }}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Text fontSize={{ base: "32px", md: "40px", lg: "52px" }} color="white">
                                295
                            </Text>
                            <Text fontSize={{ base: "20px", md: "26px" }} color="white" mt={1}>
                                Satisfied clients
                            </Text>
                        </Box>

                        <Box
                            bg="#bf9b30"
                            py={{ base: 4, md: 5 }}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Text fontSize={{ base: "32px", md: "40px", lg: "52px" }} color="white">
                                12
                            </Text>
                            <Text fontSize={{ base: "20px", md: "26px" }} color="white" mt={1}>
                                Team members
                            </Text>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>

            {/* SECTION 6 */}
            <Box
                w="100%"
                style={{
                    background: 'linear-gradient(to bottom, #000000 0%, #000000 50%, #8a6d00 100%)',
                    paddingTop: '4rem',
                    paddingBottom: '4rem',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column'
                }}
                sx={{
                    '@media (min-width: 768px)': {
                        paddingTop: '6rem',
                        paddingBottom: '6rem',
                        paddingLeft: '2rem',
                        paddingRight: '2rem',
                    },
                    '@media (min-width: 1024px)': {
                        paddingLeft: '4rem',
                        paddingRight: '4rem',
                    }
                }}
            >
                <Box maxW="1400px" mx="auto" position="relative" zIndex={1}>
                    {/* --- Top Row: Expert Team Info --- */}
                    <Grid templateColumns={{ base: "1fr", lg: "1fr 1.2fr" }} gap={{ base: 6, md: 10 }} mb={{ base: 12, md: 20 }} mt={"-5"} ml={{ base: "20px", md: "40px", lg: "60px" }} mr={{ base: "20px", md: "40px", lg: "60px" }}>
                        <VStack align="flex-start" spacing={4}>
                            <Text color="#f5f5f5" fontSize={{ base: "12px", md: "14px" }} fontWeight="300" letterSpacing="1px">
                                OUR TEAM
                            </Text>
                            <Heading mt={"3"} color="white" fontSize={{ base: "18px", sm: "20px", md: "30px" }} fontWeight="600" lineHeight="1.1" textAlign={"left"}>
                                Our Team of Expert Criminal <br />
                                <Text as="span" color="#deb92c">Law Specialists</Text>
                            </Heading>
                        </VStack>

                        <Text color="white" fontSize={{ base: "13px", md: "15px" }} lineHeight="1.7" textAlign={"left"} alignSelf="center">
                            At PrivateCrime.com, our team comprises some of the UK's most accomplished
                            criminal law specialists, with experience in domestic and international courts,
                            including the European Court of Human Rights and INTERPOL proceedings. Supported
                            by leading barristers, King's Counsel, forensic experts, and PR professionals, we
                            provide strategic, confidential, and tailored representation for every case. From
                            high-profile matters to complex transnational investigations, we protect your
                            interests, reputation, and future with precision and authority.
                        </Text>
                    </Grid>

                    {/* --- Middle Row: Feel Free to Ask & Icons --- */}
                    <Grid templateColumns={{ base: "1fr", lg: "1fr 1.2fr" }} gap={{ base: 6, md: 10 }} mb={{ base: 8, md: 10 }} alignItems="center" ml={{ base: "20px", md: "40px", lg: "60px" }} mr={{ base: "20px", md: "40px", lg: "60px" }}>
                        <VStack align="flex-start" spacing={3}>
                            <Text color="#f5f5f5" fontSize={{ base: "13px", md: "15px" }} fontWeight="400" letterSpacing="1px">
                                OUR TEAM
                            </Text>
                            <Heading mt={"3"} textAlign={"left"} color="white" fontSize={{ base: "18px", sm: "20px", md: "30px" }} fontWeight="600" lineHeight="1.2">
                                Feel free to ask something we are <br />
                                <Text as="span" color="#deb92c">here</Text>
                            </Heading>
                        </VStack>

                        {/* Contact Icons */}
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }} >
                            <HStack align="flex-start" spacing={4}>
                                <Box minW="28px">
                                    {React.createElement(FiMapPin, { style: { color: "#deb92c", width: "28px", height: "28px" } })}
                                </Box>
                                <Box>
                                    <Text color="white" fontWeight="400" fontSize={{ base: "14px", md: "16px" }}>2nd floor, 156 Cromwell Road,</Text>
                                    <Text color="whiteAlpha.800" fontSize={{ base: "13px", md: "15px" }} textAlign={"left"}>London, SW7 4EF</Text>
                                </Box>
                            </HStack>

                            <VStack align="flex-start" spacing={4}>
                                <HStack align="center" spacing={4}>
                                    <Box minW="24px">
                                        {React.createElement(FiPhone, { style: { color: "#deb92c", width: "24px", height: "24px" } })}
                                    </Box>
                                    <Text color="white" fontWeight="400" fontSize={{ base: "18px", md: "20px" }}>02039502246</Text>
                                </HStack>
                                <HStack align="center" spacing={4}>
                                    <Box minW="24px">
                                        {React.createElement(FiMail, { style: { color: "#deb92c", width: "24px", height: "24px" } })}
                                    </Box>
                                    <Text color="white" fontWeight="400" fontSize={{ base: "16px", md: "18px" }}>info@luminelaw.co.uk</Text>
                                </HStack>
                            </VStack>
                        </SimpleGrid>
                    </Grid>

                    {/* --- Bottom Row: FORM --- */}
                    <VStack spacing={6} w="100%" mt={20} alignItems="flex-start" ml={{ base: "20px", md: "40px", lg: "60px" }}>
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 6 }} gap={9} w="100%" maxW={{ base: "90%", md: "800px" }} mt={30}>
                            <Input
                                placeholder="First Name.."
                                bg="white"
                                h={{ base: "50px", md: "55px" }}
                                borderRadius="4px"
                                border="none"
                                _placeholder={{ color: "gray.500" }}
                            />
                            <Input
                                placeholder="Last Name.."
                                bg="white"
                                h={{ base: "50px", md: "55px" }}
                                borderRadius="4px"
                                border="none"
                                _placeholder={{ color: "gray.500" }}
                            />
                            <Input
                                placeholder="Email Address.."
                                bg="white"
                                h={{ base: "50px", md: "55px" }}
                                borderRadius="4px"
                                border="none"
                                _placeholder={{ color: "gray.500" }}
                            />
                        </SimpleGrid>

                        <Textarea
                            placeholder="Write.."
                            bg="white"
                            mt={{ base: "30px", md: "50px" }}
                            h={{ base: "140px", md: "160px" }}
                            borderRadius="3px"
                            border="none"
                            pt={5}
                            w="100%"
                            maxW={{ base: "90%", md: "800px" }}
                            _placeholder={{ color: "gray.500" }}
                        />

                        <Button
                            w="100%"
                            maxW={{ base: "90%", md: "800px" }}
                            mt={{ base: "20px", md: "30px" }}
                            bg="black"
                            color="white"
                            h={{ base: "45px", md: "50px" }}
                            fontSize={{ base: "14px", md: "16px" }}
                            fontWeight="500"
                            borderRadius="3px"
                            _hover={{ bg: "blackAlpha.800" }}
                        >
                            Send Message
                        </Button>
                    </VStack>
                </Box>
            </Box>

            {/* Footer */}
            <Footer />
            
        </Box>
    );
};

export default PrivateCrime;