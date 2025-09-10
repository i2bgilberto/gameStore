import ApiClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
export interface Genre {
    id : number;
    name: string;
    image_background: string;
}

const getGenres = new ApiClient<Genre>('/genres');

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: getGenres.getAll,
    staleTime: ms('24h'),
    initialData: {count: genres.length, results: genres}
});


export default useGenres;