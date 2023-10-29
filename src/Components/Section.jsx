import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";
import Question from "./Question";

export default function Section(props) {
  let aType = "Checkbox";

  const getAsnwer = (answer, type, questionId) => {
    props.sendData(answer, type, questionId);
  };

  const createQuestion = (question) => {
    if (question.dependOn) {
      if (question?.answers) {
        aType = "Checkbox";
      } else {
        aType = "Text";
      }
    } else {
      aType = "Checkbox";
    }
    return (
      <>
        <Question onSubmit={getAsnwer} data={question} qType={aType} />
        <br />
      </>
    );
  };

  return (
    <Box id={props.id} mt="2rem" ml="1rem" w="98%">
      <Center>
        <Heading ml="1rem">Section {props.section}</Heading>
      </Center>
      {props.data.map((question) => createQuestion(question, aType))}
    </Box>
  );
}
