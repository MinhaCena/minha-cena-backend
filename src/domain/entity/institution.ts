import { User } from '@domain/entity/user';

export class Institution {
  id: number;
  user?: User;
  institutionType: number;
  institutionName: string;
  cnpjInep: string;
  city: string;
  state: string;
  schoolType?: number;
  institutionEmail?: string;
  institutionPhone: string;
  registrantName: string;
  registrantEmail: string;
  registrantOccupation: string;
  registrantWhatsapp: string;
  institutionStatus: number;
  createAt: Date;
  updatedAt?: Date;
}
