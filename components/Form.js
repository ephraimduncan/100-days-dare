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
import useSWR, { mutate } from "swr";
import Router from "next/router";

export default function ModalForm({ onClose, day }) {
  const { data } = useSWR("/api/getUser");

  const userDaysActivity = data.user.days;
  const selectedDay = userDaysActivity.find((element) => {
    return parseInt(Object.keys(element)[0]) === parseInt(day);
  });

  const { handleSubmit, register } = useForm({
    defaultValues: {
      taskToday: selectedDay ? selectedDay[day].taskToday : "",
      details: selectedDay ? selectedDay[day].details : "",
    },
  });

  const submitForm = async ({ taskToday, details }) => {
    const completedData = {
      taskToday,
      details,
      completed: taskToday && details ? true : false,
    };

    const userDayData = {
      [day]: completedData,
    };

    mutate(
      "/api/addUserDay",
      await fetch("/api/addUserDay", {
        method: "POST",
        body: JSON.stringify(userDayData),
        headers: {
          "Content-Type": "application/json",
        },
      })
    );

    onClose();

    Router.reload(window.location.pathname);
  };

  return (
    <>
      <chakra.form onSubmit={handleSubmit(submitForm)}>
        <FormControl m={2}>
          <FormLabel htmlFor="taskToday">
            What did you do today?
          </FormLabel>
          <Input name="taskToday" {...register("taskToday")} />
          <FormHelperText>Short description.</FormHelperText>
        </FormControl>
        <FormControl m={2} mt={4}>
          <FormLabel htmlFor="details">
            Detail your task today?
          </FormLabel>
          <Textarea name="details" {...register("details")} />
          <FormHelperText>Detailed description</FormHelperText>
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
    </>
  );
}
