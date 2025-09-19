import { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import { Publisher } from "./Publisher";


export interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  publishers: Publisher[];
  genres: Genre[];
  released: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
}
