export default function Badge({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'sale' | 'new' }) {
  const tones = {
    default: 'bg-ivory text-charcoal border-sand',
    sale: 'bg-charcoal text-ivory border-charcoal',
    new: 'bg-sage text-ivory border-sage',
  };
  return (
    <span className={`inline-block px-3 py-1 text-[10px] uppercase tracking-widest border rounded-full ${tones[tone]}`}>
      {children}
    </span>
  );
}