import { Box, Center, Heading, Divider } from "@chakra-ui/react";
import React from "react";
import Question from "./Question";

export default function Section(props) {
  const createQuestion = (question) => {
    return (
      <>
        <Question question={question.question} answers={question.answers} />
        <br />
      </>
    );
  };

  return (
    <Box id={props.section} mt="2rem" ml="1rem" w="98%">
      <Heading ml="1rem">Section {props.section}</Heading>

      <Divider borderColor="#01033C" borderWidth="1px" />
      {props.data.map(createQuestion)}
    </Box>
  );
}
