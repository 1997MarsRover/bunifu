import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppRoutes } from './App';
import { galleryCollections } from './data/galleryData';
import { SHOP_PRODUCTS } from './lib/shopProducts';

export const prerenderRoutes = [
  '/',
  '/how-it-works',
  '/careers',
  '/shop',
  ...SHOP_PRODUCTS.map((product) => `/shop/${product.slug}`),
  '/gallery',
  ...galleryCollections
    .filter((collection) => collection.published)
    .map((collection) => `/gallery/${collection.slug}`),
];

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  );
}
