import React from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Heading, Text, Image } from "@chakra-ui/react";
// Yahan apne NewsArticles wali file ka sahi path dein
import { articles } from "../path-to-your/NewsArticles"; 

const ArticleDetail = () => {
  const { slug } = useParams();
  
  // Slug ke zariye sahi article dhoondna
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Box p={20} textAlign="center">Article Not Found</Box>;
  }

  return (
    <Box pb={20}>
      {/* Banner Image */}
      <Box width="100%" height="300px" overflow="hidden">
        <Image src={article.image} width="100%" height="100%" objectFit="cover" />
      </Box>

      <Container maxW="container.lg" mt={10}>
        <Text color="gray.500" fontSize="sm" mb={2}>{article.date}</Text>
        <Heading as="h1" mb={6} size="xl">{article.heading}</Heading>
        
        <Box fontSize="lg" lineHeight="tall" color="gray.700">
          {/* Filhal description dikhayi degi, baad mein aap fullContent add kar sakti hain */}
          {article.description}
          <br /><br />
          <Text fontWeight="bold">Full detailed article content goes here...</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default ArticleDetail;