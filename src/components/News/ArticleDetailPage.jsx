import React, { useEffect, useState, Suspense } from 'react';
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Container,
  Text,
  Spinner,
  Center,
  Button
} from "@chakra-ui/react";
import { supabase } from '../../config/supabaseClient';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";
import "../../styles/fonts.css";

const AllServiceLinks = React.lazy(() => import("../NavLinks/AllServiceLinks"));
const AllNewsInsights = React.lazy(() => import("../NavLinks/AllNewsInsights"));
const AllPrices = React.lazy(() => import("../NavLinks/AllPrices"));

const ArticleDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .eq('slug', slug)
          .single();

        if (data) setArticle(data);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) return <Center height="100vh"><Spinner size="xl" color="blue.500" /></Center>;

  return (
    <Box backgroundColor="white" minHeight="100vh">
      <Helmet>
        <title>{article ? `${article.title} | Lumine Solicitors` : "Article Not Found"}</title>
      </Helmet>

      <Navbar />

      <Container width="100vw" maxWidth="100%" m={0} p={0} display="flex" flexDirection="column">

        {/* Banner Section */}
        <Box
          width="100%"
          height={{ base: "180px", md: "220px", lg: "280px", xl: "320px" }} // Height thodi barhai hai taaki saaf dikhe
          bgImage={`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${article?.image_url})`}
          bgSize="cover"
          bgPos="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          px="20px"
        >
          {article && (
            <Box
              bg="rgba(0, 0, 0, 0.6)" // Thoda dark glassy background
              px={{ base: "8px", md: "5px" }}
              py={{ base: "12px", md: "15px" }}
              textAlign="centr"
              maxWidth="70%" // Mobile par screen se bahar na jaye
              width="fit-content" // SABSE ZAROORI: Box sirf text ke size ka rahega
              mx="auto" // Center mein rakhega
              
            >
              <Text
                fontSize={{ base: "10px", md: "16px", lg: "20px", xl: "26px" }}
                fontWeight={450}
                fontFamily="CeraRoundPro"
                color="white"
                lineHeight="1.2"
                textAlign="left"
              >
                {article.title}
              </Text>
            </Box>
          )}
        </Box>
        {/* Content Area - Line and Extra Header Removed */}
        <Box width="100%" px={{ base: 4, md: 10, lg: 20 }} py={10} color="black">
          <Box maxWidth="1200px" mx="auto">
            {!article ? (
              <Center flexDir="column" py={20}>
                <Text fontSize="20px" mb={4}>Article Not Found</Text>
                <Button as={Link} to="/" colorScheme="blue">Back to Home</Button>
              </Center>
            ) : (
              <Box
                className="article-body"
                fontSize="15px"
                lineHeight="1.5"
                color={"gray.700"}
                textAlign="left"
                sx={{
                  "p": { mb: 4 },
                  "h2": { color: "gray.800", fontWeight: "bold", fontStyle: "italic", fontSize: "16px", mt: 6, mb: 2 },
                  "ul, ol": { ml: 8, mb: 6 },
                  "li": { mb: 2 },
                  "a": { color: "blue.500", textDecoration: "underline" }
                }}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            )}
          </Box>
        </Box>

        {/* Footer Sections */}
        <Box mt="auto">
          <Suspense fallback={<Box p={4}>Loading...</Box>}>
            <AllServiceLinks />
            <AllPrices />
          </Suspense>
          <Footer />
        </Box>
      </Container>
    </Box>
  );
};

export default ArticleDetail;