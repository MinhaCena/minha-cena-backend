
import { ReturnType } from "@domain/types/ReturnType";
import MESSAGE from "@domain/utils/constants/messages";
import { Institution } from "@domain/entity/institution";
import { InstitutionClient } from "@domain/client/institution-client";
import { Injectable } from "@nestjs/common";

@Injectable()
export class InstitutionService {
  constructor(
    private institutionClient: InstitutionClient,
  ) {}

  async createInstitution(data: Institution): Promise<ReturnType> {
    const institutionAlreadyExists = await this.institutionClient.findByEmail(data);
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
}
