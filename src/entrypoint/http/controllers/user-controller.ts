import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '@application/entities/user';
import { UserServices } from '@application/services/user-services';

@Controller('user')
export class UserController {
  constructor(private userService: UserServices) {}
  @Post()
  async createUser(@Body() user: User) {
    return this.userService.createUser(user);
  }
}
