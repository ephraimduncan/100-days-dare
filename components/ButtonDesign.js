import React from "react";
import { ChakraProvider, Flex, Spacer } from "@chakra-ui/react";
import DayButton from "./DayButton";
import ButtonModal from "./Modal";

export default function ButtonDesign() {
  return (
    <ChakraProvider resetCSS>
      <Flex>
        <Spacer />
        <Spacer />
        <Flex flexDirection="column" m={5}>
          <Flex>
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="2" disabled />
          </Flex>
          <Flex>
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="2" disabled />
          </Flex>
          <Flex>
            <DayButton day="2" disabled />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="2" disabled />
          </Flex>
          <Flex>
            <DayButton day="2" disabled />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="2" disabled />
          </Flex>
          <Flex>
            <DayButton day="2" disabled />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="2" disabled />
          </Flex>
          <Flex>
            <DayButton day="2" disabled />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="2" disabled />
          </Flex>
          <Flex>
            <DayButton day="2" disabled />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="2" disabled />
          </Flex>
          <Flex>
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
          </Flex>
        </Flex>
        <Spacer />
        <Flex flexDirection="column" m={5}>
          <Flex>
            <DayButton day="2" disabled />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="2" disabled />
          </Flex>
          <Flex>
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
          </Flex>
          <Flex>
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
          </Flex>
          <Flex>
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="2" disabled />
            <DayButton day="2" disabled />
            <DayButton day="1" />
            <DayButton day="1" />
          </Flex>
          <Flex>
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="2" disabled />
            <DayButton day="2" disabled />
            <DayButton day="1" />
            <DayButton day="1" />
          </Flex>
          <Flex>
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
          </Flex>
          <Flex>
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
          </Flex>
          <Flex>
            <DayButton day="2" disabled />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="2" disabled />
          </Flex>
        </Flex>
        <Spacer />
        <Flex flexDirection="column" m={5}>
          <Flex>
            <DayButton day="2" disabled />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="2" disabled />
          </Flex>
          <Flex>
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
          </Flex>
          <Flex>
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
          </Flex>
          <Flex>
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="2" disabled />
            <DayButton day="2" disabled />
            <DayButton day="1" />
            <DayButton day="1" />
          </Flex>
          <Flex>
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="2" disabled />
            <DayButton day="2" disabled />
            <DayButton day="1" />
            <DayButton day="1" />
          </Flex>
          <Flex>
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
          </Flex>
          <Flex>
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
          </Flex>
          <Flex>
            <DayButton day="2" disabled />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="1" />
            <DayButton day="2" disabled />
          </Flex>
        </Flex>
        <Spacer />
        <Spacer />
      </Flex>
    </ChakraProvider>
  );
}
