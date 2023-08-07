
import MESSAGE from "../utils/constants/messages";
import { InstitutionClient } from "../client/institution-client";
import { Injectable } from "@nestjs/common";
import { EmailService } from '../../domain/service/email-service';
import { Institution } from "../entity/institution";
import { returnType } from "../types/return-type";

@Injectable()
export class InstitutionService {
  constructor(
    private institutionClient: InstitutionClient,
    private emailService: EmailService
  ) {}

  async createInstitution(data: Institution): Promise<returnType> {
    const institutionAlreadyExists = await this.institutionClient.findByEmail(data);
    await this.emailService.sendEmail(data.registrantEmail);
    if (institutionAlreadyExists === null) {
      await this.institutionClient.create(data);
      return {
        name: 'success',
        message: MESSAGE.SUCCESS.INSTITUTION_CREATED,
      };
    }
    return {
      name: 'error',
      message: MESSAGE.ERROR.REGISTERED_INSTITUTION,
    };
  }
  async updatedStatusInstitution(data: Institution): Promise<returnType>{
    const updateInstitution = await this.institutionClient.updatedStatusInstitution(data);
    if(updateInstitution === undefined) {
      return {
        name: 'error',
        message: MESSAGE.ERROR.NOT_UPDATE_STATUS_INSTITUTION
      }
    }
    return {
      name: 'success',

      message: MESSAGE.SUCCESS.UPDATE_STATUS_INSTITUTION
    }
  }
}
