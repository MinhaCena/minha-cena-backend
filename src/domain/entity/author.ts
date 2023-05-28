import { Institution } from './institution';
import { Essay } from './essay';

export class Author {
  id: number;
  institution: Institution;
  name: string;
  class: string;
  age: number;
  createdAt: Date;
  updatedAt?: Date;
}
