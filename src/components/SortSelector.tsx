import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  onSelectSortOrder: (orderValue: string) => void;
}

const SortSelector = ({ onSelectSortOrder }: Props) => {
  const [order, setOrder] = useState("");

  const sortOrders = [
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {order ? order : "Sort Order"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order, idx) => (
          <MenuItem
            onClick={() => {
              setOrder(order.label);
              onSelectSortOrder(order.value);
            }}
            key={idx}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
