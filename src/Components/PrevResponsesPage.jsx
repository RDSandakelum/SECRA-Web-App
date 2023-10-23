import React from "react";
import { Box, Heading, Center, Divider } from "@chakra-ui/react";
import Navbarr from "./Navbarr";
import PrevResponses from "./PrevResponses";
export default function PrevResponsesPage() {
  return (
    <Box>
      <Navbarr />
      <Box mt="5rem">
        <Center>
          <Heading>Previous Responses</Heading>
        </Center>
        <Center>
          <Divider borderColor="#01033C" borderWidth="1px" width="70%" />
        </Center>
        <PrevResponses />
        <PrevResponses />
        <PrevResponses />
        <PrevResponses />
      </Box>
    </Box>
  );
}
