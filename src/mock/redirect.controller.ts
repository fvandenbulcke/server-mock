import { Controller, Get } from '@nestjs/common';

@Controller()
export class RedirectController {
  @Get('/redirect')
  getMock() {
    return { content: 'redirect ' };
  }
}
