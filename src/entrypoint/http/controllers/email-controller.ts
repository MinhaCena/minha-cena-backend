import { Body, Controller, Get, Post, HttpCode } from '@nestjs/common';
import { EmailService } from '../../../domain/service/email-service';
import MESSAGE from '../../../domain/utils/constants/messages';
import { ApiTags, ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('email')
@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}
  @Post()
  @HttpCode(201)
  @ApiOkResponse({
    status: 201,
    description: MESSAGE.SUCCESS.EMAIL_SENT,
  })
  @ApiBadRequestResponse({
    status: 404,
    description: MESSAGE.ERROR.CANNOT_GET_EMAIL,
  })
  async sendEmailTwo() {
    const to = 'jubileucamundongo@minhacena.org';
    await this.emailService.sendEmail(to);
    return { message: MESSAGE.SUCCESS.EMAIL_SENT };
  }
}
