import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";
import Question from "./Question";

export default function Section(props) {
  let qType = "Checkbox";
  const createQuestion = (question) => {
    if (question.dependOn) {
      if (question?.answers) {
        qType = "Checkbox";
      } else {
        qType = "Text";
      }
    } else {
      qType = "Checkbox";
    }
    return (
      <>
        <Question
          key={question.questionID}
          question={question.question}
          answers={question.answers}
          qType={qType}
        />
        <br />
      </>
    );
  };

  return (
    <Box id={props.id} mt="2rem" ml="1rem" w="98%">
      <Center>
        <Heading ml="1rem">Section {props.section}</Heading>
      </Center>
      {props.data.map((question) => createQuestion(question, qType))}
    </Box>
  );
}
