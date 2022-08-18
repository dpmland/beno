// Copyright © 2022 Dpm Land. All Rights Reserved.
import { parse as parseJSONC } from 'encoding/jsonc.ts';
import { parse as parseCSV, stringify as stringifyCSV } from 'encoding/csv.ts';
import { parse as parseYML, stringify as stringifyYML } from 'encoding/yaml.ts';
import {
  parse as parseTOML,
  stringify as stringifyTOML,
} from 'encoding/toml.ts';
import { join } from 'path/mod.ts';

//Interface for the return type
interface BadTypes {
  encoder: 'toml' | 'json' | 'yaml' | 'jsonc' | 'csv';
  path?: string;
  envPath?: string;
}

interface GetType {
  prop: string;
}

// Interface for define all types for the functions
interface CfgManagerTypes {
  load(path?: string, env?: string): void;
  get(cfg: GetType): void;
}

export function Bad(params: BadTypes) {
  return class CfgManager implements CfgManagerTypes {
    load(cfg?: string, env?: string): void {
      /** Make a validation */
      let path, envPath;
      if (cfg == undefined) {
        path = join(Deno.cwd(), 'config');
      } else {
        path = cfg;
      }

      if (env == undefined) {
        envPath = join(Deno.cwd(), '.env');
      } else {
        envPath = env;
      }
      params.path = path!;
      params.envPath = envPath!;
    }

    get(cfg: GetType): void {
      console.log(cfg.prop);
      console.log(params.path);
    }
  };
}
