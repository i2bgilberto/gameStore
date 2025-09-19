import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";


const Homepage = () => {
  return (
    <>
    <Grid
            templateAreas={{
            lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{ base: "1fr", lg: "250px 1fr" }}
        >
            
            <Show above="lg">
            <GridItem area="aside" paddingX={5}>
                <GenreList />
            </GridItem>
            </Show>
            <GridItem area={"main"} padding={2}>
            <GameHeading />
            <HStack spacing={5} paddingLeft={0} marginBottom={3}>
                <PlatformSelector/>
                <SortSelector
                
                />
            </HStack>

            <GameGrid />
            </GridItem>
    </Grid>
    </>
  );
}
export default Homepage;