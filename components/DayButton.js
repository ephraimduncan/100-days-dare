import {
  Button,
  Text,
  useDisclosure,
  SkeletonCircle,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import ButtonModal from "./Modal";
import ModalForm from "./Form";
import dayDifference from "../utils/dayDifference";

export default function DayButton({ day, disabled, dayData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const buttonContent = () => {
    if (!disabled) {
      if (dayData) {
        if (dayData.completed) {
          return <CheckIcon color="black" />;
        } else {
          return (
            <Text
              fontFamily="bungee"
              fontWeight="light"
              color="#5a06ff"
              fontSize="xl"
            >
              {day}
            </Text>
          );
        }
      } else {
        return <SkeletonCircle size="9" />;
      }
    }
  };

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
        {buttonContent()}
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
                You cannot edit your progress for day {day}
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
