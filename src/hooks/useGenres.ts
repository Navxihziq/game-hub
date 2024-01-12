import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface GenreResponses {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const controller = new AbortController();

  // fetch the data
  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<GenreResponses>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setIsLoading(false));

    return () => {
      controller.abort();
    };
  }, []);

  return { genres, error, isLoading, setGenres, setError, setIsLoading };
};

export default useGenres;
