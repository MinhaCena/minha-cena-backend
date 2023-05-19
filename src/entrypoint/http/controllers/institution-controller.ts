import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Post
} from "@nestjs/common";
import { InstitutionService } from "@domain/service/institution-service";
import { Institution } from "@domain/entity/institution";
import { EmailService } from "@domain/service/email-service";


@Controller('institution')
export class InstitutionController {
  constructor(private institutionService: InstitutionService) {}
  @Post()
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
  async updateStatusInstitution(@Body() institution: Institution) {
    const data = await this.institutionService.updatedStatusInstitution(institution)
    if(data.name === 'error') {
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
