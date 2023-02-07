import { School } from '@application/entities/school';
import { Category } from '@application/entities/category';
import { Author } from '@application/entities/author';

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
