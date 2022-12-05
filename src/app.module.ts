import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MockModule } from './mock/mock.module';
import { ViewsModule } from './views/views.module';
import { logger } from './security/authentication.interceptor';

@Module({
  imports: [ViewsModule, MockModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes('/mock');
  }
}
