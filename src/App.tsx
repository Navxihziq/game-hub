import { Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platforms: Platform | null;
  ordering: string | null;
  search: string | null;
}

export const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(query: string) => {
              setGameQuery({ ...gameQuery, search: query });
            }}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            Aside
            <GenreList
              onSelectGenre={(genre) => {
                setGameQuery({ ...gameQuery, genre: genre });
              }}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <VStack padding={10} align={"start"}>
            <HStack>
              <PlatformSelector
                onSelectPlatform={(platform: Platform) => {
                  setGameQuery({ ...gameQuery, platforms: platform });
                }}
              />
              <SortSelector
                onSelectSortOrder={(orderValue: string) => {
                  setGameQuery({ ...gameQuery, ordering: orderValue });
                }}
              ></SortSelector>
            </HStack>
            <GameGrid gameQuery={gameQuery} />
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
