import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { defaultPurchaseMethod } from '../data/purchaseMethods';
import type { CartItem, Product, PurchaseMethodId } from '../types';

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  modalProduct: Product | null;
  modalQuantity: number;
  openAddToCartModal: (product: Product, quantity?: number) => void;
  closeAddToCartModal: () => void;
  addItem: (product: Product, quantity?: number, purchaseMethod?: PurchaseMethodId) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  updatePurchaseMethod: (productId: string, purchaseMethod: PurchaseMethodId) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [modalQuantity, setModalQuantity] = useState(1);

  const openAddToCartModal = useCallback((product: Product, quantity = 1) => {
    setModalProduct(product);
    setModalQuantity(Math.max(1, quantity));
  }, []);

  const closeAddToCartModal = useCallback(() => {
    setModalProduct(null);
    setModalQuantity(1);
  }, []);

  const addItem = useCallback(
    (product: Product, quantity = 1, purchaseMethod: PurchaseMethodId = defaultPurchaseMethod) => {
      setItems((prev) => {
        const existing = prev.find((item) => item.productId === product.id);
        if (existing) {
          return prev.map((item) =>
            item.productId === product.id
              ? {
                  ...item,
                  quantity: item.quantity + quantity,
                  purchaseMethod,
                }
              : item
          );
        }
        return [
          ...prev,
          {
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity,
            purchaseMethod,
          },
        ];
      });
    },
    []
  );

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.productId !== productId));
  }, []);

  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      if (quantity < 1) {
        removeItem(productId);
        return;
      }
      setItems((prev) =>
        prev.map((item) => (item.productId === productId ? { ...item, quantity } : item))
      );
    },
    [removeItem]
  );

  const updatePurchaseMethod = useCallback(
    (productId: string, purchaseMethod: PurchaseMethodId) => {
      setItems((prev) =>
        prev.map((item) =>
          item.productId === productId ? { ...item, purchaseMethod } : item
        )
      );
    },
    []
  );

  const clearCart = useCallback(() => setItems([]), []);

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      itemCount,
      subtotal,
      modalProduct,
      modalQuantity,
      openAddToCartModal,
      closeAddToCartModal,
      addItem,
      removeItem,
      updateQuantity,
      updatePurchaseMethod,
      clearCart,
    }),
    [
      items,
      itemCount,
      subtotal,
      modalProduct,
      modalQuantity,
      openAddToCartModal,
      closeAddToCartModal,
      addItem,
      removeItem,
      updateQuantity,
      updatePurchaseMethod,
      clearCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
