export interface User {
  id: number;
  email: string;
  password: string;
  unLocked: Date;
  createdAt: Date;
  updatedAt: Date;
}
