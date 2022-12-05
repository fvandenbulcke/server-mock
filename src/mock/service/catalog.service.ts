import { Injectable } from '@nestjs/common';
import { RecoverService } from './recover.service';

@Injectable()
export class CatalogService extends RecoverService {
  getData(fileName: string): string {
    return this.readFile('catalog', fileName);
  }
}
