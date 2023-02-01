export interface User {
  id: number;
  email: string;
  password: string;
  role: number;
  unLocked?: Date;
  createdAt: Date;
  updatedAt?: Date;
}
