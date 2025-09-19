import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import apiClient, { FecthResponse } from "../services/apiClient";
import useGamesQueryStore from "../store";
import { Game } from "../entities/Game";

const getGames = new apiClient<Game>('/games');

export interface Platform {
  id : number;
  name: string;
  slug: string;
}

const useGames = () => {

 const gameQuery = useGamesQueryStore(s => s.gameQuery);

  
  return useInfiniteQuery<FecthResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: async ({ pageParam = 1 }) => getGames.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformsId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
        page_size: 10
      }
    }),
    initialPageParam: 1,
    staleTime: ms('1day'),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    }
  })
};

export default useGames;