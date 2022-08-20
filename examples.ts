import { Beno } from './mod.ts';

const beno = new Beno({ encoder: 'json' });
/* console.log(beno.get('example').string());
console.log(beno.get('to').number());
console.log(beno.get('yes').boolean()); */
beno.set('other', { key: 'helloo', val: 'benooooooooo' });
beno.set('hello.json', { key: 'bye', val: 'chauuuuuuuu' });

/* const JSONC = new Beno({encoder: 'jsonc'})
console.log(JSONC.content())
console.log(JSONC.get('hello').string()) */
