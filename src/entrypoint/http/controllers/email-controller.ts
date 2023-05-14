import { Body, Controller, Get, Post} from "@nestjs/common";
import { EmailService } from "@domain/service/email-service";

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post()
  async sendEmailTwo() {
    const to = 'jubileucamundongo@minhacena.org';
    await this.emailService.sendEmail(to);
    return { message: 'E-mail enviado com sucesso!' };
  }
}
