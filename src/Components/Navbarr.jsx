import React, { useState, useEffect } from "react";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import { Link, Navigate } from "react-router-dom";
import { auth } from "../Config/firebase-config";
import { signOut, onAuthStateChanged } from "firebase/auth";
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
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const {
    isOpen: isRegistrationOpen,
    onOpen: onRegistrationOpen,
    onClose: onRegistrationClose,
  } = useDisclosure();

  const transparentBoxStyles = {
    backgroundColor: isOpen ? "#EFEFEE" : "rgba(239,239,238,0.6)",
    position: "fixed",
    zIndex: 999,
    color: "black",
    top: 0,
    left: 0,
    width: "100vw",
  };

  const [log, setLog] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLog(
          <Box
            onClick={async () => {
              await signOut(auth);
              window.location.reload();
            }}
            _hover={{
              color: "#01033c",
              borderColor: "#01033c",
              borderWidth: "0px 0px 2px 0px",
              transform: "translateY(-3px)",
              transition: "transform 0.2s ease",
              cursor: "pointer",
            }}
            mx={4}
          >
            <Text>Log Out</Text>
          </Box>
        );
      } else {
        setLog(
          <Box
            onClick={onLoginOpen}
            _hover={{
              color: "#01033c",
              borderColor: "#01033c",
              borderWidth: "0px 0px 2px 0px",
              transform: "translateY(-3px)",
              transition: "transform 0.2s ease",
              cursor: "pointer",
            }}
            mx={4}
          >
            <Text>Log In</Text>
          </Box>
        );
      }
    });
  }, []);

  return (
    <Box py="5px" style={transparentBoxStyles}>
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
          display={{ base: "block", md: "none" }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggle}
          aria-label="Toggle Navigation"
        />

        {/* Normal navbar for larger screens */}
        <Flex display={{ base: "none", md: "flex" }} align="center">
          <Box
            _hover={{
              color: "#01033c",
              borderColor: "#01033c",
              borderWidth: "0px 0px 2px 0px",
              transform: "translateY(-3px)",
              transition: "transform 0.2s ease",
              cursor: "pointer",
            }}
            mx={4}
          >
            <Link to="/">
              <Text>Home</Text>
            </Link>
          </Box>
          <Box
            _hover={{
              color: "#01033c",
              borderColor: "#01033c",
              borderWidth: "0px 0px 2px 0px",
              transform: "translateY(-3px)",
              transition: "transform 0.2s ease",
              cursor: "pointer",
            }}
            mx={4}
          >
            <Text>About</Text>
          </Box>
          {log}
          <Box mx={4}>
            <Button
              color="white"
              bgGradient="linear(to-b, #01033c 66.66%, #232484)"
              _hover={{ bg: null }}
              onClick={onRegistrationOpen}
            >
              Register
            </Button>
          </Box>
        </Flex>
      </Flex>

      {/* Mobile navigation menu */}
      {isOpen && (
        <Box
          p="5px"
          backgroundColor="rgb(239,239,238)"
          zIndex={2}
          display={{ base: "block", md: "none" }}
          mt={2}
          textAlign="center"
        >
          <Box borderTop="1px" borderColor="#01033c">
            <Text py={2}>Home</Text>
          </Box>
          <Box borderTop="1px" borderColor="#01033c">
            <Text py={2}>About</Text>
          </Box>
          {log}
          <Box>
            <Button
              onClick={onRegistrationOpen}
              color="white"
              bgGradient="linear(to-b, #01033c 66.66%, #232484)"
              py={2}
            >
              Register
            </Button>
          </Box>
        </Box>
      )}
      <Modal
        size={{ base: "sm", md: "lg" }}
        isOpen={isLoginOpen}
        onClose={onLoginClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <LoginForm />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal
        size={{ base: "sm", md: "lg" }}
        isOpen={isRegistrationOpen}
        onClose={onRegistrationClose}
        isCentered
      >
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
