import { Button, Text, useDisclosure } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import ButtonModal from "./Modal";
import ModalForm from "./Form";
import dayDifference from "../utils/dayDifference";

export default function DayButton({ day, disabled, dayData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (dayData) {
    const createdAt = dayData.createdAt;
    const todaysDate = new Date();

    console.log(dayDifference(createdAt, todaysDate));
  }

  // dayData ?
  //   dayDifference(dayData.createdAt, new Date() )++ !== day ?
  //     <Text >{day} </Text> : ButtonModal

  dayData &&
    console.log(dayDifference(dayData.createdAt, new Date()));

  return (
    <>
      <Button
        m={2}
        p={1}
        borderRadius="25"
        bg={
          disabled
            ? "white"
            : dayData && dayData.completed
            ? "teal.200"
            : "gray.200"
        }
        size="lg"
        cursor={disabled ? "default" : "pointer"}
        _hover={{ bg: disabled && "whiteAlpha.100" }}
        // Modal
        onClick={onOpen}
      >
        {!disabled &&
          (dayData && dayData.completed ? (
            <CheckIcon color="black" />
          ) : (
            <Text
              fontFamily="bungee"
              fontWeight="light"
              color="#5a06ff"
              fontSize="xl"
            >
              {day}
            </Text>
          ))}
      </Button>

      {/* TODO: Add comment else you will forget what I was doing.*/}

      {!disabled && (
        <ButtonModal
          isOpen={isOpen}
          onClose={onClose}
          day={day}
          title={`Day ${day}`}
          body={
            dayData &&
            dayDifference(dayData.createdAt, new Date()) + 1 !==
              parseInt(day) ? (
              <Text textAlign="center">
                You cannot edit your progress for today.
              </Text>
            ) : (
              <ModalForm
                onClose={onClose}
                day={day}
                dayData={dayData}
              />
            )
          }
        />
      )}
    </>
  );
}
