import { useEffect, useState } from "react";

import apiClient from "../services/api-client";

interface Game {
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
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<GameListResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { games, error, setGames, setError };
};

export default useGame;
