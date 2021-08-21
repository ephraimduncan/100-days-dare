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

export default function ButtonModal({ isOpen, onClose, day, body }) {
  return (
    <>
      <Modal p={2} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {day ? (
              <Text
                fontFamily="bungee"
                fontSize="2xl"
                fontWeight="light"
              >
                Day {day}
              </Text>
            ) : (
              <Text
                fontFamily="bungee"
                fontSize="xl"
                fontWeight="light"
              >
                Logout
              </Text>
            )}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{body}</ModalBody>
          {!day && (
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
