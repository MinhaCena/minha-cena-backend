import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { EventEmitter2 } from "@nestjs/event-emitter";

import { ConfigService } from "@nestjs/config";
import { EmailSentEvent } from "../event/email-sent-event";
import { EmailSendErrorEvent } from "../event/email-send-error-event";

@Injectable()
export class EmailService {

  constructor(private readonly eventEmitter: EventEmitter2, private configService: ConfigService) {}
  async sendEmail(to: string): Promise<void> {
    try {
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
        from: this.configService.get<string>('FROM_EMAIL'),
        to: to,
        subject: this.configService.get<string>('SUBJECT_EMAIL_REGISTER'),
        //TODO: configurar o template de email
        html: '<p>This is a test email</p>',
      };

      await transporter.sendMail(mailOptions);

      this.eventEmitter.emit('email.sent', new EmailSentEvent(to));
    } catch (error){
      this.eventEmitter.emit('email.sendError', new EmailSendErrorEvent(to, error));
      return error.message;
    }
  }
}
