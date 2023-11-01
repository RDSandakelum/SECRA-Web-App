import { Box, Center, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Question from "./Question";

export default function Section(props) {
  return (
    <Box id={props.id} mt="2rem" ml="1rem" w="98%">
      <Center>
        <Heading ml="1rem">Section {props.section}</Heading>
      </Center>
      {/* {props.data.map((question) => createQuestion(question, aType))} */}
      {props.data.map((question, idx) => (
        <CreateQuestion key={idx} question={question}></CreateQuestion>
      ))}
    </Box>
  );
}

const CreateQuestion = ({ question, getAsnwer }) => {
  return (
    <>
      <Question
        onSubmit={getAsnwer}
        data={question}
        qType={
          question.dependOn
            ? question?.answers
              ? "Checkbox"
              : "Text"
            : "Checkbox"
        }
      />
      <br />
    </>
  );
};
