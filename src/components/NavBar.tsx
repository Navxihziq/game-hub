import { HStack, Image } from "@chakra-ui/react";
import { ThemeToggle } from "./ThemeToggle";
import { SearchInput } from "./SearchInput";

export const NavBar = () => {
  return (
    <>
      <HStack height={20} padding="10px">
        <Image
          w="15vw"
          maxW="60px"
          src="./src/assets/logo.webp"
          alt="logo of GameHub"
        />
        <SearchInput />
        <ThemeToggle />
      </HStack>
    </>
  );
};
