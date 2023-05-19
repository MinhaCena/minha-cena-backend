import { Institution } from '../entity/institution';

export abstract class InstitutionClient {
  abstract create(data: Institution): Promise<void>;
  abstract findByEmail(data: Institution): Promise<void>;
  abstract updatedStatusInstitution(data: Institution): Promise<void>;
}
