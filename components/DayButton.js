import { Button, Text } from "@chakra-ui/react";

export default function DayButton({ day }) {
  return (
    <Button
      m={2}
      p={1}
      borderRadius="25"
      fontFamily="bungee"
      bg="gray.200"
      size="lg"
    >
      <Text color="#5a06ff" fontSize="xl">
        {day}
      </Text>
    </Button>
  );
}
