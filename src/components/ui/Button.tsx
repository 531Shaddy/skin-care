// import { ButtonHTMLAttributes, ReactNode } from 'react';
// import { motion } from 'framer-motion';

import { ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

// type Props = ButtonHTMLAttributes<HTMLButtonElement> 
type Props = HTMLMotionProps<'button'> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  loading?: boolean;
};

const variants: Record<Variant, string> = {
  primary: 'bg-charcoal text-ivory hover:bg-charcoal-soft',
  secondary: 'bg-sage text-ivory hover:bg-sage-dark',
  outline: 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory',
  ghost: 'text-charcoal hover:bg-sand/50',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  loading,
  ...rest
}: Props) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium tracking-wide uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {loading ? <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> : children}
    </motion.button>
  );
}