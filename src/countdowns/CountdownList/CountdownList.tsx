import { useCountdowns } from "../hooks";

export const CountdownList = () => {
  const { countdowns, isError, isFetching } = useCountdowns();

  return (
    <>
      {isFetching && <h2>...loading</h2>}
      {isError && <h2>Ooooops! Try refreshing your browser</h2>}
      {countdowns?.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Timer</th>
            </tr>
          </thead>
          <tbody>
            {countdowns.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.date.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
