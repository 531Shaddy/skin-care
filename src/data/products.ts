import tonerImg from '../assets/img/toner.jpg';


export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviewCount: number;
  category: 'Cleanser' | 'Serum' | 'Moisturizer' | 'Sunscreen' | 'Face Oil' | 'Toner' | 'Mask';
  skinType: string[];
  concerns: string[];
  ingredients: string[];
  keyIngredients: { name: string; benefit: string }[];
  benefits: string[];
  directions: string;
  clinical: string[];
  image: string;
  gallery: string[];
  badges: string[];
  bestSeller?: boolean;
  newArrival?: boolean;
  onSale?: boolean;
};

const img = (seed: string, w = 800) =>
  `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=${w}&q=80`;

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'calm-cloud-cleanser',
    name: 'Calm Cloud Cleanser',
    tagline: 'A milky, pH-balanced wash that melts makeup without stripping.',
    description:
      'Our gentlest cleanser yet — a cloud-soft milky formula that dissolves impurities, SPF, and long-wear makeup while preserving your moisture barrier. Leaves skin feeling clean, never tight.',
    price: 28,
    rating: 4.8,
    reviewCount: 1247,
    category: 'Cleanser',
    skinType: ['All', 'Sensitive', 'Dry'],
    concerns: ['Sensitive Skin', 'Dry Skin'],
    keyIngredients: [
      { name: 'Oat Milk Extract', benefit: 'Soothes and calms reactive skin' },
      { name: 'Squalane', benefit: 'Locks in hydration without clogging' },
      { name: 'Panthenol', benefit: 'Supports barrier repair' },
    ],
    ingredients: ['Aqua', 'Avena Sativa Kernel Extract', 'Squalane', 'Panthenol', 'Glycerin', 'Caprylyl Glycol'],
    benefits: ['Removes makeup & SPF', 'pH 5.5 balanced', 'Non-stripping', 'Fragrance-free'],
    directions: 'Massage onto damp skin for 60 seconds. Rinse with lukewarm water. Use AM & PM.',
    clinical: ['96% reported softer skin after 2 weeks*', 'Dermatologist tested', 'Non-comedogenic'],
    image: img('photo-1556228720-195a672e8a03'),
    gallery: [
      img('photo-1556228720-195a672e8a03'),
      img('photo-1608248543803-ba4f8c70ae0b'),
      img('photo-1570194065650-d99fb4bedf0a'),
    ],
    badges: ['Vegan', 'Cruelty-free', 'Fragrance-free'],
    bestSeller: true,
  },
  {
    id: 'p2',
    slug: 'glow-drop-niacinamide',
    name: 'Glow Drop Niacinamide 10%',
    tagline: 'A brightening serum that fades dark spots and refines pores.',
    description:
      'A lightweight, fast-absorbing serum powered by 10% niacinamide and 1% zinc to visibly fade post-acne marks, even tone, and minimize the look of pores — without irritation.',
    price: 34,
    compareAt: 42,
    rating: 4.9,
    reviewCount: 2103,
    category: 'Serum',
    skinType: ['All', 'Oily', 'Combination'],
    concerns: ['Hyperpigmentation', 'Acne', 'Pores'],
    keyIngredients: [
      { name: 'Niacinamide 10%', benefit: 'Brightens & refines pores' },
      { name: 'Zinc PCA 1%', benefit: 'Balances oil & calms blemishes' },
      { name: 'Hyaluronic Acid', benefit: 'Plumps & hydrates' },
    ],
    ingredients: ['Aqua', 'Niacinamide', 'Zinc PCA', 'Sodium Hyaluronate', 'Pentylene Glycol'],
    benefits: ['Visibly fades dark spots', 'Refines pores', 'Balances oil', 'Lightweight'],
    directions: 'Apply 3–4 drops to clean skin AM and/or PM. Follow with moisturizer.',
    clinical: ['89% saw brighter skin in 4 weeks*', 'Clinically tested for sensitivity'],
    image: img('photo-1620916566398-39f1143ab7be'),
    gallery: [
      img('photo-1620916566398-39f1143ab7be'),
      img('photo-1608248597849-3d3d800186d2'),
      img('photo-1631730486572-226d1f595b68'),
    ],
    badges: ['Vegan', 'Cruelty-free', 'Dermatologist-tested'],
    bestSeller: true,
    onSale: true,
  },
  {
    id: 'p3',
    slug: 'velvet-barrier-cream',
    name: 'Velvet Barrier Cream',
    tagline: 'A whipped ceramide moisturizer for all-day comfort.',
    description:
      'A silky, whipped moisturizer that floods skin with ceramides, squalane, and beta-glucan to rebuild your barrier and keep it resilient — morning, night, and every flight in between.',
    price: 46,
    rating: 4.9,
    reviewCount: 1876,
    category: 'Moisturizer',
    skinType: ['Dry', 'Sensitive', 'Normal'],
    concerns: ['Dry Skin', 'Sensitive Skin', 'Anti-aging'],
    keyIngredients: [
      { name: 'Ceramide Complex', benefit: 'Restores the skin barrier' },
      { name: 'Squalane', benefit: 'Deep, non-greasy hydration' },
      { name: 'Beta-Glucan', benefit: 'Calms redness & irritation' },
    ],
    ingredients: ['Aqua', 'Squalane', 'Ceramide NP', 'Beta-Glucan', 'Tocopherol'],
    benefits: ['72-hour hydration*', 'Strengthens barrier', 'Plumps fine lines', 'Makeup-friendly'],
    directions: 'Smooth a pea-sized amount over face and neck as the last step of your routine.',
    clinical: ['94% reported softer, stronger skin in 2 weeks*', 'Hypoallergenic'],
    image: img('photo-1611930022073-b7a4ba5fcccd'),
    gallery: [
      img('photo-1611930022073-b7a4ba5fcccd'),
      img('photo-1620916297555-4dff76f1393a'),
      img('photo-1556228453-efd6c1ff04f6'),
    ],
    badges: ['Vegan', 'Cruelty-free', 'Fragrance-free'],
    bestSeller: true,
  },
  {
    id: 'p4',
    slug: 'daily-shield-spf-40',
    name: 'Daily Shield SPF 40',
    tagline: 'Invisible, weightless, and actually pleasant to wear every day.',
    description:
      'A hybrid mineral-chemical SPF 40 that vanishes into every skin tone with zero white cast, zero grease, and a soft-focus finish that plays beautifully under makeup.',
    price: 38,
    rating: 4.7,
    reviewCount: 982,
    category: 'Sunscreen',
    skinType: ['All'],
    concerns: ['Anti-aging', 'Hyperpigmentation'],
    keyIngredients: [
      { name: 'Zinc Oxide 12%', benefit: 'Broad-spectrum UVA/UVB' },
      { name: 'Niacinamide', benefit: 'Brightens while protecting' },
      { name: 'Green Tea Extract', benefit: 'Antioxidant defense' },
    ],
    ingredients: ['Aqua', 'Zinc Oxide', 'Niacinamide', 'Camellia Sinensis Leaf Extract'],
    benefits: ['No white cast', 'Lightweight', 'Reef-friendly', 'Makeup-friendly'],
    directions: 'Apply generously as the final step of your AM routine. Reapply every 2 hours.',
    clinical: ['SPF 40 broad-spectrum', 'Clinically tested on 6 skin tones'],
    image: img('photo-1556228578-8c89e6adf883'),
    gallery: [
      img('photo-1556228578-8c89e6adf883'),
      img('photo-1612817288484-6f916006741a'),
      img('photo-1556228720-195a672e8a03'),
    ],
    badges: ['Reef-friendly', 'Cruelty-free', 'Dermatologist-tested'],
    newArrival: true,
  },
  {
    id: 'p5',
    slug: 'rose-quartz-face-oil',
    name: 'Rose Quartz Face Oil',
    tagline: 'A luminous, antioxidant-rich oil for a lit-from-within glow.',
    description:
      'A silken blend of rosehip, jojoba, and bakuchiol that melts into skin to deliver deep nourishment, visibly soften fine lines, and leave a dewy, lit-from-within glow.',
    price: 52,
    rating: 4.8,
    reviewCount: 641,
    category: 'Face Oil',
    skinType: ['Dry', 'Normal', 'Mature'],
    concerns: ['Anti-aging', 'Dry Skin'],
    keyIngredients: [
      { name: 'Rosehip Seed Oil', benefit: 'Brightens & softens' },
      { name: 'Bakuchiol', benefit: 'Plant-based retinol alternative' },
      { name: 'Jojoba', benefit: 'Mimics skin\'s natural sebum' },
    ],
    ingredients: ['Rosa Canina Fruit Oil', 'Simmondsia Chinensis Seed Oil', 'Bakuchiol', 'Tocopherol'],
    benefits: ['Visibly softens fine lines', 'Boosts radiance', 'Non-comedogenic'],
    directions: 'Warm 3–4 drops between palms and press into skin as the last step of PM routine.',
    clinical: ['92% saw improved radiance in 4 weeks*'],
    image: img('photo-1608571423902-eed4a5ad8108'),
    gallery: [
      img('photo-1608571423902-eed4a5ad8108'),
      img('photo-1598440947619-2c35c9aa4b35'),
      img('photo-1570194065650-d99fb4bedf0a'),
    ],
    badges: ['Vegan', 'Cruelty-free', '100% natural origin'],
  },
  {
    id: 'p6',
    slug: 'clarify-bha-toner',
    name: 'Clarify BHA Toner',
    tagline: 'A gentle exfoliating toner for smoother, clearer skin.',
    description:
      'A soothing, leave-on exfoliant with 2% salicylic acid and centella to unclog pores, smooth texture, and calm redness — without the sting of traditional toners.',
    price: 32,
    rating: 4.6,
    reviewCount: 734,
    category: 'Toner',
    skinType: ['Oily', 'Combination', 'Acne-prone'],
    concerns: ['Acne', 'Pores', 'Texture'],
    keyIngredients: [
      { name: 'Salicylic Acid 2%', benefit: 'Unclogs pores & exfoliates' },
      { name: 'Centella Asiatica', benefit: 'Calms redness & irritation' },
      { name: 'Green Tea', benefit: 'Antioxidant protection' },
    ],
    ingredients: ['Aqua', 'Salicylic Acid', 'Centella Asiatica Extract', 'Camellia Sinensis Leaf Extract'],
    benefits: ['Unclogs pores', 'Smooths texture', 'Calms redness'],
    directions: 'Sweep across clean skin with a cotton pad or pat in with hands. Use PM, 3x/week to start.',
    clinical: ['87% saw fewer breakouts in 4 weeks*'],
    // image: img('photo-1601049676869-702ea24cfd0a'),
    image: tonerImg,
    gallery: [
      img('photo-1601049676869-702ea24cfd0a'),
      img('photo-1570194065650-d99fb4bedf0a'),
      img('photo-1556228720-195a672e8a03'),
    ],
    badges: ['Vegan', 'Cruelty-free'],
    newArrival: true,
  },
  {
    id: 'p7',
    slug: 'honey-glow-mask',
    name: 'Honey Glow Mask',
    tagline: 'A 10-minute radiance ritual in a jar.',
    description:
      'A warm, honey-scented wash-off mask that floods dull skin with hydration and leaves a lit-from-within glow in just 10 minutes. Your Sunday reset, bottled.',
    price: 39,
    compareAt: 48,
    rating: 4.9,
    reviewCount: 1102,
    category: 'Mask',
    skinType: ['All', 'Dry', 'Dull'],
    concerns: ['Dry Skin', 'Dullness'],
    keyIngredients: [
      { name: 'Manuka Honey', benefit: 'Deeply nourishing & antibacterial' },
      { name: 'Turmeric', benefit: 'Brightens & evens tone' },
      { name: 'Oat', benefit: 'Soothes & softens' },
    ],
    ingredients: ['Mel', 'Curcuma Longa Root Extract', 'Avena Sativa Kernel Extract', 'Tocopherol'],
    benefits: ['Instant radiance', 'Deeply hydrating', 'Soothes'],
    directions: 'Apply a generous layer to clean skin. Leave 10 minutes. Rinse with warm water. Use 1–2x/week.',
    clinical: ['95% reported instant glow*'],
    image: img('photo-1598440947619-2c35c9aa4b35'),
    gallery: [
      img('photo-1598440947619-2c35c9aa4b35'),
      img('photo-1608571423902-eed4a5ad8108'),
      img('photo-1611930022073-b7a4ba5fcccd'),
    ],
    badges: ['Vegan', 'Cruelty-free', '98% natural origin'],
    onSale: true,
  },
  {
    id: 'p8',
    slug: 'peptide-firm-serum',
    name: 'Peptide Firm Serum',
    tagline: 'A peptide-powered serum for visibly firmer, bouncier skin.',
    description:
      'A concentrated peptide complex paired with amino acids and squalane to visibly firm, plump, and smooth — the anti-aging step that actually feels luxurious.',
    price: 58,
    rating: 4.8,
    reviewCount: 489,
    category: 'Serum',
    skinType: ['Mature', 'Normal', 'Dry'],
    concerns: ['Anti-aging', 'Firmness', 'Fine Lines'],
    keyIngredients: [
      { name: 'Multi-Peptide Complex', benefit: 'Supports collagen & elasticity' },
      { name: 'Amino Acids', benefit: 'Strengthens skin structure' },
      { name: 'Squalane', benefit: 'Plumps & hydrates' },
    ],
    ingredients: ['Aqua', 'Palmitoyl Tripeptide-1', 'Palmitoyl Tetrapeptide-7', 'Squalane'],
    benefits: ['Visibly firms', 'Smooths fine lines', 'Plumps skin'],
    directions: 'Apply 3–4 drops to face and neck after cleansing, before moisturizer. Use AM & PM.',
    clinical: ['91% saw firmer skin in 8 weeks*'],
    image: img('photo-1631730486572-226d1f595b68'),
    gallery: [
      img('photo-1631730486572-226d1f595b68'),
      img('photo-1620916566398-39f1143ab7be'),
      img('photo-1608248597849-3d3d800186d2'),
    ],
    badges: ['Vegan', 'Cruelty-free', 'Dermatologist-tested'],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const bestSellers = products.filter((p) => p.bestSeller);
export const newArrivals = products.filter((p) => p.newArrival);