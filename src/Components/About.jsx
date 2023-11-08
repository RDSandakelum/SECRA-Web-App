import React from "react";
import Group from "../assets/group-people.png";
import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";

export default function About() {
  const textWithNewPara =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum neque eu nunc lobortis efficitur. Vivamus volutpat porttitor ante sed egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum neque eu nunc lobortis efficitur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum neque eu nunc lobortis efficitur. ";

  return (
    <Box width="100vw" height="100vh" position="relative">
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
          gap={6}
          w="100%"
          h="100%"
          alignItems="center"
        >
          <GridItem
            display="flex"
            justifyContent={{ base: "center", md: "flex-start" }}
            alignItems={{ base: "center", md: "flex-start" }}
            order={{ base: 2, md: 1 }}
          >
            <Box
              position="relative"
              height={{ base: "250px", md: "500px" }}
              width={{ base: "250px", md: "615px" }}
              backgroundColor="rgba(255, 255, 255, 1)"
            >
              <Box
                position="relative"
                height={{ base: "250px", md: "500px" }}
                width={{ base: "250px", md: "615px" }}
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
            justifyContent={{ base: "center", md: "flex-start" }}
            alignItems={{ base: "center", md: "flex-start" }}
            flexDirection="column"
            order={{ base: 1, md: 2 }}
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
            >
              {textWithNewPara}
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
