import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};

export default ThemeToggleButton;
