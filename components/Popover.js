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
          <chakra.div>
            <PopoverContentComponent text="Set Goal and Daily Habit" />
          </chakra.div>
          <chakra.div>
            <PopoverContentComponent text="Reset" />
          </chakra.div>
          <chakra.div onClick={onOpen}>
            <PopoverContentComponent text="Logout" />
            <ButtonModal
              isOpen={isOpen}
              onClose={onClose}
              title="Logout"
              body={
                <Text textAlign="center" fontSize="xl">
                  Are you sure you want to logout?
                </Text>
              }
            />
          </chakra.div>
        </PopoverContent>
      </Popover>
    </>
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
