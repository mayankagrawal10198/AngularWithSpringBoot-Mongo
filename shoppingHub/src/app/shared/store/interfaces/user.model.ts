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

export interface Res {
  message: string;
}

export interface UserDetails {
  name: string;
  email: string;
}
