import { useMemo, useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import Button from '../components/ui/Button';

const categories = ['All', 'Cleanser', 'Serum', 'Moisturizer', 'Sunscreen', 'Face Oil', 'Toner', 'Mask'];
const skinTypes = ['All', 'Dry', 'Oily', 'Combination', 'Sensitive', 'Normal', 'Mature'];
const concerns = ['All', 'Acne', 'Dry Skin', 'Sensitive Skin', 'Anti-aging', 'Hyperpigmentation', 'Pores', 'Texture'];
const priceRanges = [
  { label: 'All prices', min: 0, max: Infinity },
  { label: 'Under $30', min: 0, max: 30 },
  { label: '$30 – $50', min: 30, max: 50 },
  { label: 'Over $50', min: 50, max: Infinity },
];

export default function Shop() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [skin, setSkin] = useState('All');
  const [concern, setConcern] = useState('All');
  const [price, setPrice] = useState(0);
  const [sort, setSort] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 8;

  const filtered = useMemo(() => {
    let result = [...products];
    if (query) result = result.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()) || p.tagline.toLowerCase().includes(query.toLowerCase()));
    if (category !== 'All') result = result.filter((p) => p.category === category);
    if (skin !== 'All') result = result.filter((p) => p.skinType.includes(skin));
    if (concern !== 'All') result = result.filter((p) => p.concerns.includes(concern));
    const range = priceRanges[price];
    result = result.filter((p) => p.price >= range.min && p.price <= range.max);

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
    else if (sort === 'newest') result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
    return result;
  }, [query, category, skin, concern, price, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const resetFilters = () => { setCategory('All'); setSkin('All'); setConcern('All'); setPrice(0); setQuery(''); };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-sage-dark mb-3">The collection</p>
        <h1 className="font-serif text-5xl md:text-6xl mb-4">Shop all</h1>
        <p className="text-charcoal-soft max-w-xl mx-auto">Clean, science-backed formulas for every skin story.</p>
      </div>

      {/* Search & Sort */}
      <div className="flex flex-col md:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-soft" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-11 pr-4 py-3 bg-ivory border border-sand rounded-full text-sm focus:border-charcoal focus:outline-none"
          />
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-5 py-3 bg-ivory border border-sand rounded-full text-sm focus:border-charcoal focus:outline-none"
        >
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top rated</option>
        </select>
        <button onClick={() => setFiltersOpen(!filtersOpen)} className="md:hidden flex items-center justify-center gap-2 px-5 py-3 bg-ivory border border-sand rounded-full text-sm">
          <SlidersHorizontal className="w-4 h-4" /> Filters
        </button>
      </div>

      <div className="grid md:grid-cols-[240px_1fr] gap-10">
        {/* Filters */}
        <aside className={`${filtersOpen ? 'block' : 'hidden'} md:block space-y-8`}>
          <div className="flex items-center justify-between md:hidden">
            <h3 className="font-serif text-2xl">Filters</h3>
            <button onClick={() => setFiltersOpen(false)}><X className="w-5 h-5" /></button>
          </div>

          <FilterGroup label="Category" value={category} options={categories} onChange={setCategory} />
          <FilterGroup label="Skin type" value={skin} options={skinTypes} onChange={setSkin} />
          <FilterGroup label="Concern" value={concern} options={concerns} onChange={setConcern} />
          <FilterGroup label="Price" value={String(price)} options={priceRanges.map((r, i) => ({ label: r.label, value: String(i) }))} onChange={(v) => setPrice(Number(v))} />

          <button onClick={resetFilters} className="text-xs uppercase tracking-widest text-charcoal-soft hover:text-charcoal underline">
            Reset all filters
          </button>
        </aside>

        {/* Grid */}
        <div>
          <p className="text-sm text-charcoal-soft mb-6">{filtered.length} products</p>
          {paginated.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl mb-2">No products match your filters.</p>
              <p className="text-sm text-charcoal-soft mb-6">Try adjusting your search or resetting filters.</p>
              <Button onClick={resetFilters} variant="outline">Reset filters</Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {paginated.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          )}

          {/* Pagination */}
          {pageCount > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-full border border-sand text-sm disabled:opacity-40 hover:bg-sand/30"
              >
                ← Prev
              </button>
              {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-9 h-9 rounded-full text-sm ${page === n ? 'bg-charcoal text-ivory' : 'hover:bg-sand/30'}`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setPage(Math.min(pageCount, page + 1))}
                disabled={page === pageCount}
                className="px-4 py-2 rounded-full border border-sand text-sm disabled:opacity-40 hover:bg-sand/30"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ label, value, options, onChange }: { label: string; value: string; options: (string | { label: string; value: string })[]; onChange: (v: string) => void }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-widest mb-3">{label}</h4>
      <div className="space-y-2">
        {options.map((opt) => {
          const optLabel = typeof opt === 'string' ? opt : opt.label;
          const optValue = typeof opt === 'string' ? opt : opt.value;
          return (
            <label key={optValue} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name={label}
                checked={value === optValue}
                onChange={() => onChange(optValue)}
                className="accent-charcoal"
              />
              <span className="text-sm group-hover:text-charcoal">{optLabel}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}