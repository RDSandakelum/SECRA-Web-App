import { Flex, Button, Center, useToast, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import QuestionMenuBar from "./QuestionMenuBar";
import Footer from "./Footer";
import Section from "./Section";
import {
  section_01,
  section_02,
  section_03,
  section_04,
  section_05,
  section_06,
  section_07,
} from "../Data/Questions";
import { auth, db } from "../Config/firebase-config";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";
export default function QuestionsPage() {
  const sections = [
    "Organisation",
    "Quality Assurance",
    "Development",
    "Integration",
    "Activities",
    "Institutional Support",
    "External Environment",
  ];

  const navigateTo = useNavigate();
  const toast = useToast();
  const [currentSection, setCurrentSection] = useState(0);

  const location2 = useLocation();
  const uniInfo = location2.state;

  const [answers, setAnswers] = useState(
    location.state
      ? location.state
      : [
          {
            title: "Section_1",
            questions: section_01.map((data) => ({
              ...data,
              providedAnswers: [],
              dependingQuestions: [],
            })),
          },
          {
            title: "Section_2",
            questions: section_02.map((data) => ({
              ...data,
              providedAnswers: [],
              dependingQuestions: [],
            })),
          },
          {
            title: "Section_3",
            questions: section_03.map((data) => ({
              ...data,
              providedAnswers: [],
              dependingQuestions: [],
            })),
          },
          {
            title: "Section_4",
            questions: section_04.map((data) => ({
              ...data,
              providedAnswers: [],
              dependingQuestions: [],
            })),
          },
          {
            title: "Section_5",
            questions: section_05.map((data) => ({
              ...data,
              providedAnswers: [],
              dependingQuestions: [],
            })),
          },
          {
            title: "Section_6",
            questions: section_06.map((data) => ({
              ...data,
              providedAnswers: [],
              dependingQuestions: [],
            })),
          },
          {
            title: "Section_7",
            questions: section_07.map((data) => ({
              ...data,
              providedAnswers: [],
              dependingQuestions: [],
            })),
          },
        ]
  );

  const saveData = async (userAnswers) => {
    const user = auth?.currentUser;
    if (user) {
      let total = 0;
      userAnswers.map((providedData) => {
        total += providedData.score;
      });
      const userId = auth.currentUser.uid;
      const dataToSave = {
        score: total,
        userId: userId,
        date: new Date(),
        uniInfo: uniInfo,
        user_answers: JSON.stringify(userAnswers),
      };
      //   console.log(dataToSave, userAnswers);

      // await setDoc(doc(db, "userAnswers", ""), dataToSave);
      // const id = collection(db, "userAnswers").;
      // await setDoc(doc(db, "userAnswers", id), dataToSave);

      await addDoc(collection(db, "userAnswers"), dataToSave);
      //   console.log("from Save Data");
    }
  };

  function sectionData(title) {
    const sections = {
      Section_1: section_01,
      Section_2: section_02,
      Section_3: section_03,
      Section_4: section_04,
      Section_5: section_05,
      Section_6: section_06,
      Section_7: section_07,
    };

    return sections[title] || [];
  }

  const handleNextClick = () => {
    setCurrentSection((prevSection) => prevSection + 1);
    window.scrollTo(0, 0);
  };

  function navigateToHome() {
    navigateTo("/");
  }

  const handleSubmitAnswers = () => {
    let userAnswers = answers.map((item) => {
      const { title, questions } = item;
      const extractedQuestions = questions.map((questionItem) => ({
        questionID: questionItem.questionID,
        question: questionItem.question,
        answers: questionItem.answers,
        providedAnswers: questionItem.providedAnswers,
      }));
      return { title, questions: extractedQuestions, score: 0 };
    });

    userAnswers.forEach((userAnswer) => {
      let data = sectionData(userAnswer.title);
      if (data) {
        userAnswer.questions.map((userAns) => {
          const relevantQuestion = data.find(
            (question) => question.questionID === userAns.questionID
          );
          if (relevantQuestion) {
            let providedAnswers = userAns.providedAnswers;
            let answers = relevantQuestion.answers
              ? relevantQuestion.answers
              : relevantQuestion.dependingAnswer;
            let indexes = [];
            let scores = 0;
            if (providedAnswers.length > 0) {
              providedAnswers.forEach((providedAnswer) => {
                const index = answers.findIndex(
                  (answer) => answer === providedAnswer
                );
                if (index !== -1) {
                  indexes.push(index);
                }
              });
              indexes.forEach((index) => {
                scores += relevantQuestion.scores[index];
              });
            }

            userAnswer.score += scores;
          }
        });
      }
    });
    // console.log(userAnswers);
    saveData(userAnswers);
    let date = new Date();
    date = date.toString();
    userAnswers = { uniInfo: uniInfo, data: userAnswers, date: date };
    navigateTo("/result", { state: userAnswers });
  };

  const checkRequired = (answers, section) => {
    const _currentSection = answers.filter(
      (e) => e.title == "Section_" + (section + 1)
    )[0];

    if (_currentSection) {
      for (let i = 0; i < _currentSection.questions.length; i++) {
        const e = _currentSection.questions[i];
        if (!e.dependOn) {
          if (e.providedAnswers.length <= 0) return true;
        } else {
          const _dependingQuestionAnswers = _currentSection.questions.find(
            (q) => q.questionID === e.dependingQuestion
          );
          if (
            _dependingQuestionAnswers &&
            _dependingQuestionAnswers.providedAnswers[0] ===
              e.dependingAnswer[0]
          ) {
            if (e.providedAnswers.length <= 0 || e.providedAnswers[0] === "")
              return true;
          }
        }
      }
    }
    return false;
  };
  //   console.log(answers);
  return (
    <>
      <Flex direction={{ base: "column", md: "row" }}>
        <QuestionMenuBar
          sections={sections}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <Flex direction="column" w="100%">
          {currentSection === 0 && (
            <Section
              id="section_01"
              section="01 - Organisation"
              data={section_01}
              setAnswers={setAnswers}
              answers={answers[currentSection]}
              currentSection={currentSection}
            />
          )}
          {currentSection === 1 && (
            <Section
              id="section_02"
              section="02 – Quality Assurance"
              data={section_02}
              setAnswers={setAnswers}
              answers={answers[currentSection]}
              currentSection={currentSection}
            />
          )}
          {currentSection === 2 && (
            <Section
              id="section_03"
              section="03 – Development"
              data={section_03}
              setAnswers={setAnswers}
              answers={answers[currentSection]}
              currentSection={currentSection}
            />
          )}
          {currentSection === 3 && (
            <Section
              id="section_04"
              section="04 – Integration"
              data={section_04}
              setAnswers={setAnswers}
              answers={answers[currentSection]}
              currentSection={currentSection}
            />
          )}
          {currentSection === 4 && (
            <Section
              id="section_05"
              section="05 – Activities"
              data={section_05}
              setAnswers={setAnswers}
              answers={answers[currentSection]}
              currentSection={currentSection}
            />
          )}
          {currentSection === 5 && (
            <Section
              id="section_06"
              section="06 – Institutional Support"
              data={section_06}
              setAnswers={setAnswers}
              answers={answers[currentSection]}
              currentSection={currentSection}
            />
          )}
          {currentSection === 6 && (
            <Section
              id="section_07"
              section="07 – External Environment"
              data={section_07}
              setAnswers={setAnswers}
              answers={answers[currentSection]}
              currentSection={currentSection}
            />
          )}
          <Center>
            {currentSection===6?<Text color="#01033C" fontSize={20}>Before submitting, you may edit your replies by navigating to the different sections in the left-hand column</Text>:<></>}
          </Center>
          <Center>
            <Flex w="40%" justifyContent="space-between">
              <Button
                mt="2rem"
                mb="5rem"
                _hover={{ bg: null }}
                color="white"
                bg="#01033C"
                type="submit"
                minW="200px"
                onClick={navigateToHome}
              >
                Home
              </Button>
              <Button
                mt="2rem"
                mb="5rem"
                _hover={{ bg: null }}
                color="white"
                bg="#01033C"
                type="submit"
                minW="200px"
                onClick={() => {
                  if (checkRequired(answers, currentSection)) {
                    toast({
                      title: "Please answer all the questions",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });
                  } else {
                    currentSection !== 6
                      ? handleNextClick()
                      : handleSubmitAnswers();
                  }
                }}
              >
                {currentSection === 6 ? "Submit Answers" : "Next"}
              </Button>
            </Flex>
          </Center>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}
