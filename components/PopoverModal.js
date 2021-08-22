import {
  useDisclosure,
  PopoverBody,
  chakra,
  Text,
} from "@chakra-ui/react";
import ButtonModal from "./Modal";
import GoalForm from "./GoalForm";

export default function PopoverModal({
  title,
  message,
  userForGoalForm,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <chakra.span onClick={onOpen}>
      <PopoverContentComponent text={title} />
      <ButtonModal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        body={
          <Text
            textAlign={title !== "Set Goal" && "center"}
            fontSize="xl"
          >
            {message ? (
              message
            ) : (
              <GoalForm
                onClose={onClose}
                userForGoalForm={userForGoalForm}
              />
            )}
          </Text>
        }
      />
    </chakra.span>
  );
}

function PopoverContentComponent({ text }) {
  return (
    <PopoverBody
      borderBottom="1px"
      cursor="pointer"
      borderColor="blue.100"
    >
      {text}
    </PopoverBody>
  );
}
