import { Grid, GridItem, Stack } from "@chakra-ui/react"
import Navbar from "./components/globals/Navbar"
import GameGrid from "./components/games/GameGrid"
import GenreList from "./components/genres/GenreList"
import { useState } from "react"
import type { Genre } from "./hooks/useGenre"


function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  const handleSelectedGenre = (genre: Genre) => {
    setSelectedGenre(genre)
  }

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
          <GenreList onSelectGenre={(genre) => handleSelectedGenre(genre)}/>
        </GridItem>
      </Stack>
      <GridItem area="main">
        <GameGrid genre={selectedGenre}/>
      </GridItem>
    </Grid>
  )
}

export default App
