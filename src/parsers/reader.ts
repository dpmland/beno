import * as JSONC from 'encoding/jsonc.ts';

// @desc Read a file if exists and if return none not exists
export function benoMagicReader(
  files: string[],
  encoder: 'json' | 'jsonc',
): Record<string, unknown>[] | undefined {
  try {
    const content: Record<string, unknown>[] = [];
    for (const i of files) {
      if (encoder == 'json') {
        const objCont = JSON.parse(Deno.readTextFileSync(i));
        // Append a key for a path!
        objCont['BENO_INTERNALS_FILEPATH'] = i;
        content.push(objCont);
      } else {
        const objCont = JSONC.parse(Deno.readTextFileSync(i)) as Record<
          string,
          unknown
        >;
        // Append a key for a path!
        objCont['BENO_INTERNALS_FILEPATH'] = i;
        content.push(objCont);
      }
    }
    return content;
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) return;
    throw new Error(`Beno ERROR: ${e}`);
  }
}
