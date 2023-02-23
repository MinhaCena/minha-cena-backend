import { User } from "@domain/entity/user";


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
