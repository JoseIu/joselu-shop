import { CartProduct } from '@/interfaces';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  cart: CartProduct[];
  getTotalItem: () => number;
  getSymaryInfo: () => { subTotal: number; tax: number; total: number };
  addProductToCart: (product: CartProduct) => void;
  updateProductQuantity: (product: CartProduct, quantity: number) => void;
  removeProduct: (product: CartProduct) => void;
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
      getSymaryInfo: () => {
        const { cart } = get();
        const subTotal = cart.reduce((subTotal, product) => product.quantity * product.price + subTotal, 0);
        const tax = subTotal * 0.15;
        const total = subTotal + tax;
        return { subTotal, tax, total };
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

      updateProductQuantity: (product: CartProduct, quantity: number) => {
        const { cart } = get();

        //find the protuct to update
        //update the quantity of the product in the cart

        const updateCartProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity };
          }
          return item;
        });
        set({ cart: updateCartProducts });
      },
      removeProduct(product: CartProduct) {
        const { cart } = get();

        const updatedCart = cart.filter((item) => item.size !== product.size);

        set({ cart: updatedCart });
      },
    }),
    {
      name: 'shopping-cart',
    }
  )
);
