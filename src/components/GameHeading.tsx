import { Heading } from "@chakra-ui/react";
import { gameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: gameQuery;
}


const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformsId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <Heading as={"h1"}>{heading}</Heading>;
};

export default GameHeading;
