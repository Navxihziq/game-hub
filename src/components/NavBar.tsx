import { HStack, Image } from "@chakra-ui/react";
import { ThemeToggle } from "./ThemeToggle";
import { SearchInput } from "./SearchInput";

interface Props {
  onSearch: (query: string) => void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack padding="10px">
        <Image w="15vw" boxSize="60px" src="/logo.webp" alt="logo of GameHub" />
        <SearchInput onSearch={onSearch} />
        <ThemeToggle />
      </HStack>
    </>
  );
};
