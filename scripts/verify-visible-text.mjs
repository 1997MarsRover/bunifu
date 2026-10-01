import { execFileSync } from 'node:child_process';
import { readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';

const baselineOrigin = process.argv[2] ?? 'https://bunifuyouths.org';
const projectRoot = new URL('../', import.meta.url);
const distDir = new URL('../dist/', import.meta.url);
const browserProfile = `/tmp/bunifu-text-verify-${process.pid}`;
const prerenderRoutes = JSON.parse(
  await readFile(new URL('.prerender-routes.json', projectRoot), 'utf8'),
);
const routes = [...prerenderRoutes, '/privacy', '/bunifu-cms'];

function decodeEntities(value) {
  const named = {
    amp: '&',
    apos: "'",
    gt: '>',
    lt: '<',
    nbsp: ' ',
    quot: '"',
  };

  return value.replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (entity, code) => {
    if (code.startsWith('#x')) return String.fromCodePoint(Number.parseInt(code.slice(2), 16));
    if (code.startsWith('#')) return String.fromCodePoint(Number.parseInt(code.slice(1), 10));
    return named[code.toLowerCase()] ?? entity;
  });
}

function visibleText(html) {
  const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html;
  return decodeEntities(
    body
      .replace(/<span id="year"><\/span>/gi, String(new Date().getFullYear()))
      .replace(/<(script|style|noscript|svg)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
      .replace(/<!--([\s\S]*?)-->/g, '')
      .replace(/<[^>]+>/g, ' '),
  )
    .replace(/\s+/g, ' ')
    .trim();
}

function outputPath(route) {
  if (route === '/') return new URL('index.html', distDir);
  if (route === '/privacy' || route === '/bunifu-cms') {
    return new URL(`.${route}/index.html`, distDir);
  }
  return new URL(`.${route}.html`, distDir);
}

const mismatches = [];

try {
  for (const route of routes) {
    const baselineHtml = execFileSync(
      'google-chrome',
      [
        '--headless',
        '--disable-gpu',
        '--no-sandbox',
        '--disable-dev-shm-usage',
        `--user-data-dir=${browserProfile}`,
        '--virtual-time-budget=4000',
        '--dump-dom',
        `${baselineOrigin}${route}`,
      ],
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 20 * 1024 * 1024 },
    );
    const builtHtml = await readFile(outputPath(route), 'utf8');
    const baselineText = visibleText(baselineHtml);
    const builtText = visibleText(builtHtml);

    if (baselineText !== builtText) {
      mismatches.push({ route, baselineText, builtText });
      console.error(`Text mismatch: ${route}`);
    } else {
      console.log(`Text unchanged: ${route}`);
    }
  }
} finally {
  await rm(browserProfile, { recursive: true, force: true });
}

if (mismatches.length > 0) {
  for (const mismatch of mismatches) {
    let index = 0;
    while (
      mismatch.baselineText[index] === mismatch.builtText[index] &&
      index < mismatch.baselineText.length &&
      index < mismatch.builtText.length
    ) {
      index += 1;
    }
    console.error(`\n${mismatch.route} first differs near character ${index}:`);
    console.error(`baseline: ${mismatch.baselineText.slice(Math.max(0, index - 80), index + 160)}`);
    console.error(`built:    ${mismatch.builtText.slice(Math.max(0, index - 80), index + 160)}`);
  }
  process.exitCode = 1;
} else {
  console.log(`Verified unchanged visible text on ${routes.length} public routes.`);
}
