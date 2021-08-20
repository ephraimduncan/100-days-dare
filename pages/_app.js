import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "@auth0/nextjs-auth0";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { user } = pageProps;

  return (
    <UserProvider user={user}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
  );
}

export default MyApp;
