import { Grid, GridItem, HStack, Stack } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/games/GameGrid";
import GenreList from "./components/genres/GenreList";
import Navbar from "./components/globals/Navbar";
import PlatformSelector from "./components/globals/PlatformSelector";
import type { Genre } from "./hooks/useGenre";
import type { Platform } from "./hooks/usePlatform";
import SortSelector from "./components/globals/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectedGenre = (genre: Genre) => setGameQuery({...gameQuery, genre});
  const handleSelectedPlatform = (platform: Platform) => setGameQuery({...gameQuery, platform});

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem area="aside" paddingX={5}>
        <Stack hideBelow="lg">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => handleSelectedGenre(genre)}
          />
        </Stack>
      </GridItem>
      <GridItem area="main">
        <HStack gap={'3'} marginBottom={2} pl={2}>

        <PlatformSelector
          onSelectPlatform={(platform) => handleSelectedPlatform(platform)}
          selectedPlatform={gameQuery.platform}
        />
        <SortSelector/>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
