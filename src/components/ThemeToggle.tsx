import { useColorMode, Switch } from "@chakra-ui/react";

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode}>
      {colorMode}
    </Switch>
  );
};
