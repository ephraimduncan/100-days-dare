import Image from "next/image";
import {
  Flex,
  Text,
  chakra,
  Spacer,
  SkeletonCircle,
  Skeleton,
} from "@chakra-ui/react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import useSWR from "swr";
import ButtonDesign from "../components/ButtonDesign";
import Layout from "../components/Layout";
import Popover from "../components/Popover";

export default withPageAuthRequired(function Dashboard() {
  const { data } = useSWR("/api/getUser");

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
                <Skeleton width="100%" m="1" isLoaded={data}>
                  <Text fontSize="xl">
                    Goal:{"  "}
                    <chakra.span>
                      {data && data.user.goal}
                    </chakra.span>
                  </Text>
                </Skeleton>
              </Flex>
              <Flex direction="row">
                <Skeleton width="100%" m="1" isLoaded={data}>
                  <Text fontSize="xl">
                    Daily Habit:{"  "}
                    <chakra.span>
                      {data && data.user.dailyHabit}
                    </chakra.span>
                  </Text>
                </Skeleton>
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
            <SkeletonCircle size="61" />
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
