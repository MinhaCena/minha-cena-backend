
import { Injectable } from '@nestjs/common';
import { UserClient } from '../client/user-client';
import { User } from '../entity/user';
import { ReturnType } from '../types/ReturnType';
import { EmailValidation } from '../validations/email-validation';
import { LoginValidation } from '../validations/login-validation';
import MESSAGE from '../utils/constants/messages';

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
    // data.password = await bcrypt.hash(data.password, 10);
    const userAlreadyExists = await this.userClient.findByEmail(data);
    if (userAlreadyExists === null) {
      await this.userClient.create(data);
      return {
        name: 'success',
        message: MESSAGE.SUCCESS.USER_CREATED,
      };
    }

    return {
      name: 'error',
      message: MESSAGE.ERROR.REGISTERED_USER,
    };
  }
}
