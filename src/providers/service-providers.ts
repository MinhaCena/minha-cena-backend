import { UserService } from '@application/services/user-service';
import { Provider } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma-service';
import { Logger } from '../utils/logger';
import { EmailValidator } from '@application/validations/email-validator';

export const serviceProviders: Provider[] = [
  UserService,
  PrismaService,
  Logger,
  EmailValidator,
];
