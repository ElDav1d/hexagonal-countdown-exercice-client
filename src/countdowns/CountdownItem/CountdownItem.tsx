import { CountDowntimer } from "../CountDowntimer/CountDowntimer";
import { ICountdown } from "../interfaces/countdowns";
export interface CountdownItemProps {
  item: ICountdown;
}

export const CountdownItem = ({ item }: CountdownItemProps) => {
  const END_OF_2023 =
    "Fri Dec 31 2023 23:59:59 GMT+0200 (Central European Summer Time)";
  const END_OF_2023_IN_MS = new Date(END_OF_2023).getTime();
  const FAKE_REGISTER_IN_MS = new Date(item.date).getTime();

  const dateDiff = FAKE_REGISTER_IN_MS + END_OF_2023_IN_MS;
  return (
    <tr key={item._id} className="border-b border-blue-200">
      <td className="p-2 md:p-4 lg:p-6">{item.name}</td>
      <td className="p-2 md:p-4 lg:p-6">
        <CountDowntimer targetDate={new Date(dateDiff)} />
      </td>
    </tr>
  );
};
