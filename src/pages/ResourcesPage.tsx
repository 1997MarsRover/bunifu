import { useEffect, useMemo, useState } from 'react';
import { BookOpenCheck } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ResourceCard from '../components/resources/ResourceCard';
import ResourceFilters, {
  type ResourceTypeFilter,
} from '../components/resources/ResourceFilters';
import {
  ResourcesEmpty,
  ResourcesError,
  ResourcesLoading,
  ResourcesNoResults,
} from '../components/resources/ResourceStates';
import { PATTERN_URL } from '../lib/assets';
import type { PublicResource } from '../services/publicResourceTypes';

type LoadState = 'loading' | 'success' | 'error';

function publishedTimestamp(value: string) {
  const timestamp = new Date(value).getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

export default function ResourcesPage() {
  const [resources, setResources] = useState<PublicResource[]>([]);
  const [loadState, setLoadState] = useState<LoadState>('loading');
  const [retryCount, setRetryCount] = useState(0);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [resourceType, setResourceType] = useState<ResourceTypeFilter>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let isCurrent = true;
    setLoadState('loading');

    import('../services/publicResources')
      .then(({ listPublicResources }) => listPublicResources())
      .then((data) => {
        if (!isCurrent) return;
        setResources(data.sort((a, b) => publishedTimestamp(b.published_at) - publishedTimestamp(a.published_at)));
        setLoadState('success');
      })
      .catch(() => {
        if (!isCurrent) return;
        setLoadState('error');
      });

    return () => {
      isCurrent = false;
    };
  }, [retryCount]);

  const categories = useMemo(
    () => Array.from(new Set(resources.map((resource) => resource.category))).sort((a, b) => a.localeCompare(b)),
    [resources],
  );

  const filteredResources = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase();

    return resources.filter((resource) => {
      const matchesSearch =
        !normalizedSearch ||
        resource.title.toLocaleLowerCase().includes(normalizedSearch) ||
        resource.description.toLocaleLowerCase().includes(normalizedSearch);
      const matchesCategory = category === 'all' || resource.category === category;
      const matchesType = resourceType === 'all' || resource.resource_type === resourceType;

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [category, resourceType, resources, search]);

  const clearFilters = () => {
    setSearch('');
    setCategory('all');
    setResourceType('all');
  };

  return (
    <div className="flex min-h-screen flex-col bg-brand-light">
      <Header variant="solid" />

      <main className="flex-1 pt-[4.5rem]">
        <section className="relative overflow-hidden border-b border-gray-200/80 bg-white">
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage: `url(${PATTERN_URL})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'repeat',
              backgroundSize: '480px',
            }}
          />
          <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-12 md:py-20">
            <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.48fr)]">
              <div className="max-w-4xl">
                <h1 className="text-balance text-4xl font-black leading-[1.08] tracking-[-0.03em] text-brand-dark sm:text-5xl md:text-6xl">
                  Resources for curious minds and growing creators.
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                  Explore practical guides, videos, documents, and links shared by Bunifu Youths to support learning beyond the session.
                </p>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-[#006ca8] p-5 text-white shadow-[0_10px_30px_rgba(0,108,168,0.22)] sm:p-6">
                <BookOpenCheck className="mt-0.5 h-7 w-7 shrink-0" aria-hidden="true" />
                <p className="text-sm font-semibold leading-6 text-white">
                  This library updates whenever a new public resource is published by the Bunifu team.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="resource-library-heading" className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 md:px-12 md:py-16">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="resource-library-heading" className="text-2xl font-black tracking-[-0.025em] text-brand-dark sm:text-3xl">
                Resource library
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Search and filter the latest publicly available learning materials.
              </p>
            </div>
            {loadState === 'success' && resources.length > 0 && (
              <p className="text-sm font-semibold tabular-nums text-gray-600" aria-live="polite">
                {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'}
              </p>
            )}
          </div>

          {loadState === 'success' && resources.length > 0 && (
            <div className="mb-8">
              <ResourceFilters
                search={search}
                category={category}
                resourceType={resourceType}
                categories={categories}
                onSearchChange={setSearch}
                onCategoryChange={setCategory}
                onResourceTypeChange={setResourceType}
              />
            </div>
          )}

          {loadState === 'loading' && <ResourcesLoading />}
          {loadState === 'error' && <ResourcesError onRetry={() => setRetryCount((count) => count + 1)} />}
          {loadState === 'success' && resources.length === 0 && <ResourcesEmpty />}
          {loadState === 'success' && resources.length > 0 && filteredResources.length === 0 && (
            <ResourcesNoResults onClear={clearFilters} />
          )}
          {loadState === 'success' && filteredResources.length > 0 && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
