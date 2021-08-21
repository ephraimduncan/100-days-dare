import { Button, Text } from "@chakra-ui/react";

export default function DayButton({ day, disabled }) {
  return (
    <Button
      m={2}
      p={1}
      borderRadius="25"
      fontFamily="bungee"
      bg={disabled ? "white" : "gray.200"}
      size="lg"
      cursor={disabled ? "default" : "pointer"}
      _hover={{ bg: disabled && "whiteAlpha.100" }}
    >
      {!disabled && (
        <Text color="#5a06ff" fontSize="xl">
          {day}
        </Text>
      )}
    </Button>
  );
}
