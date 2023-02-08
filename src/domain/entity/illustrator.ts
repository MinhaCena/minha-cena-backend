import { User } from '@domain/entity/user';

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
