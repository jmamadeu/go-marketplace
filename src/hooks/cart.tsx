import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { AsyncStorage } from 'react-native';

export interface ProductDTO {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

export interface CartContext {
  products: ProductDTO[];

  addToCart(product: Omit<ProductDTO, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

export const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const storagekey = '@gomarket:cart';

  useEffect(() => {
    (async () => {
      const productsStoraged = await AsyncStorage.getItem(storagekey);

      if (productsStoraged) {
        setProducts(JSON.parse(productsStoraged));
      }
    })();
  }, []);

  async function saveProducts(productsForSave: ProductDTO[]) {
    setProducts(productsForSave);
    await AsyncStorage.setItem(storagekey, JSON.stringify(productsForSave));
  }

  const addToCart = useCallback(
    async (product: ProductDTO) => {
      const productExists = products.find(p => p.id === product.id);

      let newProducts;

      if (productExists) {
        newProducts = products.map(p =>
          p.id === product.id ? { ...product, quantity: p.quantity + 1 } : p,
        );
      } else {
        newProducts = [...products, { ...product, quantity: 1 }];
      }

      saveProducts(newProducts);
    },
    [products],
  );

  const increment = useCallback(
    async id => {
      const newProducts = products.map(p =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p,
      );

      saveProducts(newProducts);
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const newProducts = products.map(p =>
        p.id === id && p.quantity !== 1
          ? { ...p, quantity: p.quantity - 1 }
          : p,
      );

      saveProducts(newProducts);
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ products, addToCart, increment, decrement }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContext => {
  const cartContext = useContext(CartContext);

  if (!cartContext) throw new Error(`cartContect must be whitin cartProvider`);

  return cartContext;
};
