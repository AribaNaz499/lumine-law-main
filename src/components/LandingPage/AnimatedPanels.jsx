import React, { useEffect } from "react";
import { Box, Image, VStack } from "@chakra-ui/react";

const ScrollingRow = ({ images, direction, speed }) => {
  const multipliedImages = [...images, ...images, ...images, ...images];

  return (
    <Box
      className="scroll-row"
      position="relative"
      width="100%"
      // Height ko kam kar ke compact kiya gaya hai
      height={{ base: "45px", md: "60px", lg: "75px" }} 
      overflow="hidden"
      whiteSpace="nowrap"
      display="flex"
      alignItems="center"
      onMouseEnter={(e) => {
        const content = e.currentTarget.querySelector(".scroll-content");
        if (content) content.style.animationPlayState = "paused";
      }}
      onMouseLeave={(e) => {
        const content = e.currentTarget.querySelector(".scroll-content");
        if (content) content.style.animationPlayState = "running";
      }}
    >
      <Box
        className="scroll-content"
        position="absolute"
        display="flex"
        alignItems="center"
        animation={`scroll${direction === "left" ? "Left" : "Right"} ${speed}s linear infinite`}
        style={{ left: 0 }}
      >
        {multipliedImages.map((img, index) => (
          <Box
            key={index}
            px={{ base: "3", md: "5", lg: "7" }} // Logos ke darmiyan gap balanced rakha
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={img}
              alt="Lumine Solicitors Panels"
              // Logo size ko elegant banaya
              height={{
                base: "22px",
                md: "32px",
                lg: "40px",
                xl: "45px",
              }}
              maxWidth="180px"
              objectFit="contain"
              loading="lazy"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const AnimatedPanels = ({ images }) => {
  useEffect(() => {
    const styleId = "scroll-animations-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .scroll-row {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <Box
      width="100%"
      position="relative"
      // Panel ki overall height (Sleek padding)
      py={{ base: "15px", md: "25px", lg: "35px" }} 
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Gray Background Layer */}
      <Box
        position="absolute"
        top={0} left={0} right={0} bottom={0}
        backgroundColor="rgba(243, 239, 239, 0.45)"
        opacity={0.8}
        borderRadius="4px"
      />

      {/* Rows Container */}
      <VStack
        width="100%"
        // Gap ko kam kar ke sleek kiya gaya hai
        spacing={{ base: 2, md: 4, lg: 5 }} 
        position="relative"
        zIndex={1}
      >
        <ScrollingRow images={images} direction="left" speed={55} />
        <ScrollingRow images={images} direction="right" speed={65} />
        <ScrollingRow images={images} direction="left" speed={45} />
      </VStack>
    </Box>
  );
};

export default AnimatedPanels;