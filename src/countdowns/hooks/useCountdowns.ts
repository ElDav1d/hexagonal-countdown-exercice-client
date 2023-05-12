import getCountdownsService from "../services/getCountdownsService";
import { useQuery } from "@tanstack/react-query";
import { ICountdown } from "../interfaces/countdowns";

export interface UseCountdownsReturn {
  countdowns: ICountdown[];
  isError: boolean;
  isFetching: boolean;
}

const useCountdowns = (): UseCountdownsReturn => {
  const { isError, data, isFetching } = useQuery(
    ["countdowns"],
    () => getCountdownsService(),
    {
      refetchOnWindowFocus: false,
    }
  );

  return {
    countdowns: data?.results as ICountdown[],
    isError,
    isFetching,
  };
};

export default useCountdowns;
