import useData from "./useData";
import type { Genre } from "./useGenre";
import type { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGame = (genre: Genre | null, platform: Platform | null) =>
  useData<Game>(
    "/games",
    { params: { genres: genre?.id, platforms: platform?.id } },
    [genre?.id, platform?.id]
  );

export default useGame;
