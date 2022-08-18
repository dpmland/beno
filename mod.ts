import { BenoParsers } from './src/parsers/main.ts';

export class Beno extends BenoParsers {
  version(): string {
    return `0.1.0`;
  }
}
