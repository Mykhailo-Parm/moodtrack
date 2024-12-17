export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  createdAt?: string; // ISO 8601 date string
  updatedAt?: string; // ISO 8601 date string
}