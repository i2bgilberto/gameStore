import { useQuery } from "@tanstack/react-query";
import { gameQuery } from "../App";
import { FecthResponse } from "./useData";
import apiClient from "../services/api-client";


export interface Platform {
  id : number;
  name: string;
  slug: string;
}

export interface Game {
    id: number;
    name: string;
    released: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
  }
  

  

const useGames = (gameQuery: gameQuery) => 
  useQuery<FecthResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => apiClient.get<FecthResponse<Game>>('/games',{
      params : {
        genres : gameQuery.genres?.id, 
        parent_platforms : gameQuery.platforms?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      }
    }).then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000 // 24 hours
  })
  

export default useGames