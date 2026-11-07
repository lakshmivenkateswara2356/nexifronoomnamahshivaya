import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const runtime = 'nodejs';

export async function GET() {
  const brochure = await readFile(
    join(process.cwd(), 'public', 'nexiquill-python-full-stack-genai-brochure.pdf'),
  );

  return new Response(new Uint8Array(brochure), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="nexiquill-python-full-stack-genai-brochure.pdf"',
      'Content-Length': String(brochure.byteLength),
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  });
}
