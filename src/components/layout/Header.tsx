import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Search, User, Heart, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import AnnouncementBar from './AnnouncementBar';
import MobileMenu from './MobileMenu';

export default function Header() {
  const { itemCount, wishlist } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-xs uppercase tracking-[0.2em] transition-colors ${isActive ? 'text-sage-dark' : 'text-charcoal hover:text-sage-dark'}`;

  return (
    <>
      <AnnouncementBar />
      <header
        className={`sticky top-0 z-40 bg-ivory/90 backdrop-blur-md transition-shadow ${scrolled ? 'shadow-soft' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
          <button className="lg:hidden p-2 -ml-2" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu className="w-5 h-5" />
          </button>

          <Link to="/" className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <h1 className="font-serif text-2xl lg:text-3xl tracking-tight">
              Kindred<span className="text-sage">.</span>
            </h1>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            <NavLink to="/shop" className={navLinkClass}>Shop</NavLink>
            <NavLink to="/about" className={navLinkClass}>Our Story</NavLink>
            <NavLink to="/quiz" className={navLinkClass}>Skin Quiz</NavLink>
            <NavLink to="/blog" className={navLinkClass}>Journal</NavLink>
          </nav>

          <div className="flex items-center gap-1 lg:gap-2">
            <button className="p-2 hover:bg-sand/50 rounded-full" aria-label="Search"><Search className="w-4 h-4" /></button>
            <Link to="/account" className="p-2 hover:bg-sand/50 rounded-full hidden sm:block" aria-label="Account"><User className="w-4 h-4" /></Link>
            <Link to="/account?tab=wishlist" className="p-2 hover:bg-sand/50 rounded-full relative hidden sm:block" aria-label="Wishlist">
              <Heart className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-sage text-ivory text-[10px] rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="p-2 hover:bg-sand/50 rounded-full relative" aria-label="Cart">
              <ShoppingBag className="w-4 h-4" />
              {itemCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-charcoal text-ivory text-[10px] rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}