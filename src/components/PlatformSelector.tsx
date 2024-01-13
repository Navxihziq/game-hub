import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

import usePlatforms, { Platform } from "../hooks/usePlatforms";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

function PlatformSelector({ onSelectPlatform }: Props) {
  const { data } = usePlatforms();
  const [selectedPlatform, setSelectedPlatform] = useState("");

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectedPlatform ? selectedPlatform : "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.map((platform) => (
          <MenuItem
            onClick={() => {
              setSelectedPlatform(platform.name);
              onSelectPlatform(platform);
            }}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
