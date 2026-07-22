import { motion } from 'framer-motion';
import { blogPosts } from '../data/content';
import { Clock } from 'lucide-react';

export default function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-sage-dark mb-3">The journal</p>
        <h1 className="font-serif text-5xl md:text-6xl mb-4">Skincare, decoded.</h1>
        <p className="text-charcoal-soft max-w-xl mx-auto">Guides, ingredient deep-dives, and honest advice from our team of dermatologists and aestheticians.</p>
      </div>

      {/* Featured */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-2 gap-10 mb-16 items-center cursor-pointer group"
      >
        <div className="aspect-[4/3] rounded-2xl overflow-hidden">
          <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-4 text-xs uppercase tracking-widest text-sage-dark">
            <span>{featured.category}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.readTime}</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-4 group-hover:text-sage-dark transition-colors">{featured.title}</h2>
          <p className="text-charcoal-soft leading-relaxed mb-4">{featured.excerpt}</p>
          <p className="text-xs text-charcoal-soft">{featured.date}</p>
        </div>
      </motion.article>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rest.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="cursor-pointer group"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
              <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex items-center gap-3 mb-3 text-xs uppercase tracking-widest text-sage-dark">
              <span>{post.category}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
            </div>
            <h3 className="font-serif text-2xl mb-2 group-hover:text-sage-dark transition-colors">{post.title}</h3>
            <p className="text-sm text-charcoal-soft leading-relaxed">{post.excerpt}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}