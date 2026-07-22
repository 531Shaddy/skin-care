import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, X, ShoppingBag, Truck, ShieldCheck, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/ui/Button';
import { formatPrice } from '../lib/utils';
import { products } from '../data/products';

export default function Cart() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();
  const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 6;
  const total = subtotal + shipping;
  const recommended = products.filter((p) => !items.find((i) => i.product.id === p.id)).slice(0, 4);

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-32 text-center">
        <ShoppingBag className="w-12 h-12 mx-auto mb-6 text-sage" />
        <h1 className="font-serif text-4xl mb-4">Your bag is empty.</h1>
        <p className="text-charcoal-soft mb-8">Let's fix that.</p>
        <Link to="/shop"><Button size="lg">Start shopping</Button></Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
      <h1 className="font-serif text-4xl md:text-5xl mb-10">Your bag</h1>

      <div className="grid lg:grid-cols-[1fr_400px] gap-12">
        {/* Items */}
        <div className="space-y-6">
          {items.map((item) => (
            <motion.div
              key={item.product.id}
              layout
              className="flex gap-5 p-5 bg-cream rounded-2xl"
            >
              <Link to={`/shop/${item.product.slug}`} className="w-24 h-28 md:w-32 md:h-36 rounded-xl overflow-hidden flex-shrink-0 bg-sand">
                <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
              </Link>
              <div className="flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Link to={`/shop/${item.product.slug}`}><h3 className="font-serif text-xl hover:text-sage-dark">{item.product.name}</h3></Link>
                    <p className="text-xs text-charcoal-soft mt-1">{item.subscription ? 'Subscribe & save · Delivered every 30 days' : 'One-time purchase'}</p>
                  </div>
                  <button onClick={() => removeItem(item.product.id)} className="p-1 hover:bg-sand rounded-full" aria-label="Remove"><X className="w-4 h-4" /></button>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center border border-sand rounded-full bg-ivory">
                    <button onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))} className="p-2 hover:bg-sand/50 rounded-l-full"><Minus className="w-3 h-3" /></button>
                    <span className="px-3 text-sm">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-2 hover:bg-sand/50 rounded-r-full"><Plus className="w-3 h-3" /></button>
                  </div>
                  <p className="font-serif text-xl">
                    {formatPrice((item.subscription ? item.product.price * 0.85 : item.product.price) * item.quantity)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <aside className="lg:sticky lg:top-28 h-fit">
          <div className="bg-cream rounded-2xl p-6 space-y-4">
            <h2 className="font-serif text-2xl mb-4">Order summary</h2>

            <div className="flex gap-2">
              <input placeholder="Promo code" className="flex-1 px-4 py-2.5 bg-ivory border border-sand rounded-full text-sm focus:border-charcoal focus:outline-none" />
              <Button variant="outline" size="sm">Apply</Button>
            </div>

            <div className="space-y-2 py-4 border-y border-sand text-sm">
              <div className="flex justify-between"><span className="text-charcoal-soft">Subtotal</span><span>{formatPrice(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-charcoal-soft">Shipping</span><span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span></div>
              {subtotal > 0 && subtotal < 50 && (
                <p className="text-xs text-sage-dark pt-1">Add {formatPrice(50 - subtotal)} more for free shipping.</p>
              )}
            </div>

            <div className="flex justify-between items-baseline">
              <span className="text-sm uppercase tracking-widest">Total</span>
              <span className="font-serif text-3xl">{formatPrice(total)}</span>
            </div>

            <Link to="/checkout"><Button size="lg" className="w-full mt-4">Checkout</Button></Link>

            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-sand">
              <div className="flex flex-col items-center text-center gap-1">
                <Truck className="w-4 h-4 text-sage-dark" />
                <span className="text-[10px] text-charcoal-soft">Free shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <ShieldCheck className="w-4 h-4 text-sage-dark" />
                <span className="text-[10px] text-charcoal-soft">Secure checkout</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <Leaf className="w-4 h-4 text-sage-dark" />
                <span className="text-[10px] text-charcoal-soft">Cruelty-free</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Recommended */}
      <div className="mt-20">
        <h2 className="font-serif text-3xl mb-8">You might also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recommended.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </div>
    </div>
  );
}