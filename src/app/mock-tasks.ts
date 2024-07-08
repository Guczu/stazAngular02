import { Task } from "./task";

export const TASKS: Task[] = [
  { name: "Codzienny (Pon - Pt)", data_type: "FILES", amount: 0, status: "Ukończono" },
  { name: "Tygodniowy (Pon - Pt)", data_type: "MSSQL", amount: 2, status: "W trakcie" },
  { name: "Miesięczny (1-szy dzień miesiąca)", data_type: "POSTGRES", amount: 1, status: "W trakcie" },
  { name: "Co 10 dni pracy stacji roboczej, komputera", data_type: "FILES", amount: 0, status: "Ukończono" },
];
