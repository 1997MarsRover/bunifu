import type { ShopCategoryFilterId } from '../../lib/shopProducts';
import { SHOP_CATEGORIES } from '../../lib/shopProducts';

type ShopCategoryFilterProps = {
  active: ShopCategoryFilterId;
  onChange: (category: ShopCategoryFilterId) => void;
};

export default function ShopCategoryFilter({ active, onChange }: ShopCategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {SHOP_CATEGORIES.map((cat) => {
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onChange(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
              isActive
                ? 'bg-brand-dark text-white'
                : 'bg-white border border-gray-200 text-brand-dark hover:border-brand-blue'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
