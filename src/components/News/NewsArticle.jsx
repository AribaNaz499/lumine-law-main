import { useEffect, useState } from 'react';
import { Text, Box, Grid, GridItem, Image, Spinner, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { supabase } from '../../config/supabaseClient';
import "../../styles/fonts.css";

// Assets Import
import NewsInsightsOne from "../../assets/landing/newsInsightsFour.jpg";
import NewsInsightsTwo from "../../assets/landing/newsInsightTwo.webp";
import NewsInsightsThree from "../../assets/landing/newsInsightThree.jpg";
import NewsInsightsFour from "../../assets/pricing/immigration.jpg";
import NewsInsightsFive from "../../assets/services/main/immigration/immigration-banner.webp";
import NewsInsightsSix from "../../assets/landing/landingImg.jpg";
import NewsInsightsSeven from "../../assets/landing/newsInsightsSeven.jpg";
import NewsInsightsEight from "../../assets/landing/newsInsightsEight.jpg";
import NewsInsightsNine from "../../assets/landing/newsInsightsNine.png";
import NewsInsightsTen from "../../assets/landing/newsInsightsTen.jpg";
import NewsInsightsEleven from "../../assets/landing/newsInsightsEleven.jpg";
import NewsInsightsTwelve from "../../assets/landing/newsInsightsTwelve.png";
import NewsInsightsFourteen from "../../assets/landing/newsInsightsFourteen.jpg";

const images = [
  NewsInsightsOne, NewsInsightsTwo, NewsInsightsThree, NewsInsightsFour,
  NewsInsightsFive, NewsInsightsSix, NewsInsightsSeven, NewsInsightsEight,
  NewsInsightsNine, NewsInsightsTen, NewsInsightsEleven, NewsInsightsTwelve,
  NewsInsightsTen, NewsInsightsFourteen, NewsInsightsFive,
];

// 21 Fixed Cards
const fixedArticles = [
  { id: 1, title: "Key Updates Regarding the UK’s Transition to eVisas", date: "March 24, 2026", image_url: images[0], content: "Over 4 million UK visa holders have successfully set up their UKVI account..." },
  { id: 2, title: "All you need to know about Visitor Visa in UK", date: "March 24, 2026", image_url: images[1], content: "All you need to know about the UK visa. This blog talks about everything regarding visitor visas." },
  { id: 3, title: "All about switching Visa Categories from within the UK", date: "March 24, 2026", image_url: images[2], content: "How to switch visas within the UK, you will find all the details one needs here." },
  { id: 4, title: "Step by Step Guide for Student Visas in UK", date: "March 24, 2026", image_url: images[3], content: "All you need to know about student visa requirements, sponsorships, and qualifications." },
  { id: 5, title: "UK Student Visa: Your Complete Guide to Studying in the UK", date: "March 24, 2026", image_url: images[3], content: "Everything you need to know about UK student Visa. All questions answered." },
  { id: 6, title: "How to ensure a successful student visa application", date: "March 24, 2026", image_url: images[0], content: "Tips by Lumine Solicitors on ensuring your Student Visa (previously Tier 4) is successful." },
  { id: 7, title: "How Lumine Solicitors help international students thrive in UK?", date: "March 24, 2026", image_url: images[0], content: "Sponsorship process under UK Visa and how we can help you with your application." },
  { id: 8, title: "Navigating the Skilled Worker Visa Process", date: "March 24, 2026", image_url: images[0], content: "The Skilled Worker Visa is presently the top tool for foreign nationals working in the UK." },
  { id: 9, title: "How Lumine Solicitors support employer and applicants with skilled workers visa?", date: "March 24, 2026", image_url: images[14], content: "Supporting employers and applicants throughout the skilled worker visa journey." },
  { id: 10, title: "How to apply for Skilled Worker Visa in UK?", date: "March 24, 2026", image_url: images[5], content: "Know all about how to apply for skilled worker visa in the United Kingdom." },
  { id: 11, title: "Tips for British Citizenship process by Lumine Solicitors", date: "March 24, 2026", image_url: images[1], content: "Everything that you need to know about your British citizenship process." },
  { id: 12, title: "Pathway Towards Indefinite Leave to Remain – Shift UK Innovators Visa to ILR", date: "March 24, 2026", image_url: images[5], content: "One of the best ways to get permanent residency in the UK is the UK Innovator Visa." },
  { id: 13, title: "UK Spouse Visa Application Process: Guide By Lumine Solicitors", date: "March 24, 2026", image_url: images[2], content: "If you are married to a British citizen or settled person, here is how to apply." },
  { id: 14, title: "Government Unveils White Paper to Reform UK Immigration – May 2025", date: "March 24, 2026", image_url: images[6], content: "Bold measures to reduce net migration and reshape the legal immigration routes." },
  { id: 15, title: "Immigration Rules Statement of Changes – 24 June 2025", date: "March 24, 2026", image_url: images[7], content: "Major changes affecting family route applications and long residence." },
  { id: 16, title: "Immigration Rules Statement of Changes - 1 July 2025", date: "March 24, 2026", image_url: images[8], content: "Significant updates to the Immigration Rules as outlined in Statement HC 997." },
  { id: 17, title: "Overseas Adoption and UK Immigration Law", date: "October 22, 2025", image_url: images[12], content: "Understanding the Upper Tribunal's Decision in ST (Adoptions: 'overseas' adoptions)." },
  { id: 18, title: "UK Immigration Rules Update – 14 October 2025", date: "October 16, 2025", image_url: images[10], content: "Ensuring clients are always up to date with the latest legal changes." },
  { id: 19, title: "Court of Appeal Rules on Child Refugee Family Reunion Policy", date: "October 13, 2025", image_url: images[11], content: "A landmark for UK immigration law changing how the government handles reunions." },
  { id: 20, title: "Court of Appeal Clarifies Immigration Curtailment Decisions", date: "October 8, 2025", image_url: images[13], content: "What it means for migrants when the way a notice is served changes." },
  { id: 21, title: "Grandmother's case shows how UK courts balance compassion with public interest", date: "September 29, 2025", image_url: images[13], content: "The Court of Appeal judgment in SSHD v Erika Kapp regarding Article 8 ECHR." },
];

const NewsArticle = () => {
  const [articles, setArticles] = useState(fixedArticles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlugs = async () => {
      setLoading(true);
      try {
        // Filter lagaya category 'immigration' ka
        const { data, error } = await supabase
          .from('articles')
          .select('title, slug')
          .eq('published', true)
          .eq('category', 'immigration'); 

        if (!error && data) {
          const mappedArticles = fixedArticles.map(card => {
            const dbMatch = data.find(dbItem => 
              dbItem.title.trim().toLowerCase() === card.title.trim().toLowerCase()
            );
            
            return {
              ...card,
              dynamicSlug: dbMatch ? dbMatch.slug : "not-found" 
            };
          });
          setArticles(mappedArticles);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSlugs();
  }, []);

  if (loading) return <Center py={20}><Spinner size="xl" color="blue.500" /></Center>;

  return (
    <Grid
      templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
      gap={{ base: "16px", sm: "20px", md: "24px", xl: "40px" }}
      mb={"5%"}
      width={"100%"}
    >
      {articles.map((article) => (
        <GridItem
          key={article.id}
          as={Link}
          to={`/immigration-news/${article.dynamicSlug}`}
          cursor="pointer"
          display={"flex"}
          flexDir={"column"}
          border={"1px solid #2a2a2b"}
          borderRadius={"10px"}
          overflow={"hidden"}
          bg="white"
          boxShadow={"sm"}
          _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
          transition={"0.3s all ease"}
        >
          <Image src={article.image_url} alt={article.title} height="230px" width="100%" objectFit="cover" />
          <Box p="20px" display="flex" flexDir="column" flex="1">
            <Text fontSize="12px" color="gray.500" mb="2">{article.date}</Text>
            <Text fontSize="17px" fontWeight="700" color="black" mb="2" noOfLines={2}>{article.title}</Text>
            <Text fontSize="14px" color="gray.600" noOfLines={3}>{article.content}</Text>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default NewsArticle;