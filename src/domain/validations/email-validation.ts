import { User } from '../entity/user';
import { BadRequestException, HttpStatus } from '@nestjs/common';
import validator from 'validator';
export class EmailValidation {
  public async emailValidate(email: User): Promise<boolean> {
    if (!validator.isEmail(email.email)) {
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Email invalid',
      });
    }
    return true;
  }
}
