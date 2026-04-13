import { Text, Container, Box, HStack, VStack, List } from "@chakra-ui/react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "../../../styles/fonts.css";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AllServiceLinks from "../../NavLinks/AllServiceLinks";
import AllPrices from "../../NavLinks/AllPrices";
import AllNewsInsights from "../../NavLinks/AllNewsInsights";
import BannerImg from "../../../assets/services/main/wills-probate/banner.jpg";
import { Heading } from "@chakra-ui/react";

const Probate = () => {
  const [spouseState, setSpouseState] = useState(false);
  const [eligibilityState, setEligibilityState] = useState(false);
  const [applicationState, setApplicationState] = useState(false);
  const [decisionState, setDecisionState] = useState(false);
  const [helpState, setHelpState] = useState(false);

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
          <title>Lumine Law Probate Services</title>
        </Helmet>

        <Box width="100%" flex="1" p={0} m={0} pt={"50px"}>
          {/* Banner */}
          <Box
            width={"100%"}
            height={{
              xs: "295px",
              lg: "320px",
              xl: "345px",
              "2xl": "370px",
            }}
            bgImage={`url(${BannerImg})`}
            bgSize={"cover"}
            bgPos={"center"}
            bgRepeat={"no-repeat"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            _loading={"eager"}
          >
            <Text
              fontSize={{ xs: "28px", lg: "38px", xl: "44px", "2xl": "54px" }}
              fontWeight={650}
              fontFamily={"CeraRoundPro"}
              width={"90%"}
              textAlign={"left"}
            >
              Probate Solicitor in London
            </Text>
          </Box>

          {/* Main */}
          <Box
            width={"100%"}
            display={"flex"}
            flexFlow={"column"}
            mt={-5}
            color={"black"}
          >
            <Box
              width={"90%"}
              alignSelf={"center"}
              mb={"5%"}
              my={{ xs: "5%", md: "2.5%" }}
            >
            </Box>
          </Box>

          {/* Dropdown info */}
          <VStack
            justifyContent={"space-around"}
            alignItems={"center"}
            mb={"50px"}
            px={{ xs: 2, sm: 3, md: 4 }}
          >
            {/* What is Probate */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={{ base: "95%", sm: "92%", md: "90%" }}
              justifyContent={"center"}
              alignItems={"flex-start"}
            >
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ xs: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ xs: "4px", sm: "6px", md: "7px", lg: "8px", xl: "9px", "2xl": "10px" }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !spouseState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setSpouseState(!spouseState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  What is Probate?
                </Text>
                {!spouseState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {spouseState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  textAlign={"justify"}
                  width={"100%"}
                >
                  <Text
                    textAlign={"justify"}
                    fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                    fontWeight={400}
                    lineHeight={1.7}
                    fontFamily={"CeraRoundPro"}
                    px={{ xs: 1, md: 2 }}
                    width={"100%"}
                    color="black"
                  >
                    Probate involves the administration process of a deceased person's estate. To begin the administration of the estate, it must be established whether a valid will has been left by the deceased, what assets and possessions are owned by the deceased, and any debts owed by the deceased. Using this, the inheritance tax due is calculated. To prevent liability, taxes and debts must be paid, and assets and the estate must be distributed accordingly. If the deceased fails to make a will, then it can lead to their assets being distributed according to the rules of intestacy and not as per their wishes.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* Arrangements */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={{ base: "95%", sm: "92%", md: "90%" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <HStack
                borderTop={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ xs: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ xs: "4px", sm: "6px", md: "7px", lg: "8px", xl: "9px", "2xl": "10px" }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !eligibilityState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setEligibilityState(!eligibilityState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  Arrangements
                </Text>
                {!eligibilityState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {eligibilityState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Text
                    textAlign={"justify"}
                    fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                    fontWeight={400}
                    lineHeight={1.7}
                    fontFamily={"CeraRoundPro"}
                    px={{ xs: 1, md: 2 }}
                    width={"100%"}
                    color="black"
                  >
                    When it comes to your probate matter, we will arrange a personal meaning that will provide you with the processing time and cost of your matter. Following this, we will calculate the value of all the assets and complete the inheritance tax forms for payments to be made. A grant of probate will need to be received. This is a legal document that gives authority to deal with the deceased's estate.
                  </Text>
                </VStack>
              )}
            </Box>

            {/* How can Lumine Solicitors Help? */}
            <Box
              display={"flex"}
              flexDir={"column"}
              color={"black"}
              width={{ base: "95%", sm: "92%", md: "90%" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <HStack
                borderY={"1px solid #adacac"}
                width={"100%"}
                justifyContent={"space-between"}
                px={{ xs: "8px", sm: "10px", md: "12px", lg: "13px", xl: "14px", "2xl": "15px" }}
                alignItems={"center"}
                py={{ xs: "4px", sm: "6px", md: "7px", lg: "8px", xl: "9px", "2xl": "10px" }}
                cursor={"pointer"}
                _hover={{ backgroundColor: !decisionState && "black" }}
                transition={"all 0.3s ease"}
                backgroundColor={"black" && "black"}
                onClick={() => setDecisionState(!decisionState)}
              >
                <Text
                  textAlign={"left"}
                  fontSize={{ xs: "11px", sm: "11px", md: "13px", lg: "13px", xl: "15px", "2xl": "17px" }}
                  fontWeight={500}
                  fontFamily={"CeraRoundPro"}
                  color={"#bf9b30"}
                >
                  How can Lumine Solicitors Help?
                </Text>
                {!decisionState ? (
                  <GoPlus color={"#bf9b30"} size={"1.7em"} />
                ) : (
                  <AiOutlineMinus color={"#bf9b30"} size={"1.7em"} />
                )}
              </HStack>

              {decisionState && (
                <VStack
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  gap={{ xs: "20px", md: "30px" }}
                  mb={{ xs: "4px", md: "10px" }}
                  borderTop={"1px solid #adacac"}
                  py={{ xs: "15px", md: "30px" }}
                  width={"100%"}
                >
                  <Text
                    textAlign={"justify"}
                    fontSize={{ xs: "11px", sm: "11px", md: "12.5px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                    fontWeight={400}
                    lineHeight={1.7}
                    fontFamily={"CeraRoundPro"}
                    px={{ xs: 1, md: 2 }}
                    width={"100%"}
                    color="black"
                  >
                    Lumine solicitors recognise that discussing and planning the death or loss of a loved one is never an easy process, but we ensure to take the necessary legal steps to protect your wealth and assets for your loved one's future. If you have any further queries or are interested in our will services please do not hesitate to get in touch with Lumine solicitors <strong>020 3950 2246</strong> or{" "}
                    <strong>
                      <Link to={"/contact"} style={{ color: "#efdc6b" }} onMouseLeave={(e) => (e.target.style.color = "#efdc6b")}>
                        Contact Us HERE
                      </Link>
                    </strong>
                  </Text>
                </VStack>
              )}
            </Box>
          </VStack>

          {/* ✅ Main Content Wrapper - RESPONSIVE */}
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            px={{ base: "12px", sm: "20px", md: "30px", lg: "40px", xl: "60px" }}
          >
            {/* 1. Introduction */}
            <Box width={"100%"} maxW="1200px" my={{ xs: "5%", md: "2.5%" }}>
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={600}
                fontSize={{ xs: "14px", lg: "26px", xl: "30px", "2xl": "40px" }}
                color={"gray"}
                textAlign={{ base: "center", lg: "left" }}
                mb={3}
                ml={{ lg: "5" }}
                mr={{ lg: "5" }}
                pr={{ lg: "10" }}
                mt={{ base: "4", lg: "-16" }}
              >
                Probate Solicitor in London
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                color={"gray"}
                textAlign={"justify"}
                lineHeight={1.5}
                ml={{ lg: "1" }}
                mr={{ lg: "2" }}
                pr={{ lg: "10" }}
                px={{ base: 2, sm: 3, md: 4 }}
              >
                <b>Trusted Probate & Estate Administration Services in London</b><br />
                Dealing with the estate of a loved one after their passing can be emotionally overwhelming and legally complex. At Lumine Law, our experienced probate solicitors in London provide compassionate, professional guidance to make the process as smooth and stress-free as possible. Whether your case involves a straightforward estate or a complex situation with international assets, we handle everything with care, precision, and complete transparency.
              </Text>
            </Box>

            {/* 2. What Is Probate */}
            <Box width={"100%"} maxW="1200px" my={{ xs: "5%", md: "2.5%" }}>
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={600}
                fontSize={{ xs: "14px", lg: "26px", xl: "30px", "2xl": "40px" }}
                color={"gray"}
                textAlign={{ base: "center", lg: "left" }}
                mb={3}
                ml={{ lg: "5" }}
                mr={{ lg: "2" }}
                mt={{ lg: "-11" }}
                pr={{ lg: "10" }}
              >
                What Is Probate and Why It Matters
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                color={"gray"}
                textAlign={"justify"}
                lineHeight={1.5}
                ml={{ lg: "2" }}
                mr={{ lg: "2" }}
                pr={{ lg: "10" }}
                px={{ base: 2, sm: 3, md: 4 }}
              >
                Probate is the legal and financial process of administering a deceased person's estate, collecting their assets, settling any debts and taxes, and distributing what remains to the rightful beneficiaries. If there is a Will, the executors apply for a Grant of Probate. If there is no Will, the process continues under the rules of intestacy, and the administrators apply for Letters of Administration. Both situations require careful handling of legal paperwork, tax matters, and deadlines.
              </Text>
            </Box>

            {/* 3. How We Help */}
            <Box width={"100%"} maxW="1200px" my={{ xs: "5%", md: "2.5%" }}>
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={600}
                fontSize={{ xs: "14px", lg: "26px", xl: "30px", "2xl": "40px" }}
                color={"gray"}
                textAlign={{ base: "center", lg: "left" }}
                mb={3}
                ml={{ lg: "5" }}
                mr={{ lg: "2" }}
                mt={{ lg: "-10" }}
                pr={{ lg: "10" }}
              >
                How Our Probate Solicitors in London Can Help
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                color={"gray"}
                textAlign={"justify"}
                lineHeight={1.5}
                mb={3}
                ml={{ lg: "2" }}
                mr={{ lg: "2" }}
                pr={{ lg: "10" }}
                px={{ base: 2, sm: 3, md: 4 }}
              >
                Our team assists with every stage of the probate and estate administration process, including:
              </Text>
              <List.Root
                textAlign={"left"}
                lineHeight={1.7}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                fontWeight={400}
                fontFamily={"CeraRoundPro"}
                color={"gray"}
                pl={{ base: 4, md: 6 }}
                mt={2}
                ml={{ lg: "1" }}
                mr={{ lg: "2" }}
                pr={{ lg: "10" }}
              >
                <List.Item>Preparing and submitting probate or intestacy applications</List.Item>
                <List.Item>Valuing all estate assets and liabilities</List.Item>
                <List.Item>Advising on and calculating Inheritance Tax (IHT)</List.Item>
                <List.Item>Liaising directly with HM Revenue & Customs (HMRC)</List.Item>
                <List.Item>Settling debts and distributing assets to beneficiaries</List.Item>
                <List.Item>Resolving disputes among executors, beneficiaries, or family members</List.Item>
                <List.Item>Advising on executor duties to help you avoid personal liability</List.Item>
              </List.Root>
            </Box>

            {/* 4. Inheritance Tax */}
            <Box width={"100%"} maxW="1200px" my={{ xs: "5%", md: "2.5%" }}>
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={600}
                fontSize={{ xs: "14px", lg: "26px", xl: "30px", "2xl": "40px" }}
                color={"gray"}
                textAlign={{ base: "center", lg: "left" }}
                mb={3}
                ml={{ lg: "5" }}
                mr={{ lg: "2" }}
                mt={{ lg: "-10" }}
                pr={{ lg: "10" }}
              >
                Inheritance Tax & HMRC Guidance
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                color={"gray"}
                textAlign={"justify"}
                lineHeight={1.5}
                ml={{ lg: "2" }}
                mr={{ lg: "2" }}
                pr={{ lg: "10" }}
                px={{ base: 2, sm: 3, md: 4 }}
              >
                Navigating inheritance tax (IHT) can be challenging. We provide step-by-step advice on completing HMRC forms, determining tax liabilities, and ensuring all payments are made on time. Where inheritance tax is due, we can also help you explore practical ways to raise funds, such as selling assets or securing short-term financing. We handle communication with HMRC on your behalf, ensuring full compliance and minimizing unnecessary delays.
              </Text>
            </Box>

            {/* 5. Cross-Border Probate */}
            <Box width={"100%"} maxW="1200px" my={{ xs: "5%", md: "2.5%" }}>
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={600}
                fontSize={{ xs: "14px", lg: "26px", xl: "30px", "2xl": "40px" }}
                color={"gray"}
                textAlign={{ base: "center", lg: "left" }}
                mb={3}
                ml={{ lg: "5" }}
                mr={{ lg: "2" }}
                mt={{ lg: "-10" }}
                pr={{ lg: "10" }}
              >
                Cross-Border & International Probate
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                color={"gray"}
                textAlign={"justify"}
                lineHeight={1.5}
                ml={{ lg: "2" }}
                mr={{ lg: "2" }}
                pr={{ lg: "10" }}
                px={{ base: 2, sm: 3, md: 4 }}
              >
                If the deceased owned property or assets outside the UK, our international probate solicitors in London can manage the process from start to finish. We work with foreign lawyers to release or transfer overseas assets, reseal foreign grants of probate, and have foreign documents recognized in UK courts. Whether the person died domiciled in the UK or abroad, we ensure the estate is administered properly across all jurisdictions.
              </Text>
            </Box>

            {/* 6. Deeds of Variation */}
            <Box width={"100%"} maxW="1200px" my={{ xs: "5%", md: "2.5%" }}>
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={600}
                fontSize={{ xs: "14px", lg: "26px", xl: "30px", "2xl": "40px" }}
                color={"gray"}
                textAlign={{ base: "center", lg: "left" }}
                mb={3}
                ml={{ lg: "5" }}
                mr={{ lg: "2" }}
                mt={{ lg: "-10" }}
                pr={{ lg: "10" }}
              >
                Deeds of Variation & Estate Planning
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                color={"gray"}
                textAlign={"justify"}
                lineHeight={1.5}
                ml={{ lg: "2" }}
                mr={{ lg: "2" }}
                pr={{ lg: "10" }}
                px={{ base: 2, sm: 3, md: 4 }}
              >
                Even after someone passes away, tax planning may still be possible. We can help beneficiaries or executors prepare a Deed of Variation, which allows changes to the distribution of an estate to reduce inheritance tax or achieve fairer outcomes. Alternatively, an inheritance can be disclaimed if it's not needed. Our probate solicitors in London will explain all available options clearly and in plain English.
              </Text>
            </Box>

            {/* 7. Contentious Probate */}
            <Box width={"100%"} maxW="1200px" my={{ xs: "5%", md: "2.5%" }}>
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={600}
                fontSize={{ xs: "14px", lg: "26px", xl: "30px", "2xl": "40px" }}
                color={"gray"}
                textAlign={{ base: "center", lg: "left" }}
                mb={3}
                ml={{ lg: "3" }}
                mr={{ lg: "2" }}
                pr={{ lg: "10" }}
                mt={{ lg: "-10" }}
              >
                Contentious or Disputed Probate
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                color={"gray"}
                textAlign={"justify"}
                lineHeight={1.5}
                ml={{ lg: "2" }}
                mr={{ lg: "2" }}
                pr={{ lg: "10" }}
                px={{ base: 2, sm: 3, md: 4 }}
              >
                Unfortunately, probate disputes can arise over the validity of a Will, how an executor handles the estate, or under the Inheritance Act 1975. Our contentious probate solicitors specialise in resolving these disagreements with sensitivity and professionalism. We aim for early resolution through negotiation or mediation but are also fully prepared to represent you in court if needed.
              </Text>
            </Box>

            {/* 8. Why Choose Us */}
            <Box width={"100%"} maxW="1200px" my={{ xs: "5%", md: "2.5%" }}>
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={600}
                fontSize={{ xs: "14px", lg: "26px", xl: "30px", "2xl": "40px" }}
                color={"gray"}
                textAlign={{ base: "center", lg: "left" }}
                mb={3}
                ml={{ lg: "5" }}
                mr={{ lg: "5" }}
                mt={{ lg: "-10" }}
                pr={{ lg: "10" }}
              >
                Why Choose Lumine Law
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                color={"gray"}
                textAlign={"justify"}
                lineHeight={1.7}
                ml={{ lg: "2" }}
                mr={{ lg: "2" }}
                pr={{ lg: "10" }}
                px={{ base: 2, sm: 3, md: 4 }}
              >
                ✅ <b>Experienced Probate Solicitors</b> – Extensive experience in complex international estates.<br />
                ✅ <b>STEP & SRA Accredited</b> – Regulated by the SRA and members of STEP.<br />
                ✅ <b>Transparent Fees</b> – Clear, upfront pricing with no hidden surprises.<br />
                ✅ <b>Local Expertise</b> – Deep understanding of London court procedures and property issues.<br />
                ✅ <b>Compassionate Approach</b> – Combining legal expertise with genuine empathy.
              </Text>
            </Box>

            {/* FAQ Section */}
            <Box width={"100%"} maxW="1200px" my={{ xs: "5%", md: "2.5%" }}>
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={600}
                fontSize={{ xs: "14px", lg: "26px", xl: "30px", "2xl": "40px" }}
                mb={4}
                color={"gray"}
                textAlign={{ base: "center", lg: "left" }}
                ml={{ lg: "5" }}
                mr={{ lg: "2" }}
                pr={{ lg: "10" }}
                mt={{ lg: "-10" }}
              >
                Frequently Asked Questions (FAQs)
              </Heading>

              <Box mb={2}>
                <Text
                  textAlign={{ base: "left", lg: "left" }}
                  fontFamily={"CeraRoundPro"}
                  fontWeight={600}
                  fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                  color={"gray"}
                  mb={1}
                  ml={{ lg: "2" }}
                  mr={{ lg: "2" }}
                  pr={{ lg: "10" }}
                  px={{ base: 2, sm: 3, md: 4 }}
                >
                  1. How long does probate take in the UK?
                </Text>
                <Text
                  fontFamily={"CeraRoundPro"}
                  fontWeight={400}
                  fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                  color={"gray"}
                  textAlign={"justify"}
                  lineHeight={1.5}
                  ml={{ lg: "2" }}
                  mr={{ lg: "2" }}
                  pr={{ lg: "10" }}
                  px={{ base: 2, sm: 3, md: 4 }}
                >
                  On average, probate takes between 6 to 12 months, depending on the complexity of the estate and whether there are any disputes or foreign assets.
                </Text>
              </Box>

              <Box mb={2}>
                <Text
                  textAlign={{ base: "left", lg: "left" }}
                  fontFamily={"CeraRoundPro"}
                  fontWeight={600}
                  fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                  color={"gray"}
                  mb={1}
                  ml={{ lg: "2" }}
                  mr={{ lg: "2" }}
                  pr={{ lg: "10" }}
                  px={{ base: 2, sm: 3, md: 4 }}
                >
                  2. Do I always need a probate solicitor?
                </Text>
                <Text
                  fontFamily={"CeraRoundPro"}
                  fontWeight={400}
                  fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                  color={"gray"}
                  textAlign={"justify"}
                  lineHeight={1.5}
                  ml={{ lg: "2" }}
                  mr={{ lg: "2" }}
                  pr={{ lg: "10" }}
                  px={{ base: 2, sm: 3, md: 4 }}
                >
                  Not always, but legal support ensures the process is done correctly — avoiding mistakes that could delay estate distribution or cause personal liability for executors.
                </Text>
              </Box>

              <Box mb={2}>
                <Text
                  textAlign={{ base: "left", lg: "left" }}
                  fontFamily={"CeraRoundPro"}
                  fontWeight={600}
                  fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                  color={"gray"}
                  mb={1}
                  ml={{ lg: "2" }}
                  mr={{ lg: "2" }}
                  pr={{ lg: "10" }}
                  px={{ base: 2, sm: 3, md: 4 }}
                >
                  3. How much does probate cost in London?
                </Text>
                <Text
                  fontFamily={"CeraRoundPro"}
                  fontWeight={400}
                  fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                  color={"gray"}
                  textAlign={"justify"}
                  lineHeight={1.5}
                  ml={{ lg: "2" }}
                  mr={{ lg: "2" }}
                  pr={{ lg: "10" }}
                  px={{ base: 2, sm: 3, md: 4 }}
                >
                  Costs vary by estate size and complexity. We provide a clear quote before starting work and offer fixed-fee options where possible.
                </Text>
              </Box>

              <Box mb={2}>
                <Text
                  textAlign={{ base: "left", lg: "left" }}
                  fontFamily={"CeraRoundPro"}
                  fontWeight={600}
                  fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                  color={"gray"}
                  mb={1}
                  ml={{ lg: "2" }}
                  mr={{ lg: "2" }}
                  pr={{ lg: "10" }}
                  px={{ base: 2, sm: 3, md: 4 }}
                >
                  4. What happens if there is no Will?
                </Text>
                <Text
                  fontFamily={"CeraRoundPro"}
                  fontWeight={400}
                  fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                  color={"gray"}
                  textAlign={"justify"}
                  lineHeight={1.5}
                  ml={{ lg: "2" }}
                  mr={{ lg: "2" }}
                  pr={{ lg: "10" }}
                  px={{ base: 2, sm: 3, md: 4 }}
                >
                  If someone dies intestate, the estate is distributed under the UK's intestacy rules. We can guide you through obtaining <i>Letters of Administration</i> and managing the estate accordingly.
                </Text>
              </Box>
            </Box>

            {/* Final Section */}
            <Box width={"100%"} maxW="1200px" my={{ xs: "5%", md: "2.5%" }}>
              <Heading
                as={"h2"}
                fontFamily={"CeraRoundPro"}
                fontWeight={600}
                fontSize={{ xs: "14px", lg: "26px", xl: "30px", "2xl": "40px" }}
                color={"gray"}
                textAlign={{ base: "center", lg: "left" }}
                mb={3}
                ml={{ lg: "3" }}
                mr={{ lg: "2" }}
                pr={{ lg: "10" }}
                mt={{ lg: "-10" }}
              >
                Speak to a Trusted Probate Solicitor in London
              </Heading>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                color={"gray"}
                textAlign={"justify"}
                lineHeight={1.5}
                mb={3}
                ml={{ lg: "1" }}
                mr={{ lg: "2" }}
                pr={{ lg: "10" }}
                px={{ base: 2, sm: 3, md: 4 }}
              >
                If you've recently lost a loved one and need expert legal guidance, contact our probate solicitors in London today. We'll help you understand your options, complete all legal requirements, and protect your family's best interests with care and professionalism.
              </Text>
              <Text
                fontFamily={"CeraRoundPro"}
                fontWeight={400}
                fontSize={{ xs: "11px", lg: "12.5px", xl: "14.5px", "2xl": "16.5px" }}
                color={"gray"}
                textAlign={"justify"}
                lineHeight={1.5}
                ml={{ lg: "1" }}
                mr={{ lg: "3" }}
                pr={{ lg: "10" }}
                px={{ base: 2, sm: 3, md: 4 }}
              >
                📞 Call us today or 📩 book a consultation online — our experienced probate team is here to help you every step of the way.
              </Text>
            </Box>
          </Box>

          {/* Other Services */}
          <AllServiceLinks />
          <AllPrices />
          <AllNewsInsights />
          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default Probate;