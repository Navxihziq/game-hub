import { Text, List, ListItem } from "@chakra-ui/react";

import useGame from "../hooks/useGame";

const GameGrid = () => {
  const { games, error, setGames, setError } = useGame();
  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {games.map((game) => (
          <ListItem key={game.id}>{game.name}</ListItem>
        ))}
      </List>
    </>
  );
};

export default GameGrid;
