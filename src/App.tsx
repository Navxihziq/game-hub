import { Grid, GridItem, Show, VStack } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platforms: Platform | null;
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
          <NavBar />
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
            <PlatformSelector
              onSelectPlatform={(platform: Platform) => {
                setGameQuery({ ...gameQuery, platforms: platform });
              }}
            />
            <GameGrid gameQuery={gameQuery} />
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
