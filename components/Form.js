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

export default function ModalForm({ onClose, day }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitForm = async ({ taskToday, details }) => {
    const completedData = {
      taskToday,
      details,
      completed: taskToday && details ? true : false,
    };

    const userDayData = {
      [day]: completedData,
    };

    const userDay = await fetch("/api/addUserDay", {
      method: "POST",
      body: JSON.stringify(userDayData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(await userDay.json());
    onClose();
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
