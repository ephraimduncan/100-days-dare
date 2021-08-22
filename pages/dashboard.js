import Image from "next/image";
import {
  Flex,
  Text,
  chakra,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import useSWR from "swr";
import ButtonDesign from "../components/ButtonDesign";
import Layout from "../components/Layout";
import ButtonModal from "../components/Modal";

export default withPageAuthRequired(function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, error } = useSWR("/api/getUser");

  if (data) {
    const { user } = data;

    console.log(user);

    // Day
    if (user.currentDay === 1) {
      console.log("Welcome");
      setNewUser(true);
      onOpen();
      user.currentDay++;
    }
  }

  return (
    <Layout>
      <chakra.div p={4}>
        <Flex direction="row">
          <Spacer />
          <Flex direction="row">
            <Flex direction="column" mb="8">
              <Text fontSize="4xl" fontFamily="bungee">
                100 Days Challenge
              </Text>

              <Flex direction="row">
                <Text fontSize="xl">
                  Goal:{"     "}
                  <chakra.span>Your Goal Here</chakra.span>
                </Text>
              </Flex>
              <Flex direction="row">
                <Text fontSize="xl">
                  Daily Habit:{"  "}
                  <chakra.span>Your new daily habit here</chakra.span>
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <chakra.div onClick={onOpen}>
            <Image
              src="/motivation.svg"
              alt="Daily Motivation"
              width="394"
              height="108.5"
              size="108.5px"
            />
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
          {newUser && (
            <ButtonModal
              isOpen={isOpen}
              onClose={onClose}
              title="Welcome"
              body={
                <Text textAlign="center" fontSize="xl">
                  Welcome To The 100 Days Challenge
                </Text>
              }
            />
          )}
          <Spacer />
        </Flex>
        {/* Main 100 Designs */}
        <chakra.div>
          <ButtonDesign />
        </chakra.div>
      </chakra.div>
    </Layout>
  );
});
