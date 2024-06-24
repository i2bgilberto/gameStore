import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";

export interface gameQuery {
  genres: Genre | null;
  platforms: Platform | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<gameQuery>({} as gameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{ base: "1fr", lg: "250px 1fr" }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genres}
              onSelectGenre={(genre) =>
                setGameQuery({ ...gameQuery, genres: genre })
              }
            />
          </GridItem>
        </Show>
        <GridItem area={"main"} padding={2}>
          <PlatformSelector
            selectedPlatform={gameQuery.platforms}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platforms: platform })
            }
          />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
