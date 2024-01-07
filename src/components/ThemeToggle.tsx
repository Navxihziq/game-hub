import { useColorMode, Button } from "@chakra-ui/react";

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return <Button onClick={toggleColorMode}>{colorMode}</Button>;
};
