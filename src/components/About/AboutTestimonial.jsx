import React, { useState, useEffect, useCallback } from 'react';
import { Container, Box, Text, Flex, VStack, Center } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Aisha K",
    review: "Highly professional and approachable. I was nervous about dealing with a legal issue but the solicitors made the process straightforward and stress-free. They genuinely cared about my situation and achieved a result I am very happy with.",
  },
  {
    name: "Sarah J",
    review: "Outstanding service from start to finish. The team at Lumine Solicitors explained everything clearly and kept me updated throughout my case. I felt supported at every stage and the outcome was far better than I expected.",
  },
  {
    name: "Noorullah Zarif",
    review: "I had an excellent experience working with this solicitor. From the very beginning, they were professional, knowledgeable, and extremely helpful in every aspect.",
  }
];

const AboutTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const ArrowIcon = ({ dir }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  );

  // Variants for sliding animation
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <>
      <Helmet>
        <title>Lumine Law | Testimonials</title>
      </Helmet>

      <Container maxW="100%" bg="white" py={20} centerContent overflow="hidden " mt={"-10"}>
        <Text fontSize="36px" color="#deb92c" mb={14} textAlign="center" fontFamily="serif">
          Testimonials
        </Text>

        <Box position="relative" w="full" maxW="1150px" px={4}>
          
          {/* Left Arrow */}
          <Center
            onClick={handlePrev}
            cursor="pointer"
            position="absolute"
            left={{ base: "0px", md: "-25px" }}
            top="50%"
            transform="translateY(-50%)"
            zIndex={20}
            w="50px"
            h="50px"
            bg="white"
            borderRadius="full"
            boxShadow="0 4px 15px rgba(0,0,0,0.12)"
            color={"black"}
            transition="0.2s"
            _hover={{ transform: "translateY(-50%) scale(1.1)", shadow: "0 6px 20px rgba(0,0,0,0.15)" }}
          >
            <ArrowIcon dir="left" />
          </Center>

          {/* Slider Container */}
          <Box overflow="hidden" position="relative" minH="420px">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 }
                }}
                style={{ width: '100%' }}
              >
                <Flex gap={8} justify="center">
                  {[0, 1].map((offset) => {
                    const index = (currentIndex + offset) % reviews.length;
                    const item = reviews[index];
                    return (
                      <Box
                        key={index}
                        bg="white"
                        p={{ base: 6, md: 12 }}
                        borderRadius="8px"
                        boxShadow="0 10px 40px rgba(0,0,0,0.05)"
                        flex={1}
                        maxW="520px"
                        minH="380px"
                        border="1px solid #f5f5f5"
                        display={{ base: offset === 1 ? "none" : "block", md: "block" }}
                      >
                        <VStack spacing={6} align="flex-start">
                          <Box w="80px" h="80px" bg="#e8e8e8" borderRadius="full" position="relative">
                            <Box position="absolute" bottom="10%" left="50%" transform="translateX(-50%)" w="40px" h="30px" bg="white" borderRadius="30px" />
                            <Box position="absolute" top="20%" left="50%" transform="translateX(-50%)" w="25px" h="25px" bg="white" borderRadius="full" />
                          </Box>
                          <Text fontWeight="700" fontSize="22px" color="#333">{item.name}</Text>
                          <Text fontSize="16px" color="#666" lineHeight="1.8">{item.review}</Text>
                        </VStack>
                      </Box>
                    );
                  })}
                </Flex>
              </motion.div>
            </AnimatePresence>
          </Box>

          {/* Right Arrow */}
          <Center
            onClick={handleNext}
            cursor="pointer"
            position="absolute"
            right={{ base: "0px", md: "-25px" }}
            top="50%"
            transform="translateY(-50%)"
            zIndex={20}
            w="50px"
            h="50px"
            bg="white"
            borderRadius="full"
            boxShadow="0 4px 15px rgba(0,0,0,0.12)"
            transition="0.2s"
            color={"black"}
            _hover={{ transform: "translateY(-50%) scale(1.1)", shadow: "0 6px 20px rgba(0,0,0,0.15)" }}
          >
            <ArrowIcon dir="right" />
          </Center>
        </Box>
      </Container>
    </>
  );
};

export default AboutTestimonial;