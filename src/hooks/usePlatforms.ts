import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";
import ms from "ms";

const getPlatforms = new ApiClient<Platform>('/platforms/lists/parents');   

export interface Platform {
    id : number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: getPlatforms.getAll,
    staleTime: ms('1day'),
    initialData: {count: platforms.length, results: platforms}
});

export default usePlatforms;