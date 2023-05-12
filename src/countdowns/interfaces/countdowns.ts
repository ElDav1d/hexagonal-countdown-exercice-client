export interface ICountdowns {
  countdowns: ICountdown[];
}

export interface ICountdown {
  _id: string;
  name: string;
  date: Date;
}
