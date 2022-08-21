export const data: TDay[] = [
  {
    day: "mon",
    amount: 17.45,
    color: "hsl(10, 79%, 65%)",
  },
  {
    day: "tue",
    amount: 34.91,
    color: "hsl(10, 79%, 65%)",
  },
  {
    day: "wed",
    amount: 52.36,
    color: "hsl(186, 34%, 60%)",
  },
  {
    day: "thu",
    amount: 31.07,
    color: "hsl(10, 79%, 65%)",
  },
  {
    day: "fri",
    amount: 23.39,
    color: "hsl(10, 79%, 65%)",
  },
  {
    day: "sat",
    amount: 43.28,
    color: "hsl(10, 79%, 65%)",
  },
  {
    day: "sun",
    amount: 25.48,
    color: "hsl(10, 79%, 65%)",
  },
];

export type TDay = {
  day: string;
  amount: number;
  color: string;
};
