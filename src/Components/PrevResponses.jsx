import React from "react";
import { Box, Flex, Text, Center, Button, Divider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { userProvidedData } from "../Data/Results";

export default function PrevResponses(props) {
  const navigateTo = useNavigate();

  const handleSummary = () => {
    const userProvidedData = JSON.parse(props.data.user_answers);
    const dataToSend = { data: userProvidedData, date: props.data.date };
    navigateTo("/result", { state: dataToSend });
  };

  return (
    <Center>
      <Box
        _hover={{ borderBottom: "2px", cursor: "pointer" }}
        boxShadow="xl"
        p="6"
        rounded="md"
        bg="white"
        w={{ base: "90%", md: "70%" }}
      >
        <Flex
          display={{ base: "none", md: "flex" }}
          justify="space-between"
          alignItems="center"
        >
          <Text>{props.data.date.substring(4, 33)}</Text>
          <Text>{props.data.score}</Text>
          <Button
            size="sm"
            _hover={{ bg: null }}
            backgroundColor="#01033C"
            color="white"
            onClick={() => handleSummary()}
          >
            View Summary
          </Button>
        </Flex>
        <Flex
          display={{ base: "flex", md: "none" }}
          justify="space-between"
          alignItems="center"
          direction="column"
        >
          <Text>{props.data.date.substring(4, 33)}</Text>
          <br />
          <Text>Score : {props.data.score}</Text>
          <br />
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
