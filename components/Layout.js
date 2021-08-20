import { Container } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Container maxW="container.lg">
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </Container>
    </>
  );
}
