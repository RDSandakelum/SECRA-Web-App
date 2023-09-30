import { useState } from 'react'
import RegistrationForm from './Components/RegistrationForm'
import {Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
Button} from '@chakra-ui/react';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button h="100vh" w="100vw" onClick={onOpen}>Open Modal</Button>

      <Modal  size={{base:"sm", md:"lg"}} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
           <RegistrationForm/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default App
