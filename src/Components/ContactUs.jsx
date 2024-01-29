import MainImage from "../assets/Main.jpg";
import React from "react";
import { Box, Button, Center, Text, Flex } from "@chakra-ui/react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";

export default function ContactUs() {
  return (
    <Box
      backgroundImage={`url(${MainImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      width="100vw"
      height="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backgroundColor="rgba(255, 255, 255, 0.4)"
      ></Box>
      <Box
        width="800px"
        height="390px"
        backgroundColor="rgba(15, 17, 90, 0.85)"
        zIndex={1}
      >
        <Center>
          <Text
            fontWeight="bold"
            fontSize="50px"
            color="rgba(255, 255, 255, 1)"
            lineHeight="100px"
          >
            Contact Us
          </Text>
        </Center>

        <Box
          display="flex"
          justifyContent="space-between"
          padding={{ base: "0px 0px", md: "50px 150px" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box marginBottom={{ base: "30px", md: "0px" }}>
            <Center marginBottom={{ base: "0px", md: "30px" }}>
              <MailOutlineIcon
                sx={{
                  color: "rgba(255, 255, 255, 1)",
                  width: "55px",
                  height: "40px",
                }}
              />
            </Center>
            <Center>
              <Text color="rgba(255, 255, 255, 1)" fontSize="20px">
                Email Address
              </Text>
            </Center>
            <Center>
              <Text color="rgba(255, 255, 255, 1)" fontSize="20px">
                secra@gmail.com
              </Text>
            </Center>
          </Box>
          <Box>
            <Center marginBottom={{ base: "0px", md: "30px" }}>
              <PhoneIcon
                sx={{
                  color: "rgba(255, 255, 255, 1)",
                  width: "55px",
                  height: "40px",
                }}
              />
            </Center>
            <Center>
              <Text color="rgba(255, 255, 255, 1)" fontSize="20px">
                Telephone
              </Text>
            </Center>
            <Center>
              <Text color="rgba(255, 255, 255, 1)" fontSize="20px">
                +94 71 123 4567
              </Text>
            </Center>
            <Center>
              <Text color="rgba(255, 255, 255, 1)" fontSize="20px">
                +94 11 211 2222
              </Text>
            </Center>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
