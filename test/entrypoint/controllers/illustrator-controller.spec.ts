import { IllustratorClient } from '../../../src/domain/client/illustrator-client';
import { Test, TestingModule } from '@nestjs/testing';
import { IllustratorController } from '../../../src/entrypoint/http/controllers/illustrator-controller';
import { IllustratorService } from '../../../src/domain/service/illustrator-service';
import { HttpStatus } from '@nestjs/common';
import MESSAGE from '../../../src/domain/utils/constants/messages';
import { Illustrator } from '../../../src/domain/entity/illustrator';
import { EmailService } from '../../../src/domain/service/email-service';
import { faker } from '@faker-js/faker';
import * as faker_br from 'faker-br';

const dataPerson: Illustrator = {
  id: faker.datatype.number(),
  name: faker.name.fullName(),
  email: faker.internet.email(),
  cpfCnpj: faker_br.br.cpf(),
  whatsapp: faker.phone.number(),
  portfolio: faker.internet.url(),
  createdAt: new Date(),
  updatedAt: new Date(),
};

const dataCompany: Illustrator = {
  id: faker.datatype.number(),
  name: faker.name.fullName(),
  email: faker.internet.email(),
  cpfCnpj: faker_br.br.cnpj(),
  whatsapp: faker.phone.number(),
  portfolio: faker.internet.url(),
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('IllustratorController', () => {
  let illustratorController: IllustratorController;
  let illustratorService: IllustratorService;
  let illustratorClient: IllustratorClient;
  let emailService: EmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IllustratorController],
      providers: [IllustratorService, EmailService],
    }).compile();

    illustratorController = module.get<IllustratorController>(
      IllustratorController,
    );
    illustratorService = module.get<IllustratorService>(IllustratorService);
    emailService = module.get<EmailService>(EmailService);
  });

  describe('createIllustratorPerson', () => {
    it('should return success statusCode when creating a person illustrator', async () => {
      const expectedResult = {
        statusCode: HttpStatus.OK,
      };
      const serviceReturn = {
        name: 'success',
        message: MESSAGE.SUCCESS.ILLUSTRATOR_CREATED,
      };
      jest
        .spyOn(illustratorService, 'createIllustrator')
        .mockResolvedValue(serviceReturn);

      const result = await illustratorController.createIllustrator(dataPerson);

      expect(result.statusCode).toBe(expectedResult);
      expect(illustratorService.createIllustrator).toHaveBeenCalled();
    });
  });
  it('should return bad request statusCode when creating a person illustrator fails', async () => {
    const expectedResult = {
      statusCode: HttpStatus.BAD_REQUEST,
    };
    const serviceReturn = {
      name: 'error',
      message: MESSAGE.ERROR.REGISTERED_ILLUSTRATOR,
    };
    jest
      .spyOn(illustratorService, 'createIllustrator')
      .mockResolvedValue(serviceReturn);

    const result = await illustratorController.createIllustrator(dataPerson);

    expect(result.statusCode).toBe(expectedResult);
    expect(illustratorService.createIllustrator).toHaveBeenCalled();
  });

  describe('createIllustratorCompany', () => {
    it('should return success statusCode when creating a company illustrator', async () => {
      const expectedResult = {
        statusCode: HttpStatus.OK,
      };
      const serviceReturn = {
        name: 'success',
        message: MESSAGE.SUCCESS.ILLUSTRATOR_CREATED,
      };
      jest
        .spyOn(illustratorService, 'createIllustrator')
        .mockResolvedValue(serviceReturn);

      const result = await illustratorController.createIllustrator(dataCompany);

      expect(result.statusCode).toBe(expectedResult);
      expect(illustratorService.createIllustrator).toHaveBeenCalled();
    });
  });
  it('should return bad request statusCode when creating a company illustrator fails', async () => {
    const expectedResult = {
      statusCode: HttpStatus.BAD_REQUEST,
    };
    const serviceReturn = {
      name: 'error',
      message: MESSAGE.ERROR.REGISTERED_ILLUSTRATOR,
    };
    jest
      .spyOn(illustratorService, 'createIllustrator')
      .mockResolvedValue(serviceReturn);

    const result = await illustratorController.createIllustrator(dataCompany);

    expect(result.statusCode).toBe(expectedResult);
    expect(illustratorService.createIllustrator).toHaveBeenCalled();
  });
  describe('deleteIllustrator', () => {
    it('should return the statusCode', async () => {
      const expectedResult = {
        statusCode: HttpStatus.OK,
      };
      const serviceReturn = {
        name: 'success',
        message: MESSAGE.SUCCESS.ILLUSTRATOR_DELETED,
      };
      jest
        .spyOn(illustratorService, 'deleteIllustrator')
        .mockResolvedValue(serviceReturn);

      const result = await illustratorController.remove(dataPerson.id);

      expect(result).toBe(expectedResult);
      expect(illustratorService.deleteIllustrator).toHaveBeenCalled();
    });
  });
  it('should return the statusCode', async () => {
    const expectedResult = {
      statusCode: HttpStatus.BAD_REQUEST,
    };
    const serviceReturn = {
      name: 'error',
      message: MESSAGE.ERROR.ILLUSTRATOR_INVALID,
    };
    jest
      .spyOn(illustratorService, 'deleteIllustrator')
      .mockResolvedValue(serviceReturn);

    const result = await illustratorController.remove(dataPerson.id);

    expect(result).toBe(expectedResult);
    expect(illustratorService.deleteIllustrator).toHaveBeenCalled();
  });
});
