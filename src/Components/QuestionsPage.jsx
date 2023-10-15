import { Flex, Button, Center } from "@chakra-ui/react";
import React from "react";
import QuestionsNav from "./QuestionsNav";
import Footer from "./Footer";
import Section from "./Section";
import { section_01 } from "../Data/Questions";
export default function QuestionsPage() {
  return (
    <>
      <Flex direction={{ base: "column", md: "row" }}>
        <QuestionsNav />
        <Flex direction="column" w="100%">
          <Section section="01" data={section_01} />
          <Section section="02" data={section_01} />
          <Section section="03" data={section_01} />
          <Section section="04" data={section_01} />
          <Section section="05" data={section_01} />
          <Section section="06" data={section_01} />
          <Section section="07" data={section_01} />
          <Center>
            <Button
              mt="2rem"
              mb="2rem"
              _hover={{ bg: null }}
              color="white"
              bg="#01033C"
              type="submit"
              minW="200px"
            >
              Submit Answers
            </Button>
          </Center>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
}
