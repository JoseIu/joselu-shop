import { AddressInterface } from '@/interfaces';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  address: AddressInterface;
  setAddress: (address: AddressInterface) => void;
}

export const useAddresStore = create<State>()(
  persist(
    (set, get) => ({
      address: {
        name: '',
        surname: '',
        address: '',
        address2: '',
        zipCode: '',
        city: '',
        country: '',
        phone: '',
      },

      setAddress: (address) => set({ address }),
    }),
    {
      name: 'address-storage',
    }
  )
);
