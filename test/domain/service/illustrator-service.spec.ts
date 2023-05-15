import { Test, TestingModule } from '@nestjs/testing';
import { IllustratorService } from '@domain/service/illustrator-service';
import { IllustratorClient } from '@domain/client/Illustrator-client';
import { Illustrator } from "@domain/entity/illustrator";
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
    updatedAt: new Date()
}

const dataCompany: Illustrator = {
    id: faker.datatype.number(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    cpfCnpj: faker_br.br.cnpj(),
    whatsapp: faker.phone.number(),
    portfolio: faker.internet.url(),
    createdAt: new Date(),
    updatedAt: new Date()
}

interface IllustartorClientMock {
    findByEmail: jest.Mock;
    create: jest.Mock;
    findById: jest.Mock;
    delete: jest.Mock;
}


const illustratorClientMock: IllustartorClientMock = {
    findByEmail: jest.fn(),
    create: jest.fn(),
    findById: jest.fn(),
    delete: jest.fn(),
};

describe("IllustratorService", () => {
    let illustratorService: IllustratorService;
    let illustratorClient: IllustratorClient;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IllustratorService,
                {
                    provide: IllustratorClient,
                    useValue: illustratorClientMock,
                },
            ],
        }).compile();

        illustratorService = module.get<IllustratorService>(IllustratorService);
        illustratorClient = module.get<IllustratorClient>(IllustratorClient);
    });

    describe("createIllustratorPerson", () => {
        it("should return success message when illustrator does not exist", async () => {
            illustratorClientMock.findByEmail.mockResolvedValue(null);
            illustratorClientMock.create.mockResolvedValue(dataPerson);

            const result = await illustratorService.createIllustrator(dataPerson);

            expect(result.name).toBe("success");
            expect(result.message).toBe("Illustrator created successfully!");
            expect(illustratorClient.create).toHaveBeenCalledWith(dataPerson);
        });

        it("should return error message when illustrator already exist", async () => {
            illustratorClientMock.findByEmail.mockResolvedValue(dataPerson);
            illustratorClientMock.create.mockResolvedValue(dataPerson);

            const result = await illustratorService.createIllustrator(dataPerson);

            expect(result.name).toBe("error");
            expect(result.message).toBe("Illustrator already exists!");
        });
    });

    describe("createIllustratorCompany", () => {
        it("should return success message when illustrator does not exist", async () => {
            illustratorClientMock.findByEmail.mockResolvedValue(null);
            illustratorClientMock.create.mockResolvedValue(dataCompany);

            const result = await illustratorService.createIllustrator(dataCompany);

            expect(result.name).toBe("success");
            expect(result.message).toBe("Illustrator created successfully!");
            expect(illustratorClient.create).toHaveBeenCalledWith(dataCompany);
        });

        it("should return error message when illustrator already exist", async () => {
            illustratorClientMock.findByEmail.mockResolvedValue(dataCompany);
            illustratorClientMock.create.mockResolvedValue(dataCompany);

            const result = await illustratorService.createIllustrator(dataCompany);

            expect(result.name).toBe("error");
            expect(result.message).toBe("Illustrator already exists!");
        });
    });

    describe("deleteIllustrator", () => {
        it("should return success message when illustratorstatus is deleted", async () => {
            illustratorClientMock.delete.mockResolvedValue(dataPerson);

            const result = await illustratorService.deleteIllustrator(dataPerson.id);

            expect(result.name).toBe("success");
            expect(result.message).toBe("Illustrator deleted successfully!");
        });
        it("should return error message when illustrator is not deleted", async () => {
            illustratorClientMock.delete.mockResolvedValue(null);
            const result = await illustratorService.deleteIllustrator(dataPerson.id);

            expect(result.name).toEqual("error");
            expect(result.message).toEqual("Unable to delete illustrator!");
        });
    });
});