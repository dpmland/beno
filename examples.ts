import { Beno } from './mod.ts';

const beno = new Beno({ encoder: 'json' });
console.log(beno.get('example').string());
console.log(beno.get('to').number());
console.log(beno.get('yes').boolean());
beno.set('xd', 'xd');
