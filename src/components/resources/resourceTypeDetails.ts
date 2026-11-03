import {
  Cloud,
  FileText,
  Image as ImageIcon,
  Link2,
  Youtube,
  type LucideIcon,
} from 'lucide-react';
import type { ResourceType } from '../../services/publicResourceTypes';

export const resourceTypeDetails: Record<
  ResourceType,
  { label: string; Icon: LucideIcon; color: string; surface: string }
> = {
  google_drive: {
    label: 'Google Drive',
    Icon: Cloud,
    color: 'text-[#006ca8]',
    surface: 'bg-brand-blue/10',
  },
  document: {
    label: 'Document',
    Icon: FileText,
    color: 'text-brand-red',
    surface: 'bg-brand-red/10',
  },
  youtube: {
    label: 'YouTube video',
    Icon: Youtube,
    color: 'text-brand-red',
    surface: 'bg-brand-red/10',
  },
  image: {
    label: 'Image',
    Icon: ImageIcon,
    color: 'text-brand-green',
    surface: 'bg-brand-green/10',
  },
  web_link: {
    label: 'Web link',
    Icon: Link2,
    color: 'text-brand-purple',
    surface: 'bg-brand-purple/10',
  },
};
