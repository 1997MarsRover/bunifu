export const PATTERN_URL = '/pattern.webp';

export function toWebp(path: string): string {
  return path.replace(/\.(png|jpe?g)$/i, '.webp');
}
