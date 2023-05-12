import { useCountdowns } from "../hooks";

export const CountdownList = () => {
  const { countdowns, isError, isFetching } = useCountdowns();

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
              <tr key={item._id} className="border-b border-blue-200">
                <td className="p-2 md:p-4 lg:p-6">{item.name}</td>
                <td className="p-2 md:p-4 lg:p-6">
                  {item.date.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
