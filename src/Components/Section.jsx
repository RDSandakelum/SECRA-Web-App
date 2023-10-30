import { Box, Center, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Question from "./Question";

export default function Section(props) {
  const getAsnwer = (answer, type, questionId) => {
    // console.log(answer);
    props.sendData(answer, type, questionId);
  };

  return (
    <Box id={props.id} mt="2rem" ml="1rem" w="98%">
      <Center>
        <Heading ml="1rem">Section {props.section}</Heading>
      </Center>
      {/* {props.data.map((question) => createQuestion(question, aType))} */}
      {props.data.map((question, idx) => (
        <CreateQuestion
          key={idx}
          question={question}
          getAsnwer={getAsnwer}
        ></CreateQuestion>
      ))}
    </Box>
  );
}

const CreateQuestion = ({ question, getAsnwer }) => {
  // let aType = "Checkbox";
  // if (question.dependOn) {
  //   if (question?.answers) {
  //     aType = "Checkbox";
  //   } else {
  //     aType = "Text";
  //   }
  // } else {
  //   aType = "Checkbox";
  // }

  // const [aType, setAtype] = useState("Checkbox");
  // useEffect(() => {
  //   if (question.dependOn) {
  //     if (question?.answers) {
  //       setAtype("Checkbox");
  //     } else {
  //       setAtype("Text");
  //     }
  //   } else {
  //     setAtype("Checkbox");
  //   }
  // }, [question, aType]);
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
