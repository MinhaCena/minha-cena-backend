import { User } from '@application/entities/user';

export interface Illustrator {
  id: number;
  userId?: User;
  name: string;
  email: string;
  cpf: string;
  whatapp: string;
  portifolio: string;
  createdAt: Date;
  updatedAt?: Date;
}
