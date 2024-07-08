export interface Task {
  name: string;
  data_type: DataType;
  amount: number;
  [key: string]: string | number | boolean;
}

export type DataType = "FILES" | "MSSQL" | "POSTGRES";
