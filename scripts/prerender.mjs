import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const projectRoot = new URL('../', import.meta.url);
const distDir = new URL('../dist/', import.meta.url);
const serverBundle = new URL('../.ssr-temp/entry-server.js', import.meta.url);
const templatePath = new URL('index.html', distDir);

const template = await readFile(templatePath, 'utf8');
const { prerenderRoutes, render } = await import(serverBundle.href);

if (!template.includes('<div id="root"></div>')) {
  throw new Error('Unable to find the empty root element in the client build.');
}

for (const route of prerenderRoutes) {
  const appHtml = render(route);
  const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  const relativePath = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  const outputPath = join(distDir.pathname, relativePath);

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}

await writeFile(
  new URL('.prerender-routes.json', projectRoot),
  `${JSON.stringify(prerenderRoutes, null, 2)}\n`,
);
await rm(new URL('.ssr-temp/', projectRoot), { recursive: true, force: true });

console.log(`Prerendered ${prerenderRoutes.length} public React routes.`);
