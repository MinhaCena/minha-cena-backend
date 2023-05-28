import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Post,
  HttpCode,
} from '@nestjs/common';
import { User } from '../../../domain/entity/user';
import { UserService } from '../../../domain/service/user-service';
import {
  ApiTags,
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse, ApiOperation
} from "@nestjs/swagger";
import MESSAGE from '../../../domain/utils/constants/messages';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    status: 201,
    description: MESSAGE.SUCCESS.USER_CREATED,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: MESSAGE.ERROR.REGISTERED_USER,
  })
  @ApiBody({ type: User })
  @ApiOperation({
    summary: 'Route to create a user',
    description: 'This endpoint should be used to create user logins.',
    servers: [{ url: 'http://23.23.100.245' }, { url: 'https://23.23.100.245' }],
  })
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
