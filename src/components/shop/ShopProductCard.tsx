import { Link } from 'react-router-dom';
import type { ShopProduct } from '../../lib/shopProducts';
import { formatProductPrice, productCardSubtitle } from '../../lib/shopProducts';
import { getImageDimensions } from '../../lib/imageDimensions';

type ShopProductCardProps = {
  product: ShopProduct;
  index?: number;
};

export default function ShopProductCard({ product }: ShopProductCardProps) {
  const imageDimensions = getImageDimensions(product.images[0]);

  return (
    <article
      className="group flex flex-col rounded-3xl bg-white border border-gray-100 shadow-card overflow-hidden hover:shadow-card-hover transition-shadow"
    >
      <Link to={`/shop/${product.slug}`} className="block relative aspect-[4/3] bg-brand-light overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          width={imageDimensions?.width}
          height={imageDimensions?.height}
          loading="lazy"
          decoding="async"
          className={`w-full h-full ${product.specs ? 'object-contain p-5' : 'object-cover'} group-hover:scale-105 group-focus-within:scale-105 transition-transform duration-500 motion-reduce:transition-none`}
        />
        {!product.inStock && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-dark/90 text-white text-xs font-bold">
            Out of stock
          </span>
        )}
        {product.condition && (
          <span className="absolute bottom-3 left-3 right-3 w-fit max-w-[calc(100%-1.5rem)] px-3 py-1 rounded-full bg-white/95 text-brand-dark text-xs font-bold shadow-sm">
            {product.condition}
          </span>
        )}
      </Link>
      <div className="flex flex-col flex-1 p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-brand-green mb-1">
          {productCardSubtitle(product)}
        </p>
        <Link to={`/shop/${product.slug}`}>
          <h3 className="font-bold text-lg text-brand-dark group-hover:text-brand-blue transition-colors">
            {product.name}
          </h3>
        </Link>
        {product.specs ? (
          <ul className="text-sm text-gray-600 mt-3 space-y-1 flex-1" aria-label="Key specifications">
            {product.specs.slice(0, 3).map((spec) => <li key={spec}>{spec}</li>)}
          </ul>
        ) : <p className="text-sm text-gray-600 mt-2 line-clamp-2 flex-1">{product.shortDescription}</p>}
        <div className="flex flex-col items-start gap-0.5 mt-4 pt-4 border-t border-gray-100">
          <span className="font-bold text-brand-dark">{formatProductPrice(product)}</span>
          <Link
            to={`/shop/${product.slug}`}
            className="text-sm font-bold text-brand-blue hover:text-brand-green mt-2"
          >
            View →
          </Link>
        </div>
      </div>
    </article>
  );
}
