import MainImage from '../assets/Main.jpg';
import React from 'react';
import { Box, Button, Text,  } from "@chakra-ui/react";

export default function MainComponent() {
    const textWithNewLine = "Welcome to <br />SECRA.";
  return (
    <Box
      backgroundImage={`url(${MainImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      width="100vw"
      height="100vh"
      position="relative"
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backgroundColor="rgba(255, 255, 255, 0.5)"
      ></Box>

      {/* Text */}
      <Text
        fontSize="8xl"
        position="absolute"
        top="35%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={1}
        color="#01033c"
        dangerouslySetInnerHTML={{ __html: textWithNewLine }}
        lineHeight="1.2"
      >
      </Text>

      {/* Button */}
      <Button
        position="absolute"
        top="80%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={1} 
        _hover={{ bg: null }}
        color="white"
              bgGradient="linear(to-b, #01033c 66.66%, #232484)"
              w="200px"
      >
        Get Started
      </Button>
    </Box>
  );
}
