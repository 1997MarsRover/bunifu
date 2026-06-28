import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC = join(import.meta.dirname, '../public');

/** @type {Record<string, number>} */
const MAX_WIDTH = {
  hero: 1920,
  card: 800,
  gallery: 1200,
  galleryThumb: 800,
  logo: 400,
  pattern: 500,
  icon: 256,
};

const HERO_IMAGES = new Set([
  'activity_robotics.png',
  'gallery_robotics_workshop.jpg',
  'activity_competition.jpeg',
  'activity_classroom.jpeg',
  'activity_3ddesign.jpg',
]);

const CARD_IMAGES = new Set([
  'activity_animations_gaming.png',
  'gallery_hands_on_coding.jpg',
  'activity_robotics.png',
  'activity_educators_training.png',
  'activity_3d_printing.png',
  'activity_competitions.png',
]);

const GALLERY_HERO = 'IMG-20260211-WA0001.jpg';

async function optimizeFile(filename, maxWidth) {
  const input = join(PUBLIC, filename);
  const output = join(PUBLIC, filename.replace(/\.(png|jpe?g)$/i, '.webp'));

  try {
    await stat(input);
  } catch {
    return null;
  }

  const info = await sharp(input)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 82, effort: 4 })
    .toFile(output);

  const before = (await stat(input)).size;
  return {
    file: filename,
    output: basename(output),
    before,
    after: info.size,
    width: info.width,
  };
}

const files = await readdir(PUBLIC);
const results = [];

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

  let maxWidth = MAX_WIDTH.card;
  if (HERO_IMAGES.has(file)) maxWidth = MAX_WIDTH.hero;
  else if (file.startsWith('IMG-') || file.startsWith('STARUP AFRICA')) {
    maxWidth = file === GALLERY_HERO ? MAX_WIDTH.gallery : MAX_WIDTH.galleryThumb;
  } else if (file === 'gallery_robot_building.jpg') maxWidth = MAX_WIDTH.card;
  else if (file === 'Kenya.png') maxWidth = MAX_WIDTH.icon;
  else if (file === 'final.png') maxWidth = MAX_WIDTH.logo;
  else if (file === 'pattern.jpg') maxWidth = MAX_WIDTH.pattern;
  else if (file.startsWith('icon')) maxWidth = MAX_WIDTH.icon;
  else if (CARD_IMAGES.has(file)) maxWidth = MAX_WIDTH.card;

  const result = await optimizeFile(file, maxWidth);
  if (result) results.push(result);
}

const saved = results.reduce((s, r) => s + (r.before - r.after), 0);
console.log(`Optimized ${results.length} images, saved ${(saved / 1024 / 1024).toFixed(2)} MB`);
for (const r of results.sort((a, b) => b.before - a.before)) {
  console.log(
    `${r.file} -> ${r.output}: ${(r.before / 1024).toFixed(0)}KB -> ${(r.after / 1024).toFixed(0)}KB (${r.width}px)`
  );
}
