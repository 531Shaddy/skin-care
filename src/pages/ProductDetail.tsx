import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react';
import { getProduct, products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../components/ui/Toast';
import ProductGallery from '../components/product/ProductGallery';
import ProductCard from '../components/product/ProductCard';
import FAQ from '../components/product/FAQ';
import Reviews from '../components/product/Reviews';
import Rating from '../components/ui/Rating';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { formatPrice } from '../lib/utils';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug || '');
  const { addItem, wishlist, toggleWishlist } = useCart();
  const toast = useToast();
  const [qty, setQty] = useState(1);
  const [subscription, setSubscription] = useState(false);
  const [tab, setTab] = useState<'details' | 'ingredients' | 'reviews'>('details');

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="font-serif text-4xl mb-4">Product not found</h1>
        <Link to="/shop"><Button>Back to shop</Button></Link>
      </div>
    );
  }

  const isWished = wishlist.includes(product.id);
  const finalPrice = subscription ? product.price * 0.85 : product.price;
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const faqs = [
    { q: 'Is this safe for sensitive skin?', a: 'Yes. This formula is dermatologist-tested, fragrance-free, and clinically evaluated on sensitive skin types.' },
    { q: 'How long until I see results?', a: 'Most customers notice visible improvements in 2–4 weeks with consistent use. Skin cycles take ~28 days, so patience pays off.' },
    { q: 'Can I use this with retinol?', a: 'Yes, this pairs beautifully with retinol. Apply this first, let it absorb for 60 seconds, then layer retinol.' },
    { q: 'What\'s your return policy?', a: 'We offer a 30-day money-back guarantee. If you\'re not in love, send it back — no questions asked.' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
      {/* Breadcrumbs */}
      <nav className="text-xs text-charcoal-soft mb-8 flex items-center gap-2">
        <Link to="/" className="hover:text-charcoal">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-charcoal">Shop</Link>
        <span>/</span>
        <span className="text-charcoal">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <ProductGallery images={product.gallery} name={product.name} />

        <div>
          <div className="flex items-center gap-2 mb-3">
            {product.badges.slice(0, 3).map((b) => <Badge key={b}>{b}</Badge>)}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl mb-3">{product.name}</h1>
          <p className="text-charcoal-soft mb-4">{product.tagline}</p>
          <div className="flex items-center gap-3 mb-6">
            <Rating value={product.rating} count={product.reviewCount} />
          </div>

          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-serif">{formatPrice(finalPrice)}</span>
            {product.compareAt && <span className="text-lg text-charcoal-soft line-through">{formatPrice(product.compareAt)}</span>}
            {subscription && <span className="text-sm text-sage-dark">Subscribe & save 15%</span>}
          </div>

          {/* Purchase options */}
          <div className="space-y-3 mb-6 p-5 bg-cream rounded-2xl">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="radio" checked={!subscription} onChange={() => setSubscription(false)} className="mt-1 accent-charcoal" />
              <div>
                <p className="text-sm font-medium">One-time purchase · {formatPrice(product.price)}</p>
              </div>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="radio" checked={subscription} onChange={() => setSubscription(true)} className="mt-1 accent-charcoal" />
              <div>
                <p className="text-sm font-medium">Subscribe & save 15% · {formatPrice(product.price * 0.85)}</p>
                <p className="text-xs text-charcoal-soft">Delivered every 30 days. Pause or cancel anytime.</p>
              </div>
            </label>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs uppercase tracking-widest">Quantity</span>
            <div className="flex items-center border border-sand rounded-full">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 hover:bg-sand/30 rounded-l-full"><Minus className="w-3.5 h-3.5" /></button>
              <span className="px-4 text-sm">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="p-3 hover:bg-sand/30 rounded-r-full"><Plus className="w-3.5 h-3.5" /></button>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 mb-6">
            <Button size="lg" className="flex-1" onClick={() => { addItem(product, qty, subscription); toast.show(`Added ${qty} × ${product.name}`); }}>
              Add to bag · {formatPrice(finalPrice * qty)}
            </Button>
            <button onClick={() => toggleWishlist(product.id)} className="p-4 border border-sand rounded-full hover:bg-sand/30" aria-label="Wishlist">
              <Heart className={`w-4 h-4 ${isWished ? 'fill-charcoal text-charcoal' : ''}`} />
            </button>
          </div>
          <Button variant="secondary" size="lg" className="w-full" onClick={() => { addItem(product, qty, subscription); window.location.href = '/checkout'; }}>
            Buy now
          </Button>

          {/* Trust */}
          <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-sand">
            <div className="flex flex-col items-center text-center gap-1">
              <Truck className="w-4 h-4 text-sage-dark" />
              <span className="text-[11px] text-charcoal-soft">Free shipping</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <RotateCcw className="w-4 h-4 text-sage-dark" />
              <span className="text-[11px] text-charcoal-soft">30-day returns</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <ShieldCheck className="w-4 h-4 text-sage-dark" />
              <span className="text-[11px] text-charcoal-soft">Secure checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-20">
        <div className="flex gap-8 border-b border-sand mb-8 overflow-x-auto">
          {[
            { id: 'details', label: 'Details' },
            { id: 'ingredients', label: 'Ingredients' },
            { id: 'reviews', label: `Reviews (${product.reviewCount})` },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as any)}
              className={`pb-4 text-sm uppercase tracking-widest whitespace-nowrap border-b-2 -mb-px transition-colors ${tab === t.id ? 'border-charcoal text-charcoal' : 'border-transparent text-charcoal-soft hover:text-charcoal'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'details' && (
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-serif text-2xl mb-4">About this product</h3>
              <p className="text-charcoal-soft leading-relaxed mb-6">{product.description}</p>
              <h4 className="text-xs uppercase tracking-widest mb-3">Key benefits</h4>
              <ul className="space-y-2">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage mt-1.5" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-3">Key ingredients</h4>
              <div className="space-y-4 mb-6">
                {product.keyIngredients.map((k) => (
                  <div key={k.name} className="pb-4 border-b border-sand/60">
                    <p className="font-serif text-lg">{k.name}</p>
                    <p className="text-sm text-charcoal-soft">{k.benefit}</p>
                  </div>
                ))}
              </div>
              <h4 className="text-xs uppercase tracking-widest mb-3">How to use</h4>
              <p className="text-sm text-charcoal-soft leading-relaxed">{product.directions}</p>
            </div>
          </div>
        )}

        {tab === 'ingredients' && (
          <div>
            <h3 className="font-serif text-2xl mb-4">Full ingredients list</h3>
            <p className="text-sm text-charcoal-soft leading-relaxed mb-6">{product.ingredients.join(', ')}.</p>
            <h4 className="text-xs uppercase tracking-widest mb-3">Clinical claims</h4>
            <ul className="space-y-2">
              {product.clinical.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage mt-1.5" /> {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        {tab === 'reviews' && <Reviews rating={product.rating} count={product.reviewCount} />}
      </div>

      {/* FAQ */}
      <div className="mt-20">
        <h2 className="font-serif text-4xl mb-8">Frequently asked</h2>
        <FAQ items={faqs} />
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-serif text-4xl mb-8">You may also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      )}
    </motion.div>
  );
}