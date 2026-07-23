import { motion } from 'framer-motion';
import { Leaf, Heart, Award, Recycle } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img 
        // src="https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&w=2000&q=80" 
        src = "https://images.unsplash.com/photo-1670201203208-055d6d79db4a?w=2000&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWJvdXQlMjB1cyUyMGZvciUyMHNraW4lMjBjYXJlfGVufDB8fDB8fHww"
        alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/30" />
        <div className="relative h-full max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center text-ivory">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-[0.3em] mb-4">Our story</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-5xl md:text-7xl mb-6">Skincare as kinship.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-xl text-lg leading-relaxed">
            Kindred Market began with a simple belief: great skincare should feel like a kind gesture — to your skin, to the planet, to the people who make it.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-4 lg:px-8 py-24">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" alt="Founder" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sage-dark mb-3">Meet the founder</p>
            <h2 className="font-serif text-4xl mb-6">Elena Marchetti</h2>
            <div className="space-y-4 text-charcoal-soft leading-relaxed">
              <p>After a decade in cosmetic chemistry and a decade more battling her own sensitive skin, Elena started Kindred Market in her Brooklyn kitchen in 2021.</p>
              <p>"I was tired of choosing between formulas that worked and formulas I actually trusted. I wanted both — and I knew other people did too."</p>
              <p>What began as a small batch of three products made for friends is now a beloved brand trusted by 50,000+ customers — but the mission hasn't changed. Every formula is still developed in-house, tested on real skin (never animals), and made with ingredients Elena would put on her own face.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-cream py-24">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-sage-dark mb-3">Our mission</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">To make skincare that feels as good as it works — for people and planet.</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
            {[
              { icon: Award, title: 'Dermatologist-backed', desc: 'Every formula is reviewed by board-certified dermatologists before it ever reaches your shelf.' },
              { icon: Leaf, title: 'Ethically sourced', desc: 'We work directly with growers who share our values — fair wages, regenerative practices, transparent supply chains.' },
              { icon: Heart, title: 'Cruelty-free, always', desc: 'Leaping Bunny certified. We never test on animals, and we never will.' },
              { icon: Recycle, title: 'Committed to circular', desc: 'Refillable packaging, carbon-neutral shipping, and a take-back program for every empty bottle.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-sage-dark" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">{title}</h3>
                  <p className="text-sm text-charcoal-soft leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-24">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-sage-dark mb-3">What we stand for</p>
          <h2 className="font-serif text-4xl md:text-5xl">Our values.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: '01', title: 'Radical transparency', desc: 'Full ingredient lists, sourcing stories, and clinical data — always available, never hidden.' },
            { n: '02', title: 'Kindness first', desc: 'To your skin, to our team, to the communities we work with, and to the planet.' },
            { n: '03', title: 'Science, simplified', desc: 'We believe in actives at effective concentrations — and in explaining them in plain English.' },
          ].map((v) => (
            <div key={v.n} className="p-8 border border-sand rounded-2xl">
              <p className="font-serif text-5xl text-sage mb-4">{v.n}</p>
              <h3 className="font-serif text-2xl mb-3">{v.title}</h3>
              <p className="text-sm text-charcoal-soft leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 lg:px-8 py-20 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to find your kindred?</h2>
        <p className="text-charcoal-soft mb-8 max-w-xl mx-auto">Take our 2-minute skin quiz and get a personalized routine, curated by dermatologists.</p>
        <Link to="/quiz"><Button size="lg">Take the skin quiz</Button></Link>
      </section>
    </div>
  );
}