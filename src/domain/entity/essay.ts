import { Institution } from "@domain/entity/institution";
import { Theme } from "@domain/entity/theme";
import { Author } from "@domain/entity/author";
import { Illustration } from "./illustration";


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
