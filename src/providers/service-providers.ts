import { UserServices } from '@application/services/user-services';
import { Provider } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma-service';
import { Logger } from '../utils/logger';
import { ValidationService } from "@application/services/validation-service";

export const serviceProviders: Provider[] = [
  UserServices,
  PrismaService,
  Logger,
  ValidationService,
];
