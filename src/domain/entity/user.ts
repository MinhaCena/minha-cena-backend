
export class User {
  id: number;
  email: string;
  password: string;
  role: number;
  confirmed: number;
  unLocked?: Date;
  createdAt: Date;
  updatedAt?: Date;
}
