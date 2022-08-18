import { BenoParsers } from './parsers/main.ts';

const beno = new BenoParsers({ encoder: 'json' });

beno.load();

beno.get({ prop: 'xd' });
