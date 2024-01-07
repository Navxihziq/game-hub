import { HStack, Image, Text } from "@chakra-ui/react";
import { ThemeToggle } from "./ThemeToggle";

export const NavBar = () => {
  return (
    <>
      <HStack>
        <Image
          w="10vw"
          maxW="60px"
          src="./src/assets/logo.webp"
          alt="logo of GameHub"
        />
        <Text>Nav Bar</Text>
        <ThemeToggle />
      </HStack>
    </>
  );
};
