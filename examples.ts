import { Bad } from './parsers/main.ts';

const bad = Bad({ encoder: 'toml' });
const good = new bad();

good.load();

good.get({ prop: 'xd' });
