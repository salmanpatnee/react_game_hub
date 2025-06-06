import { useEffect, useState } from "react";
import apiClient from "@/services/apClient";
import { CanceledError, type AxiosRequestConfig } from "axios";

interface ApiResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestParams?: AxiosRequestConfig, deps?: unknown[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<ApiResponse<T>>(endpoint, {
        signal: controller.signal, ...requestParams
      })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return; // Ignore if the request was cancelled
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
    
  }, [...(deps ?? [])]);

  return { data, error, isLoading };
};

export default useData;
