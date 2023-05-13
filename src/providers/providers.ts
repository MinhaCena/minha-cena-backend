import { UserRepository } from '../infrastructure/database/repositories/user-repository';
import { UserService } from '@domain/service/user-service';
import { UserClient } from '@domain/client/user-client';
import { InstitutionRepository } from '@infrastructure/database/repositories/institution-repository';
import { InstitutionClient } from '@domain/client/institution-client';
import { InstitutionService } from '@domain/service/institution-service';
import { IllustratorClient } from '@domain/client/Illustrator-client';
import { IllustratorRepository } from '@infrastructure/database/repositories/illustrator-repository';
import { IllustratorService } from '@domain/service/illustrator-service';

export const providers = [
  {
    provide: UserService,
    useValue: UserRepository,
  },
  {
    provide: UserClient,
    useClass: UserRepository,
  },
  {
    provide: InstitutionClient,
    useClass: InstitutionRepository,
  },
  {
    provide: InstitutionService,
    useClass: InstitutionRepository,
  },
  {
    provide: IllustratorService,
    useClass: IllustratorRepository,
  },
  {
    provide: IllustratorClient,
    useClass: IllustratorRepository,
  },
];
