import Link from "next/link";
import Image from "next/image";
import { useMediaQuery, Flex, chakra, Text } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

export default function Hero() {
  const [is500px] = useMediaQuery("(max-width: 500px)");

  console.log(is500px);

  return (
    <div>
      <div className={styles.imageContainer}>
        {!is500px ? (
          <Image
            src="/cover3.svg"
            alt="100 Days Challenge"
            layout="fill"
            className={styles.image}
          />
        ) : (
          <Image
            src="/cover2.svg"
            alt="100 Days Challenge"
            layout="fill"
            className={styles.image}
          />
        )}
      </div>
      <Flex
        flexDirection={!is500px ? "row" : "column"}
        justifyContent="center"
        alignItems="center"
      >
        <Link href="/">
          <chakra.a
            m={[2, 3]}
            p={[4, 6]}
            borderRadius="10"
            _hover={{ bg: "ash" }}
          >
            <Text
              bgGradient="linear(to-l, #5A06FF,#0070f3)"
              bgClip="text"
              fontSize={!is500px ? "4xl" : "2xl"}
            >
              Login
            </Text>
          </chakra.a>
        </Link>
        <Link href="/">
          <chakra.a
            m={[2, 3]}
            p={[4, 6]}
            borderRadius="10"
            _hover={{ bg: "ash" }}
          >
            <Text
              bgGradient="linear(to-l, #5A06FF,#0070f3)"
              bgClip="text"
              fontSize={!is500px ? "4xl" : "2xl"}
            >
              Get Started
            </Text>
          </chakra.a>
        </Link>
      </Flex>
    </div>
  );
}
