// Fails while any built page still contains a TODO placeholder, so unfinished content never deploys.
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.argv[2] ?? 'dist';
const marker = 'TODO';

const entries = await readdir(root, { recursive: true, withFileTypes: true });
const htmlFiles = entries
  .filter((entry) => entry.isFile() && entry.name.endsWith('.html'))
  .map((entry) => join(entry.parentPath, entry.name))
  .sort();

let offenders = 0;
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  let index = html.indexOf(marker);
  if (index === -1) continue;
  offenders++;
  console.error(file);
  while (index !== -1) {
    const excerpt = html.slice(Math.max(0, index - 60), index + 80).replace(/\s+/g, ' ');
    console.error(`  …${excerpt}…`);
    index = html.indexOf(marker, index + marker.length);
  }
}

if (offenders > 0) {
  console.error(`\n${offenders} of ${htmlFiles.length} pages still contain "${marker}" placeholders.`);
  process.exit(1);
}
console.log(`No "${marker}" placeholders in ${htmlFiles.length} pages.`);
