import { useEffect, useState } from 'react';
import {
  Text, Box, Image, Button, Flex, Grid, GridItem, Spinner, Center
} from "@chakra-ui/react";
import "../../styles/fonts.css";
import NewsInsightsOne from "../../assets/landing/newsInsigtsOne.webp";
import NewsInsightsTwo from "../../assets/landing/news-insights-two.webp";
import NewsInsightsThree from "../../assets/landing/newsInsightsThree.png";
import NewsInsightsFour from "../../assets/landing/newsInsightsFour.jpg";
import { Link } from "react-router-dom";
import { supabase } from '../../config/supabaseClient';

const images = [
  NewsInsightsOne,
  NewsInsightsTwo,
  NewsInsightsThree,
  NewsInsightsFour,
];

const staticItems = [
  {
    key: 1,
    image: images[0],
    heading: "A Guide to Commercial Conveyancing in London",
    description: "commercial conveyancing, commercial property, property law, property laws in UK, law firm in UK...",
    type: "news",
    category: "conveyancing",
    route: "conveyancing-news",
  },
  {
    key: 2,
    image: images[1],
    heading: "The Building Safety Act 2022 and Establishment of the New Homes Ombudsman Scheme",
    description: "A few intro lines to this article and what it holds or signifies, just so the reader has an idea...",
    type: "news",
    category: "conveyancing",
    route: "conveyancing-news",
  },
  {
    key: 3,
    image: images[2],
    heading: "How To Choose The Right Solicitor In London For Your Legal Needs",
    description: "Discover how to choose the right solicitor in London for your legal needs. Expert tips to find experienced, reliable, and...",
    type: "insights",
    category: "litigation",
    route: "litigation-news",
  },
  {
    key: 4,
    image: images[3],
    heading: "Key Updates Regarding the UK's Transition to eVisas",
    description: "Over 4 million UK visa holders have successfully set up their UKVI account to access their eVisa, according to the...",
    type: "insights",
    category: "immigration",
    route: "immigration-news",
  },
];

const Card = ({ item }) => (
  <Flex
    as={Link}
    to={`/${item.route}/${item.dynamicSlug}`}
    direction="column"
    width="100%"
    height="100%"
    cursor="pointer"
    border="1px solid #d9d9d9"
    borderRadius="6px"
    overflow="hidden"
    transition="0.3s all ease"
    backgroundColor="white"
    textDecoration="none"
  >
    <Box flexShrink={0} width="100%">
      <Image
        alt="Lumine Solicitors News and Insights"
        src={item.image}
        height={{ base: "160px", sm: "170px", md: "175px", lg: "185px", xl: "190px", "2xl": "200px" }}
        width="100%"
        objectFit="cover"
        loading="lazy"
        display="block"
         _hover={{
        transform: "scale(1.10)"
    }}
      />
    </Box>

    <Flex
      flex="1"
      direction="column"
      gap="8px"
      px={{ base: "12px", md: "14px" }}
      pt={{ base: "12px", md: "14px" }}
      pb={{ base: "14px", md: "16px" }}
      color="black"
      fontFamily="CeraRoundPro"
    >
      <Text
        textAlign="left"
        fontSize={{ base: "13px", md: "14px", lg: "14px", xl: "15px", "2xl": "16px" }}
        fontWeight={700}
        lineHeight="1.4"
        color="black"
      _hover={{ 
    color: "#DEB92C"
  }}
      >
        {item.heading}
      </Text>
      <Text
        textAlign="left"
        fontSize={{ base: "19px", md: "10px", lg: "10px", xl: "12px", "2xl": "12px" }}
        fontWeight={400}
        color="#555555"
        lineHeight="1.55"
      >
        {item.description}
      </Text>
    </Flex>
  </Flex>
);

const AllNewsInsights = () => {
  const [allItems, setAllItems] = useState(
    staticItems.map(item => ({ ...item, dynamicSlug: "not-found" }))
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlugs = async () => {
      setLoading(true);
      try {
        // Fetch all three categories in parallel
        const [convRes, litRes, immRes] = await Promise.all([
          supabase.from('articles').select('title, slug').eq('published', true).eq('category', 'conveyancing'),
          supabase.from('articles').select('title, slug').eq('published', true).eq('category', 'litigation'),
          supabase.from('articles').select('title, slug').eq('published', true).eq('category', 'immigration'),
        ]);

        const dbMap = {
          conveyancing: convRes.data || [],
          litigation: litRes.data || [],
          immigration: immRes.data || [],
        };

        const mapped = staticItems.map(card => {
          const pool = dbMap[card.category];
          const snippet = card.heading.substring(0, 20).toLowerCase().trim();
          const match = pool.find(db =>
            db.title.toLowerCase().includes(snippet)
          );
          return {
            ...card,
            dynamicSlug: match ? match.slug : "not-found",
          };
        });

        setAllItems(mapped);
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
    <Flex
      width="100%"
      direction="column"
      align="flex-start"
      justify="center"
      mb="50px"
      py={{ base: "30px", md: "40px", xl: "50px" }}
    >
      <Box width="90%" mx="auto" mb={{ base: "20px", md: "30px", xl: "40px" }}>
        <Text
          color="black"
          fontSize={{ base: "24px", md: "28px", lg: "30px", xl: "32px", "2xl": "34px" }}
          fontWeight={400}
          fontFamily="CeraRoundPro"
          textAlign="left"
        >
          News and Insights
        </Text>
      </Box>

      <Box width="90%" mx="auto">
        <Grid
          templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={{ base: "16px", md: "20px" }}
          mb={{ base: "24px", md: "32px" }}
          alignItems="stretch"
        >
          {allItems.map((item) => (
            <GridItem key={item.key} height="100%">
              <Card item={item} />
            </GridItem>
          ))}
        </Grid>

        <Flex width="100%" justify="space-around" mt={{ base: "20px", md: "28px" }}>

          <Button
            as={Link}
            to="/not-found-page"   // ❗ invalid route → 404 trigger hoga
            width={{ base: "26%", sm: "24%", md: "14%", lg: "12%" }}
            backgroundColor="black"
            color="white"
            mt={"30px"}
            mb={"-25px"}
            py={{ base: "20px", md: "22px" }}
            borderRadius="2px"
            border="1px solid black"
            _hover={{ backgroundColor: "white", color: "black" }}
            transition="all 0.3s ease"
            fontSize={{ base: "14px", md: "15px" }}
            fontFamily="CeraRoundPro"
            fontWeight={500}
          >
            News
          </Button>

          {/* INSIGHTS BUTTON - Saare insights (immigration news) dikhane ke liye */}
          <Button
            as={Link}
            to="/not-found-page"   // ❗ invalid route → 404 trigger hoga
            width={{ base: "26%", sm: "24%", md: "14%", lg: "12%" }}
            backgroundColor="black"
            color="white"
            mt={"30px"}
            mb={"-25px"}
            py={{ base: "20px", md: "22px" }}
            borderRadius="2px"
            _hover={{ backgroundColor: "white", color: "black" }}
            transition="all 0.3s ease"
            fontSize={{ base: "14px", md: "15px" }}
            fontFamily="CeraRoundPro"
            fontWeight={500}
          >
            Insights
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AllNewsInsights;