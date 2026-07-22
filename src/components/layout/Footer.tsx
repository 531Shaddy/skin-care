import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-sand mt-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <h3 className="font-serif text-3xl mb-4">Kindred<span className="text-sage">.</span></h3>
          <p className="text-sm text-charcoal-soft max-w-xs leading-relaxed">
            Clean, science-backed skincare crafted for every skin story. Made with intention in Brooklyn, NY.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="p-2 border border-sand rounded-full hover:bg-charcoal hover:text-ivory hover:border-charcoal transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="Facebook" className="p-2 border border-sand rounded-full hover:bg-charcoal hover:text-ivory hover:border-charcoal transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="Youtube" className="p-2 border border-sand rounded-full hover:bg-charcoal hover:text-ivory hover:border-charcoal transition-colors"><Youtube className="w-4 h-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-charcoal-soft">
            <li><Link to="/shop" className="hover:text-charcoal">All products</Link></li>
            <li><Link to="/shop" className="hover:text-charcoal">Best sellers</Link></li>
            <li><Link to="/shop" className="hover:text-charcoal">New arrivals</Link></li>
            <li><Link to="/shop" className="hover:text-charcoal">Bundles</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest mb-4">Help</h4>
          <ul className="space-y-2 text-sm text-charcoal-soft">
            <li><a href="#" className="hover:text-charcoal">Shipping</a></li>
            <li><a href="#" className="hover:text-charcoal">Returns</a></li>
            <li><a href="#" className="hover:text-charcoal">Contact</a></li>
            <li><a href="#" className="hover:text-charcoal">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-charcoal-soft">
            <li><Link to="/about" className="hover:text-charcoal">Our story</Link></li>
            <li><Link to="/blog" className="hover:text-charcoal">Journal</Link></li>
            <li><a href="#" className="hover:text-charcoal">Sustainability</a></li>
            <li><a href="#" className="hover:text-charcoal">Careers</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sand">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-charcoal-soft">
          <p>© 2026 Kindred Market. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-charcoal">Privacy</a>
            <a href="#" className="hover:text-charcoal">Terms</a>
            <a href="#" className="hover:text-charcoal">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}