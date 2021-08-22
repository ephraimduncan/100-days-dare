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
          {title === "Logout" && (
            <ModalFooter>
              <Button>
                <Link href="/api/auth/logout">
                  <chakra.a>
                    <Text
                      fontFamily="bungee"
                      fontWeight="light"
                      color="#5a06ff"
                    >
                      Logout
                    </Text>
                  </chakra.a>
                </Link>
              </Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
