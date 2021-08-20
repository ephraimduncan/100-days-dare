import Image from "next/image";
import { useMediaQuery } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

export default function Hero() {
  const [is500px] = useMediaQuery("(max-width: 500px)");

  console.log(is500px);

  return (
    <div>
      <span className={styles.logo}>
        {!is500px ? (
          <Image
            src="/cover.svg"
            alt="100 Days Challenge"
            layout="fill"
          />
        ) : (
          <Image
            src="/cover2.svg"
            alt="100 Days Challenge"
            layout="fill"
          />
        )}
      </span>
    </div>
  );
}
