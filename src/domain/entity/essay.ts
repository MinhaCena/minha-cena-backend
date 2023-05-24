import { Institution } from "./institution";
import { Author } from "./author";

export interface Essay {
  id: number;
  institution: Institution;
  author: Author;
  title: string;
  essay: string;
  status: string;
  createdAt: Date;
  updatedAt?: Date;
}
