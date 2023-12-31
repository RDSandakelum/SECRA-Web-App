import React, { useRef } from "react";
import {
  List,
  ListItem,
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Center,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { HamburgerIcon } from "@chakra-ui/icons";

const boxStyles = {
  backgroundColor: "#01033C",
  color: "white",
  top: 0,
  left: 0,
  paddingTop: "2rem",
  position: "sticky",
  height: "100vh",
  justifyContent: "center",
  minWidth: "15vw",
};

const itemStyle = {
  borderColor: "white",
  borderWidth: "0px 0px 2px 0px",
  transform: "translateY(-3px)",
  transition: "transform 0.2s ease",
  cursor: "pointer",
};

const MenuBar = ({ sections, currentSection, setCurrentSection }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDrawerClose = () => {
    onClose();
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
          //   justify="space-between"
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
            marginBottom={6}
          >
            <Center>
              {/* <AiOutlineHome style={{ fontSize: "1.6rem" }} /> */}
            </Center>
          </Box>

          <List spacing={3}>
            {sections.map((section, index) => (
              <ListItem
                _hover={itemStyle}
                key={section}
                onClick={() => setCurrentSection(index)}
                borderBottom={currentSection === index ? "2px solid white" : ""}
              >
                {section}
              </ListItem>
            ))}
          </List>
        </Flex>

        <Drawer placement="left" onClose={handleDrawerClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody backgroundColor="#01033C" color="white">
              <Flex flexDirection="column" h="50vh">
                <Box
                  _hover={{
                    transform: "translateY(-3px)",
                    transition: "transform 0.2s ease",
                    cursor: "pointer",
                  }}
                  mx={4}
                  marginBottom={3}
                >
                  <Center>
                    <AiOutlineHome />
                  </Center>
                </Box>
                <List spacing={3}>
                  {sections.map((section, index) => (
                    <ListItem
                      _hover={itemStyle}
                      key={section}
                      onClick={() => setCurrentSection(index)}
                      backgroundColor={
                        currentSection === index ? "blue.200" : ""
                      }
                    >
                      {section}
                    </ListItem>
                  ))}
                </List>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

export default MenuBar;
