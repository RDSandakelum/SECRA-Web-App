import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react';
import {
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

import {auth} from "../Config/firebase-config";
import {signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';


export default function LoginForm() {

  const [isNotVerified, setIsNotVerified] = useState(false);
  const toast = useToast();
  useEffect(() => {
    if (isNotVerified) {
      toast({
        title: 'Email is not verified, Please visit your email and verify!',
        status: 'error',
        duration: 3000, 
        isClosable: true,
      });
    }
  }, [isNotVerified, toast]);
  
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
      await signInWithEmailAndPassword(auth, values.email, values.password);
      if (!auth?.currentUser?.emailVerified){
        signOut(auth);
        if(!auth?.currentUser){
          console.log("Sign out");
        }
        setIsNotVerified(true);
      }else if(auth?.currentUser?.emailVerified){
        setIsNotVerified(false);
      }
    if (isLoggedIn){
      console.log("logged in");
      const userId = auth?.currentUser?.uid;
    console.log(userId);
    }else{
      console.log("not logged in");
    }
    }catch(err){
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
          <Heading >Login Form</Heading>
          </Center>
        <InputGroup>
        <InputLeftElement pointerEvents='none'>
      <EmailIcon color='#01033c' />
    </InputLeftElement>
        <Input
          id='email'
          placeholder='Email address'
          {...register('email', {
            required: 'This is required',
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
          })}
        />
        <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
        </InputGroup>
        </Stack>
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