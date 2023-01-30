import { User } from "@application/entities/user";

export interface Registrant {
  id: number;
  userId: User;
  name: string;
  email: string;
  role: string;
  whatapp: string;
  createAt: Date;
  updatedAt: Date;
}
