
import { Injectable } from '@nestjs/common';
import { EmailService } from "../service/email-service";
import { IllustratorClient } from "../client/illustrator-client";
import { Illustrator } from "../entity/illustrator";
import { returnType } from "../types/return-type";
import MESSAGE from "../utils/constants/messages";

@Injectable()
export class IllustratorService {
  constructor(
    private illustratorClient: IllustratorClient,
    private emailService: EmailService,
  ) {}
  async createIllustrator(data: Illustrator): Promise<returnType> {
    const illustratorAlreadyExists = await this.illustratorClient.findByEmail(
      data,
    );
    if (illustratorAlreadyExists === null) {
      await this.illustratorClient.create(data);
      await this.emailService.sendEmail(data.email);
      return {
        name: 'success',
        message: MESSAGE.SUCCESS.ILLUSTRATOR_CREATED,
      };
    }
    return {
      name: 'error',
      message: MESSAGE.ERROR.REGISTERED_ILLUSTRATOR,
    };
  }
  async deleteIllustrator(id: number): Promise<returnType> {
    const deleteIllustrator = await this.illustratorClient.delete(id);
    if (deleteIllustrator === null) {
      return {
        name: 'error',
        message: MESSAGE.ERROR.ILLUSTRATOR_INVALID,
      };
    }
    return {
      name: 'success',
      message: MESSAGE.SUCCESS.ILLUSTRATOR_DELETED,
    };
  }
}
