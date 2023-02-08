import { School } from "@domain/entity/school";
import { Registrant } from "@domain/entity/registrant";


export interface Register {
  id: number;
  schoolId: School;
  registrantId: Registrant;
  createdAt: Date;
  updatedAt?: Date;
}
