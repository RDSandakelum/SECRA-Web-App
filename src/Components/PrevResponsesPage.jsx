import React from "react";
import { Box, Heading, Center, Divider, Text, Flex } from "@chakra-ui/react";
import Navbarr from "./Navbarr";
import PrevResponses from "./PrevResponses";
import { PrevResponseData } from "../Data/PrevResponses";

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
        <Center>
          <Box p="6" rounded="md" bg="white" w="70%">
            <Flex justify="space-between" alignItems="center">
              <Text fontWeight="bold">Date</Text>
              <Text fontWeight="bold">Score</Text>
              <Text fontWeight="bold">Summary</Text>
            </Flex>
          </Box>
        </Center>
        {PrevResponseData.map((data) => {
          return <PrevResponses data={data} />;
        })}
      </Box>
    </Box>
  );
}
