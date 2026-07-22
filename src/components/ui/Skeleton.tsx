export default function Skeleton({ className = '' }: { className?: string }) {
  return <div className={`bg-sand/60 animate-pulse rounded ${className}`} />;
}