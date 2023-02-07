import { Injectable } from '@nestjs/common';
import { UserClient } from '@application/client/user-client';
import { User } from '@application/entities/user';
import { ReturnType } from '@application/types/ReturnType';
import { EmailValidator } from '@application/validations/email-validator';

@Injectable()
export class UserService {
  constructor(
    private userClient: UserClient,
    private userValidation: EmailValidator,
  ) {}
  async createUser(data: User): Promise<ReturnType> {
    await this.userValidation.emailValidate(data);
    const userAlreadyExists = await this.userClient.findByEmail(data);
    if (userAlreadyExists === null) {
      await this.userClient.create(data);
      return {
        error: false,
        message: 'OK',
      };
    }

    return {
      error: true,
      message: 'User already exists!',
    };
  }
}
