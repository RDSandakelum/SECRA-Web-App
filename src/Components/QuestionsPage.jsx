import { Flex } from "@chakra-ui/react";
import React from "react";
import QuestionsNav from "./QuestionsNav";
import Footer from "./Footer";
import Section from "./Section";

export default function QuestionsPage() {
  return (
    <Flex>
      <QuestionsNav />
      <Section section="Section 01" />
      <Footer />
    </Flex>
  );
}
