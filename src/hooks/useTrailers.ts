import { Trailer } from "../entities/Trailer";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";


const useTrailers = (gameId: number) => {

    const getTrailers = new ApiClient<Trailer>(`/games/${gameId}/movies`);

    return useQuery({
        queryKey: ["trailers", gameId],
        queryFn: () => getTrailers.getAll({}),
    });
}

export default useTrailers;