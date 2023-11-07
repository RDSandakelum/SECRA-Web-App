import React, { useState, useEffect, useMemo } from "react";
import { Text, Flex, Box, Checkbox, CheckboxGroup } from "@chakra-ui/react";

export default function Question(props) {
  const [answersArray, setAnswersArray] = useState(props.data.answers);
  const [currentSection, setCurrentSection] = useState(props.currentSection);
  const [currentAnsweredID, setCurrentAnsweredID] = useState("");

  function findDependingQuestions(providedAnswers, questionId) {
    const dependingQuestions = [];
    const sectionData = props.sectionData;
    sectionData.forEach((question) => {
      if (
        question.dependingQuestion === questionId &&
        question.dependingAnswer.some((answer) =>
          providedAnswers.some((pAns) => pAns === answer)
        )
      ) {
        dependingQuestions.push(question);
      }
    });
    return dependingQuestions;
  }

  const pushDependingQuestions = () => {
    //find depending questions
    let dependingQuestions = [];
    if (props.data.questionID === currentAnsweredID) {
      dependingQuestions = findDependingQuestions(
        props.data.providedAnswers,
        currentAnsweredID
      );
    } else {
      let dependentQuestionAnswers = [];
      for (let i = 0; i < props.data.dependingQuestions.length; i++) {
        if (
          props.data.dependingQuestions[i]?.questionID === currentAnsweredID
        ) {
          dependentQuestionAnswers =
            props.data.dependingQuestions[i]?.providedAnswers;
          dependingQuestions = findDependingQuestions(
            dependentQuestionAnswers,
            currentAnsweredID
          );

          break;
        }
      }
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
    }

    // console.log("depending questions", dependingQuestions);

    if (dependingQuestions.length > 0) {
      props.setAnswers((prevAns) => {
        let currentSectionData =
          prevAns[currentSection].questions[props.questionIndex];
        dependingQuestions.forEach((question) =>
          currentSectionData?.dependingQuestions?.push(question)
        );

        return [...prevAns];
      });
    }
  };

  useEffect(() => {
    if (currentAnsweredID !== "") {
      pushDependingQuestions();
    }
  }, [props.providedAnswers, currentAnsweredID]);

  const handleUnchecked = (data, followUpID) => {
    // if (followUpID) {
    props.setAnswers((prev) => {
      let followupQue = {};

      prev[currentSection].questions.map((que) => {
        if (que.questionID === currentAnsweredID) {
          followupQue = que;
          console.log(followupQue);
          followupQue.providedAnswers = followupQue.providedAnswers.filter(
            (answer) => answer !== data
          );
        }
      });

      if (followupQue.providedAnswers.length > 0) {
        followupQue.dependingQuestions = followupQue.dependingQuestions.filter(
          (que) => {
            return que.dependingAnswer.some((answer) =>
              followupQue.providedAnswers.includes(answer)
            );
          }
        );
      } else {
        followupQue.dependingQuestions = [];
      }

      return [...prev];
    });
    // } else {
    //   props.setAnswers((prev) => {
    //     prev[currentSection].questions[props.questionIndex].providedAnswers =
    //       prev[currentSection].questions[
    //         props.questionIndex
    //       ].providedAnswers.filter((answer) => answer !== data);

    //     let answers =
    //       prev[currentSection].questions[props.questionIndex].providedAnswers;
    //     if (answers.length > 0) {
    //       prev[currentSection].questions[
    //         props.questionIndex
    //       ].dependingQuestions = prev[currentSection].questions[
    //         props.questionIndex
    //       ].dependingQuestions.filter((que) => {
    //         return que.dependingAnswer.some((answer) =>
    //           answers.includes(answer)
    //         );
    //       });
    //     } else {
    //       prev[currentSection].questions[
    //         props.questionIndex
    //       ].dependingQuestions = [];
    //     }

    //     return [...prev];
    //   });
    // }
  };

  return (
    <>
      {!props.dependingAnswer ? (
        <>
          <Box boxShadow="xl" p="6" rounded="md" bg="white" w="100%">
            <Text fontWeight="medium">{props.data.question}</Text>
            <Flex
              direction={{ base: "column", md: "row" }}
              flexWrap="wrap"
              justifyContent={{ base: "space-between", md: "normal" }}
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
                      console.log(e.target.checked);
                      if (e.target.checked) {
                        props.setAnswers((prev) => {
                          prev[currentSection].questions[
                            props.questionIndex
                          ].providedAnswers.push(e.target.value);

                          return [...prev];
                        });
                        setCurrentAnsweredID(props.data.questionID);
                      } else {
                        handleUnchecked(e.target.value);
                      }
                    }}
                  >
                    {data}
                  </Checkbox>
                </Box>
              ))}
            </Flex>
          </Box>
          {props.data?.dependingQuestions?.map((followUp, index) =>
            followUp?.answers ? (
              <>
                {" "}
                <Box
                  boxShadow="xl"
                  p="6"
                  rounded="md"
                  bg="white"
                  w="100%"
                  key={index}
                >
                  <Text fontWeight="medium">{followUp.question}</Text>
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    flexWrap="wrap"
                    justifyContent={{ base: "space-between", md: "normal" }}
                    mx={{ base: "1rem", md: "1rem" }}
                    mt="1rem"
                    fontWeight="medium"
                    w={{ md: "100%" }}
                  >
                    {followUp.answers.map((data, index) => (
                      <Box key={index} width={{ base: "100%", md: "30%" }}>
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
                            console.log(e.target.checked);
                            if (e.target.checked) {
                              props.setAnswers((prev) => {
                                setCurrentAnsweredID(followUp.questionID);
                                prev[currentSection].questions.map((que) => {
                                  if (que.questionID === followUp.questionID) {
                                    que.providedAnswers.push(e.target.value);
                                  }
                                });

                                return [...prev];
                              });
                            } else {
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
                  </Flex>
                </Box>
              </>
            ) : (
              <>
                {" "}
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
                    <input
                      id={followUp.questionID}
                      value={followUp ? followUp.providedAnswers[0] : ""}
                      onChange={(e) => {
                        props.setAnswers((prev) => {
                          prev[currentSection].questions.map((que) => {
                            if (que.questionID === followUp.questionID) {
                              que.providedAnswers[0] = e.target.value;
                            }
                          });

                          return [...prev];
                        });
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
              </>
            )
          )}
        </>
      ) : null}
    </>
  );
}
