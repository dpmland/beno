import * as JSONC from 'encoding/jsonc.ts';

export function benoOneFile(
  file: string,
  encoder: 'json' | 'jsonc',
) {
  try {
    if (encoder == 'json') {
      return JSON.parse(Deno.readTextFileSync(file));
    } else {
      return JSONC.parse(Deno.readTextFileSync(file)) as Record<
        string,
        unknown
      >;
    }
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) return;
    throw new Error(`Beno ERROR: ${e}`);
  }
}

// @desc Read a file if exists and if return none not exists
export function benoMagicReader(
  files: string[],
  encoder: 'json' | 'jsonc',
): Record<string, unknown>[] | undefined {
  try {
    const content: Record<string, unknown>[] = [];
    for (const i of files) {
      const obj = benoOneFile(i, encoder);
      obj['BENO_INTERNALS_FILEPATH'] = i;
      content.push(obj);
    }
    return content;
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) return;
    throw new Error(`Beno ERROR: ${e}`);
  }
}
