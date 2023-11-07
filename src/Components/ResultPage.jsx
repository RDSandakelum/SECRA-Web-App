import React, { useEffect, useState } from "react";
import Navbarr from "./Navbarr";
import Chart from "./Chart";
import { Box, Heading, Center, Button, Text, Flex } from "@chakra-ui/react";
import Table from "./ResultTable";
import Footer from "./Footer";
import { useNavigate, useLocation } from "react-router-dom";

export default function ResultPage() {
  const location = useLocation();
  const userAnswers = location.state;

  const navigateTo = useNavigate();

  const [providedLabels, setProvidedLabels] = useState([]);
  const [labelData, setLabelData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    console.log(userAnswers);
  }, [userAnswers]);

  useEffect(() => {
    let total = 0;

    userAnswers.map((providedData) => {
      setProvidedLabels((prevLabels) => [...prevLabels, providedData.title]);
      setLabelData((prevLabelData) => [...prevLabelData, providedData.score]);
      setTableData((prevTableData) => [
        ...prevTableData,
        {
          section: providedData.title,
          score: providedData.score,
        },
      ]);
      total += providedData.score;
    });
    setTotalScore(total);
  }, [userAnswers]);

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
        <Chart providedLabels={providedLabels} labelData={labelData} />
      </Center>
      <Center>
        <Table tableData={tableData} totalScore={totalScore} />
      </Center>
      <Center>
        <Button
          mt={4}
          _hover={{ bg: null }}
          backgroundColor="#01033C"
          color="white"
          onClick={() => navigateTo("/view-response", { state: userAnswers })}
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
            onClick={() => navigateTo("/prev-results")}
          >
            View Previous Responses
          </Text>
        </Flex>
      </Center>
      <Footer />
    </Box>
  );
}
