import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Stack, Box, Wrap, WrapItem } from "@chakra-ui/react";
function Dog() {
  return (
    <div>
      <h1>dog</h1>
      <Stack direction="column">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          py={12}
          bgImage="url('https://bit.ly/2Z4KKcF')"
          bgPosition="center"
          bgRepeat="no-repeat"
          mb={2}
        >
          <ButtonGroup gap="4">
            <Button colorScheme="whiteAlpha">WhiteAlpha</Button>
            <Button colorScheme="blackAlpha">BlackAlpha</Button>
          </ButtonGroup>
        </Box>

        <Wrap spacing={4}>
          <WrapItem>
            <Button colorScheme="gray">Gray</Button>
          </WrapItem>
          <WrapItem>
            <Button colorScheme="red">Red</Button>
          </WrapItem>
        </Wrap>
      </Stack>
    </div>
  );
}

export default Dog;
