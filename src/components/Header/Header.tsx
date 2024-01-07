import { Flex, Spacer } from "@chakra-ui/react";

import ThemeToggleButton from "./themeToggleButton";
import { SearchBar } from "./SearchBar";

const Header = () => {
  return (
    <>
      <Flex>
        <p>GameHub</p>
        <SearchBar></SearchBar>
        <ThemeToggleButton></ThemeToggleButton>
      </Flex>
    </>
  );
};

export default Header;
