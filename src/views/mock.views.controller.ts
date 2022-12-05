import { Controller, Res, Get, Post, Body } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class MockViewsController {
  private paths = [
    '--Please choose a path--',
    '/catalog',
    '/catalog/:id',
    '/store',
  ];

  @Get('/mock-server')
  getView(@Res() res: Response) {
    const paths = this.paths.map((path) => ({
      value: path,
      isSelected: path === '--Please choose a path--',
    }));
    return res.render('index', {
      paths,
    });
  }

  @Post('/create')
  create(@Body() body: any, @Res() res: Response) {
    const { apiPath, mock } = body;

    const paths = this.paths.map((path) => ({
      value: path,
      isSelected: path === apiPath,
    }));

    return res.render('index', {
      paths,
      mock,
      response: 'Mock has been created',
    });
  }
}
