import { Body, Controller, Get, Req } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { Request } from 'express';
import * as hash from 'object-hash';
import { RecoverService } from './service/recover.service';

@Controller('/mock')
export class MockController {
  constructor(private moduleRef: ModuleRef) {}

  private mapping = [
    { pathRegex: /\/mock\/store/, service: 'store.service' },
    { pathRegex: /\/mock\/catalog/, service: 'catalog.service' },
    { pathRegex: /\/mock\/catalog\/\d/, service: 'catalog.service' },
  ];

  private generateHash = (payload: any) => {
    return hash.sha1(payload);
  };

  private getServiceNameByCalledPath = (path: string): string =>
    this.mapping.find(({ pathRegex }) => pathRegex.test(path))?.service;

  private getServiceInstanceByName = (serviceName: string): RecoverService =>
    this.moduleRef.get<RecoverService>(serviceName);

  @Get('*')
  getMock(@Req() request: Request, @Body() body: any) {
    const serviceName = this.getServiceNameByCalledPath(request.path);

    if (!serviceName) {
      throw new Error('no service have been linked to this path');
    }

    const hash = this.generateHash({ path: request.path, body });
    const tasksService = this.getServiceInstanceByName(serviceName);
    return tasksService.getData(hash);
  }
}
