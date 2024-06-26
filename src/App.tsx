import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface gameQuery {
  genres: Genre | null;
  platforms: Platform | null;
  sortOrder: string;
  searchText: string;
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
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
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
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} paddingLeft={0} marginBottom={3}>
            <PlatformSelector
              selectedPlatform={gameQuery.platforms}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platforms: platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
