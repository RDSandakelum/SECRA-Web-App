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
        setCurrentAnsweredID("");
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
                    props.data.dependingQuestions[i]?.questionID ===
                    currentAnsweredID
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
            // props.setAnswers((prevAns) => {
            //   prevAns[currentSection].questions.map((que) => {
            //     if (que.questionID === currentAnsweredID) {
            //       let currentSectionData = que;
            //       dependingQuestions.forEach((question) =>
            //         currentSectionData?.dependingQuestions?.push(question)
            //       );
            //     }
            //   });

            //   return [...prevAns];
            // });
        }

        // console.log("depending questions", dependingQuestions);

        if (dependingQuestions.length > 0) {
            props.setAnswers((prevAns) => {
                let currentSectionData =
                    prevAns[currentSection].questions[props.questionIndex];
                dependingQuestions.forEach((question) => {
                    // console.log(
                    //   currentSectionData.dependingQuestions.filter(
                    //     (dependingQ) => dependingQ.questionID !== question.questionID
                    //   )
                    // );
                    if (
                        currentSectionData.dependingQuestions.filter(
                            (dependingQ) =>
                                dependingQ.questionID === question.questionID
                        ).length === 0
                    ) {
                        currentSectionData?.dependingQuestions?.push(question);
                    }
                });

                return [...prevAns];
            });
        }
    };

    // console.group(props.data);
    useEffect(() => {
        if (currentAnsweredID !== "") {
            pushDependingQuestions();
        }
    }, [props.data, currentAnsweredID]);

    function removeDependingQuestions(answer, questionId) {
        props.setAnswers((prev) => {
            let dependingQuestions = [...props.data.dependingQuestions];

            if (props.data.questionID !== questionId) {
                let subQuestionProvidedAnswers = [];
                prev[currentSection].questions[
                    props.questionIndex
                ].dependingQuestions.map((que) => {
                    if (que.questionID === questionId) {
                        que.providedAnswers = que.providedAnswers.filter(
                            (value) => value !== answer
                        );
                        subQuestionProvidedAnswers = [...que.providedAnswers];
                    }
                });

                let subDependingQuestions = [];

                subDependingQuestions = dependingQuestions.filter(
                    (question) =>
                        question.dependingQuestion === questionId &&
                        !question.dependingAnswer.some((answer) =>
                            subQuestionProvidedAnswers.some(
                                (subQAns) => subQAns === answer
                            )
                        )
                );

                console.log("subdepquestions", subDependingQuestions);

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

                subDependingQuestions.forEach((question) => {
                    question.providedAnswers = [];
                    dependingQuestions = dependingQuestions.filter(
                        (dependingQuestion) =>
                            dependingQuestion.questionID !== question.questionID
                    );
                });
            } else {
                prev[currentSection].questions[
                    props.questionIndex
                ].providedAnswers = prev[currentSection].questions[
                    props.questionIndex
                ].providedAnswers.filter((value) => value !== answer);

                let subQuestionProvidedAnswers =
                    prev[currentSection].questions[props.questionIndex]
                        .providedAnswers;

                console.log(subQuestionProvidedAnswers);

                let subDependingQuestions = [];

                subDependingQuestions = dependingQuestions.filter(
                    (question) =>
                        question.dependingQuestion === questionId &&
                        question.dependingAnswer.some((answer) =>
                            subQuestionProvidedAnswers.some(
                                (subQAns) => subQAns === answer
                            )
                        )
                );
                if (subDependingQuestions.length === 0) {
                    dependingQuestions = [];
                }
                props.data?.dependingQuestions?.forEach((question) => {
                    question.providedAnswers = [];
                });
            }
            let currentSectionData =
                prev[currentSection].questions[props.questionIndex];
            currentSectionData.dependingQuestions = [...dependingQuestions];
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
                                <Box
                                    key={index}
                                    width={{ base: "100%", md: "30%" }}
                                >
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
                                            setCurrentAnsweredID(
                                                props.data.questionID
                                            );
                                            if (e.target.checked) {
                                                props.setAnswers((prev) => {
                                                    prev[
                                                        currentSection
                                                    ].questions.map((que) => {
                                                        if (
                                                            que.questionID ===
                                                            props.data
                                                                .questionID
                                                        ) {
                                                            que.providedAnswers.push(
                                                                e.target.value
                                                            );
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
                        </Flex>
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
                                <Text fontWeight="medium">
                                    {followUp.question}
                                </Text>
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
                                                        (answer) =>
                                                            answer === data
                                                    ) !== undefined
                                                }
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        props.setAnswers(
                                                            (prev) => {
                                                                prev[
                                                                    currentSection
                                                                ].questions.map(
                                                                    (que) => {
                                                                        if (
                                                                            que.questionID ===
                                                                            followUp.questionID
                                                                        ) {
                                                                            que.providedAnswers.push(
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            );
                                                                        }
                                                                    }
                                                                );

                                                                return [
                                                                    ...prev,
                                                                ];
                                                            }
                                                        );
                                                        setCurrentAnsweredID(
                                                            followUp.questionID
                                                        );
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
                                </Flex>
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
                                <Text fontWeight="medium">
                                    {followUp.question}
                                </Text>
                                <Box width={{ base: "100%", md: "60%" }}>
                                    {console.log(followUp.providedAnswers)}
                                    <input
                                        id={followUp.questionID}
                                        value={followUp.providedAnswers[0]}
                                        onChange={(e) => {
                                            props.setAnswers((prev) => {
                                                prev[
                                                    currentSection
                                                ].questions.map((que) => {
                                                    if (
                                                        que.questionID ===
                                                        followUp.questionID
                                                    ) {
                                                        que.providedAnswers[0] =
                                                            e.target.value;
                                                    }
                                                });

                                                return [...prev];
                                            });
                                            setCurrentAnsweredID(
                                                followUp.questionID
                                            );
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