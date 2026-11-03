import { Search } from 'lucide-react';
import { RESOURCE_TYPES, type ResourceType } from '../../services/publicResourceTypes';
import { resourceTypeDetails } from './resourceTypeDetails';

export type ResourceTypeFilter = ResourceType | 'all';

type ResourceFiltersProps = {
  search: string;
  category: string;
  resourceType: ResourceTypeFilter;
  categories: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onResourceTypeChange: (value: ResourceTypeFilter) => void;
};

export default function ResourceFilters({
  search,
  category,
  resourceType,
  categories,
  onSearchChange,
  onCategoryChange,
  onResourceTypeChange,
}: ResourceFiltersProps) {
  return (
    <div className="grid gap-4 rounded-2xl bg-white p-4 shadow-[0_5px_24px_rgba(26,26,26,0.08)] md:grid-cols-2 md:p-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(12rem,0.75fr)_minmax(12rem,0.75fr)]">
      <label className="block min-w-0 text-sm font-bold text-brand-dark">
        Search resources
        <span className="relative mt-2 block">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" aria-hidden="true" />
          <input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by title or description"
            className="min-h-12 w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 font-medium text-brand-dark placeholder:text-gray-500 focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/15"
          />
        </span>
      </label>

      <label className="block min-w-0 text-sm font-bold text-brand-dark">
        Category
        <select
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="mt-2 min-h-12 w-full rounded-xl border border-gray-300 bg-white px-3 py-3 font-medium text-brand-dark focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/15"
        >
          <option value="all">All resources</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className="block min-w-0 text-sm font-bold text-brand-dark md:col-span-2 lg:col-span-1">
        Resource type
        <select
          value={resourceType}
          onChange={(event) => onResourceTypeChange(event.target.value as ResourceTypeFilter)}
          className="mt-2 min-h-12 w-full rounded-xl border border-gray-300 bg-white px-3 py-3 font-medium text-brand-dark focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/15"
        >
          <option value="all">All types</option>
          {RESOURCE_TYPES.map((type) => (
            <option key={type} value={type}>
              {resourceTypeDetails[type].label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
