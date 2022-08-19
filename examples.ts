import { Beno } from './mod.ts';

const beno = new Beno({ encoder: 'json' });
console.log(beno.get('example'));
console.log(beno.get('to'));
console.log(beno.get('yes'));
