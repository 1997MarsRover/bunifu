import { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PATTERN_URL } from '../../lib/assets';
import { SHOP_PRODUCTS, filterProducts, type ShopCategoryFilterId } from '../../lib/shopProducts';
import ShopLayout from '../../components/shop/ShopLayout';
import ShopProductCard from '../../components/shop/ShopProductCard';
import ShopCategoryFilter from '../../components/shop/ShopCategoryFilter';

export default function ShopPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<ShopCategoryFilterId>('all');
  const category = location.pathname === '/shop/laptops' ? 'laptops' : selectedCategory;

  const products = useMemo(() => {
    const list = filterProducts(category);
    return [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [category]);

  const featured = useMemo(
    () => SHOP_PRODUCTS.filter((p) => p.featured && p.inStock).slice(0, 4),
    [],
  );

  return (
    <ShopLayout>
      <section className="relative overflow-hidden border-b border-brand-green/10 bg-gradient-to-br from-brand-green/10 via-white to-brand-blue/10">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url(${PATTERN_URL})`,
            backgroundSize: '480px',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3">
            Bunifu shop
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-brand-dark tracking-tight mb-4">
            {category === 'laptops' ? 'Laptops & computers' : 'STEM kits, laptops and resources'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {category === 'laptops'
              ? 'Explore the available models, compare their specs and see every photo. Enquire to confirm stock, delivery and M-Pesa payment.'
              : 'Explore robotics kits, drones and computers for Bunifu learners and families. Tap a product to enquire via WhatsApp, phone, or email—we’ll confirm stock, delivery, and M-Pesa payment.'}
          </p>
          {category !== 'laptops' && (
            <Link to="/shop/laptops" className="inline-flex mt-6 px-6 py-3 rounded-full bg-brand-dark text-white font-bold hover:bg-brand-blue transition-colors">
              Shop laptops →
            </Link>
          )}
        </div>
      </section>

      {featured.length > 0 && category === 'all' && (
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-10">
          <h2 className="text-xl font-bold text-brand-dark mb-6 text-center">Popular picks</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <ShopProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}

      <section className="max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-14">
        <ShopCategoryFilter active={category} onChange={(next) => {
          if (next === 'laptops') navigate('/shop/laptops');
          else if (location.pathname === '/shop/laptops') navigate('/shop');
          setSelectedCategory(next);
        }} />
        {category === 'laptops' && <p className="mt-8 text-center text-sm text-gray-600">Seven models · Prices in Kenyan shillings · Tap a model for more photos</p>}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10"
        >
          {products.map((product, index) => (
            <ShopProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
        {products.length === 0 && (
          <p className="text-center text-gray-500 mt-12">No products in this category yet.</p>
        )}
      </section>
    </ShopLayout>
  );
}
