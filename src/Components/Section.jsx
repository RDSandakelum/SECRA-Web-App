import { Box, Center, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Question from "./Question";

export default function Section(props) {
  return (
    <Box id={props.id} mt="2rem" ml="1rem" w="98%">
      <Center>
        <Heading ml="1rem">Section {props.section}</Heading>
      </Center>

      {props.answers.questions.map((question, idx) => (
        <>
          <Question
            key={idx}
            questionIndex={idx}
            data={question}
            providedAnswers={question.providedAnswers}
            dependingAnswer={question.dependingAnswer}
            setAnswers={props.setAnswers}
            sectionData={props.answers.questions}
            currentSection={props.currentSection}
          />
          <br />
        </>
      ))}
    </Box>
  );
}
