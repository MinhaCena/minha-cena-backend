import { BadRequestException, Body, Controller, Get, HttpStatus, Post } from "@nestjs/common";
import { User } from '@application/entities/user';
import { UserServices } from '@application/services/user-services';

@Controller('user')
export class UserController {
  constructor(private userService: UserServices) {}
  @Post()
  async createUser(@Body() user: User) {
    const data = await this.userService.createUser(user);
    if (data === 'Email invalid') {
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Email invalid',
      });
    }

    if (data === 'User already exists!') {
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'User already exists!',
      });
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'user created successfully',
    };
  }
}
