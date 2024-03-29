import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Post,
  HttpCode,
} from '@nestjs/common';
import { InstitutionService } from '../../../domain/service/institution-service';
import { Institution } from '../../../domain/entity/institution';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse, ApiOperation,
  ApiTags
} from "@nestjs/swagger";
import MESSAGE from '../../../domain/utils/constants/messages';

@ApiTags('institutions')
@Controller('institution')
export class InstitutionController {
  constructor(private institutionService: InstitutionService) {}
  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    status: 201,
    description: MESSAGE.SUCCESS.INSTITUTION_CREATED,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: MESSAGE.ERROR.REGISTERED_INSTITUTION,
  })
  @ApiBody({ type: Institution })
  @ApiOperation({
    summary: 'Route for registering institutions',
    description: 'Route to be used for registration of schools and NGOs.',
    servers: [{ url: 'http://23.23.100.245' }, { url: 'https://23.23.100.245' }],
  })
  async createInstitution(@Body() institution: Institution) {
    const data = await this.institutionService.createInstitution(institution);
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

  @Post('update-status/:id')
  @HttpCode(200)
  @ApiCreatedResponse({
    status: 200,
    description: MESSAGE.SUCCESS.UPDATE_STATUS_INSTITUTION,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: MESSAGE.ERROR.NOT_UPDATE_STATUS_INSTITUTION,
  })
  @ApiOperation({
    summary: 'Route to update status of an institution registration',
    description: 'This route must be used when the registration is approved or rejected.',
    servers: [{ url: 'http://23.23.100.245' }, { url: 'https://23.23.100.245' }],
  })
  @ApiBody({ type: Institution })
  async updateStatusInstitution(@Body() institution: Institution) {
    const data = await this.institutionService.updatedStatusInstitution(
      institution,
    );
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
