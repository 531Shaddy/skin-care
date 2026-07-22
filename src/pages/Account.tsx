import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { User, Package, Heart, MapPin, Repeat, LogOut } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

type Tab = 'login' | 'register' | 'forgot' | 'dashboard';

export default function Account() {
  const [params] = useSearchParams();
  const initialTab: Tab = params.get('tab') === 'wishlist' ? 'dashboard' : 'login';
  const [tab, setTab] = useState<Tab>(initialTab);
  const [loggedIn, setLoggedIn] = useState(false);
  const [dashTab, setDashTab] = useState<'overview' | 'orders' | 'wishlist' | 'addresses' | 'subscriptions'>('overview');

  if (loggedIn) {
    return (
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-10">
          <h1 className="font-serif text-4xl">Welcome back, Elena.</h1>
          <button onClick={() => setLoggedIn(false)} className="flex items-center gap-2 text-sm text-charcoal-soft hover:text-charcoal">
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>

        <div className="grid lg:grid-cols-[240px_1fr] gap-10">
          <nav className="space-y-1">
            {[
              { id: 'overview', label: 'Overview', icon: User },
              { id: 'orders', label: 'Orders', icon: Package },
              { id: 'wishlist', label: 'Wishlist', icon: Heart },
              { id: 'addresses', label: 'Addresses', icon: MapPin },
              { id: 'subscriptions', label: 'Subscriptions', icon: Repeat },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setDashTab(id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-full text-sm text-left transition-colors ${dashTab === id ? 'bg-charcoal text-ivory' : 'hover:bg-sand/50'}`}
              >
                <Icon className="w-4 h-4" /> {label}
              </button>
            ))}
          </nav>

          <div>
            {dashTab === 'overview' && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { label: 'Loyalty points', value: '2,450' },
                    { label: 'Active subscriptions', value: '2' },
                    { label: 'Orders this year', value: '12' },
                  ].map((s) => (
                    <div key={s.label} className="p-6 bg-cream rounded-2xl">
                      <p className="text-xs uppercase tracking-widest text-charcoal-soft mb-2">{s.label}</p>
                      <p className="font-serif text-3xl">{s.value}</p>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-sage/10 rounded-2xl">
                  <p className="text-xs uppercase tracking-widest text-sage-dark mb-2">Loyalty rewards</p>
                  <p className="font-serif text-2xl mb-2">You're 550 points from your next reward.</p>
                  <p className="text-sm text-charcoal-soft">Earn 1 point for every $1 spent. Redeem at 3,000 points for $15 off.</p>
                </div>
              </div>
            )}

            {dashTab === 'orders' && (
              <div className="space-y-4">
                {[
                  { id: 'KM-10423', date: 'July 15, 2026', total: '$94.00', status: 'Delivered' },
                  { id: 'KM-10387', date: 'June 28, 2026', total: '$62.00', status: 'Delivered' },
                  { id: 'KM-10291', date: 'June 12, 2026', total: '$128.00', status: 'Delivered' },
                ].map((o) => (
                  <div key={o.id} className="flex items-center justify-between p-5 bg-cream rounded-2xl">
                    <div>
                      <p className="text-sm font-medium">Order {o.id}</p>
                      <p className="text-xs text-charcoal-soft">{o.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">{o.total}</p>
                      <p className="text-xs text-sage-dark">{o.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {dashTab === 'wishlist' && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {products.slice(0, 3).map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
              </div>
            )}

            {dashTab === 'addresses' && (
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: 'Home', lines: ['123 Kindness Lane', 'Brooklyn, NY 11201'] },
                  { label: 'Work', lines: ['456 Grace Ave, Suite 8', 'New York, NY 10013'] },
                ].map((a) => (
                  <div key={a.label} className="p-5 bg-cream rounded-2xl">
                    <p className="text-xs uppercase tracking-widest text-sage-dark mb-2">{a.label}</p>
                    {a.lines.map((l) => <p key={l} className="text-sm">{l}</p>)}
                  </div>
                ))}
              </div>
            )}

            {dashTab === 'subscriptions' && (
              <div className="space-y-4">
                {products.slice(0, 2).map((p) => (
                  <div key={p.id} className="flex gap-4 p-5 bg-cream rounded-2xl">
                    <img src={p.image} alt="" className="w-20 h-20 rounded-xl object-cover" />
                    <div className="flex-1">
                      <p className="font-serif text-xl">{p.name}</p>
                      <p className="text-xs text-charcoal-soft">Delivered every 30 days · Next: Aug 12, 2026</p>
                      <p className="text-sm mt-1">{(p.price * 0.85).toFixed(2)} / delivery</p>
                    </div>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-20">
      {tab === 'login' && (
        <div>
          <h1 className="font-serif text-4xl mb-2">Welcome back.</h1>
          <p className="text-charcoal-soft mb-8">Sign in to your kindred account.</p>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setLoggedIn(true); }}>
            <Input label="Email" type="email" placeholder="you@email.com" />
            <Input label="Password" type="password" placeholder="••••••••" />
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2"><input type="checkbox" className="accent-charcoal" /> Remember me</label>
              <button type="button" onClick={() => setTab('forgot')} className="text-charcoal-soft hover:text-charcoal underline">Forgot password?</button>
            </div>
            <Button type="submit" size="lg" className="w-full">Sign in</Button>
          </form>
          <p className="text-sm text-center mt-6 text-charcoal-soft">
            New here? <button onClick={() => setTab('register')} className="text-charcoal underline">Create an account</button>
          </p>
        </div>
      )}

      {tab === 'register' && (
        <div>
          <h1 className="font-serif text-4xl mb-2">Join the kindred.</h1>
          <p className="text-charcoal-soft mb-8">Create your account in seconds.</p>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setLoggedIn(true); }}>
            <div className="grid grid-cols-2 gap-3">
              <Input label="First name" />
              <Input label="Last name" />
            </div>
            <Input label="Email" type="email" />
            <Input label="Password" type="password" />
            <label className="flex items-start gap-2 text-xs text-charcoal-soft">
              <input type="checkbox" className="accent-charcoal mt-0.5" />
              <span>Join the kindred — get skincare tips, early access, and 10% off your first order.</span>
            </label>
            <Button type="submit" size="lg" className="w-full">Create account</Button>
          </form>
          <p className="text-sm text-center mt-6 text-charcoal-soft">
            Already a member? <button onClick={() => setTab('login')} className="text-charcoal underline">Sign in</button>
          </p>
        </div>
      )}

      {tab === 'forgot' && (
        <div>
          <h1 className="font-serif text-4xl mb-2">Reset password.</h1>
          <p className="text-charcoal-soft mb-8">Enter your email and we'll send a reset link.</p>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setTab('login'); }}>
            <Input label="Email" type="email" />
            <Button type="submit" size="lg" className="w-full">Send reset link</Button>
          </form>
          <p className="text-sm text-center mt-6 text-charcoal-soft">
            <button onClick={() => setTab('login')} className="text-charcoal underline">← Back to sign in</button>
          </p>
        </div>
      )}
    </div>
  );
}