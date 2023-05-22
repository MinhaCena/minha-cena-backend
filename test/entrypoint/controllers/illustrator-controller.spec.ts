import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../../../src/infrastructure/database/prisma-service';
import { PrismaIllustratorMapper } from '../../../src/infrastructure/database/mappers/prisma-illustrator-mapper';
import { IllustratorController } from '../../../src/entrypoint/http/controllers/illustrator-controller';
import { IllustratorService } from '../../../domain/service/illustrator-service';
import { HttpStatus } from '@nestjs/common';
import MESSAGE from '../../../src/domain/utils/constants/messages';
import { Illustrator } from '../../../src/domain/entity/illustrator';
// import { EmailService } from '../../../src/domain/service/email-service';
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
  let controller: IllustratorController;
  let prismaServiceMock: jest.Mocked<PrismaService>;

  beforeEach(() => {
    prismaServiceMock = {
      illustrator: {
        create: jest.fn(),
        findFirst: jest.fn(),
        delete: jest.fn(),
      },
    } as unknown as jest.Mocked<PrismaService>;
    controller = new IllustratorController(prismaServiceMock);

    describe('createIllustratorPerson', () => {
      it('should create an person illustrator', async () => {
        const raw = PrismaIllustratorMapper.toPrisma(dataPerson);
        // @ts-ignore
        prismaServiceMock.illustrator.createIllustrator(dataPerson);
        await controller.createIllustrator(dataPerson);
  
        expect(prismaServiceMock.illustrator.create).toHaveBeenCalledTimes(2);
        expect(prismaServiceMock.illustrator.create).toHaveBeenCalledWith({
          data: raw,
        });
      });
      it('should return null if there is an error', async () => {
        prismaServiceMock.illustrator.create(null);
        const result = await illustratorController.createIllustrator(dataPerson);
  
        expect(result).toBeUndefined();
      });
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
      expect(illustratorService.createIllustrator).toHaveBeenCalledWith(dataCompany);
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
    expect(illustratorService.createIllustrator).toHaveBeenCalledWith(dataCompany);
  });
  describe('remove', () => {
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

      expect(result).toEqual(expectedResult);
      expect(illustratorService.deleteIllustrator).toHaveBeenCalledWith(dataPerson.id);
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
    expect(illustratorService.deleteIllustrator).toHaveBeenCalledWith(dataPerson.id);
  });
});
