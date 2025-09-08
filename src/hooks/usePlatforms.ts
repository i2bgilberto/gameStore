import platforms from "../data/platforms";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";

const getPlatforms = new ApiClient<Platform>('/platforms/lists/parents');   

export interface Platform {
    id : number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: getPlatforms.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: {count: platforms.length, results: platforms}
});

export default usePlatforms;