import MainImage from "../assets/Main.jpg";
import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import MainText from "./MainText";

export default function MainComponent() {
  const textWithNewLine = "Welcome to <br />SECRA.";
  const textWithNewPara =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Mollitia quas, nemo modi illo ullam minus illum voluptates labore atque accusantium voluptatem dolorum,<br/> voluptatum placeat perspiciatis optio laudantium quam sed itaque?";
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
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backgroundColor="rgba(255, 255, 255, 0.4)"
      ></Box>
      <MainText />
    </Box>
  );
}
