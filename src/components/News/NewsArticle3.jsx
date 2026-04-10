import { useEffect, useState } from 'react';
import { Text, Box, Grid, GridItem, Image, Spinner, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { supabase } from '../../config/supabaseClient';
import "../../styles/fonts.css";

// Assets Import
import NewsInsightsOne from "../../assets/landing/news-insights-two.webp";
import NewsInsightsTwo from "../../assets/landing/newsInsigtsOne.webp";
import NewsInsightsThree from "../../assets/landing/conveyancingThree.jpg";
import NewsInsightsFour from "../../assets/landing/news-insights-one.webp";
import NewsInsightsFive from "../../assets/landing/news-insights-three.webp";
import NewsInsightsSix from "../../assets/landing/news-insights-four.webp";
import NewsInsightsSeven from "../../assets/pricing/priceBanner.jpg";
import NewsInsightsEight from "../../assets/landing/conveyancingFour.jpg";

const images = [
  NewsInsightsOne, NewsInsightsTwo, NewsInsightsThree, NewsInsightsFour,
  NewsInsightsFive, NewsInsightsSix, NewsInsightsSeven, NewsInsightsEight,
];

const fixedArticles = [
  { id: 1, title: "The Building Safety Act…", date: "March 24, 2026", image_url: images[0], content: "Understand the role of the Building Safety Act in property transactions and compliance requirements for conveyancing solicitors." },
  { id: 2, title: "A Guide to Commercial Conveyancing", date: "March 24, 2026", image_url: images[1], content: "Complete guide to commercial conveyancing, commercial property transactions, and property law essentials for businesses." },
  { id: 3, title: "A Complete Guide to Conveyancing", date: "March 24, 2026", image_url: images[2], content: "Discover the benefits of choosing a conveyancing solicitor from The Mortgage Works lender panel for smooth property transactions." },
  { id: 4, title: "Understanding the role of Solicitors", date: "March 24, 2026", image_url: images[3], content: "Understand the role of Solicitors in London in property transactions and how they ensure legal compliance." },
  { id: 5, title: "How to rent guide", date: "March 24, 2026", image_url: images[4], content: "Complete guide for tenants and landlords understanding rental agreements, rights, and legal obligations." },
  { id: 6, title: "What is the role of Solicitors", date: "March 24, 2026", image_url: images[5], content: "Understanding the Role of Solicitors in London Property Transactions and legal requirements for buying and selling." },
  { id: 7, title: "What is residential property conveyancing", date: "March 24, 2026", image_url: images[2], content: "Learn about residential property conveyancing process, costs, and timeline for buying or selling a home." },
  { id: 8, title: "Legal Aspects of Business", date: "March 24, 2026", image_url: images[6], content: "Let's look into the legal aspects of business and sales purchases including contracts and due diligence." },
  { id: 9, title: "Role of solicitors in business", date: "March 24, 2026", image_url: images[1], content: "This article will explain the role of solicitors in business transactions and corporate legal matters." },
  { id: 10, title: "A complete guide to conveyancing", date: "March 24, 2026", image_url: images[7], content: "Discover the benefits of choosing a conveyancing solicitor for your property transaction in London." },
];

const NewsArticle3 = () => {
  const [articles, setArticles] = useState(fixedArticles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlugs = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('title, slug')
          .eq('published', true)
          .eq('category', 'conveyancing');

        if (!error && data) {
          const mappedArticles = fixedArticles.map(card => {
            const cardSnippet = card.title.substring(0, 20).toLowerCase().trim();
            const dbMatch = data.find(dbItem => 
              dbItem.title.toLowerCase().includes(cardSnippet)
            );
            
            return {
              ...card,
              dynamicSlug: dbMatch ? dbMatch.slug : `not-found-${card.id}`
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
      templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
      gap="20px"
      width="100%"
    >
      {articles.map((article) => (
        <GridItem
          key={article.id}
          as={Link}
          to={`/conveyancing-news/${article.dynamicSlug}`}
          cursor="pointer"
          display="flex"
          flexDir="column"
          border="1px solid black"
          borderRadius="12px"
          overflow="hidden"
          bg="white"
          transition="all 0.3s ease"
          _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
        >
          <Image 
            src={article.image_url} 
            alt={article.title} 
            height="200px" 
            width="100%" 
            objectFit="cover" 
          />
          <Box p="16px" display="flex" flexDir="column" flex="1">
            <Text fontSize="12px" color="black" mb="8px" textAlign={"left"}>{article.date}</Text>
            <Text fontSize="16px" fontWeight="700" color="black" textAlign={"left"} mb="8px" noOfLines={2}>
              {article.title}
            </Text>
            <Text fontSize="14px" color="black" textAlign={"left"} noOfLines={3}>
              {article.content}
            </Text>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default NewsArticle3;