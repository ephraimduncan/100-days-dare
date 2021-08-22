import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  chakra,
  Avatar,
} from "@chakra-ui/react";
import { useState } from "react";
import PopoverModal from "./PopoverModal";

export default function UserPopover({
  name,
  username,
  url,
  userForGoalForm,
}) {
  const [popoverIsOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(!popoverIsOpen);
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
          <PopoverModal
            title="Set Goal"
            userForGoalForm={userForGoalForm}
          />
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
