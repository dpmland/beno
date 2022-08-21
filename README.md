# Beno :mage:

---

Do you want to manage the settings of your apps? Make it easy with the help of
Beno

## What is this?

Well I need manage some config files for DPM and for make this a easy experience
and make more `type-safe` i wrote this is a way for read files from a dir using
an many encoders :sunglasses:

## Usage:

```ts
import { Beno } from 'https://deno.land/x/beno/mod.ts';

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
  `${Deno.cwd()}/custom-path/to/.envFile`, // Working in the implementation for this
);
```

## Why this name? :notes:

I didn't have a name for this project but I was listening to Bad Bunny and I'm
thinking why not call this project **Beno**.

## Information :book:

- **Author:** The DPM Authors Team
- **Version:** 0.1.0
- **License:** MIT

---

Made by [dpm](https://github.com/dpmland/dpm) :sauropod:
