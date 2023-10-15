import { Center, Heading, Text, Box } from "@chakra-ui/react";
import React from "react";

export default function NotFound() {
  return (
    <Center>
      <Box mt="100px">
        <Center>
          <Heading>404</Heading>
        </Center>
        <Text>Oops!! URL Not Found</Text>
      </Box>
    </Center>
  );
}
