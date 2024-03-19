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
  Tooltip,
  Text,
  Divider
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
          <Text mb={6} fontSize={20} >Survey Structure</Text>
          <List display='flex' flexDirection='column' justifyContent='space-between' h='100%'  spacing={3}>
            <Box>
            {sections.map((section, index) => (
              <ListItem
              mb = '1rem'
                _hover={itemStyle}
                key={section}
                onClick={() => setCurrentSection(index)}
                borderBottom={currentSection === index ? "2px solid white" : ""}
              >
                {section}
              </ListItem>
            ))}
            </Box>
            <Box>
              <Text mt='5rem'  fontSize='1.2rem'>Glossary of Terms</Text>
              <Divider/>  
              <br></br>
            <ListItem color='purple.100' mb='1rem'>
              <Tooltip hasArrow label='While the Unit of Analysis(UOA) is commonly a degree program, it can also be extended to include larger organizational structures like departments or faculties. The principle guiding the selection of a Unit of Analysis(UOA) is specificity; the more precise and well-defined the Unit of Analysis(UOA), the more targeted and relevant the assessment outcomes will be.' placement='auto-start'>
              Unit of Analysis
              </Tooltip>
            </ListItem>
            <ListItem color='purple.100'>
              <Tooltip hasArrow label="‘Work-Integrated Learning is an educational approach involving three parties – the student, the educational institution, and an external stakeholder – consisting of authentic work-focused experiences as an intentional component of the curriculum. Students learn through active engagement in purposeful work tasks, which enable the integration of theory with meaningful practice that is relevant to the students' discipline of study and/or professional development. Zegwaard, K. E., Pretti, T. J., Rowe, A. D., & Ferns, S. J. (2023, p. 38). ‘Defining work-integrated learning.’ In K. E. Zegwaard & T. J. Pretti (Eds.), The Routledge international handbook of work-integrated learning (3rd ed., pp. 29-48). Routledge.’" placement='auto-start'>
              Work Integrated Learning
              </Tooltip>
            </ListItem>
            </Box>
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
                      mb = '1rem'
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
