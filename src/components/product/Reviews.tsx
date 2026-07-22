import Rating from '../ui/Rating';
import { Check } from 'lucide-react';

const reviews = [
  { id: 1, name: 'Sarah M.', rating: 5, title: 'Holy grail status', text: 'I\'ve tried everything for my dry, reactive skin. This is the first product that actually delivers without irritation. My skin has never felt this calm.', date: '2 weeks ago', verified: true },
  { id: 2, name: 'James L.', rating: 5, title: 'Worth every penny', text: 'Texture is divine. Absorbs instantly. My skin looks visibly brighter after just two weeks.', date: '1 month ago', verified: true },
  { id: 3, name: 'Amara O.', rating: 4, title: 'Great, wish it was bigger', text: 'Love the formula — only complaint is the size. Goes fast with daily use.', date: '1 month ago', verified: true },
];

export default function Reviews({ count, rating }: { count: number; rating: number }) {
  return (
    <div className="space-y-6">
      <div className="flex items-baseline gap-4 pb-6 border-b border-sand">
        <div className="text-5xl font-serif">{rating}</div>
        <div>
          <Rating value={rating} />
          <p className="text-xs text-charcoal-soft mt-1">Based on {count} reviews</p>
        </div>
      </div>
      <div className="space-y-6">
        {reviews.map((r) => (
          <div key={r.id} className="pb-6 border-b border-sand/60 last:border-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Rating value={r.rating} />
                <span className="font-medium text-sm">{r.title}</span>
              </div>
              <span className="text-xs text-charcoal-soft">{r.date}</span>
            </div>
            <p className="text-sm text-charcoal-soft leading-relaxed">{r.text}</p>
            <div className="flex items-center gap-1 mt-2 text-xs text-sage-dark">
              <Check className="w-3 h-3" /> Verified purchase · {r.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}