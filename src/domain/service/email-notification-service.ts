import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EmailSentEvent } from '../event/email-sent-event';
import { EmailSendErrorEvent } from "@domain/event/email-send-error-event";
import * as nodemailer from 'nodemailer';
import { ConfigService } from "@nestjs/config";

@Injectable()
export class EmailNotificationService {

  constructor(private configService: ConfigService){
  }
  @OnEvent('email.sent')
  handleEmailSent(event: EmailSentEvent, ) {
    console.log(`Email enviado para ${event.to}`);
  }

  @OnEvent('email.sendError')
  async handleEmailSendError(event: EmailSendErrorEvent) {
    const transporter = nodemailer.createTransport({
      host: this.configService.get<string>('HOST_EMAIL'),
      port: 465,
      secure: true,
      auth: {
        user: this.configService.get<string>('USER_EMAIL'),
        pass: this.configService.get<string>('PASS_EMAIL')
      },
    });

    const mailOptions = {
      from: this.configService.get<string>('USER_EMAIL'),
      to: this.configService.get<string>('USER_EMAIL'),
      subject: `Erro ao enviar email para ${event.to}`,
      text: `O seguinte erro ocorreu ao enviar um email para ${event.to}: ${event.error.message}`,
    };

    await transporter.sendMail(mailOptions);
  }
}
