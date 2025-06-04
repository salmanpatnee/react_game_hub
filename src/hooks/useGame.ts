import { useEffect, useState } from "react";
import apiClient from "@/services/apClient";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface GameResponse {
  count: number;
  results: Game[];
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<GameResponse>("/games", {
        signal: controller.signal,
      })
      .then((res) => setGames(res.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return; // Ignore if the request was cancelled
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGame;
