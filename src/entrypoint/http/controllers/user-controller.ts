import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserService } from "../../../domain/service/user-service";
import { User } from "../../../domain/entity/user";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('users')
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
      message: data.message,
    };
  }
}
