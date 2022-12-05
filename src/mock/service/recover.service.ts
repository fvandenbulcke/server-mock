import * as fs from 'fs';

export abstract class RecoverService {
  abstract getData(fileName: string): string;

  readFile(path: string, fileName: string): string {
    const filePath = `./src/mock/data/${path}/${fileName}.json`;
    if (!fs.existsSync(filePath)) {
      throw new Error('the mock doasnt exists');
    }

    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  }
}
