import {
  Box,
  FormControl,
  Center,
  Heading,
  Stack,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [uniInfo, setUniInfo] = useState({
    unitOfAssessment: "",
    Institution: "",
    Respondents: ""
  });

  const toast = useToast();

  const navigateTo = useNavigate();
  const navigate = () => {
    if (uniInfo.Institution !== "" && uniInfo.unitOfAssessment !== "" && uniInfo.Respondents !== "") {
      navigateTo("/survey", { state: uniInfo });
    } else {
      toast({
        title: "Please provide required information",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleChangeUoA = (event) => {
    setUniInfo({ ...uniInfo, unitOfAssessment: event.target.value });
  };

  const handleChangeInst = (event) => {
    setUniInfo({ ...uniInfo, Institution: event.target.value });
  };

  const handleChangeRespondents = (event) => {
    setUniInfo({ ...uniInfo, Respondents: event.target.value });
  };


  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <FormControl w="60%">
        <Stack spacing={4}>
          <Input
            id="UoA"
            placeholder="Unit of Assessment"
            autoComplete="on"
            onChange={handleChangeUoA}
          />
          <Input
            id="institution"
            placeholder="Institution"
            type="text"
            autoComplete="on"
            onChange={handleChangeInst}
          />
          <Input
            id="respondents"
            placeholder="Respondents"
            type="text"
            autoComplete="on"
            onChange={handleChangeRespondents}
          />
        </Stack>
        <Center>
          <Button
            mt={4}
            _hover={{ bg: null }}
            color="white"
            bgGradient="linear(to-b, #01033c 66.66%, #232484)"
            type="submit"
            onClick={navigate}
          >
            Start
          </Button>
        </Center>
      </FormControl>
    </Box>
  );
}
