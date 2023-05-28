import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  HttpStatus,
  Post,
  Param,
  HttpCode,
} from '@nestjs/common';
import { IllustratorService } from '../../../domain/service/illustrator-service';
import { Illustrator } from '../../../domain/entity/illustrator';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiTags,
  ApiOkResponse, ApiOperation
} from "@nestjs/swagger";
import MESSAGE from '../../../domain/utils/constants/messages';

@ApiTags('illustrators')
@Controller('illustrator')
export class IllustratorController {
  constructor(private illustratorService: IllustratorService) {}
  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    status: 201,
    description: MESSAGE.SUCCESS.ILLUSTRATOR_CREATED,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: MESSAGE.ERROR.REGISTERED_ILLUSTRATOR,
  })
  @ApiOperation({
    summary: 'Route for registering illustrators',
    description: 'This route should be used to register illustrators.',
    servers: [{ url: 'http://23.23.100.245' }, { url: 'https://23.23.100.245' }],
  })
  @ApiBody({ type: Illustrator })
  async createIllustrator(@Body() illustrator: Illustrator) {
    const data = await this.illustratorService.createIllustrator(illustrator);
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
  @Delete(':id')
  @HttpCode(200)
  @ApiOkResponse({
    status: 200,
    description: MESSAGE.SUCCESS.ILLUSTRATOR_DELETED,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: MESSAGE.ERROR.ILLUSTRATOR_INVALID,
  })
  @ApiOperation({
    summary: 'Route to remove registration of illustrators',
    description: 'This route must be used to remove an illustrator registration.',
    servers: [{ url: 'http://23.23.100.245' }, { url: 'https://23.23.100.245' }],
  })
  async remove(@Param('id') id: number) {
    const data = await this.illustratorService.deleteIllustrator(id);
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
