import { User } from "./user";


export interface Teacher {
    id: number;
    user: User;
    name?: string;
    occupation?: string;
    createdAt: Date;
    updatedAt?: Date;
  }
