import React, { useState } from "react";
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
import useSWR from "swr";

export default function GoalForm({ onClose }) {
  const { data } = useSWR("/api/getUser");
  const [loading, setLoading] = useState(false);

  const { handleSubmit, register } = useForm({
    defaultValues: {
      goal: data ? data.user.goal : "",
      dailyHabit: data ? data.user.dailyHabit : "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    await fetch("/api/addUserGoal", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setLoading(false);
    onClose();
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
            {loading ? "Saving" : "Save"}
          </Text>
        </Button>
      </Box>
    </chakra.form>
  );
}
