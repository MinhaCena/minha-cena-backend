import { School } from "@application/entities/school";
import { Registrant } from "@application/entities/registrant";

export interface Register {
  id: number;
  schoolId: School;
  registrantId: Registrant;
  createdAt: Date;
  updatedAt?: Date;
}
