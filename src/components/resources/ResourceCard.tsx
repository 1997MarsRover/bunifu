import {
  CalendarDays,
  ExternalLink,
} from 'lucide-react';
import { useState } from 'react';
import {
  getSafeExternalUrl,
  type PublicResource,
} from '../../services/publicResourceTypes';
import { resourceTypeDetails } from './resourceTypeDetails';

function formatPublishedDate(value: string) {
  if (!value) return 'Date unavailable';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Date unavailable';

  return new Intl.DateTimeFormat('en-KE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

type ResourceCardProps = {
  resource: PublicResource;
};

export default function ResourceCard({ resource }: ResourceCardProps) {
  const [coverFailed, setCoverFailed] = useState(false);
  const typeDetails = resourceTypeDetails[resource.resource_type];
  const resourceUrl = getSafeExternalUrl(resource.resource_url);
  const coverUrl = getSafeExternalUrl(resource.cover_url);
  const showCover = Boolean(coverUrl && !coverFailed);
  const TypeIcon = typeDetails.Icon;

  return (
    <article className="resource-card group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl bg-white shadow-[0_5px_24px_rgba(26,26,26,0.08)]">
      <div className={`relative aspect-[16/10] overflow-hidden ${typeDetails.surface}`}>
        {showCover ? (
          <img
            src={coverUrl ?? undefined}
            alt={`Cover for ${resource.title}`}
            loading="lazy"
            decoding="async"
            onError={() => setCoverFailed(true)}
            className="h-full w-full object-cover transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.035]"
          />
        ) : (
          <div className="resource-placeholder flex h-full items-center justify-center" aria-hidden="true">
            <div className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-[0_8px_24px_rgba(26,26,26,0.10)] ${typeDetails.color}`}>
              <TypeIcon className="h-9 w-9" strokeWidth={1.8} />
            </div>
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-brand-dark shadow-sm">
          {resource.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-gray-600">
          <span className={`inline-flex items-center gap-1.5 ${typeDetails.color}`}>
            <TypeIcon className="h-4 w-4" aria-hidden="true" />
            {typeDetails.label}
          </span>
          <span className="inline-flex items-center gap-1.5 tabular-nums">
            <CalendarDays className="h-4 w-4 text-gray-400" aria-hidden="true" />
            {formatPublishedDate(resource.published_at)}
          </span>
        </div>

        <h2 className="text-xl font-black leading-snug tracking-[-0.02em] text-brand-dark">
          {resource.title}
        </h2>
        <p className="resource-description mt-3 text-sm leading-6 text-gray-600">
          {resource.description || 'No description is available for this resource yet.'}
        </p>

        <div className="mt-auto pt-6">
          {resourceUrl ? (
            <a
              href={resourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-dark px-4 py-3 text-sm font-bold text-white hover:bg-[#006ca8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/30"
              aria-label={`Open ${resource.title} in a new tab`}
            >
              Open resource
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : (
            <span className="inline-flex min-h-11 w-full cursor-not-allowed items-center justify-center rounded-xl bg-gray-100 px-4 py-3 text-sm font-bold text-gray-500">
              Link unavailable
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

