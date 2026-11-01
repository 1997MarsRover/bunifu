import { usdToKes, formatKes } from './shopConfig';
import laptopImages from '../data/laptopImages.json';

export type ShopFilterTag =
  | 'age-3'
  | 'age-4'
  | 'age-6'
  | 'age-8'
  | 'robot-kits'
  | 'drones'
  | 'laptops';

export type ShopCategoryFilterId = 'all' | ShopFilterTag;

export type ShopProduct = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  /** USD list price used to compute KES */
  priceUsd?: number;
  /** KES list price (computed from USD at usdToKesRate) */
  priceKes: number;
  images: string[];
  filterTags: ShopFilterTag[];
  inStock: boolean;
  featured?: boolean;
  /** Shown on product cards, e.g. "3+ Years" */
  ageLabel?: string;
  brand?: string;
  specs?: string[];
  condition?: string;
};

export const SHOP_CATEGORIES: { id: ShopCategoryFilterId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'age-3', label: '3+ Years' },
  { id: 'age-4', label: '4+ Years' },
  { id: 'age-6', label: '6+ Years' },
  { id: 'age-8', label: '8+ Years' },
  { id: 'robot-kits', label: 'Robot kits' },
  { id: 'drones', label: 'Drones' },
  { id: 'laptops', label: 'Laptops' },
];

function kit(
  partial: Omit<ShopProduct, 'priceKes'> & { priceUsd: number },
): ShopProduct {
  return { ...partial, priceKes: usdToKes(partial.priceUsd) + 3_000 };
}

export const SHOP_PRODUCTS: ShopProduct[] = [
  kit({
    id: 'a1-magnetic-blocks',
    slug: 'a1-magnetic-blocks',
    name: 'A1 Robot Kit (3+ Years) — Magnetic Blocks Coding',
    shortDescription: 'Magnetic block coding robot with 8-in-1 projects for young builders.',
    description:
      'The A1 kit introduces coding through magnetic blocks and playful models—ideal for first-time robotics learners. Same kit family used in hands-on Bunifu sessions for ages 3+.',
    priceUsd: 59.99,
    images: ['/shop/a1.webp'],
    filterTags: ['age-3', 'robot-kits'],
    ageLabel: '3+ Years',
    inStock: true,
    featured: true,
  }),
  kit({
    id: 'a7-magnetic-blocks',
    slug: 'a7-magnetic-blocks',
    name: 'A7 Robot Kit (3+ Years) — Magnetic Blocks Coding',
    shortDescription: 'Advanced magnetic blocks kit with dual controllers and 36 projects.',
    description:
      'The A7 kit expands magnetic-block robotics with more builds and controller options—great for curious kids ready for bigger creations after starter sessions.',
    priceUsd: 299.99,
    images: ['/shop/a7.webp'],
    filterTags: ['age-3', 'robot-kits'],
    ageLabel: '3+ Years',
    inStock: true,
  }),
  kit({
    id: 'd1-modular-coding',
    slug: 'd1-modular-coding',
    name: 'D1 Robot Kit (4+ Years) — APP Modular Coding',
    shortDescription: 'Modular robot kit with app-based coding for ages 4+.',
    description:
      'The D1 kit bridges play and programming with modular pieces and app-based coding—matches the beginner-friendly track we use for younger learners moving into structured robotics.',
    priceUsd: 66.99,
    images: ['/shop/d1.webp'],
    filterTags: ['age-4', 'robot-kits'],
    ageLabel: '4+ Years',
    inStock: true,
    featured: true,
  }),
  kit({
    id: 'c3-pro',
    slug: 'c3-pro',
    name: 'C3 Pro Robot Kit (6+ Years) — Smart Panel & Cards Coding',
    shortDescription: 'Smart panel and card-based coding for structured STEM learning.',
    description:
      'The C3 Pro kit combines tactile card coding with a smart panel—perfect for learners ages 6+ building confidence before app-based programming.',
    priceUsd: 169.99,
    images: ['/shop/c3-pro.webp'],
    filterTags: ['age-6', 'robot-kits'],
    ageLabel: '6+ Years',
    inStock: true,
    featured: true,
  }),
  kit({
    id: 'pubbo-ai-robot',
    slug: 'pubbo-ai-robot',
    name: 'Pubbo AI Robot (6+ Years)',
    shortDescription: 'AI-focused robotics platform for creative, independent learning.',
    description:
      'Pubbo brings AI and robotics together for ages 6+—designed for kids to discover, build, and code with guided independence.',
    priceUsd: 299.0,
    images: ['/shop/pubbo.webp'],
    filterTags: ['age-6', 'robot-kits'],
    ageLabel: '6+ Years',
    inStock: true,
  }),
  kit({
    id: 'rocky-modular',
    slug: 'rocky-modular',
    name: 'Rocky Robot Kit (8+ Years) — Modular / Python / Scratch',
    shortDescription: 'Modular coding robot with app, PC, Scratch, and Python pathways.',
    description:
      'Rocky is a best-selling kit for ages 8+—modular builds plus Scratch and Python-ready workflows. Core kit for Bunifu competition and advanced club tracks.',
    priceUsd: 99.99,
    images: ['/shop/rocky.webp'],
    filterTags: ['age-8', 'robot-kits'],
    ageLabel: '8+ Years',
    inStock: true,
    featured: true,
  }),
  kit({
    id: 'e7-pro',
    slug: 'e7-pro',
    name: 'E7 Pro Robot Kit (8+ Years) — APP Modular / Scratch',
    shortDescription: '12-in-1 modular robot with app and Scratch coding.',
    description:
      'The E7 Pro kit supports deeper project work with modular structures and app-based coding—ideal for learners graduating from card and block systems.',
    priceUsd: 249.99,
    images: ['/shop/e7-pro.webp'],
    filterTags: ['age-8', 'robot-kits'],
    ageLabel: '8+ Years',
    inStock: true,
    featured: true,
  }),
  kit({
    id: 'eagle-1003-drone',
    slug: 'eagle-1003-drone',
    name: 'Eagle 1003 — Programmable Drone',
    shortDescription: 'Programmable educational drone for coding and aerial STEM projects.',
    description:
      'Eagle 1003 connects coding skills to flight—learn programming concepts through programmable drone challenges.',
    priceUsd: 299.0,
    images: ['/shop/eagle-drone.webp'],
    filterTags: ['drones', 'age-8'],
    ageLabel: '8+ Years',
    inStock: true,
    featured: true,
  }),
  {
    id: 'dell-vostro-3400', slug: 'dell-vostro-3400', brand: 'Dell',
    name: 'Dell Vostro 3400', shortDescription: '11th Gen Intel Core i5 · 8GB RAM · 256GB SSD',
    description: 'Dell Vostro 3400 with an 11th generation Intel Core i5 processor, 8GB RAM, and 256GB SSD.',
    specs: ['Intel Core i5 · 11th Gen', '8GB RAM', '256GB SSD'],
    priceKes: 28_000 + 3_000, images: laptopImages['dell-vostro-3400'],
    filterTags: ['laptops'], inStock: true,
  },
  {
    id: 'lenovo-x280', slug: 'lenovo-x280', brand: 'Lenovo',
    name: 'Lenovo X280', shortDescription: '7th Gen Intel Core i5 · 8GB RAM · 256GB SSD',
    description: 'Lenovo X280 with a 7th generation Intel Core i5 processor, 8GB RAM, and 256GB SSD.',
    specs: ['Intel Core i5 · 7th Gen', '8GB RAM', '256GB SSD'],
    priceKes: 21_000 + 3_000, images: laptopImages['lenovo-x280'],
    filterTags: ['laptops'], inStock: true,
  },
  {
    id: 'hp-840-g5', slug: 'hp-840-g5', brand: 'HP',
    name: 'HP 840 G5', shortDescription: '8th Gen Intel Core i5 · 8GB RAM · 256GB SSD',
    description: 'HP 840 G5 with an 8th generation Intel Core i5 processor, 8GB RAM, 256GB SSD, and a backlit keyboard.',
    specs: ['Intel Core i5 · 8th Gen', '8GB RAM', '256GB SSD', 'Backlit keyboard'],
    priceKes: 28_000 + 3_000, images: laptopImages['hp-840-g5'],
    filterTags: ['laptops'], inStock: true,
  },
  {
    id: 'lenovo-x1', slug: 'lenovo-x1', brand: 'Lenovo',
    name: 'Lenovo X1 x360', shortDescription: '11th Gen Intel Core i7 · 32GB RAM · 512GB SSD',
    description: 'Lenovo X1 with an 11th generation Intel Core i7 processor, 32GB RAM, 512GB SSD, touchscreen, 360° hinge, and stylus pen.',
    specs: ['Intel Core i7 · 11th Gen', '32GB RAM', '512GB SSD', 'Touchscreen · x360', 'Stylus pen'],
    priceKes: 69_999 + 3_000, images: laptopImages['lenovo-x1'],
    filterTags: ['laptops'], inStock: true,
  },
  {
    id: 'hp-200-g3', slug: 'hp-200-g3', brand: 'HP',
    name: 'HP 200 G3', shortDescription: '8th Gen Intel Core i5 · 8GB RAM · 256GB SSD + 1TB HDD',
    description: 'HP 200 G3 with an 8th generation Intel Core i5 processor, 8GB RAM, 256GB SSD, and 1TB HDD. See the photos for the computer form factor.',
    specs: ['Intel Core i5 · 8th Gen', '8GB RAM', '256GB SSD + 1TB HDD'],
    priceKes: 42_999 + 3_000, images: laptopImages['hp-200-g3'],
    filterTags: ['laptops'], inStock: true,
  },
  {
    id: 'nec-x360', slug: 'nec-x360', brand: 'NEC',
    name: 'NEC x360 Touchscreen', shortDescription: 'Intel Celeron · 4GB RAM · 128GB SSD',
    description: 'Brand new NEC x360 laptop with an Intel Celeron processor, 4GB RAM, 128GB SSD, and touchscreen.',
    specs: ['Intel Celeron', '4GB RAM', '128GB SSD', 'Touchscreen · x360'],
    condition: 'Brand new', priceKes: 14_999 + 3_000,
    images: laptopImages['nec-x360'], filterTags: ['laptops'], inStock: true,
  },
  {
    id: 'hp-1030-g2', slug: 'hp-1030-g2', brand: 'HP',
    name: 'HP 1030 G2 x360', shortDescription: '7th Gen Intel Core i5 · 8GB RAM · 128GB SSD',
    description: 'HP 1030 G2 x360 with a 7th generation Intel Core i5 processor, 8GB RAM, and 128GB SSD. The screen is cracked and touch does not work.',
    specs: ['Intel Core i5 · 7th Gen', '8GB RAM', '128GB SSD', 'x360 hinge'],
    condition: 'Cracked screen · no touch', priceKes: 14_999 + 3_000,
    images: laptopImages['hp-1030-g2'], filterTags: ['laptops'], inStock: true,
  },
];

export function getProductBySlug(slug: string): ShopProduct | undefined {
  return SHOP_PRODUCTS.find((p) => p.slug === slug);
}

export function productCheckoutKes(product: ShopProduct): number {
  return product.priceKes;
}

export function formatProductPrice(product: ShopProduct): string {
  return formatKes(product.priceKes);
}

export function productCardSubtitle(product: ShopProduct): string {
  if (product.id === 'hp-200-g3') return 'HP · Computer';
  if (product.filterTags.includes('laptops')) return `${product.brand} · Laptop`;
  if (product.filterTags.includes('drones')) return 'Drone · STEM';
  if (product.ageLabel) return `${product.ageLabel} · Robot kit`;
  return 'STEM kit';
}

export function filterProducts(category: ShopCategoryFilterId): ShopProduct[] {
  if (category === 'all') return SHOP_PRODUCTS;
  return SHOP_PRODUCTS.filter((p) => p.filterTags.includes(category));
}
