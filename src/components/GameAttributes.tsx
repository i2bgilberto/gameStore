import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItems from "./DefinitionItems";
import { Game } from "../entities/Game";


interface Props {
    game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} marginTop={5} as="dl">
                <DefinitionItems term="Platforms">
                    {game.parent_platforms?.map(({platform})=>( <Text color="white" key={platform.id}>{platform.name}</Text>))}
                </DefinitionItems>
                <DefinitionItems term="Metascore">
                    <CriticScore score={game.metacritic}/>
                </DefinitionItems>
                <DefinitionItems term="Genres">
                    {game.genres?.map(genre => (
                        <Text color="white" key={genre.id}>{genre.name}</Text>
                    ))}
                </DefinitionItems>
                <DefinitionItems term="Publishers">
                    {game.publishers?.map(publisher => (
                        <Text color="white" key={publisher.id}>{publisher.name}</Text>
                    ))}
                </DefinitionItems>
            </SimpleGrid>
  )
}

export default GameAttributes;