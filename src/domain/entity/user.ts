import { Illustrator } from './illustrator';
import { Institution } from './institution';
import { Teacher } from './teacher';

export interface User {
  id: number;
  email: string;
  password: string;
  role: number;
  confirmed: number;
  unLocked?: Date;
  createdAt: Date;
  updatedAt?: Date;
  teachers: Teacher[];
  illustrators: Illustrator[];
  institutions: Institution[];
}
