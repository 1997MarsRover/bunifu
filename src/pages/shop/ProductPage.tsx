import { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Minus, Phone, Plus } from 'lucide-react';
import {
  getProductBySlug,
  formatProductPrice,
  productCardSubtitle,
} from '../../lib/shopProducts';
import {
  productInquiryMailto,
  shopConfig,
  supportPhoneTelLink,
  whatsappProductInquiryLink,
} from '../../lib/shopConfig';
import ShopLayout from '../../components/shop/ShopLayout';

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Bunifu Shop`;
    }
    setQty(1);
  }, [product]);

  const inquiry = useMemo(() => {
    if (!product) return null;
    const pageUrl =
      typeof window !== 'undefined' ? `${window.location.origin}/shop/${product.slug}` : undefined;
    return {
      name: product.name,
      slug: product.slug,
      priceKes: product.priceKes,
      quantity: qty,
      pageUrl,
    };
  }, [product, qty]);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const whatsappHref = inquiry ? whatsappProductInquiryLink(inquiry) : '#';
  const mailtoHref = inquiry ? productInquiryMailto(inquiry) : '#';
  const telHref = supportPhoneTelLink();

  return (
    <ShopLayout>
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 md:py-12">
        <Link to="/shop" className="text-sm font-bold text-brand-blue hover:text-brand-green mb-6 inline-block">
          ← All products
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-card"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full aspect-square object-cover"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-bold uppercase tracking-wide text-brand-green mb-2">
              {productCardSubtitle(product)}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">{product.name}</h1>
            <p className="text-2xl font-bold text-brand-blue mb-2">{formatProductPrice(product)}</p>
            <p className="text-sm text-gray-600 mb-6">
              Contact us to confirm stock, delivery or pickup at {shopConfig.pickupLocation}, and M-Pesa
              payment—no online checkout.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

            {!product.inStock && (
              <p className="text-brand-red font-semibold mb-6">
                This item may be temporarily unavailable—we can still advise on alternatives.
              </p>
            )}

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold text-brand-dark">Quantity</span>
              <div className="flex items-center rounded-full border border-gray-200">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="p-2.5 hover:bg-gray-50 rounded-l-full"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-bold">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="p-2.5 hover:bg-gray-50 rounded-r-full"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold hover:opacity-95 transition-opacity"
              >
                <MessageCircle className="w-5 h-5" />
                Enquire on WhatsApp
              </a>
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-brand-dark font-bold text-brand-dark hover:bg-brand-dark hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {shopConfig.supportPhone}
              </a>
              <a
                href={mailtoHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-brand-blue font-bold text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </ShopLayout>
  );
}
