import { useEffect, useState } from 'react';
import { Text, Box, Grid, GridItem, Image, Spinner, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { supabase } from '../../config/supabaseClient';
import "../../styles/fonts.css";

// Assets Import
import NewsInsightsOne from "../../assets/landing/newsInsightsThree.png";
import NewsInsightsTwo from "../../assets/landing/litigationTwo.jpg";
import NewsInsightsThree from "../../assets/landing/litigationThree.jpg";
import NewsInsightsFour from "../../assets/landing/litigationFour.jpg";

const fixedArticles = [
  { 
    id: 1, 
    title: "How to Choose the Right Solicitor in London for Your Legal Needs", 
    date: "March 24, 2026", 
    image_url: NewsInsightsOne, 
    content: "Discover how to choose the right solicitor in London for your legal needs. Expert tips to find experienced, reliable, and specialized legal professionals in London for any case." 
  },
  { 
    id: 2, 
    title: "Here is everything you need to know about The Mortgage Works lender panel", 
    date: "March 24, 2026", 
    image_url: NewsInsightsTwo, 
    content: "Discover the benefits of choosing a conveyancing solicitor from The Mortgage Works lender panel. Learn how to ensure a smooth property transaction in London with expert guidance on compliance." 
  },
  { 
    id: 3, 
    title: "Government Announces Major Homebuying Reforms", 
    date: "October 7, 2025", 
    image_url: NewsInsightsThree, 
    content: "On 5 October 2025, the UK Government announced the biggest shake-up to the homebuying process in history, aiming to make property transactions faster, cheaper, and more secure." 
  },
  { 
    id: 4, 
    title: "High Court Ruling Clarifies Litigation Rights", 
    date: "October 3, 2025", 
    image_url: NewsInsightsFour, 
    content: "Lumine Solicitors publishes this update on a significant High Court decision that clarifies who may lawfully conduct litigation under the Legal Services Act 2007 (LSA)." 
  },
];

const NewsArticle2 = () => {
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
          .eq('category', 'litigation');

        if (!error && data) {
          const mappedArticles = fixedArticles.map(card => {
            const dbMatch = data.find(dbItem => 
              dbItem.title.toLowerCase().trim().includes(card.title.toLowerCase().trim().substring(0, 20))
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
          to={`/litigation-news/${article.dynamicSlug}`}
          cursor="pointer"
          display="flex"
          flexDir="column"
          border="1px solid #242525"
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
            <Text fontSize="12px" color="gray.500" mb="8px">{article.date}</Text>
            <Text fontSize="16px" fontWeight="700" color="black" mb="8px" noOfLines={2}>
              {article.title}
            </Text>
            <Text fontSize="14px" color="gray.600" noOfLines={3}>
              {article.content}
            </Text>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default NewsArticle2;