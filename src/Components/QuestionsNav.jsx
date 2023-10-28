import React, { useRef } from "react";
import {
  Box,
  Flex,
  IconButton,
  Text,
  useDisclosure,
  Center,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { HamburgerIcon } from "@chakra-ui/icons";

import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
} from "react-scroll";

export default function QuestionsNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const scrollPositionRef = useRef(0);
  const handleDrawerOpen = () => {
    scrollPositionRef.current = window.scrollY; // Store the current scroll position
    onOpen();
  };
  const handleDrawerClose = () => {
    onClose();
    window.scrollTo(0, scrollPositionRef.current); // Restore the scroll position
  };

  const boxStyles = {
    backgroundColor: "#01033C",
    color: "white",
    top: 0,
    left: 0,
    paddingTop: "2rem",
    position: "sticky",
    height: "100vh",
    justifyContent: "center",
    minWidth: "10vw",
  };

  const itemStyle = {
    borderColor: "white",
    borderWidth: "0px 0px 2px 0px",
    transform: "translateY(-3px)",
    transition: "transform 0.2s ease",
    cursor: "pointer",
  };

  return (
    <>
      <IconButton
        m="5px"
        display={{ base: "block", md: "none" }}
        icon={!isOpen && <HamburgerIcon fontSize="1rem" />}
        onClick={onOpen}
        aria-label="Toggle Navigation"
        w="5vw"
      />

      <Flex py="5px" style={boxStyles} display={{ base: "none", md: "flex" }}>
        <Flex
          display={{ base: "none", md: "flex" }}
          justify="space-between"
          flexDirection="column"
          h="50vh"
        >
          <Box
            _hover={{
              transform: "translateY(-3px)",
              transition: "transform 0.2s ease",
              cursor: "pointer",
            }}
            mx={4}
          >
            <Center>
              <AiOutlineHome style={{ fontSize: "1.6rem" }} />
            </Center>
          </Box>
          <ScrollLink to="section-01" spy={true} smooth={true} duration={500}>
            <Box _hover={itemStyle} mx={4}>
              <Text>Section 1</Text>
            </Box>
          </ScrollLink>
          <ScrollLink to="section-02" spy={true} smooth={true} duration={500}>
            <Box _hover={itemStyle} mx={4}>
              <Text>Section 2</Text>
            </Box>
          </ScrollLink>
          <ScrollLink to="section-03" spy={true} smooth={true} duration={500}>
            <Box _hover={itemStyle} mx={4}>
              <Text>Section 3</Text>
            </Box>
          </ScrollLink>
          <ScrollLink to="section-04" spy={true} smooth={true} duration={500}>
            <Box _hover={itemStyle} mx={4}>
              <Text>Section 4</Text>
            </Box>
          </ScrollLink>
          <ScrollLink to="section-05" spy={true} smooth={true} duration={500}>
            <Box _hover={itemStyle} mx={4}>
              <Text>Section 5</Text>
            </Box>
          </ScrollLink>
          <ScrollLink to="section-06" spy={true} smooth={true} duration={500}>
            <Box _hover={itemStyle} mx={4}>
              <Text>Section 6</Text>
            </Box>
          </ScrollLink>
          <ScrollLink to="section-07" spy={true} smooth={true} duration={500}>
            <Box _hover={itemStyle} mx={4}>
              <Text>Section 7</Text>
            </Box>
          </ScrollLink>
        </Flex>

        <Drawer placement="left" onClose={handleDrawerClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody backgroundColor="#01033C" color="white">
              <Flex justify="space-between" flexDirection="column" h="50vh">
                <Box
                  _hover={{
                    transform: "translateY(-3px)",
                    transition: "transform 0.2s ease",
                    cursor: "pointer",
                  }}
                  mx={4}
                >
                  <Center>
                    <AiOutlineHome />
                  </Center>
                </Box>
                <ScrollLink
                  to="section-01"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Box _hover={itemStyle} mx={4}>
                    <Center>
                      <Text>Section 1</Text>
                    </Center>
                  </Box>
                </ScrollLink>
                <ScrollLink
                  to="section-02"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Box _hover={itemStyle} mx={4}>
                    <Center>
                      <Text>Section 2</Text>
                    </Center>
                  </Box>
                </ScrollLink>
                <ScrollLink
                  to="section-03"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Box _hover={itemStyle} mx={4}>
                    <Center>
                      <Text>Section 3</Text>
                    </Center>
                  </Box>
                </ScrollLink>
                <ScrollLink
                  to="section-04"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Box _hover={itemStyle} mx={4}>
                    <Center>
                      <Text>Section 4</Text>
                    </Center>
                  </Box>
                </ScrollLink>
                <ScrollLink
                  to="section-05"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Box _hover={itemStyle} mx={4}>
                    <Center>
                      <Text>Section 5</Text>
                    </Center>
                  </Box>
                </ScrollLink>
                <ScrollLink
                  to="section-06"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Box _hover={itemStyle} mx={4}>
                    <Center>
                      <Text>Section 6</Text>
                    </Center>
                  </Box>
                </ScrollLink>
                <ScrollLink
                  to="section-07"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Box _hover={itemStyle} mx={4}>
                    <Center>
                      <Text>Section 7</Text>
                    </Center>
                  </Box>
                </ScrollLink>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
}
