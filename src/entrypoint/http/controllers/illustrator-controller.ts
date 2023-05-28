import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  HttpStatus,
  Post,
  Param,
} from '@nestjs/common';
import { IllustratorService } from '../../../domain/service/illustrator-service';
import { Illustrator } from '../../../domain/entity/illustrator';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiTags } from "@nestjs/swagger";


@ApiTags('illustrators')
@Controller('illustrator')
export class IllustratorController {
  constructor(private illustratorService: IllustratorService) {}
  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    status: 201,
    description: 'Illustrator created sucessfully!',
  })
  @ApiBadRequestResponse({ status: 400, description: 'Illustrator already exists!' })
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
