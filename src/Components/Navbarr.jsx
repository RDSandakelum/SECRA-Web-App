import React from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import {
  Box,
  Flex,
  IconButton,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure();
  const { isOpen: isRegistrationOpen, onOpen: onRegistrationOpen, onClose: onRegistrationClose } = useDisclosure();

  const transparentBoxStyles = {
    backgroundColor: "rgba(239, 239, 238, 0.0)",
    zIndex: 999,
    color: "black",
    py: 3,
    top: 0,
    left: 0,
    position: "absolute",
    width: "100vw"
  };

  return (
    <Box style={transparentBoxStyles} >
      <Flex
        maxW="1200px"
        mx="auto"
        justify="space-between"
        align="center"
        px={4}
      >
        {/* Left-hand corner logo */}
        <Box>
          <Text fontSize="2xl">Your Logo</Text>
        </Box>

        {/* Hamburger menu for mobile */}
        <IconButton
          display={{ base: 'block', md: 'none' }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggle}
          aria-label="Toggle Navigation"
        />

        {/* Normal navbar for larger screens */}
        <Flex
          display={{ base: 'none', md: 'flex' }}
          align="center"
        >
          <Box _hover={{ 
        color: "#01033c",    
        borderColor: "#01033c", 
        borderWidth: "0px 0px 2px 0px", 
        transform: "translateY(-3px)", 
            transition: "transform 0.2s ease",
            cursor: "pointer"
          }} mx={4}>
            <Text >Home</Text>
          </Box>
          <Box _hover={{ 
        color: "#01033c",    
        borderColor: "#01033c", 
        borderWidth: "0px 0px 2px 0px", 
        transform: "translateY(-3px)", 
            transition: "transform 0.2s ease",
            cursor: "pointer"
          }} mx={4}>
            <Text>About</Text>
          </Box>
          <Box onClick={onLoginOpen} _hover={{ 
        color: "#01033c",    
        borderColor: "#01033c", 
        borderWidth: "0px 0px 2px 0px", 
        transform: "translateY(-3px)", 
            transition: "transform 0.2s ease",
            cursor: "pointer"
          }} mx={4}>
            <Text>Log In</Text>
          </Box>
          <Box mx={4}>
            <Button color="white" bgGradient= 'linear(to-b, #01033c 66.66%, #232484)' _hover={{bg:null}} onClick={onRegistrationOpen}>Register</Button>
          </Box>
        </Flex>
      </Flex>

      {/* Mobile navigation menu */}
      {isOpen && (
        <Box
          display={{ base: 'block', md: 'none' }}
          mt={2}
          textAlign="center"
        >
          <Box borderTop='1px' borderColor='#01033c'><Text py={2}>Home</Text></Box>
          <Box borderTop='1px' borderColor='#01033c'><Text py={2}>About</Text></Box>
          <Box borderTop='1px' borderColor='#01033c'><Text onClick={onLoginOpen} py={2}>Log In</Text></Box>
          <Box><Button onClick={onRegistrationOpen} color="white" bgGradient= 'linear(to-b, #01033c 66.66%, #232484)' py={2}>
            Register
          </Button></Box>
        </Box>
      )}
      <Modal size={{ base: 'sm', md: 'lg' }} isOpen={isLoginOpen} onClose={onLoginClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <LoginForm />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal size={{ base: 'sm', md: 'lg' }} isOpen={isRegistrationOpen} onClose={onRegistrationClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <RegistrationForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Navbar;