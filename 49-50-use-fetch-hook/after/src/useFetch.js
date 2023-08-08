import { useEffect, useState } from "react";

export function useFetch(url, options = {}) {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setData([]);
    setIsError(false);
    setIsLoading(true);

    fetch(url, { ...options })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));

    // BONUS:
    // const controller = new AbortController();

    // fetch(url, { signal: controller.signal, ...options })
    //   .then((res) => (res.status === 200 ? res.json() : Promise.reject(res)))
    //   .then((data) => setData(data))
    //   .catch((error) => {
    //     if (error.name === "AbortError") return;
    //     setIsError(true);
    //   })
    //   .finally(() => {
    //     if (controller.signal.aborted) return;
    //     setIsLoading(false);
    //   });
    // return () => {
    //   controller.abort();
    // };
  }, [url]);

  return { data, isError, isLoading };
}
