import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "@auth0/nextjs-auth0";
import "@fontsource/bungee/400.css";
import theme from "../styles/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { user } = pageProps;

  return (
    <UserProvider user={user}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
  );
}

export default MyApp;
