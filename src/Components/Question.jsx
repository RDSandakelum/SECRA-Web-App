import React, { useState, useEffect, useMemo } from "react";
import {
  Text,
  Flex,
  Box,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";

export default function Question(props) {

  const [answersArray, setAnswersArray] = useState(props.data.answers);
  const [currentSection, setCurrentSection] = useState(props.currentSection);
  const [currentAnsweredID, setCurrentAnsweredID] = useState("");

  function findDependingQuestions(providedAnswers, questionId) {
    // An array to store the questions that depend on the provided answers and questionId
    const dependingQuestions = [];

    // Access the section data from the props
    const sectionData = props.sectionData;

    // Iterate over each question in the section data
    sectionData.forEach((question) => {
      // Check if the current question depends on the specified questionId
      // and if any of its depending answers match any of the provided answers
      if (
        question.dependingQuestion === questionId &&
        question.dependingAnswer.some((answer) =>
          providedAnswers.some((pAns) => pAns === answer)
        )
      ) {
        // If the conditions are met, add the question to the dependingQuestions array
        dependingQuestions.push(question);
      }
    });

    // Reset the current answered ID (This may be specific to the component's logic)
    setCurrentAnsweredID("");

    // Return the array of depending questions
    return dependingQuestions;
  }

  const pushDependingQuestions = () => {
    // Initialize an array to store depending questions
    let dependingQuestions = [];

    // Check if the current questionID matches the recently answered questionID
    if (props.data.questionID === currentAnsweredID) {
      // If so, find depending questions based on the provided answers and questionID
      dependingQuestions = findDependingQuestions(
        props.data.providedAnswers,
        currentAnsweredID
      );
    } else {
      // If not, find the provided answers for the depending question
      let dependentQuestionAnswers = [];
      for (let i = 0; i < props.data.dependingQuestions.length; i++) {
        if (
          props.data.dependingQuestions[i]?.questionID === currentAnsweredID
        ) {
          dependentQuestionAnswers =
            props.data.dependingQuestions[i]?.providedAnswers;
          // Find depending questions based on the dependent question's answers and questionID
          dependingQuestions = findDependingQuestions(
            dependentQuestionAnswers,
            currentAnsweredID
          );

          break;
        }
      }

      // Note: The commented block below appears to be an attempt to update state, but it's commented out
      // It would add the depending questions to the dependingQuestions array of the current answered question
      // Uncomment and modify it based on your actual requirements if needed
      /*
            props.setAnswers((prevAns) => {
              prevAns[currentSection].questions.map((que) => {
                if (que.questionID === currentAnsweredID) {
                  let currentSectionData = que;
                  dependingQuestions.forEach((question) =>
                    currentSectionData?.dependingQuestions?.push(question)
                  );
                }
              });
    
              return [...prevAns];
            });
            */
    }

    // Check if there are depending questions
    if (dependingQuestions.length > 0) {
      // Update state to include depending questions in the current section's data
      props.setAnswers((prevAns) => {
        let currentSectionData =
          prevAns[currentSection].questions[props.questionIndex];
        dependingQuestions.forEach((question) => {
          // Check if the depending question is not already present in dependingQuestions array
          if (
            currentSectionData.dependingQuestions.filter(
              (dependingQ) => dependingQ.questionID === question.questionID
            ).length === 0
          ) {
            // If not, push the depending question to the dependingQuestions array
            currentSectionData?.dependingQuestions?.push(question);
          }
        });

        return [...prevAns];
      });
    }
  };

  // console.group(props.data);
  useEffect(() => {
    // This effect runs when either `props.data` or `currentAnsweredID` changes
    if (currentAnsweredID !== "") {
      // If `currentAnsweredID` is not an empty string, call the function to handle depending questions
      pushDependingQuestions();
    }
  }, [props.data, currentAnsweredID]);

  function removeDependingQuestions(answer, questionId) {
    props.setAnswers((prev) => {
      // Copy the existing depending questions array
      let dependingQuestions = [...props.data.dependingQuestions];

      if (props.data.questionID !== questionId) {
        // If the current questionID is not equal to the specified questionId
        let subQuestionProvidedAnswers = [];

        // Update the provided answers and get a copy for sub-question analysis
        prev[currentSection].questions[
          props.questionIndex
        ].dependingQuestions.forEach((que) => {
          if (que.questionID === questionId) {
            que.providedAnswers = que.providedAnswers.filter(
              (value) => value !== answer
            );
            subQuestionProvidedAnswers = [...que.providedAnswers];
          }
        });

        // Filter out depending questions that are no longer satisfied
        let subDependingQuestions = dependingQuestions.filter(
          (question) =>
            question.dependingQuestion === questionId &&
            !question.dependingAnswer.some((ans) =>
              subQuestionProvidedAnswers.some((subQAns) => subQAns === ans)
            )
        );

        // Expand sub-depending questions
        let i = 0;
        while (i < subDependingQuestions.length) {
          subDependingQuestions = [
            ...subDependingQuestions,
            ...dependingQuestions.filter(
              (question) =>
                question.dependingQuestion ===
                subDependingQuestions[i].questionID
            ),
          ];
          i++;
        }

        // Clear the provided answers and remove sub-depending questions
        subDependingQuestions.forEach((question) => {
          question.providedAnswers = [];
          dependingQuestions = dependingQuestions.filter(
            (dependingQuestion) =>
              dependingQuestion.questionID !== question.questionID
          );
        });
      } else {
        // If the current questionID is equal to the specified questionId
        // Remove the provided answer for the current question
        prev[currentSection].questions[props.questionIndex].providedAnswers =
          prev[currentSection].questions[
            props.questionIndex
          ].providedAnswers.filter((value) => value !== answer);

        // Get a copy of the provided answers for sub-question analysis
        let subQuestionProvidedAnswers =
          prev[currentSection].questions[props.questionIndex].providedAnswers;

        // Filter out depending questions that are no longer satisfied
        let subDependingQuestions = dependingQuestions.filter(
          (question) =>
            question.dependingQuestion === questionId &&
            question.dependingAnswer.some((ans) =>
              subQuestionProvidedAnswers.some((subQAns) => subQAns === ans)
            )
        );

        // If there are no sub-depending questions, clear the entire dependingQuestions array
        if (subDependingQuestions.length === 0) {
          dependingQuestions = [];
        }

        // Clear provided answers for each depending question in the entire section
        props.data?.dependingQuestions?.forEach((question) => {
          question.providedAnswers = [];
        });
      }

      // Update the dependingQuestions array in the current section's data
      let currentSectionData =
        prev[currentSection].questions[props.questionIndex];
      currentSectionData.dependingQuestions = [...dependingQuestions];

      // Return the updated state
      return [...prev];
    });
  }

  const handleUnchecked = (data, id) => {
    removeDependingQuestions(data, id);
    setCurrentAnsweredID("");
  };

  return (
    <>
      {!props.dependingAnswer ? (
        <>
          <Box boxShadow="xl" p="6" rounded="md" bg="white" w="100%">
            <Text fontWeight="medium">{props.data.question}</Text>
            {!props.checkBox?<RadioGroup>
              <Flex
                direction={{ base: "column", md: "row" }}
                flexWrap="wrap"
                justifyContent={{
                  base: "space-between",
                  md: "normal",
                }}
                mx={{ base: "1rem", md: "1rem" }}
                mt="1rem"
                fontWeight="medium"
                w={{ md: "100%" }}
              >
                {answersArray?.map((data, index) => (
                  <Box key={index} width={{ base: "100%", md: "30%" }}>
                    <Radio
                      mt={{ md: "1rem" }}
                      key={index}
                      value={data}
                      isChecked={
                        props.data?.providedAnswers.find(
                          (answer) => answer === data
                        ) !== undefined
                      }
                      onChange={(e) => {
                        setCurrentAnsweredID(props.data.questionID);
                        if (e.target.checked) {
                          props.setAnswers((prev) => {
                            prev[currentSection].questions.map((que) => {
                              if (que.questionID === props.data.questionID) {
                                removeDependingQuestions(que.providedAnswers[0], props.data.questionID)
                                que.providedAnswers = [];
                                que.providedAnswers.push(e.target.value);
                              }
                            });

                            return [...prev];
                          });
                        } else {
                          // setCurrentAnsweredID(props.data.questionID);
                          handleUnchecked(
                            e.target.value,
                            props.data.questionID
                          );
                        }
                      }}
                    >
                      {data}
                    </Radio>
                  </Box>
                ))}
              </Flex>
            </RadioGroup>:
            <Flex
            direction={{ base: "column", md: "row" }}
            flexWrap="wrap"
            justifyContent={{
              base: "space-between",
              md: "normal",
            }}
            mx={{ base: "1rem", md: "1rem" }}
            mt="1rem"
            fontWeight="medium"
            w={{ md: "100%" }}
          >
            {answersArray?.map((data, index) => (
              <Box key={index} width={{ base: "100%", md: "30%" }}>
                <Checkbox
                  mt={{ md: "1rem" }}
                  key={index}
                  value={data}
                  isChecked={
                    props.data?.providedAnswers.find(
                      (answer) => answer === data
                    ) !== undefined
                  }
                  onChange={(e) => {
                    setCurrentAnsweredID(props.data.questionID);
                    if (e.target.checked) {
                      props.setAnswers((prev) => {
                        prev[currentSection].questions.map((que) => {
                          if (que.questionID === props.data.questionID) {
                            que.providedAnswers.push(e.target.value);
                          }
                        });

                        return [...prev];
                      });
                    } else {
                      // setCurrentAnsweredID(props.data.questionID);
                      handleUnchecked(
                        e.target.value,
                        props.data.questionID
                      );
                    }
                  }}
                >
                  {data}
                </Checkbox>
              </Box>
            ))}
          </Flex>}
          </Box>
          {props.data?.dependingQuestions?.map((followUp, index) =>
            followUp?.answers ? (
              <Box
                boxShadow="xl"
                p="6"
                rounded="md"
                bg="white"
                w="100%"
                key={index}
              >
                <Text fontWeight="medium">{followUp.question}</Text>
                {!followUp.checkBox?
                <RadioGroup>
                  <Flex
                    direction={{
                      base: "column",
                      md: "row",
                    }}
                    flexWrap="wrap"
                    justifyContent={{
                      base: "space-between",
                      md: "normal",
                    }}
                    mx={{ base: "1rem", md: "1rem" }}
                    mt="1rem"
                    fontWeight="medium"
                    w={{ md: "100%" }}
                  >
                    {followUp.answers.map((data, index) => (
                      <Box
                        key={index}
                        width={{
                          base: "100%",
                          md: "30%",
                        }}
                      >
                        <Radio
                          mt={{ md: "1rem" }}
                          key={index}
                          value={data}
                          isChecked={
                            followUp.providedAnswers.find(
                              (answer) => answer === data
                            ) !== undefined
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              props.setAnswers((prev) => {
                                prev[currentSection].questions.map((que) => {
                                  if (que.questionID === followUp.questionID) {
                                    removeDependingQuestions(que.providedAnswers[0], followUp.questionID)
                                    que.providedAnswers = [];
                                    que.providedAnswers.push(e.target.value);
                                  }
                                });

                                return [...prev];
                              });
                              setCurrentAnsweredID(followUp.questionID);
                              // console.log(currentAnsweredID);
                            } else {
                              // setCurrentAnsweredID(followUp.questionID);
                              handleUnchecked(
                                e.target.value,
                                followUp.questionID
                              );
                            }
                          }}
                        >
                          {data}
                        </Radio>
                      </Box>
                    ))}
                  </Flex>
                  </RadioGroup>:
                  <Flex
                  direction={{
                    base: "column",
                    md: "row",
                  }}
                  flexWrap="wrap"
                  justifyContent={{
                    base: "space-between",
                    md: "normal",
                  }}
                  mx={{ base: "1rem", md: "1rem" }}
                  mt="1rem"
                  fontWeight="medium"
                  w={{ md: "100%" }}
                >
                  {followUp.answers.map((data, index) => (
                    <Box
                      key={index}
                      width={{
                        base: "100%",
                        md: "30%",
                      }}
                    >
                      <Checkbox
                        mt={{ md: "1rem" }}
                        key={index}
                        value={data}
                        isChecked={
                          followUp.providedAnswers.find(
                            (answer) => answer === data
                          ) !== undefined
                        }
                        onChange={(e) => {
                          if (e.target.checked) {
                            props.setAnswers((prev) => {
                              prev[currentSection].questions.map((que) => {
                                if (que.questionID === followUp.questionID) {
                                  que.providedAnswers.push(e.target.value);
                                }
                              });

                              return [...prev];
                            });
                            setCurrentAnsweredID(followUp.questionID);
                            // console.log(currentAnsweredID);
                          } else {
                            // setCurrentAnsweredID(followUp.questionID);
                            handleUnchecked(
                              e.target.value,
                              followUp.questionID
                            );
                          }
                        }}
                      >
                        {data}
                      </Checkbox>
                    </Box>
                  ))}
                </Flex>}
              </Box>
            ) : (
              <Box
                key={index}
                boxShadow="xl"
                p="6"
                rounded="md"
                bg="white"
                w="100%"
                id={followUp.questionID}
              >
                <Text fontWeight="medium">{followUp.question}</Text>
                <Box width={{ base: "100%", md: "60%" }}>
                  {/* {console.log(followUp.providedAnswers)} */}
                  <input
                    id={followUp.questionID}
                    value={followUp.providedAnswers[0]}
                    onChange={(e) => {
                      props.setAnswers((prev) => {
                        prev[currentSection].questions.map((que) => {
                          if (que.questionID === followUp.questionID) {
                            que.providedAnswers[0] = e.target.value;
                          }
                        });

                        return [...prev];
                      });
                      setCurrentAnsweredID(followUp.questionID);
                    }}
                    style={{
                      width: "100%",
                      height: "50px",
                      border: "1px solid lightgray",
                      padding: "4px",
                    }}
                  />
                </Box>
              </Box>
            )
          )}
        </>
      ) : null}
    </>
  );
}
