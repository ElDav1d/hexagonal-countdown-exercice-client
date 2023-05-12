import { CountdownItem } from "../CountdownItem/CountdownItem";
import { useCountdownQuery } from "../hooks";

export const CountdownList = () => {
  const { countdowns, isError, isFetching } = useCountdownQuery();

  return (
    <>
      {isFetching && <h2>...loading</h2>}
      {isError && <h2>Ooooops! Try refreshing your browser</h2>}
      {countdowns?.length > 0 && (
        <table className="table-auto w-full text-left rounded-lg shadow-lg">
          <thead className="bg-blue-600 text-white rounded-lg">
            <tr>
              <th className="p-2 md:p-4 lg:p-6">Name</th>
              <th className="p-2 md:p-4 lg:p-6">Timer</th>
            </tr>
          </thead>
          <tbody>
            {countdowns.map((item) => (
              <CountdownItem key={item._id} item={item} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
