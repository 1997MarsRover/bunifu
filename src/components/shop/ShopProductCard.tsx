import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { ShopProduct } from '../../lib/shopProducts';
import { formatProductPrice, productCardSubtitle } from '../../lib/shopProducts';

type ShopProductCardProps = {
  product: ShopProduct;
  index?: number;
};

export default function ShopProductCard({ product, index = 0 }: ShopProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      className="group flex flex-col rounded-3xl bg-white border border-gray-100 shadow-card overflow-hidden hover:shadow-card-hover transition-shadow"
    >
      <Link to={`/shop/${product.slug}`} className="block relative aspect-[4/3] bg-brand-light overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {!product.inStock && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-dark/90 text-white text-xs font-bold">
            Out of stock
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
        <p className="text-sm text-gray-600 mt-2 line-clamp-2 flex-1">{product.shortDescription}</p>
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
    </motion.article>
  );
}
