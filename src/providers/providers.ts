
import { UserService } from "../domain/service/user-service";
import { UserRepository } from "../infrastructure/database/repositories/user-repository";
import { UserClient } from "../domain/client/user-client";
import { InstitutionClient } from "../domain/client/institution-client";
import { InstitutionRepository } from "../infrastructure/database/repositories/institution-repository";
import { InstitutionService } from "../domain/service/institution-service";
import { IllustratorService } from "../domain/service/illustrator-service";
import { IllustratorRepository } from "../infrastructure/database/repositories/illustrator-repository";
import { IllustratorClient } from "../domain/client/illustrator-client";


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
