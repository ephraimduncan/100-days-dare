import React from "react";
import { ChakraProvider, Flex, Spacer } from "@chakra-ui/react";
import DayButton from "./DayButton";

export default function ButtonDesign() {
  return (
    <ChakraProvider resetCSS>
      <Flex>
        <Spacer />
        <Spacer />
        <Spacer />
        <Flex flexDirection="column" m={5}>
          <Flex>
            <DayButton day="1" />
            <DayButton day="2" />
            <DayButton day="3" />
            <DayButton day="2" disabled />
          </Flex>
          <Flex>
            <DayButton day="12" />
            <DayButton day="13" />
            <DayButton day="14" />
            <DayButton day="2" disabled />
          </Flex>
          <Flex>
            <DayButton day="2" disabled />
            <DayButton day="27" />
            <DayButton day="28" />
            <DayButton day="2" disabled />
          </Flex>
          <Flex>
            <DayButton day="2" disabled />
            <DayButton day="41" />
            <DayButton day="42" />
            <DayButton day="2" disabled />
          </Flex>
          <Flex>
            <DayButton day="2" disabled />
            <DayButton day="51" />
            <DayButton day="52" />
            <DayButton day="2" disabled />
          </Flex>
          <Flex>
            <DayButton day="2" disabled />
            <DayButton day="61" />
            <DayButton day="62" />
            <DayButton day="2" disabled />
          </Flex>
          <Flex>
            <DayButton day="2" disabled />
            <DayButton day="75" />
            <DayButton day="76" />
            <DayButton day="2" disabled />
          </Flex>
          <Flex>
            <DayButton day="89" />
            <DayButton day="90" />
            <DayButton day="91" />
            <DayButton day="92" />
          </Flex>
        </Flex>
        <Spacer />
        <Flex flexDirection="column" m={5}>
          <Flex>
            <DayButton day="2" disabled />
            <DayButton day="4" />
            <DayButton day="5" />
            <DayButton day="6" />
            <DayButton day="7" />
            <DayButton day="2" disabled />
          </Flex>
          <Flex>
            <DayButton day="15" />
            <DayButton day="16" />
            <DayButton day="17" />
            <DayButton day="18" />
            <DayButton day="19" />
            <DayButton day="20" />
          </Flex>
          <Flex>
            <DayButton day="29" />
            <DayButton day="30" />
            <DayButton day="31" />
            <DayButton day="32" />
            <DayButton day="33" />
            <DayButton day="34" />
          </Flex>
          <Flex>
            <DayButton day="43" />
            <DayButton day="44" />
            <DayButton day="2" disabled />
            <DayButton day="2" disabled />
            <DayButton day="45" />
            <DayButton day="46" />
          </Flex>
          <Flex>
            <DayButton day="53" />
            <DayButton day="54" />
            <DayButton day="2" disabled />
            <DayButton day="2" disabled />
            <DayButton day="55" />
            <DayButton day="56" />
          </Flex>
          <Flex>
            <DayButton day="63" />
            <DayButton day="64" />
            <DayButton day="65" />
            <DayButton day="66" />
            <DayButton day="67" />
            <DayButton day="68" />
          </Flex>
          <Flex>
            <DayButton day="77" />
            <DayButton day="78" />
            <DayButton day="79" />
            <DayButton day="80" />
            <DayButton day="81" />
            <DayButton day="82" />
          </Flex>
          <Flex>
            <DayButton day="2" disabled />
            <DayButton day="93" />
            <DayButton day="94" />
            <DayButton day="95" />
            <DayButton day="96" />
            <DayButton day="2" disabled />
          </Flex>
        </Flex>
        <Spacer />
        <Flex flexDirection="column" m={5}>
          <Flex>
            <DayButton day="2" disabled />
            <DayButton day="8" />
            <DayButton day="9" />
            <DayButton day="10" />
            <DayButton day="11" />
            <DayButton day="2" disabled />
          </Flex>
          <Flex>
            <DayButton day="21" />
            <DayButton day="22" />
            <DayButton day="23" />
            <DayButton day="24" />
            <DayButton day="25" />
            <DayButton day="26" />
          </Flex>
          <Flex>
            <DayButton day="35" />
            <DayButton day="36" />
            <DayButton day="37" />
            <DayButton day="38" />
            <DayButton day="39" />
            <DayButton day="40" />
          </Flex>
          <Flex>
            <DayButton day="47" />
            <DayButton day="48" />
            <DayButton day="2" disabled />
            <DayButton day="2" disabled />
            <DayButton day="49" />
            <DayButton day="50" />
          </Flex>
          <Flex>
            <DayButton day="57" />
            <DayButton day="58" />
            <DayButton day="2" disabled />
            <DayButton day="2" disabled />
            <DayButton day="59" />
            <DayButton day="60" />
          </Flex>
          <Flex>
            <DayButton day="69" />
            <DayButton day="70" />
            <DayButton day="71" />
            <DayButton day="72" />
            <DayButton day="73" />
            <DayButton day="74" />
          </Flex>
          <Flex>
            <DayButton day="83" />
            <DayButton day="84" />
            <DayButton day="85" />
            <DayButton day="86" />
            <DayButton day="87" />
            <DayButton day="88" />
          </Flex>
          <Flex>
            <DayButton day="2" disabled />
            <DayButton day="97" />
            <DayButton day="98" />
            <DayButton day="99" />
            <DayButton day="100" />
            <DayButton day="2" disabled />
          </Flex>
        </Flex>
        <Spacer />
        <Spacer />
        <Spacer />
      </Flex>
    </ChakraProvider>
  );
}
