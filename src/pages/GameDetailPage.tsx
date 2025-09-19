import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import { Heading } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameTrailer from "../components/GameTrailer";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
    const { slug } = useParams();
    const {data: game, isLoading, error} = useGameDetail(slug!);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!game) return <div>No game found</div>;

    return (
        <>
            <Heading>{game.name}</Heading>
            <ExpandableText>{game.description_raw}</ExpandableText>
            <GameAttributes game={game}/>
            <GameTrailer gameId={game.id} />
        </>
    ); 
}
export default GameDetailPage;
