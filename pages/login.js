import { Center, Text } from "@chakra-ui/react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const { user } = useUser();
  const router = useRouter();

  const createUser = async (user) => {
    if (user) {
      const userData = {
        name: user.name,
        avatar: user.picture,
        username: user.nickname,
        userId: user.sub,
        goal: "",
        dailyHabit: "",
        days: [],
      };

      await fetch("/api/createUser", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      router.push("/dashboard");
    }
  };

  // Everyday when you login, calculate the day difference and add it
  // Update day with it

  useEffect(() => {
    createUser(user);
  }, []);

  return (
    <Center>
      <Text fontFamily="bungee" fontSize="3xl">
        Logging In
      </Text>
    </Center>
  );
}

export const getServerSideProps = withPageAuthRequired();
