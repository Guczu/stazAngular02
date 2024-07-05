import Task from "./task";

export const TASKS: Task[] = [
  { name: "Codzienny (Pon - Pt)", data_type: "FILES", amount: 0 },
  { name: "Tygodniowy (Pon - Pt)", data_type: "MSSQL", amount: 2 },
  { name: "Miesięczny (1-szy dzień miesiąca)", data_type: "POSTGRES", amount: 1 },
  { name: "Co 10 dni pracy stacji roboczej, komputera", data_type: "FILES", amount: 0 },
];
