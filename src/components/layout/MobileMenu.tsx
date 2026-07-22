import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-3 text-2xl font-serif ${isActive ? 'text-sage-dark' : 'text-charcoal'}`;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-ivory z-50 p-8 flex flex-col"
          >
            <button onClick={onClose} className="self-end p-2 -mr-2 mb-6" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
            <nav className="flex flex-col">
              <NavLink to="/shop" className={linkClass} onClick={onClose}>Shop</NavLink>
              <NavLink to="/about" className={linkClass} onClick={onClose}>Our Story</NavLink>
              <NavLink to="/quiz" className={linkClass} onClick={onClose}>Skin Quiz</NavLink>
              <NavLink to="/blog" className={linkClass} onClick={onClose}>Journal</NavLink>
              <NavLink to="/account" className={linkClass} onClick={onClose}>Account</NavLink>
            </nav>
            <div className="mt-auto pt-8 border-t border-sand">
              <p className="text-xs uppercase tracking-widest text-charcoal-soft mb-2">Subscribe & save 15%</p>
              <Link to="/shop" onClick={onClose} className="text-sm underline">Start your routine →</Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}