import useSWR from "swr";
const baseURL = "/api";
const response = (...args) => fetch(...args).then((res) => res.json());
export default function fetcher(endpoint) {
  const { data, error } = useSWR(`${baseURL}${endpoint}`, response);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
