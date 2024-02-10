export interface Position {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
}

export interface Profile {
  name: string;
  age: number;
  email: string;
  phone: string;
  positions: Position[];
}
