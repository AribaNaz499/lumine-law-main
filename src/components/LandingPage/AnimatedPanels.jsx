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
      height={{ base: "43px", md: "58px", lg: "73px" }} 
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
            px={{ base: "2", md: "4", lg: "6" }} // Logos ke darmiyan gap balanced rakha
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={img}
              alt="Lumine Solicitors Panels"
              // Logo size ko elegant banaya
              height={{
                base: "23px",
                md: "33px",
                lg: "41px",
                xl: "46px",
              }}
              maxWidth="190px"
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
  py={{ base: "8px", md: "14px", lg: "16px" }} // 👈 thoda compact
  display="flex"
  alignItems="center"
  justifyContent="center"
>
      {/* Gray Background Layer */}
      <Box
      position="absolute"
    top={0}
    left={0}
    right={0}
    bottom={0}
    backgroundColor="rgba(255, 255, 255, 0.4)" // 👈 lighter like screenshot
    backdropFilter="blur(6px)" // 👈 glass effect 🔥
    borderRadius="4px"
      />

      {/* Rows Container */}
      <VStack
        width="90%"
    spacing={{ base: 1, md: 2, lg: 3 }}
    position="relative"
    zIndex={1}
    justify="center" // 👈 ADD THIS (center fix)
  
      >
        <ScrollingRow images={images} direction="left" speed={55} />
        <ScrollingRow images={images} direction="right" speed={65} />
        <ScrollingRow images={images} direction="left" speed={45} />
      </VStack>
    </Box>
  );
};

export default AnimatedPanels;