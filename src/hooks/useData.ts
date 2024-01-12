import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // fetch data
  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    apiClient
      .get<FetchResponse<T>>(endpoint + "/", { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setIsLoading(false));

    return () => {
      controller.abort();
    };
  }, []);

  return { data, error, isLoading };
}

export default useData;
