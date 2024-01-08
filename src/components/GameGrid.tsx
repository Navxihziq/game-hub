import { Text, List, ListItem, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

import useGame from "../hooks/useGame";

const GameGrid = () => {
  const { games, error, setGames, setError } = useGame();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
