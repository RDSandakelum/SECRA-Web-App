import { Flex } from "@chakra-ui/react";
import React from "react";
import QuestionsNav from "./QuestionsNav";
import Footer from "./Footer";
import Section from "./Section";

export default function QuestionsPage() {
  return (
    <>
      <Flex direction={{ base: "column", md: "row" }}>
        <QuestionsNav />
        <Section section="Section 01" />
      </Flex>
      <Footer />
    </>
  );
}
