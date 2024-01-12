import { useEffect, useState } from "react";

import apiClient, { CanceledError } from "../services/api-client";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface PlatformResponseUnit {
  platform: Platform;
}

export interface Game {
  id: number;
  name: string;
  rating: number;
  background_image: string;
  platforms: PlatformResponseUnit[];
  parent_platforms: { platform: Platform }[];
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
