import { IllustratorRepository } from '../../../src/infrastructure/database/repositories/illustrator-repository';
import { PrismaService } from '../../../src/infrastructure/database/prisma-service';
import { Illustrator } from '../../../src/domain/entity/illustrator';
import { PrismaIllustratorMapper } from '../../../src/infrastructure/database/mappers/prisma-illustrator-mapper';
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

describe('IllustratorRepository', () => {
  let repository: IllustratorRepository;
  let prismaServiceMock: jest.Mocked<PrismaService>;

  beforeEach(() => {
    prismaServiceMock = {
      illustrator: {
        findFirst: jest.fn(),
        create: jest.fn(),
        delete: jest.fn(),
      },
    } as unknown as jest.Mocked<PrismaService>;
    repository = new IllustratorRepository(prismaServiceMock);
  });

  describe('create', () => {
    it('should create an person illustrator', async () => {
      const raw = PrismaIllustratorMapper.toPrisma(dataPerson);
      // @ts-ignore
      prismaServiceMock.illustrator.create(dataPerson);
      await repository.create(dataPerson);

      expect(prismaServiceMock.illustrator.create).toHaveBeenCalledTimes(2);
      expect(prismaServiceMock.illustrator.create).toHaveBeenCalledWith({
        data: raw,
      });
    });
    it('should return null if there is an error', async () => {
      prismaServiceMock.illustrator.create(null);
      const result = await repository.create(dataPerson);

      expect(result).toBeUndefined();
    });
  });

  describe('create', () => {
    it('should create an company illustrator', async () => {
      const raw = PrismaIllustratorMapper.toPrisma(dataCompany);
      // @ts-ignore
      prismaServiceMock.illustrator.create(dataCompany);
      await repository.create(dataCompany);

      expect(prismaServiceMock.illustrator.create).toHaveBeenCalledTimes(2);
      expect(prismaServiceMock.illustrator.create).toHaveBeenCalledWith({
        data: raw,
      });
    });
    it('should return null if there is an error', async () => {
      prismaServiceMock.illustrator.create(null);
      const result = await repository.create(dataCompany);

      expect(result).toBeUndefined();
    });
  });
  describe('delete', () => {
    it('should exclude a person illustrator', async () => {
      const raw = PrismaIllustratorMapper.toPrisma(dataPerson);
      // @ts-ignore
      prismaServiceMock.illustrator.delete(dataPerson);
      await repository.delete(dataPerson.id);

      expect(prismaServiceMock.illustrator.delete).toHaveBeenCalledTimes(2);
      expect(prismaServiceMock.illustrator.delete).toHaveBeenCalledWith({
        data: raw,
        where: {
            id: dataPerson.id,
          },
      });
    });
    it('should return null if there is an error', async () => {
      prismaServiceMock.illustrator.delete(null);
      const result = await repository.delete(dataPerson.id);

      expect(result).toBeUndefined();
    });
  });

  describe('delete', () => {
    it('should exclude a company illustrator', async () => {
      const raw = PrismaIllustratorMapper.toPrisma(dataCompany);
      // @ts-ignore
      prismaServiceMock.illustrator.delete(dataCompany);
      await repository.delete(dataCompany.id);

      expect(prismaServiceMock.illustrator.delete).toHaveBeenCalledTimes(2);
      expect(prismaServiceMock.illustrator.delete).toHaveBeenCalledWith({
        data: raw,
        where: {
          id: dataCompany.id,
        },
      });
    });
    it('should return null if there is an error', async () => {
      prismaServiceMock.illustrator.delete(null);
      const result = await repository.delete(dataCompany.id);

      expect(result).toBeUndefined();
    });
  });
});
