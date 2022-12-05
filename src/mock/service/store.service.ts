import { Injectable } from '@nestjs/common';
import { RecoverService } from './recover.service';

@Injectable()
export class StoreService extends RecoverService {
  getData(fileName: string): string {
    return this.readFile('store', fileName);
  }
}
