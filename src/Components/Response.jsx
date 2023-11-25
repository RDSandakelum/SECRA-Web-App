import React from "react";

export default function Response() {
  console.log("Hi");
  return (
    <Box
      _hover={{ borderBottom: "2px", cursor: "pointer" }}
      boxShadow="xl"
      p="6"
      rounded="md"
      bg="white"
      w="70%"
    >
      <Flex justify="space-between" alignItems="center">
        <Text>{props.data.date}</Text>
        <Text>{props.data.score}</Text>
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
  );
}
