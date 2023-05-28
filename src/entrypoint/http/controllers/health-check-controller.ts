import {
  Controller,
  HttpCode, Get
} from "@nestjs/common";
import {
  ApiTags,
  ApiCreatedResponse, ApiOperation
} from "@nestjs/swagger";
import { HealthCheckService } from "@domain/service/health-check-service";

@ApiTags('health check')
@Controller('health')
export class HealthCheckController {
  constructor(private healthCheckService: HealthCheckService) {}
  @Get()
  @HttpCode(200)
  @ApiCreatedResponse({
    status: 200,
    description: 'API is healthy',
  })
  @ApiOperation({
    summary: 'Route to health Check',
    description: 'This route is to be used to health check.',
    servers: [{ url: 'http://23.23.100.245' }, { url: 'https://23.23.100.245' }],
  })
  async healthCheck() {
    return this.healthCheckService.healthCheck()
  }
}
