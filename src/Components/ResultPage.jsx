import React, { useEffect, useState } from "react";
import Navbarr from "./Navbarr";
import Chart from "./Chart";
import {
  Box,
  Heading,
  Center,
  Button,
  Text,
  Flex,
  useToast,
} from "@chakra-ui/react";
import Table from "./ResultTable";
import Footer from "./Footer";
import { useNavigate, useLocation } from "react-router-dom";
import { getSectionName } from "../functions/sectionRenaming";
import { auth } from "../Config/firebase-config";

export default function ResultPage() {
  const toast = useToast();
  const navigateToPrevResults = () => {
    // const user = auth?.currentUser;
    // if (user) {
    //   navigateTo("/prev-results");
    // } else {
    //   toast({
    //     title: "Please Log In",
    //     description: "Log in to continue...",
    //     status: "info",
    //     duration: 2000,
    //     isClosable: true,
    //   });
    // }
  };
  const location = useLocation();
  const [userAnswers, setUserAnswers] = useState(location.state);

  const navigateTo = useNavigate();

  const [providedLabels, setProvidedLabels] = useState([]);
  const [labelData, setLabelData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    let total = 0;
    let providedLabels = [];
    let labelData = [];
    let tableData = [];

    userAnswers.forEach((providedData) => {
      let cleanedTitle = getSectionName(providedData.title);
      providedLabels.push(cleanedTitle);
      labelData.push(providedData.score);
      tableData.push({
        section: cleanedTitle,
        score: providedData.score,
      });
      total += providedData.score;
    });

    setProvidedLabels(providedLabels);
    setLabelData(labelData);
    setTableData(tableData);
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
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          w="50vw"
          textAlign={{ base: "center", md: "none" }}
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
            onClick={navigateToPrevResults}
          >
            View Previous Responses
          </Text>
        </Flex>
      </Center>
      <Footer />
    </Box>
  );
}
