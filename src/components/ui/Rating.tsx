import { Star } from 'lucide-react';

export default function Rating({ value, count }: { value: number; count?: number }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${i <= Math.round(value) ? 'fill-charcoal text-charcoal' : 'text-sand'}`}
          />
        ))}
      </div>
      {count !== undefined && <span className="text-xs text-charcoal-soft ml-1">({count})</span>}
    </div>
  );
}