import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header" "main"`,
          lg: `"header header" "aside main"`,
        }}
      >
        <GridItem gridArea="header" bg="tomato">
          <NavBar />
        </GridItem>
        <Show above="lg">
          5
          <GridItem gridArea="aside" bg="green">
            aside
          </GridItem>
        </Show>
        <GridItem gridArea="main" bg="orange">
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
