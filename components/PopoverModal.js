import {
  useDisclosure,
  PopoverBody,
  chakra,
  Text,
} from "@chakra-ui/react";
import ButtonModal from "./Modal";

export default function PopoverModal({ title, message }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <chakra.div onClick={onOpen}>
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
            {message}
          </Text>
        }
      />
    </chakra.div>
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
