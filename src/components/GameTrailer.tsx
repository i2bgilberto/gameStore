import useTrailers from "../hooks/useTrailers"

interface GameTrailerProps {
    gameId: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {

    const { data : game, isLoading, error } = useTrailers(gameId);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading trailers</div>;

    return (
        <>
        <video src={game?.results[0]?.data[480]} poster={game?.results[0]?.preview} controls  style={{ width: "100%", borderRadius: "8px" }}>
            Your browser does not support the video tag.
        </video>
        </>
    );
}

export default GameTrailer;