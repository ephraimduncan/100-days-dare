import { Text } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Text>Made with love by </Text>{" "}
      <Text bgGradient="linear(to-l, #5A06FF,#0070f3)" bgClip="text">
        @dephraiim
      </Text>
    </footer>
  );
}
