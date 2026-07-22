import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Lock, Truck, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { formatPrice } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const { items, subtotal, clear } = useCart();
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const shipping = subtotal >= 50 ? 0 : 6;
  const total = subtotal + shipping;

  if (items.length === 0 && !done) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-32 text-center">
        <h1 className="font-serif text-4xl mb-4">Your bag is empty</h1>
        <Link to="/shop"><Button>Start shopping</Button></Link>
      </div>
    );
  }

  if (done) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-32 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }} className="w-20 h-20 mx-auto mb-6 rounded-full bg-sage flex items-center justify-center">
          <Check className="w-9 h-9 text-ivory" />
        </motion.div>
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Thank you.</h1>
        <p className="text-charcoal-soft mb-2">Order #KM-{Math.floor(Math.random() * 90000 + 10000)}</p>
        <p className="text-charcoal-soft mb-8 max-w-md mx-auto">We've sent a confirmation to your email. Your kindred routine is on its way.</p>
        <Link to="/shop"><Button>Continue shopping</Button></Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
      <div className="flex items-center gap-2 mb-10 text-xs uppercase tracking-widest text-charcoal-soft">
        <Lock className="w-3.5 h-3.5" /> Secure checkout
      </div>

      {/* Steps */}
      <div className="flex items-center gap-4 mb-10">
        {[{ n: 1, label: 'Shipping' }, { n: 2, label: 'Delivery' }, { n: 3, label: 'Payment' }].map((s, i) => (
          <div key={s.n} className="flex items-center gap-4 flex-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${step >= s.n ? 'bg-charcoal text-ivory' : 'bg-sand text-charcoal-soft'}`}>{s.n}</div>
            <span className={`text-sm ${step >= s.n ? 'text-charcoal' : 'text-charcoal-soft'}`}>{s.label}</span>
            {i < 2 && <div className="flex-1 h-px bg-sand" />}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_400px] gap-12">
        <div>
          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <h2 className="font-serif text-3xl mb-6">Shipping information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="First name" placeholder="Elena" />
                <Input label="Last name" placeholder="Marchetti" />
              </div>
              <Input label="Email" type="email" placeholder="you@email.com" />
              <Input label="Address" placeholder="123 Kindness Lane" />
              <div className="grid md:grid-cols-3 gap-4">
                <Input label="City" placeholder="Brooklyn" />
                <Input label="State" placeholder="NY" />
                <Input label="ZIP" placeholder="11201" />
              </div>
              <Input label="Phone" type="tel" placeholder="(555) 123-4567" />
              <Button size="lg" className="mt-6" onClick={() => setStep(2)}>Continue to delivery →</Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <h2 className="font-serif text-3xl mb-6">Delivery method</h2>
              {[
                { label: 'Standard shipping', time: '4–6 business days', price: shipping === 0 ? 'Free' : formatPrice(6), selected: true },
                { label: 'Express shipping', time: '2 business days', price: formatPrice(12), selected: false },
                { label: 'Overnight', time: 'Next business day', price: formatPrice(24), selected: false },
              ].map((o) => (
                <label key={o.label} className={`flex items-center justify-between p-5 border rounded-2xl cursor-pointer ${o.selected ? 'border-charcoal bg-cream' : 'border-sand'}`}>
                  <div className="flex items-center gap-3">
                    <input type="radio" defaultChecked={o.selected} className="accent-charcoal" />
                    <div>
                      <p className="text-sm font-medium">{o.label}</p>
                      <p className="text-xs text-charcoal-soft">{o.time}</p>
                    </div>
                  </div>
                  <span className="text-sm">{o.price}</span>
                </label>
              ))}
              <div className="flex gap-3 mt-6">
                <Button variant="outline" onClick={() => setStep(1)}>← Back</Button>
                <Button size="lg" onClick={() => setStep(3)}>Continue to payment →</Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <h2 className="font-serif text-3xl mb-6">Payment</h2>
              <div className="p-5 bg-cream rounded-2xl flex items-center gap-3 text-sm">
                <CreditCard className="w-5 h-5 text-sage-dark" />
                <span>All transactions are encrypted and secure.</span>
              </div>
              <Input label="Card number" placeholder="1234 5678 9012 3456" />
              <div className="grid grid-cols-2 gap-4">
                <Input label="Expiry" placeholder="MM / YY" />
                <Input label="CVC" placeholder="123" />
              </div>
              <Input label="Name on card" placeholder="Elena Marchetti" />
              <div className="flex gap-3 mt-6">
                <Button variant="outline" onClick={() => setStep(2)}>← Back</Button>
                <Button size="lg" onClick={() => { clear(); setDone(true); }}>Place order · {formatPrice(total)}</Button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Order summary */}
        <aside className="lg:sticky lg:top-28 h-fit">
          <div className="bg-cream rounded-2xl p-6">
            <h3 className="font-serif text-2xl mb-4">Order summary</h3>
            <div className="space-y-3 mb-4 max-h-80 overflow-y-auto">
              {items.map((i) => (
                <div key={i.product.id} className="flex gap-3">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-sand flex-shrink-0">
                    <img src={i.product.image} alt="" className="w-full h-full object-cover" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-charcoal text-ivory text-[10px] rounded-full flex items-center justify-center">{i.quantity}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{i.product.name}</p>
                    <p className="text-xs text-charcoal-soft">{i.subscription ? 'Subscribe & save' : 'One-time'}</p>
                  </div>
                  <p className="text-sm">{formatPrice((i.subscription ? i.product.price * 0.85 : i.product.price) * i.quantity)}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2 py-4 border-y border-sand text-sm">
              <div className="flex justify-between"><span className="text-charcoal-soft">Subtotal</span><span>{formatPrice(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-charcoal-soft">Shipping</span><span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span></div>
            </div>
            <div className="flex justify-between items-baseline pt-4">
              <span className="text-sm uppercase tracking-widest">Total</span>
              <span className="font-serif text-3xl">{formatPrice(total)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}