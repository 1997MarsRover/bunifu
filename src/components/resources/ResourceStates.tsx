import { BookOpen, RefreshCw, SearchX, WifiOff } from 'lucide-react';

export function ResourcesLoading() {
  return (
    <div role="status" aria-live="polite" aria-label="Loading resources">
      <span className="sr-only">Loading resources…</span>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="overflow-hidden rounded-2xl bg-white shadow-[0_5px_24px_rgba(26,26,26,0.08)]">
            <div className="resource-skeleton aspect-[16/10]" />
            <div className="space-y-4 p-6">
              <div className="resource-skeleton h-3 w-2/5 rounded" />
              <div className="resource-skeleton h-6 w-4/5 rounded" />
              <div className="space-y-2">
                <div className="resource-skeleton h-3 w-full rounded" />
                <div className="resource-skeleton h-3 w-5/6 rounded" />
              </div>
              <div className="resource-skeleton h-11 w-full rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ResourcesError({ onRetry }: { onRetry: () => void }) {
  return (
    <div role="alert" className="mx-auto max-w-2xl rounded-2xl bg-white px-6 py-12 text-center shadow-[0_5px_24px_rgba(26,26,26,0.08)]">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red">
        <WifiOff className="h-8 w-8" aria-hidden="true" />
      </div>
      <h2 className="mt-6 text-2xl font-black tracking-[-0.02em] text-brand-dark">Resources could not be loaded</h2>
      <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-600">
        We could not reach the resource library. Check your connection and try again.
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-dark px-5 py-3 text-sm font-bold text-white hover:bg-[#006ca8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/30"
      >
        <RefreshCw className="h-4 w-4" aria-hidden="true" />
        Try again
      </button>
    </div>
  );
}

export function ResourcesEmpty() {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-white px-6 py-12 text-center shadow-[0_5px_24px_rgba(26,26,26,0.08)]">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
        <BookOpen className="h-8 w-8" aria-hidden="true" />
      </div>
      <h2 className="mt-6 text-2xl font-black tracking-[-0.02em] text-brand-dark">The library is being prepared</h2>
      <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-600">
        No public resources have been published yet. Please check back soon for new learning materials.
      </p>
    </div>
  );
}

export function ResourcesNoResults({ onClear }: { onClear: () => void }) {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-white px-6 py-12 text-center shadow-[0_5px_24px_rgba(26,26,26,0.08)]">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-600">
        <SearchX className="h-8 w-8" aria-hidden="true" />
      </div>
      <h2 className="mt-6 text-2xl font-black tracking-[-0.02em] text-brand-dark">No matching resources</h2>
      <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-600">
        Try a different search term or clear the filters to see the full library.
      </p>
      <button
        type="button"
        onClick={onClear}
        className="mt-6 min-h-11 rounded-xl bg-brand-dark px-5 py-3 text-sm font-bold text-white hover:bg-[#006ca8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/30"
      >
        Clear filters
      </button>
    </div>
  );
}
