import { Button, Text, useDisclosure } from "@chakra-ui/react";
import ButtonModal from "./Modal";

export default function DayButton({ day, disabled }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO: Fix Outline for Disabled Icons when clicked
  return (
    <>
      <Button
        m={2}
        p={1}
        borderRadius="25"
        fontFamily="bungee"
        fontWeight="light"
        bg={disabled ? "white" : "gray.200"}
        size="lg"
        cursor={disabled ? "default" : "pointer"}
        _hover={{ bg: disabled && "whiteAlpha.100" }}
        // Modal
        onClick={onOpen}
      >
        {!disabled && (
          <Text color="#5a06ff" fontSize="xl">
            {day}
          </Text>
        )}
      </Button>
      {!disabled && (
        <ButtonModal
          isOpen={isOpen}
          onClose={onClose}
          day={day}
          body={`Hello, welcome to day ${day}`}
        />
      )}
    </>
  );
}
