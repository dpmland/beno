import { parse as parseJSONC } from 'encoding/jsonc.ts';
import { extname, join } from 'path/mod.ts';
import { BenoTypes } from './types.d.ts';
import { benoMagicReader } from './reader.ts';

// Methods for Parsers
interface BenoCfgFunctions {
  config(path?: string, env?: string): void;
  get(key: string): unknown | undefined;
  content(): Record<string, unknown>[] | undefined;
}

export class BenoParsers implements BenoCfgFunctions {
  constructor(private props: BenoTypes) {
    this.props.path = join(Deno.cwd(), 'config');
    this.props.envPath = join(Deno.cwd(), '.env');
  }

  config(path?: string | undefined, env?: string | undefined): void {
    /** Make a validation */

    // Helpers for the Params
    let cfg, envPath;

    // Add the
    if (path == undefined) {
      cfg = join(Deno.cwd(), 'config');
    } else {
      cfg = path;
    }

    if (env == undefined) {
      envPath = join(Deno.cwd(), '.env');
    } else {
      envPath = env;
    }

    this.props.path = cfg!;
    this.props.envPath = envPath!;
  }

  content(): Record<string, unknown>[] | undefined {
    const path: string[] = [];
    for (const e of Deno.readDirSync(this.props.path!)) {
      if (e.isFile && extname(e.name).substring(1) == this.props.encoder) {
        path.push(join(this.props.path!, e.name));
      }
    }
    return benoMagicReader(path, this.props.encoder);
  }

  get(key: string): unknown | undefined {
    const content = this.content();

    if (content == undefined) {
      throw new Error(
        'Beno ERROR: Not defined the content not found a valid file in the directory or not found the directory',
      );
    }
    const target = content.find((i) => key in i);
    if (target == undefined) {
      return undefined;
    }
    return target[key];
  }
}
