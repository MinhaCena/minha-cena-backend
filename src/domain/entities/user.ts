export interface User {
  id: number;
  email: string;
  password: string;
  role: string;
  unLocked?: Date;
  createdAt: Date;
  updatedAt?: Date;
}
