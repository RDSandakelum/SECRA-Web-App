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
import { AiOutlineUser } from 'react-icons/ai';
import {auth} from "../Config/firebase-config";
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function RegistrationForm() {
  const [isEmailUsed, setIsEmailUsed] = useState(false);
  const toast = useToast();
  const [show, setShow] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const handleClick = () => setShow(!show)

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

  const onSubmit = async(values) => {
    try{
      await createUserWithEmailAndPassword(auth, values.email, values.password);
    console.log("Success");
    }catch(err){
      if (err.code === "auth/email-already-in-use"){
        setIsEmailUsed(true);
        console.log("Email already in use");
      }
      console.log(err.code);
    }
  }

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
        />
        </InputGroup>
        <InputGroup>
        <InputLeftElement pointerEvents='none'>
      <EmailIcon color='#01033c' />
    </InputLeftElement>
        <Input
          id='Email'
          placeholder='Email address'
          {...register('email', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
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