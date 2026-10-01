import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const projectRoot = new URL('../', import.meta.url);
const distDir = new URL('../dist/', import.meta.url);
const serverBundle = new URL('../.ssr-temp/entry-server.js', import.meta.url);
const templatePath = new URL('index.html', distDir);

const template = await readFile(templatePath, 'utf8');
const { getSeoMetadata, getStructuredData, prerenderRoutes, render } = await import(serverBundle.href);

if (!template.includes('<div id="root"></div>')) {
  throw new Error('Unable to find the empty root element in the client build.');
}

for (const route of prerenderRoutes) {
  const appHtml = render(route);
  const metadata = getSeoMetadata(route);
  if (!metadata) throw new Error(`Missing SEO metadata for ${route}`);
  const escapeAttribute = (value) =>
    value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttribute(metadata.title)}</title>`)
    .replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${escapeAttribute(metadata.description)}" />`,
    )
    .replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${escapeAttribute(metadata.canonical)}" />`,
    )
    .replace(/\s*<meta name="robots" content="[^"]*" \/>/, '');
  if (metadata.robots) {
    html = html.replace(
      /(<link rel="canonical"[^>]*>)/,
      `$1\n    <meta name="robots" content="${escapeAttribute(metadata.robots)}" />`,
    );
  }
  const socialTags = [
    ['property', 'og:type', metadata.ogType ?? 'website'],
    ['property', 'og:url', metadata.canonical],
    ['property', 'og:title', metadata.title],
    ['property', 'og:description', metadata.description],
    ['property', 'og:image', metadata.image],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', metadata.title],
    ['name', 'twitter:description', metadata.description],
    ['name', 'twitter:image', metadata.image],
  ];
  for (const [attribute, key, content] of socialTags) {
    const expression = new RegExp(
      `<meta ${attribute}="${key.replace(':', '\\:')}" content="[^"]*" \\/>`,
    );
    const tag = `<meta ${attribute}="${key}" content="${escapeAttribute(content)}" />`;
    html = expression.test(html)
      ? html.replace(expression, tag)
      : html.replace('</head>', `    ${tag}\n  </head>`);
  }
  html = html.replace(
    /\s*<script type="application\/ld\+json"(?: data-seo-schema)?>([\s\S]*?)<\/script>/g,
    '',
  );
  const schemas = getStructuredData(route);
  if (schemas.length > 0) {
    const schemaTags = schemas
      .map(
        (schema) =>
          `    <script type="application/ld+json" data-seo-schema>${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`,
      )
      .join('\n');
    html = html.replace('</head>', `${schemaTags}\n  </head>`);
  }
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
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
