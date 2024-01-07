import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <SearchIcon></SearchIcon>
      </InputLeftElement>
      <Input maxWidth={"100em"} placeholder={"Search" + {} + "Games"}></Input>
    </InputGroup>
  );
};
