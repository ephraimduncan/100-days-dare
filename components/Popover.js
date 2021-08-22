import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  chakra,
  Avatar,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import ButtonModal from "../components/Modal";
import GoalForm from "./GoalForm";
import PopoverModal from "./PopoverModal";

export default function UserPopover({ name, username, url }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [popoverIsOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  return (
    <>
      <Avatar onClick={open} m={2} name={name} src={url} />
      <Popover
        returnFocusOnClose={false}
        isOpen={popoverIsOpen}
        onClose={close}
        arrowSize={1}
        arrowPadding={0}
        placement="auto-start"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <chakra.span></chakra.span>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">
            {username}
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverModal title="Set Goal" />
          <PopoverModal
            title="Reset"
            message="Are you sure you want to reset?"
          />
          <PopoverModal
            title="Logout"
            message="Are you sure you want to logout?"
          />
        </PopoverContent>
      </Popover>
    </>
  );
}
