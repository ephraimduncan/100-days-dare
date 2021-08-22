import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";

export default function GoalForm() {
  return (
    <>
      <FormControl m={2}>
        <FormLabel>Goal</FormLabel>
        <Input />
        <FormHelperText>
          Your goal at the end of 100 days
        </FormHelperText>
      </FormControl>
      <FormControl m={2} mt={4}>
        <FormLabel>Daily Habit</FormLabel>
        <Textarea />
        <FormHelperText>Your habit daily</FormHelperText>
      </FormControl>
      <Box textAlign="right">
        <Button type="submit">
          <Text
            fontFamily="bungee"
            fontWeight="light"
            color="#5a06ff"
          >
            Save
          </Text>
        </Button>
      </Box>
    </>
  );
}
