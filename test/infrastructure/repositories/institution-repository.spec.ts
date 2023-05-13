import { InstitutionRepository } from '../../../src/infrastructure/database/repositories/institution-repository';
import { PrismaService } from '../../../src/infrastructure/database/prisma-service';
import { Institution } from '@domain/entity/institution';
import { PrismaInstitutionMapper } from "../../../src/infrastructure/database/mappers/prisma-institution-mapper";


const institution: Institution = {
  id: 1,
  institutionType: 1,
  institutionName: 'Escola Estadual Cora Coralina',
  cnpjInep: '123.456.789/0001-90',
  city: 'Watsicastead',
  state: 'Indiana',
  schoolType: 1,
  institutionEmail: 'test@test.com',
  institutionPhone: "284.345.7283",
  registrantName: "Euna",
  registrantEmail: "Euna34@gmail.com",
  registrantOccupation: 'secretaria',
  registrantWhatsapp: "284.345.7283",
  registrantStatus: 0,
  createAt: new Date(),
  updatedAt: new Date()
};
describe('InstitutionRepository', () => {
  let repository: InstitutionRepository;
  let prismaServiceMock: jest.Mocked<PrismaService>;

  beforeEach(() => {
    prismaServiceMock = {
      institution: {
        create: jest.fn(),
        findFirst: jest.fn(),
        update: jest.fn()
      }
    } as unknown as jest.Mocked<PrismaService>;
    repository = new InstitutionRepository(prismaServiceMock);
  });

  describe('create', () => {
    it('should create an institution', async () => {
      const raw = PrismaInstitutionMapper.toPrisma(institution);
      // @ts-ignore
      prismaServiceMock.institution.create(institution)
      await repository.create(institution);

      expect(prismaServiceMock.institution.create).toHaveBeenCalledTimes(2);
      expect(prismaServiceMock.institution.create).toHaveBeenCalledWith({
        data: raw,
      });
    });

    it('should return null if there is an error', async () => {
      prismaServiceMock.institution.create(null)
      const result = await repository.create(institution);

      expect(result).toBeUndefined();
    });
  });
});
