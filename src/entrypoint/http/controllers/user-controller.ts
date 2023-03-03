import MESSAGE  from '@domain/utils/constants/messages';
import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { User } from "@domain/entity/user";
import { UserService } from "@domain/service/user-service";


@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  async createUser(@Body() user: User) {
    const data = await this.userService.createUser(user);
    if (data.name === 'error') {
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: data.message,
      });
    }

    return {
      statusCode: HttpStatus.OK,
      message: MESSAGE.SUCCESS.USER_CREATED,
    };
  }
}
