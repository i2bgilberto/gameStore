import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient";
import { Game } from "../entities/Game";

const getGame = new ApiClient<Game>("/games");


const useGameDetail = (slug: string) =>  useQuery({
        queryKey: ['game', slug],
        queryFn: () => getGame.get(slug),
    })


export default useGameDetail;