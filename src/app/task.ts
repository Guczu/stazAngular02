export default interface Task {
  name: string;
  data_type: string;
  amount: number;
  [key: string]: string | number | boolean;
}
