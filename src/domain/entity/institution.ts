import { User } from '@domain/entity/user';
import { Author } from './author';
import { Essay } from './essay';
import { Teacher } from './teacher';

export interface Institution {
  id: number;
  user: User;
  institutionType: number;
  institutionName: string;
  cnpjInep: string;
  city: string;
  state: string;
  schoolType?: number;
  institutionEmail?: string;
  institutionPhone?: string;
  registrantName: string;
  registrantEmail: string;
  registrantOccupation?: string;
  registrantWhatsapp: string;
  registrantStatus: number;
  createAt: Date;
  updatedAt?: Date;
  essays: Essay[];
  authors: Author[];
  teachers: Teacher[];
}