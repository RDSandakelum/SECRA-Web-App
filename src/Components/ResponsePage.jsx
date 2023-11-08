import React, { useState, useEffect, useMemo } from "react";
import {
  Text,
  Flex,
  Box,
  Checkbox,
  Center,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { getSectionName } from "../functions/sectionRenaming";

export default function ResponsePage() {
  const location = useLocation();
  const [queAndAnswers, setQueAndAnswers] = useState(location.state);
  const navigateTo = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box paddingX={3}>
      {queAndAnswers.map((queAndAnswer, index) => {
        return (
          <div key={queAndAnswer.title}>
            <br />
            <Center>
              <Heading ml="1rem">
                Section {index + 1} - {getSectionName(queAndAnswer.title)}
              </Heading>
            </Center>

            {queAndAnswer.questions.map((question) => {
              if (question.answers && question.answers.length > 0) {
                return (
                  <Box
                    key={question.questionID}
                    boxShadow="xl"
                    p="6"
                    rounded="md"
                    bg="white"
                    w="100%"
                    mb={3}
                  >
                    <Text fontWeight="medium">{question.question}</Text>
                    <Flex
                      direction={{ base: "column", md: "row" }}
                      flexWrap="wrap"
                      justifyContent={{ base: "space-between", md: "normal" }}
                      mx={{ base: "1rem", md: "1rem" }}
                      mt="1rem"
                      fontWeight="medium"
                      w={{ md: "100%" }}
                    >
                      {question.answers.map((answer, index) => (
                        <Box key={index} width={{ base: "100%", md: "30%" }}>
                          <Checkbox
                            readOnly
                            mt={{ md: "1rem" }}
                            value={answer}
                            isChecked={question.providedAnswers.includes(
                              answer
                            )}
                          >
                            {answer}
                          </Checkbox>
                        </Box>
                      ))}
                    </Flex>
                  </Box>
                );
              } else if (question.providedAnswers.length > 0) {
                return (
                  <Box
                    key={question.questionID}
                    boxShadow="xl"
                    p="6"
                    rounded="md"
                    bg="white"
                    w="100%"
                    mb={3}
                  >
                    <Text fontWeight="medium">{question.question}</Text>
                    <Box width={{ base: "100%", md: "60%" }}>
                      <input
                        value={question.providedAnswers[0]}
                        style={{
                          width: "100%",
                          height: "50px",
                          border: "1px solid lightgray",
                          padding: "4px",
                        }}
                      />
                    </Box>
                  </Box>
                );
              }
              return null;
            })}
          </div>
        );
      })}
      <Center>
        <Button
          mt="2rem"
          mb="5rem"
          _hover={{ bg: null }}
          color="white"
          bg="#01033C"
          type="submit"
          minW="200px"
          onClick={() => navigateTo("/result", { state: queAndAnswers })}
        >
          Back to Results Page
        </Button>
      </Center>
    </Box>
  );
}
