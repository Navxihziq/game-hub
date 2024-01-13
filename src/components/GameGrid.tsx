import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

import useGames from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
