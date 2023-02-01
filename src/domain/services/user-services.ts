import { Injectable } from '@nestjs/common';
import { UserClient } from '@application/client/user-client';
import { User } from '@application/entities/user';
import { ValidationService } from "@application/services/validation-service";
import validator from "validator";

enum Role {
  admin = 1,
  teacher = 2,
  illustrator = 3,
  user = 4,
}

@Injectable()
export class UserServices {
  constructor(private userClient: UserClient) {}
  async createUser(data: User): Promise<User | string> {
    if (!validator.isEmail(data.email)) {
      return 'Email invalid';
    }
    const userAlreadyExists = await this.userClient.findByEmail(data);
    if (userAlreadyExists === null) {
      await this.userClient.create(data);
      return 'OK';
    }
    return 'User already exists!';
  }
}
