import React from "react";
import { Box, Flex, Text, Center } from "@chakra-ui/react";
export default function PrevResponses() {
  return (
    <Center>
      <Box
        _hover={{ borderBottom: "2px", cursor: "pointer" }}
        boxShadow="xl"
        p="6"
        rounded="md"
        bg="white"
        w="70%"
      >
        <Flex justify="space-between">
          <Text>Date</Text>
          <Text>Score</Text>
        </Flex>
      </Box>
    </Center>
  );
}
