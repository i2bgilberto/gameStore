import { Heading } from "@chakra-ui/react";
import { gameQuery } from "../App";

interface Props {
  gameQuery: gameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platforms?.name || ""} ${
    gameQuery.genres?.name || ""
  } Games`;
  return <Heading as={"h1"}>{heading}</Heading>;
};

export default GameHeading;
