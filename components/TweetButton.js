import { Button } from "@chakra-ui/react";
import createTwitterLink from "../utils/createTwitterLink";

export default function Tweet({ dayData, day }) {
  const tweetUrl = createTwitterLink({
    url: "localhost:3000",
    day: day,
    taskToday: dayData.taskToday,
  });

  return (
    <Button
      mx={4}
      color="white"
      bg="twitter.600"
      fontFamily="bungee"
      fontWeight="light"
      _hover={{ bg: "white", color: "twitter.600" }}
    >
      <a href={tweetUrl}>Tweet</a>
    </Button>
  );
}
