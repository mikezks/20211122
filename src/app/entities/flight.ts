export interface Flight {
  id: number;
  from: string;
  to: string;
  date: string; // ISO Data string
  delayed: boolean;
}
