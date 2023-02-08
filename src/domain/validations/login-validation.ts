import { User } from '../entity/user';
import { HttpStatus, UnauthorizedException } from '@nestjs/common';
import PasswordValidator from 'password-validator';
export class LoginValidation {
  public async passwordValidate(user: User): Promise<boolean> {
    const schema = new PasswordValidator();
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
        message: 'Password Invalid',
      });
    }
    return true;
  }
}
