import { parse as parseJSONC } from 'encoding/jsonc.ts';
import { extname, join } from 'path/mod.ts';
import { BenoTypes, GetType } from './types.d.ts';

// Methods for Parsers
interface BenoCfgFunctions {
  config(path?: string, env?: string): void;
  get(cfg: GetType): void;
}

export class BenoParsers implements BenoCfgFunctions {
  constructor(private props: BenoTypes) {
    this.props.encoder = 'jsonc', this.props.path = join(Deno.cwd(), 'config');
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

  get(cfg: GetType): void {
    console.log(cfg.prop);
    for (const e of Deno.readDirSync(this.props.path!)) {
      if (e.isFile && extname(e.name).substring(1) == this.props.encoder) {
        console.log(e.name);
      }
    }
  }
}
