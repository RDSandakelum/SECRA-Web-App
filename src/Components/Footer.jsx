import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
export default function Footer() {
  const footerStyles = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#01033C",
    color: "white",
    textAlign: "center",
    padding: "10px",
    height: "5vh",
  };
  return (
    <Flex style={footerStyles} align="center" justify="center">
      <Text style={{ display: "inline-flex" }}>
        Copyright <AiOutlineCopyrightCircle /> 2023 All rights reserved
      </Text>
    </Flex>
  );
}
