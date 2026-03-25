import {
  Box,
  Text,
  Flex,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import "../../styles/fonts.css";

const reviews = [
  {
    name: "Noorullah zarif",
    time: "8 months ago",
    review:
      "I had an excellent experience working with this solicitor. From the very beginning, they were professional, knowledgeable, and...",
    avatar: null,
    avatarBg: null,
    avatarImg: "https://i.pravatar.cc/40?img=8",
    readMore: true,
  },
  {
    name: "Zaeem Hashmi (jeemu)",
    time: "8 months ago",
    review:
      "Really appreciate the professionalism and legal knowledge I received. Every legal step was carefully explained to me...",
    avatar: null,
    avatarBg: null,
    avatarImg: "https://i.pravatar.cc/40?img=12",
    readMore: true,
  },
  {
    name: "Rubais ARK",
    time: "8 months ago",
    review:
      "The solicitor was highly professional and provided clear, reliable advice every step of the way. Their dedication and efficiency made the...",
    avatar: "R",
    avatarBg: "#8B1A8B",
    avatarImg: null,
    readMore: true,
  },
  {
    name: "Iqbal Ahmed Khan",
    time: "8 months ago",
    review:
      "Buying a house can be daunting, but lumine solicitors made it seem effortless. Their professionalism and clear communication were...",
    avatar: "I",
    avatarBg: "#E05C2A",
    avatarImg: null,
    readMore: true,
  },
  {
    name: "Hashim Falah",
    time: "8 months ago",
    review:
      "Very professional and helpful team. Quick service and great communication. Highly recommend",
    avatar: null,
    avatarBg: null,
    avatarImg: "https://i.pravatar.cc/40?img=3",
    readMore: false,
  },
  {
    name: "nasir khan",
    time: "8 months ago",
    review: "Great service.",
    avatar: "n",
    avatarBg: "#555",
    avatarImg: null,
    readMore: false,
  },
];

const StarRating = () => (
  <HStack gap={"2px"}>
    {[1, 2, 3, 4, 5].map((i) => (
      <Text key={i} color={"#FBBC04"} fontSize={"20px"} lineHeight={"1"}>
        ★
      </Text>
    ))}
  </HStack>
);

const GoogleLogo = () => (
  <Text fontSize={"28px"} fontWeight={"700"} letterSpacing={"-1px"} lineHeight={"1"}>
    <span style={{ color: "#4285F4" }}>G</span>
    <span style={{ color: "#EA4335" }}>o</span>
    <span style={{ color: "#FBBC04" }}>o</span>
    <span style={{ color: "#4285F4" }}>g</span>
    <span style={{ color: "#34A853" }}>l</span>
    <span style={{ color: "#EA4335" }}>e</span>
  </Text>
);

const GoogleReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
      // Reset index if out of bounds
      setCurrentIndex((prev) =>
        Math.min(prev, reviews.length - visibleCount)
      );
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, [visibleCount]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, reviews.length - visibleCount)
    );
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + visibleCount);

  return (
    <Box
      as="section"
      width="100%"
      background="#f5f5f5"
      py={{ base: "40px", md: "50px" }}
      px={{ base: "5%", md: "4%", lg: "3%" }}
      overflow={"hidden"}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align={"center"}
        gap={{ base: "30px", md: "50px" }}
        width="100%"
      >
        {/* Left Side — SAME as before, just align center on mobile */}
        <VStack
          align={{ base: "center", md: "flex-start" }}
          minW={{ base: "auto", md: "160px" }}
          gap={"6px"}
          flexShrink={0}
          alignSelf={"center"}
          ml={{ base: "0", md: "25px" }}
        >
          <Text
            fontSize={{ base: "24px", md: "28px", lg: "32px" }}
            fontWeight={"900"}
            color={"black"}
            letterSpacing={"1px"}
            lineHeight={"1"}
          >
            EXCELLENT
          </Text>
          <StarRating />
          <Text fontSize={"13px"} color={"black"} fontWeight={"400"}>
            Based on{" "}
            <Text as="span" fontWeight={"700"}>
              45 reviews
            </Text>
          </Text>
          <GoogleLogo />
        </VStack>

        {/* Right Side — Slider SAME as before */}
        <Flex
          flex={1}
          align={"center"}
          gap={"0px"}
          width={"100%"}
          overflow={"hidden"}
        >
          {/* Left Arrow — SAME */}
          <Box
            onClick={handlePrev}
            cursor={currentIndex === 0 ? "not-allowed" : "pointer"}
            opacity={currentIndex === 0 ? 0.3 : 1}
            bg={"white"}
            borderRadius={"50%"}
            boxShadow={"0 2px 8px rgba(0,0,0,0.20)"}
            width={"36px"}
            height={"36px"}
            minW={"36px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            alignSelf={"center"}
            flexShrink={0}
            zIndex={10}
            mr={"12px"}
            transition={"all 0.2s ease"}
            _hover={{ boxShadow: "0 4px 16px rgba(0,0,0,0.22)" }}
          >
            <Text fontSize={"22px"} color={"#444"} lineHeight={"1"} mb={"2px"}>
              ‹
            </Text>
          </Box>

          {/* Cards — SAME */}
          <Flex flex={1} gap={"16px"} overflow={"hidden"} align={"stretch"}>
            {visibleReviews.map((r, i) => (
              <Box
                key={currentIndex + i}
                flex={1}
                bg={"white"}
                borderRadius={"16px"}
                boxShadow={"0 2px 16px rgba(0,0,0,0.09)"}
                p={"22px 24px"}
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                minW={"0"}
                border={"1px solid #f0f0f0"}
                transition={"box-shadow 0.2s ease"}
                _hover={{ boxShadow: "0 6px 24px rgba(0,0,0,0.13)" }}
              >
                {/* Top Row — SAME */}
                <Flex justify={"space-between"} align={"center"}>
                  <HStack gap={"12px"} flex={1} minW={"0"}>
                    {r.avatarImg ? (
                      <Box
                        borderRadius={"50%"}
                        overflow={"hidden"}
                        width={"44px"}
                        height={"44px"}
                        flexShrink={0}
                        boxShadow={"0 1px 4px rgba(0,0,0,0.12)"}
                      >
                        <img
                          src={r.avatarImg}
                          alt={r.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </Box>
                    ) : (
                      <Box
                        borderRadius={"50%"}
                        bg={r.avatarBg}
                        width={"44px"}
                        height={"44px"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        flexShrink={0}
                        boxShadow={"0 1px 4px rgba(0,0,0,0.12)"}
                      >
                        <Text color={"white"} fontWeight={"700"} fontSize={"18px"}>
                          {r.avatar}
                        </Text>
                      </Box>
                    )}
                    <VStack align={"flex-start"} gap={"1px"} minW={"0"}>
                      <Text fontWeight={"600"} fontSize={"14px"} color={"#111"} noOfLines={1}>
                        {r.name}
                      </Text>
                      <Text fontSize={"12px"} color={"#888"}>
                        {r.time}
                      </Text>
                    </VStack>
                  </HStack>
                  <Text fontSize={"26px"} fontWeight={"800"} color={"#4285F4"} flexShrink={0} ml={"8px"}>
                    G
                  </Text>
                </Flex>

                {/* Stars — SAME */}
                <HStack gap={"6px"} align={"center"}>
                  <StarRating />
                  <Text color={"#4285F4"} fontSize={"15px"} fontWeight={"700"}>✓</Text>
                </HStack>

                {/* Review Text — SAME */}
                <Text fontSize={"14px"} color={"#333"} lineHeight={"1.7"} flex={1}>
                  {r.review}
                </Text>

                {/* Read More — SAME */}
                {r.readMore && (
                  <Text
                    fontSize={"13px"}
                    color={"#777"}
                    cursor={"pointer"}
                    _hover={{ color: "#333" }}
                    mt={"2px"}
                  >
                    Read more
                  </Text>
                )}
              </Box>
            ))}
          </Flex>

          {/* Right Arrow — SAME */}
          <Box
            onClick={handleNext}
            cursor={currentIndex >= reviews.length - visibleCount ? "not-allowed" : "pointer"}
            opacity={currentIndex >= reviews.length - visibleCount ? 0.3 : 1}
            bg={"white"}
            borderRadius={"50%"}
            boxShadow={"0 2px 8px rgba(0,0,0,0.20)"}
            width={"36px"}
            height={"36px"}
            minW={"36px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            alignSelf={"center"}
            flexShrink={0}
            zIndex={10}
            ml={"12px"}
            transition={"all 0.2s ease"}
            _hover={{ boxShadow: "0 4px 16px rgba(0,0,0,0.22)" }}
          >
            <Text fontSize={"22px"} color={"#444"} lineHeight={"1"} mb={"2px"}>
              ›
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default GoogleReviews;