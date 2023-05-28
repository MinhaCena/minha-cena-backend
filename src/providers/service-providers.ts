import { Provider } from '@nestjs/common';
import { UserService } from "../domain/service/user-service";
import { InstitutionService } from "../domain/service/institution-service";
import { IllustratorService } from "../domain/service/illustrator-service";
import { PrismaService } from "../infrastructure/database/prisma-service";
import { Logger } from "../domain/utils/logger";
import { EmailValidation } from "../domain/validations/email-validation";
import { LoginValidation } from "../domain/validations/login-validation";
import { EmailService } from "../domain/service/email-service";
import { EmailNotificationService } from "../domain/service/email-notification-service";
import { EmailSentEvent } from "../domain/event/email-sent-event";
import { EmailSendErrorEvent } from "../domain/event/email-send-error-event";


export const serviceProviders: Provider[] = [
  UserService,
  InstitutionService,
  IllustratorService,
  PrismaService,
  Logger,
  EmailValidation,
  LoginValidation,
  EmailService,
  EmailNotificationService,
  EmailSentEvent,
  EmailSendErrorEvent
];
