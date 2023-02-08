import { Injectable } from '@nestjs/common';
import { UserClient } from '../client/user-client';
import { User } from '../entity/user';
import { ReturnType } from '../types/ReturnType';
import { EmailValidation } from '../validations/email-validation';
import { LoginValidation } from "@domain/validations/login-validation";

@Injectable()
export class UserService {
  constructor(
    private userClient: UserClient,
    private userValidation: EmailValidation,
    private passwordValidation: LoginValidation,
  ) {}
  async createUser(data: User): Promise<ReturnType> {
    await this.userValidation.emailValidate(data);
    await this.passwordValidation.passwordValidate(data);
    const userAlreadyExists = await this.userClient.findByEmail(data);
    if (userAlreadyExists === null) {
      await this.userClient.create(data);
      return {
        name: 'success',
        message: 'OK',
      };
    }

    return {
      name: 'error',
      message: 'User already exists!',
    };
  }
}
