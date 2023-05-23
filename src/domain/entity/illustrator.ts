import { User } from '@domain/entity/user';

/**
 * 
 */
export interface Illustrator {
  id: number;
  user?: User;
  /**
 * O nome será utilizado para cadastro do ilustrador.
 * @example Marina Lima
 */
  name: string;
  email: string;
  cpfCnpj: string;
  whatsapp: string;
  portfolio: string;
  createdAt: Date;
  updatedAt?: Date;
}
