import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function MainText(props) {
  const textWithNewLine = "Welcome to <br />SECRA.";
  const textWithNewPara =
    "LDDDD, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas, nemo modi illo ullam minus illum voluptates labore atque accusantium voluptatem dolorum, voluptatum placeat perspiciatis optio laudantium quam sed itaque?";

  const navigate = useNavigate();
  return (
    <Box
      color="#01033c"
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      zIndex={1}
      textAlign="center"
    >
      <Text
        fontWeight="700"
        fontSize="80px"
        color="#01033c"
        dangerouslySetInnerHTML={{ __html: textWithNewLine }}
        lineHeight="1.0"
      ></Text>
      <Text
        mt="24px"
        fontWeight="500"
        fontSize="20px"
        color="#01033c"
        dangerouslySetInnerHTML={{ __html: textWithNewPara }}
        lineHeight="1"
      ></Text>
      <Button
        mt="26px"
        _hover={{ bg: null }}
        onClick={() => {
          navigate("/survey");
          console.log("clicked");
        }}
        color="white"
        bgGradient="linear(to-b, #01033c 66.66%, #232484)"
        w="200px"
        mx="auto"
      >
        Get Started
      </Button>
    </Box>
  );
}
