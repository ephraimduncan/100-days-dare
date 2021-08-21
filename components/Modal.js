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
} from "@chakra-ui/react";

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
              <Button>Logout</Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
