import { Beno } from '../mod.ts';

// Exists many options for this for example the json encoder or can create the encoder with jsonc prop
const beno = new Beno({ encoder: 'json' });

// Set a new key on the file
beno.set('filename.json', { key: 'beno', val: 'is awesome' });

// Get the value from a key in a filename
// This value can return string, boolean, or number
console.log(beno.get('beno').string());

// Check if a key exists:
beno.has('beno'); // -> Returns true
beno.has('notExists'); // Returns false

// Advanced functions

// Get the content in a Record<string,unknown>[]
console.log(beno.content());

// For configure some values you can use this function bellow the beno instance
beno.config(
  `${Deno.cwd()}/newPath/forFolderConfig`,
  `${Deno.cwd()}/custom-path/to/.envFile`,
);
