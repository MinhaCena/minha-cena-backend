import { ReturnType } from '@domain/types/ReturnType';
import MESSAGE from '@domain/utils/constants/messages';
import { Illustrator } from '@domain/entity/illustrator';
import { IllustratorClient } from '@domain/client/Illustrator-client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IllustratorService {
  constructor(private illustratorClient: IllustratorClient) {}

  async createIllustrator(data: Illustrator): Promise<ReturnType> {
    const illustratorAlreadyExists = await this.illustratorClient.findByEmail(
      data,
    );
    console.log(illustratorAlreadyExists);
    if (illustratorAlreadyExists === null) {
      await this.illustratorClient.create(data);
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

  // async getAllIllustrator(data: Illustrator): Promise<ReturnType> {
  //   const getAllIllustrator = await this.illustratorClient.getAll(data);
  //   if (getAllIllustrator === null)
  //     return {
  //       name: 'success',
  //       message: MESSAGE.SUCCESS.ILLUSTRATOR_GETALL,
  //     };
  //   return {
  //     name: 'error',
  //     message: MESSAGE.ERROR.ILLUSTRATOR_INVALID,
  //   };
  // }
}
