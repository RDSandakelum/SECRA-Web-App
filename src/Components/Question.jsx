import React, { useState } from "react";
import { Text, RadioGroup, Stack, Radio, Box } from "@chakra-ui/react";
export default function Question() {
  const [value, setValue] = useState("1");

  return (
    <Box boxShadow="xl" p="6" rounded="md" bg="white" w="100%">
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et aut labore
        commodi sunt ab perspiciatis neque iusto doloribus aliquid harum?
      </Text>
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="row">
          <Radio value="1">First</Radio>
          <Radio value="2">Second</Radio>
          <Radio value="3">Third</Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
}
