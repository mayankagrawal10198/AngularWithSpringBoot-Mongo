export interface User {
  name?: string;
  dob?: Dob;
  email: string;
  pass: string;
}

export interface Dob {
  year: number;
  month: number;
  day: number;
}
