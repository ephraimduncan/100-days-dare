import { Flex, Spacer } from "@chakra-ui/react";
import DayButton from "./DayButton";
import useSWR from "swr";

export default function ButtonDesign() {
  // Add Modal to Launch on Specific Days

  const { data } = useSWR("/api/getUser");

  const getSpecificDayTasks = (day) => {
    let userDay;

    data.user.days.forEach((element) => {
      if (element[day]) {
        userDay = element[day];
      }
    });

    return userDay
      ? { ...userDay, ...{ createdAt: data.user.createdAt } }
      : {
          ...{ completed: false },
          ...{ createdAt: data.user.createdAt },
        };
  };

  return (
    <Flex>
      <Spacer />
      <Spacer />
      <Spacer />
      <Flex flexDirection="column" m={5}>
        <Flex>
          <DayButton
            dayData={data && getSpecificDayTasks("1")}
            day="1"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("2")}
            day="2"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("3")}
            day="3"
          />
          <DayButton day="2" disabled />
        </Flex>
        <Flex>
          <DayButton
            dayData={data && getSpecificDayTasks("12")}
            day="12"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("13")}
            day="13"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("14")}
            day="14"
          />
          <DayButton day="2" disabled />
        </Flex>
        <Flex>
          <DayButton day="2" disabled />
          <DayButton
            dayData={data && getSpecificDayTasks("27")}
            day="27"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("28")}
            day="28"
          />
          <DayButton day="2" disabled />
        </Flex>
        <Flex>
          <DayButton day="2" disabled />
          <DayButton
            dayData={data && getSpecificDayTasks("41")}
            day="41"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("42")}
            day="42"
          />
          <DayButton day="2" disabled />
        </Flex>
        <Flex>
          <DayButton day="2" disabled />
          <DayButton
            dayData={data && getSpecificDayTasks("51")}
            day="51"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("52")}
            day="52"
          />
          <DayButton day="2" disabled />
        </Flex>
        <Flex>
          <DayButton day="2" disabled />
          <DayButton
            dayData={data && getSpecificDayTasks("61")}
            day="61"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("62")}
            day="62"
          />
          <DayButton day="2" disabled />
        </Flex>
        <Flex>
          <DayButton day="2" disabled />
          <DayButton
            dayData={data && getSpecificDayTasks("75")}
            day="75"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("76")}
            day="76"
          />
          <DayButton day="2" disabled />
        </Flex>
        <Flex>
          <DayButton
            dayData={data && getSpecificDayTasks("89")}
            day="89"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("90")}
            day="90"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("91")}
            day="91"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("92")}
            day="92"
          />
        </Flex>
      </Flex>
      <Spacer />
      <Flex flexDirection="column" m={5}>
        <Flex>
          <DayButton day="2" disabled />
          <DayButton
            dayData={data && getSpecificDayTasks("4")}
            day="4"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("5")}
            day="5"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("6")}
            day="6"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("7")}
            day="7"
          />
          <DayButton day="2" disabled />
        </Flex>
        <Flex>
          <DayButton
            dayData={data && getSpecificDayTasks("15")}
            day="15"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("16")}
            day="16"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("17")}
            day="17"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("18")}
            day="18"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("19")}
            day="19"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("20")}
            day="20"
          />
        </Flex>
        <Flex>
          <DayButton
            dayData={data && getSpecificDayTasks("29")}
            day="29"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("30")}
            day="30"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("31")}
            day="31"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("32")}
            day="32"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("33")}
            day="33"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("34")}
            day="34"
          />
        </Flex>
        <Flex>
          <DayButton
            dayData={data && getSpecificDayTasks("43")}
            day="43"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("44")}
            day="44"
          />
          <DayButton day="2" disabled />
          <DayButton day="2" disabled />
          <DayButton
            dayData={data && getSpecificDayTasks("45")}
            day="45"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("46")}
            day="46"
          />
        </Flex>
        <Flex>
          <DayButton
            dayData={data && getSpecificDayTasks("53")}
            day="53"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("54")}
            day="54"
          />
          <DayButton day="2" disabled />
          <DayButton day="2" disabled />
          <DayButton
            dayData={data && getSpecificDayTasks("55")}
            day="55"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("56")}
            day="56"
          />
        </Flex>
        <Flex>
          <DayButton
            dayData={data && getSpecificDayTasks("63")}
            day="63"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("64")}
            day="64"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("65")}
            day="65"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("66")}
            day="66"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("67")}
            day="67"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("68")}
            day="68"
          />
        </Flex>
        <Flex>
          <DayButton
            dayData={data && getSpecificDayTasks("77")}
            day="77"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("78")}
            day="78"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("79")}
            day="79"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("80")}
            day="80"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("81")}
            day="81"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("82")}
            day="82"
          />
        </Flex>
        <Flex>
          <DayButton day="2" disabled />
          <DayButton
            dayData={data && getSpecificDayTasks("93")}
            day="93"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("94")}
            day="94"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("95")}
            day="95"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("96")}
            day="96"
          />
          <DayButton day="2" disabled />
        </Flex>
      </Flex>
      <Spacer />
      <Flex flexDirection="column" m={5}>
        <Flex>
          <DayButton day="2" disabled />
          <DayButton
            dayData={data && getSpecificDayTasks("8")}
            day="8"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("9")}
            day="9"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("10")}
            day="10"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("11")}
            day="11"
          />
          <DayButton day="2" disabled />
        </Flex>
        <Flex>
          <DayButton
            dayData={data && getSpecificDayTasks("21")}
            day="21"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("22")}
            day="22"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("23")}
            day="23"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("24")}
            day="24"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("25")}
            day="25"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("26")}
            day="26"
          />
        </Flex>
        <Flex>
          <DayButton
            dayData={data && getSpecificDayTasks("35")}
            day="35"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("36")}
            day="36"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("37")}
            day="37"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("38")}
            day="38"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("39")}
            day="39"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("40")}
            day="40"
          />
        </Flex>
        <Flex>
          <DayButton
            dayData={data && getSpecificDayTasks("47")}
            day="47"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("48")}
            day="48"
          />
          <DayButton day="2" disabled />
          <DayButton day="2" disabled />
          <DayButton
            dayData={data && getSpecificDayTasks("49")}
            day="49"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("50")}
            day="50"
          />
        </Flex>
        <Flex>
          <DayButton
            dayData={data && getSpecificDayTasks("57")}
            day="57"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("58")}
            day="58"
          />
          <DayButton day="2" disabled />
          <DayButton day="2" disabled />
          <DayButton
            dayData={data && getSpecificDayTasks("59")}
            day="59"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("60")}
            day="60"
          />
        </Flex>
        <Flex>
          <DayButton
            dayData={data && getSpecificDayTasks("69")}
            day="69"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("70")}
            day="70"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("71")}
            day="71"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("72")}
            day="72"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("73")}
            day="73"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("74")}
            day="74"
          />
        </Flex>
        <Flex>
          <DayButton
            dayData={data && getSpecificDayTasks("83")}
            day="83"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("84")}
            day="84"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("85")}
            day="85"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("86")}
            day="86"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("87")}
            day="87"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("88")}
            day="88"
          />
        </Flex>
        <Flex>
          <DayButton day="2" disabled />
          <DayButton
            dayData={data && getSpecificDayTasks("97")}
            day="97"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("98")}
            day="98"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("99")}
            day="99"
          />
          <DayButton
            dayData={data && getSpecificDayTasks("100")}
            day="100"
          />
          <DayButton day="2" disabled />
        </Flex>
      </Flex>
      <Spacer />
      <Spacer />
      <Spacer />
    </Flex>
  );
}
