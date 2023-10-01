import React from 'react';
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

  return (
    <Box bg="white" color="black" py={3} >
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
          <Box mx={4}>
            <Text>Home</Text>
          </Box>
          <Box mx={4}>
            <Text>About</Text>
          </Box>
          <Box mx={4}>
            <Text>Contact</Text>
          </Box>
          <Box mx={4}>
            <Button color="white" bgGradient= 'linear(to-b, #01033c 66.66%, #232484)' _hover={{bg:null}} onClick={onLoginOpen}>Login</Button>
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
          <Text py={2}>Home</Text>
          <Text py={2}>About</Text>
          <Text py={2}>Contact</Text>
          <Button color="white" bgGradient= 'linear(to-b, #01033c 66.66%, #232484)' py={2}>
            Login
          </Button>
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
    </Box>
  );
}

export default Navbar;
