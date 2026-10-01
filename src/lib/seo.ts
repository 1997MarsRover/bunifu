import { galleryCollections } from '../data/galleryData';
import { formatKes } from './shopConfig';
import { SHOP_PRODUCTS } from './shopProducts';

export const SITE_ORIGIN = 'https://bunifuyouths.org';

export interface SeoMetadata {
  title: string;
  description: string;
  canonical: string;
  image: string;
  ogType?: 'website' | 'product';
  robots?: 'noindex, follow';
}

const minimumProductPrice = Math.min(...SHOP_PRODUCTS.map((product) => product.priceKes));

const staticMetadata: Record<string, Omit<SeoMetadata, 'canonical'>> = {
  '/': {
    title: 'Bunifu Youths Kenya | STEM, Robotics, AI & Coding',
    description:
      'Hands-on coding, robotics, AI, 3D design, school outreach, mentorship and competitions for children and teens in Kenya.',
    image: `${SITE_ORIGIN}/activity_robotics.webp`,
  },
  '/how-it-works': {
    title: 'Bunifu Code Clubs for Kids in Kenya: How It Works & Fees',
    description:
      'See how Bunifu Code Clubs structure hands-on sessions in coding, robotics, AI and 3D design, including activities, progress and fees.',
    image: `${SITE_ORIGIN}/1.webp`,
  },
  '/careers': {
    title: 'Careers & Job Vacancies | Bunifu Youths Kenya',
    description:
      'Explore career opportunities at Bunifu Youths Kenya for STEM education, school partnerships, sales and outreach roles in Nairobi.',
    image: `${SITE_ORIGIN}/final.webp`,
    robots: 'noindex, follow',
  },
  '/shop': {
    title: 'STEM & Robot Kits for Kids in Kenya | Bunifu Shop',
    description: `Coding robot kits and programmable drones for children in Kenya. Prices from ${formatKes(minimumProductPrice)}, pay by M-Pesa. Ask about delivery.`,
    image: `${SITE_ORIGIN}/shop/a1.webp`,
  },
  '/gallery': {
    title: 'Gallery & Stories | Bunifu Youths Kenya',
    description:
      'A living record of curiosity, collaboration and practical learning across Bunifu classrooms and communities.',
    image: `${SITE_ORIGIN}/whalebot.webp`,
  },
  '/privacy': {
    title: 'Privacy Policy | bunifu-cms & Bunifu Youths Kenya',
    description:
      'Privacy Policy for bunifu-cms and Bunifu Youths Kenya, including how Google user data is accessed, used, stored and protected.',
    image: `${SITE_ORIGIN}/final.webp`,
    robots: 'noindex, follow',
  },
  '/bunifu-cms': {
    title: 'bunifu-cms | Activities for Students and Schools',
    description:
      'Access and coordinate Bunifu activities, sessions and program updates for participating students, schools and authorized users.',
    image: `${SITE_ORIGIN}/final.webp`,
  },
};

const productTitleBases: Record<string, string> = {
  'a1-magnetic-blocks': 'A1 Coding Robot Kit',
  'a7-magnetic-blocks': 'A7 Coding Robot Kit',
  'd1-modular-coding': 'D1 App Coding Robot Kit',
  'c3-pro': 'C3 Pro Coding Robot Kit',
  'pubbo-ai-robot': 'Pubbo AI Robot',
  'rocky-modular': 'Rocky Robot Kit',
  'e7-pro': 'E7 Pro Robot Kit',
  'eagle-1003-drone': 'Eagle 1003 Drone',
};

const collectionTitles: Record<string, string> = {
  'makers-quest': "Maker's QUEST | Bunifu Gallery",
  'creative-coding-innovators': 'Creative Coding & Young Innovators | Bunifu Gallery',
  'stem-school-outreach': 'STEM School Outreach & Coding Clubs | Bunifu Gallery',
  'first-global-robotics-competitions': 'First Global Robotics Competitions | Bunifu Gallery',
  'startup-africa-showcase': 'Startup Africa Showcase | Bunifu Gallery',
  'hands-on-coding-workshops': 'Hands-On Coding & Robotics | Bunifu Gallery',
  'educator-training-school-leadership': 'Educator Training & School Leadership | Bunifu Gallery',
  'robots-prototypes-3d-creations': 'Robots, Prototypes & 3D Creations | Bunifu Gallery',
};

export function normalizePathname(pathname: string) {
  if (pathname === '/') return pathname;
  return pathname.replace(/\/+$/, '');
}

export function canonicalUrl(pathname: string) {
  const normalizedPath = normalizePathname(pathname);
  return normalizedPath === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${normalizedPath}`;
}

export function getSeoMetadata(pathname: string): SeoMetadata | undefined {
  const normalizedPath = normalizePathname(pathname);
  const staticEntry = staticMetadata[normalizedPath];

  if (staticEntry) {
    return { ...staticEntry, canonical: canonicalUrl(normalizedPath) };
  }

  if (normalizedPath.startsWith('/shop/')) {
    const slug = normalizedPath.slice('/shop/'.length);
    const product = SHOP_PRODUCTS.find((entry) => entry.slug === slug);
    const titleBase = productTitleBases[slug];
    if (product && titleBase) {
      const age = product.ageLabel ? ` (${product.ageLabel})` : '';
      const title = `${titleBase}${age} | Bunifu Shop`;
      return {
        title,
        description: product.shortDescription,
        canonical: canonicalUrl(normalizedPath),
        image: canonicalUrl(product.images[0]),
        ogType: 'product',
      };
    }
  }

  if (normalizedPath.startsWith('/gallery/')) {
    const slug = normalizedPath.slice('/gallery/'.length);
    const collection = galleryCollections.find(
      (entry) => entry.slug === slug && entry.published,
    );
    const title = collectionTitles[slug];
    if (collection && title) {
      return {
        title,
        description: collection.shortDescription,
        canonical: canonicalUrl(normalizedPath),
        image: canonicalUrl(collection.coverImage),
      };
    }
  }

  return undefined;
}
