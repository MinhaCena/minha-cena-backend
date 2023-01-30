
import { School } from "@application/entities/school";

export interface Redaction {
  id: number;
  schoolId: School;
  title: string;
  redaction: string;
  studentName: string;
  age: number;
  class: string;
  theme: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
