import React from "react";
import { Box, Text, Button, useToast} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { auth} from "../Config/firebase-config";
export default function MainText(props) {
  const textWithNewLine = "Work-Integrated Learning Survey";
  const textWithNewPara =
    "This survey is a core component of the University–Enterprise Collaboration Compass, which assists Higher Education Institutions (HEIs) in improving their collaboration with external partners. The results of the work-integrated learning survey aim to support educational programs by assessing their current collaborative efforts.<br/><br/><b> Get started below or sign up to save your progress <b>";
    const navigate = useNavigate();
    const toast = useToast();
    const handleStarted = () => {
      const user = auth?.currentUser;
      if (user) {
        navigate("/landing")
      } else {
        toast({
          title: "Please Log In",
          description: "Log in to continue...",
          status: "info",
          duration: 2000,
          isClosable: true,
        });
      }
    };
  return (
    <Box
      color="#01033c"
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      zIndex={1}
      textAlign="center"
    >
      <Text
        fontWeight="700"
        fontSize="80px"
        color="#01033c"
        dangerouslySetInnerHTML={{ __html: textWithNewLine }}
        lineHeight="1.0"
      ></Text>
      <Text
        mt="24px"
        fontWeight="500"
        fontSize="20px"
        fontFamily="outfit"
        color="#01033c"
        dangerouslySetInnerHTML={{ __html: textWithNewPara }}
        lineHeight="1.2"
      ></Text>
      <Button
        mt="26px"
        _hover={{ bg: null }}
        onClick={handleStarted}
        color="white"
        bgGradient="linear(to-b, #01033c 66.66%, #232484)"
        w="200px"
        mx="auto"
      >
        Get Started
      </Button>
    </Box>
  );
}
