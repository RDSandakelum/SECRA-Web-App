import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react';
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
  InputRightElement
} from '@chakra-ui/react'

import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import SchoolIcon from '@mui/icons-material/School';
import { AiOutlineUser } from 'react-icons/ai';

import {auth, db} from "../Config/firebase-config";
import {createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import {doc, setDoc} from "firebase/firestore";

export default function RegistrationForm() {

  const [isEmailUsed, setIsEmailUsed] = useState(false);
  const toast = useToast();
  useEffect(() => {
    if (isEmailUsed) {
      toast({
        title: 'Email is already in use.',
        status: 'error',
        duration: 2000, 
        isClosable: true,
      });
    }
  }, [isEmailUsed, toast]);
  
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);


  const onSubmit = async(values) => {
    try{
      await createUserWithEmailAndPassword(auth, values.email, values.password);
    console.log("Success");
    if (isLoggedIn){
      console.log("logged in");
    }
    const userId = auth?.currentUser?.uid;
    console.log(userId);
    try {
      await setDoc(doc(db, "userData", userId), {
        name: values.name,
        university: values.university,
        answers: {}
      });
    } catch (e) {
      console.error("Error adding document: ", e.code);
    }
    }catch(err){
      if (err.code === "auth/email-already-in-use"){
        setIsEmailUsed(true);
        console.log("Email already in use");
      }
      console.log(err.code);
    }
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  return (
    <Box  >
    <form  onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <Stack spacing={4}>
          <Center>
          <Heading >Registration Form</Heading>
          </Center>
        <InputGroup>
        <InputLeftElement pointerEvents='none'>
      <AiOutlineUser color="#01033c" />
    </InputLeftElement>
        <Input
          id='name'
          placeholder='Name'
          {...register('name', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
          autoComplete='on'
        />
        </InputGroup>
        <InputGroup>
        <InputLeftElement pointerEvents='none'>
        <SchoolIcon />
    </InputLeftElement>
        <Input
          id='university'
          placeholder='University'
          {...register('university', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        </InputGroup>
        <InputGroup>
        <InputLeftElement pointerEvents='none'>
      <EmailIcon color='#01033c' />
    </InputLeftElement>
        <Input
          id='email'
          placeholder='Email address'
          {...register('email', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
          autoComplete='on'
        />
        </InputGroup>
        <InputGroup>
        <InputLeftElement pointerEvents='none'>
      <LockIcon color='#01033c' />
    </InputLeftElement>
        <Input
          id='password'
          placeholder='Password'
          type = {show? "text" : 'password'}
          {...register('password', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
        </InputGroup>
        </Stack>
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <Center>
      <Button  mt={4} _hover={{bg:null}} color='white' bgGradient= 'linear(to-b, #01033c 66.66%, #232484)' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
      </Center>
    </form>
    </Box>
  )
}