import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h2>
              <b>{game.name}</b>
            </h2>
            <p>Released: {game.released}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
