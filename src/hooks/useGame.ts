import { useEffect, useState } from "react";

import apiClient, { CanceledError } from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  rating: number;
}

interface GameListResponse {
  count: number;
  results: Game[];
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<GameListResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error, setGames, setError };
};

export default useGame;
