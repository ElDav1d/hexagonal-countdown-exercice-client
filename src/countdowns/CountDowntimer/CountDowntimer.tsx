import { useCountdown } from "../hooks";

export interface CountDowntimerProps {
  targetDate: Date;
}

export const CountDowntimer = ({ targetDate }: CountDowntimerProps) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <p>
      <span>{days}</span> : <span> {hours}</span> : <span>{minutes}</span> :{" "}
      <span>{seconds}</span>
    </p>
  );
};
