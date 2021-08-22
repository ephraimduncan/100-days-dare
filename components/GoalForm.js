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
  chakra,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Router from "next/router";

export default function GoalForm({ onClose }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    onClose();
    const userGoal = await fetch("/api/addUserGoal", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    Router.reload(window.location.pathname);
  };

  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)}>
      <FormControl m={2}>
        <FormLabel htmlFor="goal">Goal</FormLabel>
        <Input name="goal" {...register("goal")} />
        <FormHelperText>
          Your goal at the end of 100 days
        </FormHelperText>
      </FormControl>
      <FormControl m={2} mt={4}>
        <FormLabel htmlFor="dailyHabit">Daily Habit</FormLabel>
        <Textarea name="dailyHabit" {...register("dailyHabit")} />
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
    </chakra.form>
  );
}
