import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { Product } from '../data/products';

export type CartItem = { product: Product; quantity: number; subscription?: boolean };

type CartContextType = {
  items: CartItem[];
  wishlist: string[];
  addItem: (product: Product, quantity?: number, subscription?: boolean) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  toggleWishlist: (id: string) => void;
  clear: () => void;
  subtotal: number;
  itemCount: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const addItem = useCallback((product: Product, quantity = 1, subscription = false) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id && i.subscription === subscription);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.subscription === subscription
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, quantity, subscription }];
    });
  }, []);

  const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.product.id !== id));
  const updateQuantity = (id: string, quantity: number) =>
    setItems((prev) => prev.map((i) => (i.product.id === id ? { ...i, quantity } : i)));
  const toggleWishlist = (id: string) =>
    setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  const clear = () => setItems([]);

  const subtotal = items.reduce(
    (sum, i) => sum + (i.subscription ? i.product.price * 0.85 : i.product.price) * i.quantity,
    0
  );
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, wishlist, addItem, removeItem, updateQuantity, toggleWishlist, clear, subtotal, itemCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};