import { Module } from '@nestjs/common';
import { MockViewsController } from './mock.views.controller';

@Module({
  imports: [],
  controllers: [MockViewsController],
  providers: [],
  exports: [],
})
export class ViewsModule {}
