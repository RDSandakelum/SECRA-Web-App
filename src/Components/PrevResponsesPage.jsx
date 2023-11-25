import React from "react";
import { Box, Heading, Center, Divider, Text, Flex } from "@chakra-ui/react";
import Navbarr from "./Navbarr";
import PrevResponses from "./PrevResponses";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function PrevResponsesPage() {
  const location = useLocation();
  const [prevResponses, setPrevResponses] = useState(location.state);

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
            <Flex
              display={{ base: "none", md: "flex" }}
              justify="space-between"
              alignItems="center"
            >
              <Text fontWeight="bold">Date</Text>
              <Text ml="10rem" fontWeight="bold">
                Score
              </Text>
              <Text fontWeight="bold">Summary</Text>
            </Flex>
          </Box>
        </Center>
        {prevResponses.map((data, idx) => {
          return <PrevResponses key={idx} data={data} />;
        })}
      </Box>
    </Box>
  );
}
