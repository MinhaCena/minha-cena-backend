import { School } from "@application/entities/school";

export interface Author {
  id: number;
  schoolId: School;
  name: string;
  class: string;
  age: number;
  createdAt: Date;
  updatedAt?: Date;
}
