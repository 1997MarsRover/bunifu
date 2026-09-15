import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import { join } from 'path';

const PUBLIC = join(import.meta.dirname, '../public');
const OUTPUT_DIR = join(PUBLIC, 'daily-hero');

await mkdir(OUTPUT_DIR, { recursive: true });

for (let i = 1; i <= 10; i++) {
  const input = join(PUBLIC, `${i}.jpeg`);
  const output = join(OUTPUT_DIR, `daily-${i}.webp`);
  
  const info = await sharp(input)
    .rotate()
    .webp({ quality: 82, effort: 4 })
    .toFile(output);
    
  console.log(`Generated daily-${i}.webp: ${(info.size / 1024).toFixed(1)} KB (${info.width}x${info.height})`);
}
console.log('Daily hero image generation complete!');
