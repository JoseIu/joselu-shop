import { CartProduct } from '@/interfaces';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  cart: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  getTotalItem: () => number;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      getTotalItem: (): number => {
        const { cart } = get();

        let total = 0;
        for (const item of cart) {
          total += item.quantity;
        }
        return total;
      },

      addProductToCart: (product: CartProduct) => {
        const { cart } = get();

        //Check if the product is already in the cart with the same size

        const porductInCart = cart.some((item) => item.id === product.id && item.size === product.size);

        if (!porductInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        //Update the quantity of the product in the cart

        const updateCartProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: item.quantity + product.quantity };
          }

          return item;
        });

        set({ cart: updateCartProducts });
      },
    }),
    {
      name: 'shopping-cart',
    }
  )
);
