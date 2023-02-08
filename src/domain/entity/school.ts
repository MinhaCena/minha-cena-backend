import { Registrant } from './registrant';

export interface School {
  id: number;
  name: string;
  cnpj: string;
  city: string;
  uf: string;
  type: string;
  email?: string;
  phone: string;
  createAt: Date;
}
