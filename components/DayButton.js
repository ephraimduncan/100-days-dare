import { Button, Text, useDisclosure } from "@chakra-ui/react";
import ButtonModal from "./Modal";
import ModalForm from "./Form";

export default function DayButton({ day, disabled }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO: Fix Outline for Disabled Icons when clicked
  return (
    <>
      <Button
        m={2}
        p={1}
        borderRadius="25"
        bg={disabled ? "white" : "gray.200"}
        size="lg"
        cursor={disabled ? "default" : "pointer"}
        _hover={{ bg: disabled && "whiteAlpha.100" }}
        // Modal
        onClick={onOpen}
      >
        {!disabled && (
          <Text
            fontFamily="bungee"
            fontWeight="light"
            color="#5a06ff"
            fontSize="xl"
          >
            {day}
          </Text>
        )}
      </Button>
      {!disabled && (
        <ButtonModal
          isOpen={isOpen}
          onClose={onClose}
          day={day}
          body={<ModalForm />}
        />
      )}
    </>
  );
}
