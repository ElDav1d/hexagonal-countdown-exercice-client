import getCountdownsService from "../services/getCountdownsService";
import { useQuery } from "@tanstack/react-query";
import { ICountdown } from "../interfaces/countdowns";

export interface useCountdownQueryReturn {
  countdowns: ICountdown[];
  isError: boolean;
  isFetching: boolean;
}

const useCountdownQuery = (): useCountdownQueryReturn => {
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

export default useCountdownQuery;
