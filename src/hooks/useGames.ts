import { useQuery } from "@tanstack/react-query";
import { gameQuery } from "../App";
import apiClient from "../services/apiClient";


const getGames = new apiClient('/games');

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
  useQuery({
    queryKey: ['games', gameQuery],
    queryFn: () => getGames.getAll({
      params: {
        genres: gameQuery.genres?.id,
        parent_platforms: gameQuery.platforms?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      }
    }),
    staleTime: 24 * 60 * 60 * 1000 // 24 hours
  })
  

export default useGames