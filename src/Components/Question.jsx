import React, { useState, useEffect } from "react";
import { Text, Flex, Box, Checkbox, CheckboxGroup } from "@chakra-ui/react";

export default function Question(props) {
  const [showQuestion, setShowQuestion] = useState(true);

  const [checkedAnswers, setCheckedAnswers] = useState([]);
  const [answer, setAnswer] = useState("");
  console.log(answer);
  let answersArray = [];
  let typeText = false;

  if (props.qType === "Text") {
    typeText = true;
  } else {
    answersArray = props.data.answers;
  }

  const handleCheckboxChange = (newCheckedAnswers) => {
    setCheckedAnswers(newCheckedAnswers);
    props.onSubmit(newCheckedAnswers, "Arr", props.data.questionID);
    console.log(checkedAnswers);
  };

  const setParaAns = (answerStr) => {
    setAnswer(answerStr);
    props.onSubmit(answerStr, "Str", props.data.questionID);
  };

  const createAnswers = (data, index) => {
    return (
      <Checkbox
        mt={{ md: "1rem" }}
        key={index}
        value={data}
        isChecked={checkedAnswers.includes(data)}
        onChange={() =>
          handleCheckboxChange(
            checkedAnswers.includes(data)
              ? checkedAnswers.filter((answer) => answer !== data)
              : [...checkedAnswers, data]
          )
        }
      >
        {data}
      </Checkbox>
    );
  };

  return (
    showQuestion && (
      <Box boxShadow="xl" p="6" rounded="md" bg="white" w="100%">
        <Text fontWeight="medium">{props.data.question}</Text>
        <CheckboxGroup value={checkedAnswers}>
          <Flex
            direction={{ base: "column", md: "row" }}
            flexWrap="wrap"
            justifyContent={{ base: "space-between", md: "normal" }}
            mx={{ base: "1rem", md: "1rem" }}
            mt="1rem"
            fontWeight="medium"
            w={{ md: "100%" }}
          >
            {typeText ? (
              <Box width={{ base: "100%", md: "60%" }}>
                <input
                  value={answer}
                  onChange={(e) => setParaAns(e.target.value)}
                  style={{
                    width: "100%",
                    height: "50px",
                    border: "2px solid #01033C",
                    padding: "4px",
                  }}
                />
              </Box>
            ) : (
              answersArray.map((answer, index) => (
                <Box key={index} width={{ base: "100%", md: "30%" }}>
                  {createAnswers(answer, index)}
                </Box>
              ))
            )}
          </Flex>
        </CheckboxGroup>
      </Box>
    )
  );
}
