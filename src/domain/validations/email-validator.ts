import { User } from '@application/entities/user';
import { BadRequestException, HttpStatus } from '@nestjs/common';
import validator from 'validator';
export class EmailValidator {
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
