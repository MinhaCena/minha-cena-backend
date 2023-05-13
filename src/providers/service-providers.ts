import { Provider } from '@nestjs/common';
import { PrismaService } from "@infrastructure/database/prisma-service";
import { Logger } from "@domain/utils/logger";
import { EmailValidation } from '@domain/validations/email-validation';
import { UserService } from '@domain/service/user-service';
import { LoginValidation } from '@domain/validations/login-validation';
import { InstitutionService } from "@domain/service/institution-service";
import { IllustratorService } from '@domain/service/illustrator-service';

export const serviceProviders: Provider[] = [
  UserService,
  InstitutionService,
  IllustratorService,
  PrismaService,
  Logger,
  EmailValidation,
  LoginValidation,
];
