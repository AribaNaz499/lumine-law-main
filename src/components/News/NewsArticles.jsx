// import { Text, Box, Grid, GridItem, Image } from "@chakra-ui/react";
// import "../../styles/fonts.css";
// import NewsInsightsOne from "../../assets/landing/newsInsightsFour.jpg";
// import NewsInsightsTwo from "../../assets/landing/newsInsightTwo.webp";
// import NewsInsightsThree from "../../assets/landing/newsInsightThree.jpg";
// import NewsInsightsFour from "../../assets/pricing/immigration.jpg";
// import NewsInsightsFive from "../../assets/services/main/immigration/immigration-banner.webp";
// import NewsInsightsSix from "../../assets/landing/landingImg.jpg";
// import NewsInsightsSeven from "../../assets/landing/newsInsightsSeven.jpg";
// import NewsInsightsEight from "../../assets/landing/newsInsightsEight.jpg";
// import NewsInsightsNine from "../../assets/landing/newsInsightsNine.png";
// import NewsInsightsTen from "../../assets/landing/newsInsightsTen.jpg";
// import NewsInsightsEleven from "../../assets/landing/newsInsightsEleven.jpg";
// import NewsInsightsTwelve from "../../assets/landing/newsInsightsTwelve.png";
// import NewsInsightsThirteen from "../../assets/landing/newsInsightsTen.jpg";
// import NewsInsightsFourteen from "../../assets/landing/newsInsightsFourteen.jpg";
// import NewsInsightsFifteen from "../../assets/services/main/immigration/immigration-banner.webp";
// import { Link } from "react-router-dom";

// const images = [
//   NewsInsightsOne, NewsInsightsTwo, NewsInsightsThree, NewsInsightsFour,
//   NewsInsightsFive, NewsInsightsSix, NewsInsightsSeven, NewsInsightsEight,
//   NewsInsightsNine, NewsInsightsTen, NewsInsightsEleven, NewsInsightsTwelve,
//   NewsInsightsThirteen, NewsInsightsFourteen, NewsInsightsFifteen,
// ];

// const articles = [
//   {
//     key: 1,
//     image: images[0],
//     date: "March 24, 2026",
//     slug: "evisa-updates",
//     heading: "Key Updates Regarding the UK's Transition to eVisas",
//     description: "Over 4 million UK visa holders have successfully set up their UKVI account to access their eVisa...",
//   },
//   {
//     key: 2,
//     image: images[1],
//     date: "March 24, 2026",
//     slug: "all-you-need-to-know-about-visitor-visa-in-uk",
//     heading: "All you need to know about Visitor Visa in UK",
//     description: "All you need to know about the UK visa. This blog talks about everything regarding visitor visas.",
//   },
//   {
//     key: 3,
//     image: images[2],
//     date: "March 24, 2026",
//     slug: "switching-visa-categories",
//     heading: "All about switching Visa Categories from within the UK",
//     description: "How to switch visas within the UK, you will find all the details one needs here.",
//   },
//   {
//     key: 4,
//     image: images[3],
//     date: "March 24, 2026",
//     slug: "student-visa-guide",
//     heading: "Step by Step Guide for Student Visas in UK",
//     description: "All you need to know about student visa requirements, sponsorships, and qualifications.",
//   },
//   {
//     key: 5,
//     image: images[3],
//     date: "March 24, 2026",
//     slug: "uk-student-visa-complete-guide",
//     heading: "UK Student Visa: Your Complete Guide to Studying in the UK",
//     description: "Everything you need to know about UK student Visa. All questions answered.",
//   },
//   {
//     key: 6,
//     image: images[0],
//     date: "March 24, 2026",
//     slug: "successful-student-visa-application",
//     heading: "How to ensure a successful student visa application",
//     description: "Tips by Lumine Solicitors on ensuring your Student Visa (previously Tier 4) is successful.",
//   },
//   {
//     key: 7,
//     image: images[0],
//     date: "March 24, 2026",
//     slug: "how-lumine-helps-international-students",
//     heading: "How Lumine Solicitors help international students thrive in UK?",
//     description: "Sponsorship process under UK Visa and how we can help you with your application.",
//   },
//   {
//     key: 8,
//     image: images[0],
//     date: "March 24, 2026",
//     slug: "navigating-skilled-worker-visa",
//     heading: "Navigating the Skilled Worker Visa Process",
//     description: "The Skilled Worker Visa is presently the top tool for foreign nationals working in the UK.",
//   },
//   {
//     key: 9,
//     image: images[14],
//     date: "March 24, 2026",
//     slug: "support-for-skilled-worker-visas",
//     heading: "How Lumine Solicitors support employer and applicants with skilled workers visa?",
//     description: "Supporting employers and applicants throughout the skilled worker visa journey.",
//   },
//   {
//     key: 10,
//     image: images[5],
//     date: "March 24, 2026",
//     slug: "how-to-apply-skilled-worker",
//     heading: "How to apply for Skilled Worker Visa in UK?",
//     description: "Know all about how to apply for skilled worker visa in the United Kingdom.",
//   },
//   {
//     key: 11,
//     image: images[1],
//     date: "March 24, 2026",
//     slug: "british-citizenship-tips",
//     heading: "Tips for British Citizenship process by Lumine Solicitors",
//     description: "Everything that you need to know about your British citizenship process.",
//   },
//   {
//     key: 12,
//     image: images[5],
//     date: "March 24, 2026",
//     slug: "innovators-visa-to-ilr",
//     heading: "Pathway Towards Indefinite Leave to Remain – Shift UK Innovators Visa to ILR",
//     description: "One of the best ways to get permanent residency in the UK is the UK Innovator Visa.",
//   },
//   {
//     key: 13,
//     image: images[2],
//     date: "March 24, 2026",
//     slug: "uk-spouse-visa-guide",
//     heading: "UK Spouse Visa Application Process: Guide By Lumine Solicitors",
//     description: "If you are married to a British citizen or settled person, here is how to apply.",
//   },
//   {
//     key: 14,
//     image: images[6],
//     date: "March 24, 2026",
//     slug: "immigration-reform-white-paper-2025",
//     heading: "Government Unveils White Paper to Reform UK Immigration – May 2025",
//     description: "Bold measures to reduce net migration and reshape the legal immigration routes.",
//   },
//   {
//     key: 15,
//     image: images[7],
//     date: "March 24, 2026",
//     slug: "immigration-rules-statement-june-2025",
//     heading: "Immigration Rules Statement of Changes – 24 June 2025",
//     description: "Major changes affecting family route applications and long residence.",
//   },
//   {
//     key: 16,
//     image: images[8],
//     date: "March 24, 2026",
//     slug: "immigration-rules-statement-july-2025",
//     heading: "Immigration Rules Statement of Changes - 1 July 2025",
//     description: "Significant updates to the Immigration Rules as outlined in Statement HC 997.",
//   },
//   {
//     key: 17,
//     image: images[12],
//     date: "October 22, 2025",
//     slug: "overseas-adoption-immigration-law",
//     heading: "Overseas Adoption and UK Immigration Law",
//     description: "Understanding the Upper Tribunal's Decision in ST (Adoptions: 'overseas' adoptions).",
//   },
//   {
//     key: 18,
//     image: images[10],
//     date: "October 16, 2025",
//     slug: "uk-immigration-rules-october-2025",
//     heading: "UK Immigration Rules Update – 14 October 2025",
//     description: "Ensuring clients are always up to date with the latest legal changes.",
//   },
//   {
//     key: 19,
//     image: images[11],
//     date: "October 13, 2025",
//     slug: "child-refugee-family-reunion",
//     heading: "Court of Appeal Rules on Child Refugee Family Reunion Policy",
//     description: "A landmark for UK immigration law changing how the government handles reunions.",
//   },
//   {
//     key: 20,
//     image: images[13],
//     date: "October 8, 2025",
//     slug: "immigration-curtailment-decisions",
//     heading: "Court of Appeal Clarifies Immigration Curtailment Decisions",
//     description: "What it means for migrants when the way a notice is served changes.",
//   },
//   {
//     key: 21,
//     image: images[13],
//     date: "September 29, 2025",
//     slug: "courts-balance-compassion-public-interest",
//     heading: "Grandmother's case shows how UK courts balance compassion with public interest",
//     description: "The Court of Appeal judgment in SSHD v Erika Kapp regarding Article 8 ECHR.",
//   },
// ];

// const NewsArticles = () => {
//   return (
//     <Grid
//       templateColumns={{
//         base: "1fr",
//         sm: "repeat(2, 1fr)",
//         xl: "repeat(3, 1fr)",
//       }}
//       gap={{ base: "16px", sm: "20px", md: "24px", xl: "40px" }}
//       mb={"5%"}
//       width={"100%"}
//     >
//       {articles.map((article) => (
//         <GridItem
//           as={Link}
//           to={`/immigration-news/${article.slug}`} // Fixed Dynamic Path
//           key={article.key}
//           cursor={"pointer"}
//           display={"flex"}
//           flexDir={"column"}
//           border={"1px solid #141414"}
//           borderRadius={"10px"}
//           overflow={"hidden"}
//           backgroundColor={"white"}
//           boxShadow={"0px 2px 10px rgba(0,0,0,0.05)"}
//           _hover={{
//             opacity: 0.9,
//             transform: "translateY(-3px)",
//           }}
//           transition={"0.3s all ease"}
//           textDecoration={"none"}
//         >
//           <Image
//             src={article.image}
//             alt={article.heading}
//             height={{ base: "200px", sm: "170px", md: "190px", lg: "200px", xl: "210px", "2xl": "230px" }}
//             width={"100%"}
//             objectFit={"cover"}
//             loading="lazy"
//           />

//           <Box
//             p={{ base: "14px", md: "18px", xl: "22px" }}
//             display={"flex"}
//             flexDir={"column"}
//             flex={"1"}
//             alignItems={"flex-start"}
//             fontFamily={"CeraRoundPro, sans-serif"}
//           >
//             <Text fontSize={{ base: "11px", md: "12px", xl: "14px" }} color={"#666666"} fontWeight={400} mb={"8px"}>
//               {article.date}
//             </Text>

//             <Text
//               fontSize={{ base: "13px", sm: "13px", md: "15px", lg: "15px", xl: "17px", "2xl": "19px" }}
//               textAlign={"left"}
//               color={"black"}
//               fontWeight={700}
//               lineHeight={"1.3"}
//               mb={"6px"}
//               noOfLines={2}
//             >
//               {article.heading}
//             </Text>

//             <Text
//               fontSize={{ base: "11px", sm: "11px", md: "12px", lg: "12px", xl: "13px", "2xl": "15px" }}
//               color={"#1f1e1e"}
//               fontWeight={400}
//               lineHeight={"1.5"}
//               noOfLines={3}
//               textAlign={"left"}
//             >
//               {article.description}
//             </Text>
//           </Box>
//         </GridItem>
//       ))}
//     </Grid>
//   );
// };

// export default NewsArticles;