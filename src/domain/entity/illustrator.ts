import { User } from '@domain/entity/user';

/**
 *
 */
export class Illustrator {
  id: number;
  user?: User;
  name: string;
  email: string;
  cpfCnpj: string;
  whatsapp: string;
  portfolio: string;
  createdAt: Date;
  updatedAt?: Date;
}
