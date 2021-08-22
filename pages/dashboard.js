import Image from "next/image";
import { Flex, Text, chakra, Spacer, Avatar } from "@chakra-ui/react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import useSWR from "swr";
import ButtonDesign from "../components/ButtonDesign";
import Layout from "../components/Layout";
import Popover from "../components/Popover";

export default withPageAuthRequired(function Dashboard() {
  const { data, error } = useSWR("/api/getUser");

  if (data) {
    const { user } = data;

    console.log(user);

    // Day
    if (user.currentDay === 1) {
      console.log("Welcome");
      user.currentDay++;
    }
  }

  return (
    <Layout>
      <chakra.div mt={6} p={4}>
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
          <Spacer />
          <Spacer />
          <Spacer />
          <chakra.div>
            <Image
              src="/motivation.svg"
              alt="Daily Motivation"
              width="394"
              height="108.5"
              size="108.5px"
            />
          </chakra.div>
          <Spacer />
          {data ? (
            <Popover
              username={data.user.username}
              name={data.user.name}
              url={data.user.avatar}
            />
          ) : (
            <Avatar m={2} name="" avatar="" />
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
