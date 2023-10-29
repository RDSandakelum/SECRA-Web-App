import { Flex, Button, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import QuestionsNav from "./QuestionsNav";
import Footer from "./Footer";
import Section from "./Section";
import {
  section_01,
  section_02,
  section_03,
  section_04,
  section_05,
  section_06,
  section_07,
} from "../Data/Questions";
export default function QuestionsPage() {
  const [answers, setAnswers] = useState({});

  const getData = (answer, type, questionId) => {
    console.log("answer received :", answer, questionId);
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  console.log(answers);
  return (
    <>
      <Flex direction={{ base: "column", md: "row" }}>
        <QuestionsNav />
        <Flex direction="column" w="100%">
          <Section
            sendData={getData}
            id="section-01"
            section="01 - Organisation"
            data={section_01}
          />
          <Section
            sendData={getData}
            id="section-02"
            section="02 – Quality Assurance"
            data={section_02}
          />
          <Section
            sendData={getData}
            id="section-03"
            section="03 – Development"
            data={section_03}
          />
          <Section
            sendData={getData}
            id="section-04"
            section="04 – Integration"
            data={section_04}
          />
          <Section
            sendData={getData}
            id="section-05"
            section="05 – Activities"
            data={section_05}
          />
          <Section
            sendData={getData}
            id="section-06"
            section="06 – Institutional Support"
            data={section_06}
          />
          <Section
            sendData={getData}
            id="section-07"
            section="07 – External Environment "
            data={section_07}
          />
          <Center>
            <Button
              mt="2rem"
              mb="2rem"
              _hover={{ bg: null }}
              color="white"
              bg="#01033C"
              type="submit"
              minW="200px"
            >
              Submit Answers
            </Button>
          </Center>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}
