import React from "react";
import Navbarr from "./Navbarr";
import Chart from "./Chart";
import { Box, Heading, Center, Button, Text, Flex } from "@chakra-ui/react";
import Table from "./ResultTable";
import Footer from "./Footer";

export default function ResultPage() {
  return (
    <Box>
      <Navbarr />
      <Box mt="50px">
        <Center>
          <Heading mt="1rem" ml="1rem">
            UEC Compass Questionnaire - Responses
          </Heading>
        </Center>
      </Box>
      <Center>
        <Chart />
      </Center>
      <Center>
        <Table />
      </Center>
      <Center>
        <Button
          mt={4}
          _hover={{ bg: null }}
          backgroundColor="#01033C"
          color="white"
        >
          View Responses
        </Button>
      </Center>
      <Center>
        <Flex
          fontWeight="bold"
          mb="2rem"
          justifyContent="space-between"
          w="50vw"
        >
          <Text
            _hover={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Print This Response
          </Text>
          <Text
            _hover={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            View Previous Responses
          </Text>
        </Flex>
      </Center>
      <Footer />
    </Box>
  );
}
