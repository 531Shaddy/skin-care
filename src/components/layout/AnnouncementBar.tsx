import { Truck, ShieldCheck, Leaf } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-charcoal text-ivory text-xs tracking-wider uppercase">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-6 flex-wrap">
        <span className="flex items-center gap-2"><Truck className="w-3.5 h-3.5" /> Free shipping over $50</span>
        <span className="hidden sm:flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5" /> 30-day money-back guarantee</span>
        <span className="hidden md:flex items-center gap-2"><Leaf className="w-3.5 h-3.5" /> Cruelty-free & vegan</span>
      </div>
    </div>
  );
}