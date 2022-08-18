import { parse as parseJSONC } from 'encoding/jsonc.ts';
import { parse as parseCSV, stringify as stringifyCSV } from 'encoding/csv.ts';
import { parse as parseYML, stringify as stringifyYML } from 'encoding/yaml.ts';
import {
  parse as parseTOML,
  stringify as stringifyTOML,
} from 'encoding/toml.ts';
import { join } from 'path/mod.ts';

//Interface for the return type
interface BenoTypes {
  encoder: 'toml' | 'json' | 'yaml' | 'jsonc' | 'csv';
  path?: string;
  envPath?: string;
}

interface GetType {
  prop: string;
}

// Interface for define all types for the functions
interface BenoCfgFunctions {
  load(path?: string, env?: string): void;
  get(cfg: GetType): void;
}

export class BenoParsers implements BenoCfgFunctions {
  constructor(private props: BenoTypes) {
    this.props.encoder = 'jsonc', this.props.path = join(Deno.cwd(), 'config');
    this.props.envPath = join(Deno.cwd(), '.env');
  }

  load(path?: string | undefined, env?: string | undefined): void {
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
    console.log(this.props.path);
    console.log(this.props.envPath);
    console.log(this.props.encoder);
  }
}
