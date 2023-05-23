import { Institution } from "@domain/entity/institution";
import { InstitutionClient } from "../../../src/domain/client/institution-client";
import { InstitutionService} from "../../../src/domain/service/institution-service";
import { faker } from '@faker-js/faker';
import { Test, TestingModule } from "@nestjs/testing";

const data: Institution = {
  id: 1,
  institutionType: 1,
  institutionName: 'Escola Estadual Cora Coralina',
  cnpjInep: '123.456.789/0001-90',
  city: faker.address.city(),
  state: faker.address.state(),
  schoolType: 1,
  institutionEmail: faker.internet.email(),
  institutionPhone: faker.phone.number(),
  registrantName: faker.name.firstName(),
  registrantEmail: faker.internet.email(),
  registrantOccupation: 'secretaria',
  registrantWhatsapp: faker.phone.number(),
  institutionStatus: 0,
  createAt: new Date(),
  updatedAt: new Date(),
};

interface InstitutionClientMock {
  findByEmail: jest.Mock;
  create: jest.Mock;
  updatedStatusInstitution: jest.Mock;
}

const institutionClientMock: InstitutionClientMock = {
  findByEmail: jest.fn(),
  create: jest.fn(),
  updatedStatusInstitution: jest.fn(),
};
describe("InstitutionService", () => {
  let institutionService: InstitutionService;
  let institutionClient: InstitutionClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InstitutionService,
        {
          provide: InstitutionClient,
          useValue: institutionClientMock,
        },
      ],
    }).compile();

    institutionService = module.get<InstitutionService>(InstitutionService);
    institutionClient = module.get<InstitutionClient>(InstitutionClient);
  });

  describe("createInstitution", () => {
    it("should return success message when institution does not exist", async () => {
      institutionClientMock.findByEmail.mockResolvedValue(null);
      institutionClientMock.create.mockResolvedValue(data);

      const result = await institutionService.createInstitution(data);

      expect(result.name).toBe("success");
      expect(result.message).toBe("Institution created successfully!");
      expect(institutionClient.create).toHaveBeenCalledWith(data);
    });

    it("should return error message when institution already exists", async () => {
      institutionClientMock.findByEmail.mockResolvedValue('thais');
      institutionClientMock.create.mockResolvedValue(data);

      const result = await institutionService.createInstitution(data);

      expect(result.name).toEqual("error");
      expect(result.message).toEqual("Institution already exists!");
    });
  });

  describe("updatedStatusInstitution", () => {
    it("should return success message when institution status is updated", async () => {
      institutionClientMock.updatedStatusInstitution.mockResolvedValue(data);

      const result = await institutionService.updatedStatusInstitution(data);

      expect(result.name).toBe("success");
      expect(result.message).toBe("Status update successful");
    });

    it("should return error message when institution status is not updated", async () => {
      institutionClientMock.updatedStatusInstitution.mockResolvedValue(undefined);
      const result = await institutionService.updatedStatusInstitution(data);

      expect(result.name).toEqual("error");
      expect(result.message).toEqual("Unable to update institution status!");
    });
  });
});
