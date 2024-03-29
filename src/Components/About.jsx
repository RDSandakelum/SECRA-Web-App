import React from "react";
import Group from "../assets/group-people.png";
import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const textWithNewPara =
    "This survey is a component of the University–Enterprise Collaboration Compass developed by the European Commission-funded project SECRA (Strengthening University-Enterprise Collaboration for Resilient Communities in Asia).";

  return (
    <Box id="About" width="100vw" height="100vh" position="relative">
      <Box
        top={0}
        left={0}
        width="100%"
        height="100%"
        padding="10px"
        style={{
          background:
            "linear-gradient(to bottom, rgba(9, 11, 104, 1), rgba(0, 0, 6, 0))",
        }}
      >
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 0, md: 6 }}
          w="100%"
          h="100%"
          alignItems="center"
        >
          <GridItem
            display={{ base: "none", md: "flex" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            alignItems={{ base: "center", md: "flex-start" }}
            // order={{ base: 2, md: 1 }}
          >
            <Box
              // display={{ base: "none", md: "inline-block" }}
              position="relative"
              height={{ base: "200px", md: "275px", lg: "450px" }}
              width={{ base: "230px", md: "350px", lg: "500px" }}
              backgroundColor="rgba(255, 255, 255, 1)"
            >
              <Box
                position="relative"
                height={{ base: "200px", md: "275px", lg: "450px" }}
                width={{ base: "230px", md: "350px", lg: "500px" }}
                backgroundImage={`url(${Group})`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                top="10%"
                left="10%"
              ></Box>
            </Box>
          </GridItem>
          <GridItem
            w="100%"
            display="flex"
            justifyContent={{ base: "center", lg: "flex-start" }}
            alignItems={{ base: "center", lg: "flex-start" }}
            flexDirection="column"
            // order={{ base: 1, md: 2 }}
          >
            <Text
              fontWeight="bold"
              fontSize="50px"
              color="rgba(255, 255, 255, 1)"
              lineHeight="100px"
            >
              About Us
            </Text>
            <Text
              fontSize="20px"
              color="rgba(255, 255, 255, 1)"
              lineHeight="25px"
              textAlign="center"
            >
              {textWithNewPara}
              <br />
              <Button
                mt="26px"
                _hover={{ bg: null }}
                onClick={() => {
                  navigate("/about-secra");
                }}
                color="white"
                bgGradient="linear(to-b, #01033c 66.66%, #232484)"
                w="200px"
                mx="auto"
              >
                Learn more ...
              </Button>
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
