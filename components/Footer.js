import { chakra, Text } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Text fontFamily="bungee">
        Made with love by{"  "}
        <chakra.span
          bgGradient="linear(to-l, #5A06FF,#0070f3)"
          bgClip="text"
        >
          @dephraiim
        </chakra.span>
      </Text>
    </footer>
  );
}
