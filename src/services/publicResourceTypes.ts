export const RESOURCE_TYPES = [
  'google_drive',
  'document',
  'youtube',
  'image',
  'web_link',
] as const;

export type ResourceType = (typeof RESOURCE_TYPES)[number];

export type PublicResource = {
  id: string;
  title: string;
  description: string;
  category: string;
  resource_type: ResourceType;
  cover_url: string | null;
  resource_url: string;
  published_at: string;
};

export function getSafeExternalUrl(value: string | null | undefined) {
  if (!value) return null;

  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : null;
  } catch {
    return null;
  }
}
