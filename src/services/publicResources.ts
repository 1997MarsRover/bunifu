import { getPublicSupabaseClient } from '../lib/supabase';
import {
  RESOURCE_TYPES,
  type PublicResource,
  type ResourceType,
} from './publicResourceTypes';

const resourceTypeSet = new Set<string>(RESOURCE_TYPES);

function stringValue(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function normalizeResource(value: unknown, index: number): PublicResource | null {
  if (!value || typeof value !== 'object') return null;

  const row = value as Record<string, unknown>;
  const resourceType = stringValue(row.resource_type);
  if (!resourceTypeSet.has(resourceType)) return null;

  return {
    id: stringValue(row.id) || `resource-${index}`,
    title: stringValue(row.title) || 'Untitled resource',
    description: stringValue(row.description),
    category: stringValue(row.category) || 'General',
    resource_type: resourceType as ResourceType,
    cover_url: stringValue(row.cover_url) || null,
    resource_url: stringValue(row.resource_url),
    published_at: stringValue(row.published_at),
  };
}

export async function listPublicResources(): Promise<PublicResource[]> {
  const supabase = getPublicSupabaseClient();
  const { data, error } = await supabase.rpc('list_public_resources');

  if (error) throw error;
  if (!Array.isArray(data)) return [];

  return data
    .map(normalizeResource)
    .filter((resource): resource is PublicResource => resource !== null);
}

