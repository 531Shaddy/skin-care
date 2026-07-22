import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useToast } from '../ui/Toast';
import Rating from '../ui/Rating';
import Badge from '../ui/Badge';
import { formatPrice } from '../../lib/utils';

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addItem, wishlist, toggleWishlist } = useCart();
  const toast = useToast();
  const isWished = wishlist.includes(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group flex flex-col"
    >
      <Link to={`/shop/${product.slug}`} className="relative block overflow-hidden rounded-2xl bg-sand/30 aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.onSale && <Badge tone="sale">Sale</Badge>}
          {product.newArrival && <Badge tone="new">New</Badge>}
          {product.bestSeller && !product.onSale && !product.newArrival && <Badge>Best seller</Badge>}
        </div>
        <button
          onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-ivory/90 backdrop-blur flex items-center justify-center hover:bg-ivory transition-colors"
          aria-label={isWished ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isWished ? 'fill-charcoal text-charcoal' : ''}`} />
        </button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
            toast.show(`Added ${product.name} to bag`);
          }}
          className="absolute bottom-3 left-3 right-3 py-3 rounded-full bg-charcoal text-ivory text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-3.5 h-3.5" /> Quick add
        </motion.button>
      </Link>

      <div className="mt-4 flex flex-col gap-1.5">
        <Link to={`/shop/${product.slug}`}>
          <h3 className="font-serif text-xl leading-tight hover:text-sage-dark transition-colors">{product.name}</h3>
        </Link>
        <p className="text-sm text-charcoal-soft line-clamp-1">{product.tagline}</p>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{formatPrice(product.price)}</span>
            {product.compareAt && (
              <span className="text-sm text-charcoal-soft line-through">{formatPrice(product.compareAt)}</span>
            )}
          </div>
          <Rating value={product.rating} />
        </div>
      </div>
    </motion.div>
  );
}