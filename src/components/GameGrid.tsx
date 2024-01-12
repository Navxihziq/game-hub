import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

import useGames from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
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
        {data && data.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
