import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // fetch data
  useEffect(
    () => {
      setIsLoading(true);
      const controller = new AbortController();

      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
        })
        .catch((err) => {
          if (err instanceof CanceledError) {
            return;
          }
          setError(err);
        })
        .finally(() => setIsLoading(false));

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
