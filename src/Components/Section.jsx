import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Question from "./Question";

export default function Section(props) {
  return (
    <Box ml="1rem" w="90%">
      <Heading>{props.section}</Heading>
      <Question />
      <br />
      <Question />
      <br />
      <Question />
      <br />
      <Question />
    </Box>
  );
}
