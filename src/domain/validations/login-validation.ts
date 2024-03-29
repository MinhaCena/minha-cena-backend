import { User } from '../entity/user';
import { HttpStatus, UnauthorizedException } from '@nestjs/common';
import * as passwordValidator from 'password-validator';
import MESSAGE from '../utils/constants/messages';


export class LoginValidation {
  public async passwordValidate(user: User): Promise<boolean> {
    const schema = new passwordValidator();
    schema
      .is()
      .min(8)
      .has()
      .uppercase()
      .has()
      .lowercase()
      .has()
      .digits(2)
      .has()
      .not()
      .spaces()
      .is()
      .not()
      .oneOf(['Passw0rd', 'Password123']);

    if (!schema.validate(user.password)) {
      throw new UnauthorizedException({
        statusCode: HttpStatus.UNAUTHORIZED,
        message: MESSAGE.ERROR.PASSWORD_INVALID,
      });
    }
    return true;
  }
}
