import React, { useEffect, useState, useRef } from "react";
import Navbarr from "./Navbarr";
import Chart from "./Chart";
import html2pdf from "html2pdf.js";
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
import { auth, db } from "../Config/firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function ResultPage() {
  const toast = useToast();
  const compareDates = (a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    // Compare dates in descending order
    return dateB - dateA;
  };
  const navigateToPrevResults = async () => {
    const user = auth?.currentUser;
    const prevResponses = [];
    if (user) {
      const q = query(
        collection(db, "userAnswers"),
        where("userId", "==", auth.currentUser.uid)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        prevResponses.push(doc.data());
      });
      const sortedResponses = prevResponses.sort(compareDates);
      navigateTo("/prev-results", { state: sortedResponses });
    } else {
      toast({
        title: "Please Log In",
        description: "Log in to continue...",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  const location = useLocation();
  const prevData = location.state;
  const [userAnswers, setUserAnswers] = useState(prevData.data);
  let inst = "";
  let unitOfAssessment = ""

  if (prevData?.uniInfo){
    inst = prevData.uniInfo["Institution"];
    unitOfAssessment = prevData.uniInfo["unitOfAssessment"]
  }
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
  const componentRef = useRef();
  const saveToPDF = () => {
    const input = componentRef.current;

    if (input) {
      const pdfOptions = {
        filename: prevData.date,
        onePage: true,
        format: "A4",
      };
      html2pdf(input, pdfOptions);
    } else {
      console.error("Component reference not found.");
    }
  };

  return (
    <Box>
      <Navbarr />
      <Box ref={componentRef}>
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
        <Text mt="2rem" fontSize="2rem" fontWeight="bold">{unitOfAssessment} : {inst}</Text>
        </Center>
        <Center>
          <Table tableData={tableData} totalScore={totalScore} />
        </Center>
      </Box>
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
            onClick={saveToPDF}
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
