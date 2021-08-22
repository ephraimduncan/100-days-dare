import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  chakra,
} from "@chakra-ui/react";
import Link from "next/link";

export default function ButtonModal({
  isOpen,
  onClose,
  day,
  title,
  body,
}) {
  const renderSwitch = (title) => {
    switch (title) {
      case "Logout":
        return (
          <Link href="/api/auth/logout">
            <chakra.a>
              <PopoverButton title={title} />
            </chakra.a>
          </Link>
        );

      case "Reset":
        return (
          <Link href="/api/resetUser">
            <chakra.a>
              <PopoverButton title={title} />
            </chakra.a>
          </Link>
        );
    }
  };

  return (
    <>
      <Modal p={2} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text
              fontFamily="bungee"
              fontSize="xl"
              fontWeight="light"
            >
              {title}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{body}</ModalBody>
          <ModalFooter>{renderSwitch(title)}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function PopoverButton({ title }) {
  return (
    <Button>
      <Text fontFamily="bungee" fontWeight="light" color="#5a06ff">
        {title}
      </Text>
    </Button>
  );
}
