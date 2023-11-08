import React from "react";
import { Box, Flex, Text, Center, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { userProvidedData } from "../Data/Results";

export default function PrevResponses({ data }) {
  const navigateTo = useNavigate();

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
        <Flex justify="space-between" alignItems="center">
          <Text>{data.date}</Text>
          <Text>{data.score}</Text>
          <Button
            size="sm"
            _hover={{ bg: null }}
            backgroundColor="#01033C"
            color="white"
            onClick={() => navigateTo("/result", { state: userProvidedData })}
          >
            View Summary
          </Button>
        </Flex>
      </Box>
    </Center>
  );
}
