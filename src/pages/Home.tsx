import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, ShieldCheck, Sparkles, Droplet, Award, Truck } from 'lucide-react';
import { products, bestSellers, newArrivals } from '../data/products';
import { testimonials, concerns } from '../data/content';
import ProductCard from '../components/product/ProductCard';
import Rating from '../components/ui/Rating';
import Button from '../components/ui/Button';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        <img
          // src="https://images.unsplash.com/photo-1598440947619-2c35c9aa4b35?auto=format&fit=crop&w=2000&q=80"
          src = "https://plus.unsplash.com/premium_photo-1674739375749-7efe56fc8bbb?w=2000&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2tpbmNhcmV8ZW58MHx8MHx8fDA%3D"
          alt="Kindred Market lifestyle"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/80 via-ivory/40 to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-4 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-sage-dark mb-6">New · The Summer Edit</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
              Skincare,<br />kindred to <em className="text-sage-dark">you.</em>
            </h1>
            <p className="text-lg text-charcoal-soft max-w-md mb-8 leading-relaxed">
              Clean, science-backed formulas crafted for every skin story. Dermatologist-developed, sustainably sourced, and made with intention.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/shop"><Button size="lg">Shop best sellers <ArrowRight className="w-4 h-4" /></Button></Link>
              <Link to="/quiz"><Button variant="outline" size="lg">Take the skin quiz</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-sand bg-cream">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Truck, text: 'Free shipping over $50' },
            { icon: ShieldCheck, text: '30-day money-back guarantee' },
            { icon: Leaf, text: 'Cruelty-free & vegan' },
            { icon: Award, text: 'Dermatologist-developed' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 justify-center md:justify-start">
              <Icon className="w-5 h-5 text-sage-dark" />
              <span className="text-xs uppercase tracking-wider">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SHOP BY CONCERN */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sage-dark mb-3">Shop by concern</p>
            <h2 className="font-serif text-4xl md:text-5xl">What's your skin telling you?</h2>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm hover:text-sage-dark">See all <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {concerns.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link to="/shop" className="group relative block aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={c.image} alt={c.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-ivory">
                  <h3 className="font-serif text-2xl">{c.name}</h3>
                  <span className="text-xs uppercase tracking-wider opacity-80">Shop now →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sage-dark mb-3">Best sellers</p>
            <h2 className="font-serif text-4xl md:text-5xl">Loved by thousands.</h2>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm hover:text-sage-dark">View all <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {bestSellers.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>

      {/* EDITORIAL SPLIT */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="aspect-[4/5] rounded-2xl overflow-hidden"
        >
          <img src="https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&w=1200&q=80" alt="" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-sage-dark mb-4">Our philosophy</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">Less noise.<br />More kindness.</h2>
          <p className="text-charcoal-soft leading-relaxed mb-6">
            We believe great skincare doesn't have to be complicated, expensive, or full of ingredients you can't pronounce. Every formula is built around a handful of proven actives — at the right concentrations, in the right combinations — so your skin gets exactly what it needs, and nothing it doesn't.
          </p>
          <Link to="/about"><Button variant="outline">Our story <ArrowRight className="w-4 h-4" /></Button></Link>
        </motion.div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sage-dark mb-3">Just landed</p>
            <h2 className="font-serif text-4xl md:text-5xl">New arrivals.</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {newArrivals.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>

      {/* INGREDIENT HIGHLIGHTS */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-sage-dark mb-3">Hero ingredients</p>
            <h2 className="font-serif text-4xl md:text-5xl">Nature, backed by science.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Droplet, name: 'Niacinamide', desc: 'Brightens, refines pores, and balances oil — the multitasker your routine needs.' },
              { icon: Leaf, name: 'Centella Asiatica', desc: 'An ancient botanical clinically proven to calm redness and support barrier repair.' },
              { icon: Sparkles, name: 'Ceramide Complex', desc: 'The building blocks of your skin barrier — replenished in every application.' },
            ].map(({ icon: Icon, name, desc }) => (
              <div key={name} className="bg-ivory p-8 rounded-2xl">
                <Icon className="w-8 h-8 text-sage-dark mb-4" />
                <h3 className="font-serif text-2xl mb-2">{name}</h3>
                <p className="text-sm text-charcoal-soft leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-sage-dark mb-3">Real results</p>
          <h2 className="font-serif text-4xl md:text-5xl">See the difference.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { label: 'Glow Drop · 4 weeks', before: 'https://images.unsplash.com/photo-1512290746430-4b823f4f9dce?auto=format&fit=crop&w=800&q=80', after: 'https://images.unsplash.com/photo-1614113489855-66422ad300a4?auto=format&fit=crop&w=800&q=80' },
            { label: 'Velvet Barrier Cream · 2 weeks', before: 'https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=800&q=80', after: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1905?auto=format&fit=crop&w=800&q=80' },
          ].map((item) => (
            <div key={item.label}>
              <div className="grid grid-cols-2 gap-3 rounded-2xl overflow-hidden mb-3">
                <div className="relative aspect-square">
                  <img src={item.before} alt="Before" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-ivory/90 px-3 py-1 text-[10px] uppercase tracking-widest rounded-full">Before</span>
                </div>
                <div className="relative aspect-square">
                  <img src={item.after} alt="After" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-ivory/90 px-3 py-1 text-[10px] uppercase tracking-widest rounded-full">After</span>
                </div>
              </div>
              <p className="text-sm text-center text-charcoal-soft">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-center text-charcoal-soft mt-6 max-w-xl mx-auto">*Individual results may vary. Photos shown are of actual customers who consented to share their results.</p>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-charcoal text-ivory py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-sage mb-3">Kind words</p>
            <h2 className="font-serif text-4xl md:text-5xl">Loved by 50,000+ customers.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-ivory/5 border border-ivory/10 rounded-2xl p-8"
              >
                <Rating value={t.rating} />
                <p className="font-serif text-xl mt-4 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-6 border-t border-ivory/10">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-ivory/60">{t.location} · {t.product}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-sage-dark mb-3">The Kindred difference</p>
          <h2 className="font-serif text-4xl md:text-5xl">Why choose us.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Award, title: 'Dermatologist-developed', desc: 'Every formula reviewed by board-certified dermatologists.' },
            { icon: Leaf, title: 'Clean ingredients', desc: 'No parabens, sulfates, or 1,500+ other questionable ingredients.' },
            { icon: Sparkles, title: 'Clinically proven', desc: 'Backed by independent clinical testing on real skin.' },
            { icon: Droplet, title: 'Sustainably made', desc: 'Refillable packaging, carbon-neutral shipping, B-Corp certified.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center p-6">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-sage/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-sage-dark" />
              </div>
              <h3 className="font-serif text-xl mb-2">{title}</h3>
              <p className="text-sm text-charcoal-soft leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SUBSCRIPTION */}
      <section className="bg-sage/10 py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-sage-dark mb-3">Subscribe & save</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Your routine, on repeat.</h2>
          <p className="text-charcoal-soft max-w-xl mx-auto mb-8 leading-relaxed">
            Subscribe to any product and save 15% on every order. Pause, skip, or cancel anytime — no commitments, no hassle.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {['Save 15% every order', 'Free shipping always', 'Pause or cancel anytime'].map((t) => (
              <div key={t} className="flex items-center gap-2 justify-center">
                <div className="w-5 h-5 rounded-full bg-sage flex items-center justify-center">
                  <svg className="w-3 h-3 text-ivory" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-sm">{t}</span>
              </div>
            ))}
          </div>
          <Link to="/shop"><Button size="lg">Start subscribing</Button></Link>
        </div>
      </section>

      {/* INSTAGRAM GALLERY */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-sage-dark mb-3">@kindredmarket</p>
          <h2 className="font-serif text-4xl md:text-5xl">Join the kindred.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {[
            'photo-1556228720-195a672e8a03',
            'photo-1620916566398-39f1143ab7be',
            'photo-1611930022073-b7a4ba5fcccd',
            'photo-1556228578-8c89e6adf883',
            'photo-1608571423902-eed4a5ad8108',
            'photo-1601049676869-702ea24cfd0a',
          ].map((id) => (
            <a key={id} href="#" className="aspect-square overflow-hidden group">
              <img src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&q=80`} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </a>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-cream py-20">
        <div className="max-w-2xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Stay kindred.</h2>
          <p className="text-charcoal-soft mb-8">Join 50,000+ getting skincare tips, early access, and 10% off your first order.</p>
          {subscribed ? (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sage-dark">
              Welcome to the kindred. Check your inbox ✨
            </motion.p>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-3 rounded-full bg-ivory border border-sand focus:border-charcoal focus:outline-none text-sm"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}