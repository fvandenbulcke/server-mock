import { Module } from '@nestjs/common';
import { MockController } from './mock.controller';
import { RedirectController } from './redirect.controller';
import { CatalogService } from './service/catalog.service';
import { StoreService } from './service/store.service';

@Module({
  controllers: [MockController, RedirectController],
  providers: [
    {
      provide: 'catalog.service',
      useClass: CatalogService,
    },
    {
      provide: 'store.service',
      useClass: StoreService,
    },
  ],
  exports: [],
})
export class MockModule {}
