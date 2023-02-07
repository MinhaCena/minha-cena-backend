import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { User } from '@application/entities/user';
import { UserService } from '@application/services/user-service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  async createUser(@Body() user: User) {
    const data = await this.userService.createUser(user);
    if (data.error === true) {
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: data.message,
      });
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'user created successfully',
    };
  }
}
