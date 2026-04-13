import { Flex, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";   // apna actual path
import Footer from "../Footer/Footer";   // apna actual path

const NotFound = () => (
  <>
    <Navbar />
    <Flex
      direction="column"
      align="center"
      justify="center"
      bg={"white"}
      minH="60vh"
      gap="20px"
      fontFamily="CeraRoundPro"
    >
      <Text fontSize={{ base: "28px", md: "40px" }} fontWeight={700} color="#BF9B27">
        404
      </Text>
      <Text fontSize={{ base: "16px", md: "20px" }} color="#555">
        Page not found
      </Text>
      <Button
        as={Link}
        to="/"
        backgroundColor="black"
        color="white"
        borderRadius="2px"
        px="30px"
        py="22px"
        _hover={{ backgroundColor: "white", color: "black", border: "1px solid black" }}
        transition="all 0.3s ease"
      >
        Go Home
      </Button>
    </Flex>
    <Footer />
  </>
);

export default NotFound;