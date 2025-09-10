import { useInfiniteQuery } from "@tanstack/react-query";
import { gameQuery } from "../App";
import apiClient, {FecthResponse} from "../services/apiClient";


const getGames = new apiClient<Game>('/games');

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
  useInfiniteQuery<FecthResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: async ({ pageParam = 1 }) => getGames.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformsId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
        page_size: 5
      }
    }),
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    }
  })
  

export default useGames