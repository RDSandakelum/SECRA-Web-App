import React, { useState } from 'react';
import RegistrationForm from './Components/RegistrationForm';
import Navbar from './Components/Navbar';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Button,
} from '@chakra-ui/react';

function App() {
  const { isOpen: isRegistrationOpen, onOpen: onRegistrationOpen, onClose: onRegistrationClose } = useDisclosure();

  return (
    <>
    <Navbar/>
      <Button h="20vh" w="50vw" onClick={onRegistrationOpen}>
        Registration
      </Button>

      <Modal size={{ base: 'sm', md: 'lg' }} isOpen={isRegistrationOpen} onClose={onRegistrationClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <RegistrationForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
