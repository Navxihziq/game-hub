import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

import useGame from "../hooks/useGame";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGame();
  console.log(games);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={[1, 2, 3, 4]} padding="10px" spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <div key={skeleton}>
              <GameCardSkeleton />
            </div>
          ))}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
