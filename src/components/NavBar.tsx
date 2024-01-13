import { HStack, Image } from "@chakra-ui/react";
import { ThemeToggle } from "./ThemeToggle";

export const NavBar = () => {
  return (
    <>
      <HStack height={20} justifyContent="space-between" padding="10px">
        <Image
          w="15vw"
          maxW="60px"
          src="./src/assets/logo.webp"
          alt="logo of GameHub"
        />
        <ThemeToggle />
      </HStack>
    </>
  );
};
