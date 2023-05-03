import { Illustrator } from '@domain/entity/illustrator';

export abstract class IllustratorClient {
  abstract create(data: Illustrator): Promise<void>;
  abstract findByEmail(data: Illustrator): Promise<void>;
  abstract delete(id: number): Promise<void>;
}
