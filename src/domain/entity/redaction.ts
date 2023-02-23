import { School } from "@domain/entity/school";
import { Category } from "@domain/entity/category";
import { Author } from "@domain/entity/author";


export interface Redaction {
  id: number;
  schoolId: School;
  categoryId: Category;
  authorId: Author;
  title: string;
  redaction: string;
  status?: string;
  createdAt: Date;
  updatedAt?: Date;
}
