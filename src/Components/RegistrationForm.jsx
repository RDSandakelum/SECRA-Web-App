import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { BiWorld } from "react-icons/bi";
import { GrUserWorker } from "react-icons/Gr";

import {
  FormErrorMessage,
  FormControl,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  Box,
  Heading,
  Center,
  useToast,
  InputRightElement,
} from "@chakra-ui/react";

import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import SchoolIcon from "@mui/icons-material/School";
import { AiOutlineUser } from "react-icons/ai";

import { auth, db } from "../Config/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";

export default function RegistrationForm() {
  //Informing the user if Already have a account and Verification Email Sent
  const [isEmailUsed, setIsEmailUsed] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [isVerificationEmailSent, setIsVerificationEmailSent] = useState(false);
  const toast = useToast();
  useEffect(() => {
    if (isEmailUsed) {
      toast({
        title: "Email is already in use.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      setIsEmailUsed(false);
    }
    if (isVerificationEmailSent) {
      toast({
        title: "Verification email sent successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setIsVerificationEmailSent(false);
    }
    if (invalidEmail) {
      toast({
        title: "Invalid email address",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setInvalidEmail(false);
    }
  }, [isEmailUsed, isVerificationEmailSent, invalidEmail, toast]);

  //Show and Hide typed passwords
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  //Sumbitting the registration form
  const onSubmit = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      sendEmailVerification(auth.currentUser).then(async () => {
        setIsVerificationEmailSent(true);
      });
      try {
        const userId = auth.currentUser.uid;
        await setDoc(doc(db, "userData", userId), {
          name: values.name,
          university: values.university,
          designation: values.designation,
          country: values.country,
        });
        await signOut(auth);
        setTimeout(2000);
        window.location.reload();
      } catch (e) {
        console.error("Error adding document: ", e.code);
      }
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setIsEmailUsed(true);
        console.log("Email already in use");
      }
      if (err.code === "auth/invalid-email") {
        setInvalidEmail(true);
        console.log("Invalid email");
      }
      console.log(err.code);
    }
  };

  //React hook form form handling hooks
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
          <Stack spacing={4}>
            <Center>
              <Heading>Registration</Heading>
            </Center>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <AiOutlineUser color="#01033c" />
              </InputLeftElement>
              <Input
                id="name"
                placeholder="Name"
                {...register("name", {
                  required: "This is required",
                  minLength: { value: 2, message: "Name is too short!!" },
                })}
                autoComplete="on"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <GrUserWorker color="#01033C" />
              </InputLeftElement>
              <Input
                id="designation"
                placeholder="Designation"
                {...register("designation", {
                  required: "This is required",
                  minLength: { value: 2, message: "Designation too short!!" },
                })}
                autoComplete="on"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <BiWorld color="#01033C" />
              </InputLeftElement>
              <Input
                id="country"
                placeholder="Country"
                {...register("country", {
                  required: "This is required",
                  minLength: { value: 1, message: "Country name too short!!" },
                })}
                autoComplete="on"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SchoolIcon />
              </InputLeftElement>
              <Input
                id="university"
                placeholder="University"
                {...register("university", {
                  required: "This is required",
                  minLength: {
                    value: 1,
                    message: "University name is too short!!",
                  },
                })}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EmailIcon color="#01033c" />
              </InputLeftElement>
              <Input
                id="email"
                placeholder="Official Email address"
                {...register("email", {
                  required: "This is required",
                })}
                autoComplete="on"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <LockIcon color="#01033c" />
              </InputLeftElement>
              <Input
                id="password"
                placeholder="Password"
                type={show ? "text" : "password"}
                {...register("password", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <Center>
          <Button
            mt={4}
            _hover={{ bg: null }}
            color="white"
            bgGradient="linear(to-b, #01033c 66.66%, #232484)"
            isLoading={isSubmitting}
            type="submit"
          >
            Register
          </Button>
        </Center>
      </form>
    </Box>
  );
}
