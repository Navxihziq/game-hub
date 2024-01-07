import { Grid, GridItem, Show } from "@chakra-ui/react";

export const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="pink">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="tomato">
          Main
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
