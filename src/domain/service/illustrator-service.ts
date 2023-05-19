import { ReturnType } from '@domain/types/ReturnType';
import MESSAGE from '@domain/utils/constants/messages';
import { Illustrator } from '@domain/entity/illustrator';
import { IllustratorClient } from '@domain/client/Illustrator-client';
import { Injectable } from '@nestjs/common';
import { EmailService } from "@domain/service/email-service";

@Injectable()
export class IllustratorService {
  constructor(private illustratorClient: IllustratorClient, private emailService: EmailService) {}

  async createIllustrator(data: Illustrator): Promise<ReturnType> {
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

  async deleteIllustrator(id: number): Promise<ReturnType> {
    const deleteIllustrator = await this.illustratorClient.delete(id);
    if (deleteIllustrator === null) {
      return {
        name: 'error',
        message: MESSAGE.ERROR.ILLUSTRATOR_INVALID,
      };
    }
    return {
      name: 'sucess',
      message: MESSAGE.SUCCESS.ILLUSTRATOR_DELETED,
    };
  }
}
