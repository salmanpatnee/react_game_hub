import { Grid, GridItem, Stack } from "@chakra-ui/react"
import Navbar from "./components/globals/Navbar"
import GameGrid from "./components/games/GameGrid"
import GenreList from "./components/genres/GenreList"


function App() {


  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}

    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Stack hideBelow="lg">
        <GridItem area="aside" paddingX={5} >
          <GenreList />
        </GridItem>
      </Stack>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
