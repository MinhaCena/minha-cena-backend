
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { healthCheckType } from "@domain/types/health-check-type";

@Injectable()
export class HealthCheckService {
  public async healthCheck(): Promise<healthCheckType>{
    const filePath = 'package.json';
    const file = path.resolve(filePath);
    const jsonData = await this.readJsonFile(file);
    return {
      name: jsonData.name,
      version: jsonData.version,
      status: 'OK'
    }
  }
  private async readFileAsync(filename: string): Promise<string>{
    return new Promise<string>((resolve, reject) => {
      fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  private async readJsonFile(filename: string): Promise<any> {
    try {
      const data = await this.readFileAsync(filename);
      return JSON.parse(data);
    } catch (err) {
      throw err;
    }
  }
}
