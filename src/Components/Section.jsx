import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Question from "./Question";

export default function Section(props) {
  return (
    <Box w="90%">
      <Heading>{props.section}</Heading>
      <Question />
      <br />
      <Question />
    </Box>
  );
}
