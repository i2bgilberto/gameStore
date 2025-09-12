import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGamesQueryStore from "../store";



const GameHeading = () => {
  const genreId = useGamesQueryStore(s => s.gameQuery.genreId)
  const genre = useGenre(genreId);


  const platformsId = useGamesQueryStore(s => s.gameQuery.platformsId)
  const platform = usePlatform(platformsId);
  
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <Heading as={"h1"}>{heading}</Heading>;
};

export default GameHeading;