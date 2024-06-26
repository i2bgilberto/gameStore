import { gameQuery } from "../App";
import useData from "./useData";


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
  

  

const useGames = (gameQuery: gameQuery) => useData<Game>("/games", 
  {params : {
    genres : gameQuery.genres?.id, 
    platforms : gameQuery.platforms?.id,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText
  } }, 
    [gameQuery]);

export default useGames