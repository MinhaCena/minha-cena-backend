import { User } from "@domain/entity/user";

export class Teacher {
    id: number;
    user: User;
    name?: string;
    occupation?: string;
    createdAt: Date;
    updatedAt?: Date;
  }
